import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import x from "../Auth/reset.js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public userIsAuthenticated=false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    setTimeout(()=>{;
      this.userIsAuthenticated = x.auth;
      // console.log(x.auth);
    }, 500);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
