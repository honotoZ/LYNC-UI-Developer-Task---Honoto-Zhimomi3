import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Welcome to LYNC World';
  subtitle = 'Discover the Future of Connectivity';

  getStarted() {
    console.log('Get Started button clicked!');
  }
}


