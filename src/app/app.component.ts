import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { IRobot } from './model/robots';
import { FormsModule } from '@angular/forms';
import { ROBOTS } from '../../robots.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
robot1: any;
onRobotClicked(arg0: any) {
throw new Error('Method not implemented.');
}
  title = 'my-first-project';
  robots: IRobot[] = [];
  

  searchTerm: string = '';

  constructor() {
    this.robots = ROBOTS;
  }

  
}