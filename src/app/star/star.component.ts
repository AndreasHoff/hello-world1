import { Component, Input, Output, EventEmitter } from '@angular/core';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 @Input('isStar') isStar: boolean | any
 @Output('change') click = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isStar = !this.isStar
    this.click.emit({ newValue: this.isStar})
  }
}

export interface StarChangedEventArgs{
  newValue: boolean
}
