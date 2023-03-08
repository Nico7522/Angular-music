import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService : AuthService) {}

  isConnected : boolean = false

  ngOnInit(): void {
    this._authService.isConnected$.subscribe((connectionState : boolean) => {
      this.isConnected = connectionState;
    })
  }

  disconnect(): void {
    this._authService.logout()
  }
}
