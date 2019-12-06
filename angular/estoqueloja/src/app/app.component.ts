import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Estoque Loja';
  handleClick(event: Event): void {
    console.log('Click!', event)
  }
}
