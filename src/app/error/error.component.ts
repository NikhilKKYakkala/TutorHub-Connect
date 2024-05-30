import { Component, Inject, ɵɵcontainerRefreshEnd } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) {}

refresh(): void{
  window.location.reload();
}

}
