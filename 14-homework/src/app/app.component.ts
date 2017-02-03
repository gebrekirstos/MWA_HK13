import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <my-app></my-app>
    <hr>
    <my-app2></my-app2>
    <input type="text" #input (input)="input.value=$event.target.value.toUpperCase()" />
  `,
  styles: ['.myBorder { border: 2px solid red; }','.myColor  { color: green; }']
})
export class AppComponent {
}
