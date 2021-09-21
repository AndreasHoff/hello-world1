import { Component } from '@angular/core';
import { StarChangedEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: '',
    isStar: true
  }

  onStarChanged(eventArgs: StarChangedEventArgs){
    console.log('star changed', eventArgs)
  }
}
