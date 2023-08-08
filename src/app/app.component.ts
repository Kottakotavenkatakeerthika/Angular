import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  constructor(private router:Router){

  }
  Login(){
    this.router.navigate(['/Login']);
  }
  Dashboard(){
    this.router.navigate(['/Dashboard']);
  }
}
