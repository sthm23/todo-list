import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home-btn',
  templateUrl: './back-home-btn.component.html',
  styleUrls: ['./back-home-btn.component.scss']
})
export class BackHomeBtnComponent {

  constructor(
    private router: Router
  ) {}

  backTodoHome() {
    this.router.navigate(['home'])
  }
}
