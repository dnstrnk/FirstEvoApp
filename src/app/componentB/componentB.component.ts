import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentB',
  templateUrl: './componentB.component.html',
  styleUrls: ['./componentB.component.css']
})
export class ComponentBComponent implements OnInit {
  @Input() text: any
  constructor() { }

  ngOnInit() {
  }
  counter = 0;
  changeCount(type: boolean) {
    type ? this.counter++ : this.counter--
  }
}
