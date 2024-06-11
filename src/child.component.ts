import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: [],
  standalone: true,
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() reciveData: string = '';
  @Input() objData: Object = {};
}
