import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logChecker = localStorage.getItem('user_name')

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  goToLogin() {
    if(this.logChecker) {
      localStorage.clear();
      this.router.navigate(['auth', 'login'])
    }
    this.router.navigate(['auth', 'login'])
  }
}
