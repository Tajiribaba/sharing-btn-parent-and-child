import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name = "Tajiri Baba";

  currentlyTitle2nd = "Now updated in parent";

  currentBeverage = "coffee";
  beverges = ['milk', 'tea', 'coffee', 'juice'];

  addBeverage(newBeverage: string) {
    this.beverges.push(newBeverage);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
