import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import 'tachyons';
import { IRobot } from '../model/robots';

@Component({
  selector: 'robot-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})

export class CardComponent {
applyEvenStyle() {
throw new Error('Method not implemented.');
}

@Input({
    required: true, })
  robot: IRobot;


@Output()
  robotSelected = new EventEmitter<IRobot>();


  constructor() {
    this.robot = {
      id: 0,
      name: 'Robot',
      username: 'robot',
      email: 'robot@email.com',
      
    };
  }

  onRobotClicked() {
    console.log('onRobotClicked', this.robot?.id);
    this.robotSelected.emit(this.robot)
  }

  
}
