import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  controlAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.controlAuth = this.authService.isAuthenticated();
    console.log(this.controlAuth);
  }
  logout() {
    this.authService.logout();
  }
}
