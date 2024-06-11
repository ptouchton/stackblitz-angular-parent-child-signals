import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
      <my-parent></my-parent>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
