import { Component, Input, OnInit } from '@angular/core';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

  @Input('likesCount') likesCount: number | any
  @Input('isActive') isActive: boolean | any

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
