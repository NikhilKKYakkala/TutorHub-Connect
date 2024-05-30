import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AuthData, Logindata } from "./auth-data.model";
import { Router } from '@angular/router';
import { Subject,Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated:boolean;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }

  getAuthStatusListener():Observable<any>
  {
    return this.authStatusListener.asObservable();
  }

  createUser(firstname: string, lastname: string, email: string, password: string, phoneno: string,type:string) {
    const authData: AuthData = { firstname: firstname, lastname: lastname, email: email, password: password, phoneno: phoneno,type:type};
    console.log(type);
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        // console.log(response);
        this.router.navigate(['/CreateProfile']);
      },error => {
        this.authStatusListener.next(false);
      });
  }
  createUser1(firstname: string, lastname: string, email: string, password: string, phoneno: string,type:string) {
    const authData: AuthData = { firstname: firstname, lastname: lastname, email: email, password: password, phoneno: phoneno,type:type};
    console.log(type);
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        // console.log(response);
        this.router.navigate(['/TuitionCreation']);
      });
  }

  login(email: string, password: string) {
    const logindata: Logindata = {email: email, password: password};
    this.http.post<{ token: string, expiresIn: number,id:string,emailid:string,name:string,phonenumber:string }>("http://localhost:3000/api/user/login",logindata)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const userid=response.id;
          const emailid=response.emailid;
          const expiresInDuration = response.expiresIn;
          const name=response.name;
          const phonenumber=response.phonenumber;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          // console.log(expirationDate);
          this.saveAuthData(token, expirationDate,userid,emailid,name,phonenumber);
          location.href="/Home";
        }
      },error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date,userid:string,emailid:string,name:string,phonenumber:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userid",userid);
    localStorage.setItem("emailid",emailid);
    localStorage.setItem("name",name);
    localStorage.setItem("phonenumber",phonenumber);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userid");
    localStorage.removeItem("emailid");
    localStorage.removeItem("name");
    localStorage.removeItem("phonenumber");
  }

  public getID()
  {
    const userid=localStorage.getItem("userid");
    return userid;
  }
  public getmail()
  {
    const emailid=localStorage.getItem("emailid");
    return emailid;
  }
  public getname()
  {
    const name=localStorage.getItem("name");
    return name;
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    location.href="/";
  }
}
