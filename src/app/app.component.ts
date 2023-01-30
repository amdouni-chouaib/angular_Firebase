import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthserviceService,private routes:Router){

  }
  title = 'firebase';
  logout() {
    this.authService.logout().subscribe(()=> {
      this.routes.navigate(["/"])
    })
  }
}
