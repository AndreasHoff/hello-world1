import { Component, OnInit, Input } from '@angular/core';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
 @Input() isStar: boolean | any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isStar = !this.isStar
  }
}
