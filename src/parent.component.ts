import { Component, VERSION } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: [],
  standalone: true,
  imports: [ChildComponent],
})
export class ParentComponent {
  name: string = '';
  show(e: any) {
    let { value } = e.target;
    this.name = value;
  }
  names = ['Apple', 'Mango', 'Gova', 'Pineapple', 'Banana'];
}
