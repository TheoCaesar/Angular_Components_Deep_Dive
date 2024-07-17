import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'doSomething()'
  }
})
export class ControlComponent {
  label = input.required<string>();
  private hostElement = inject(ElementRef); //get metadata on this.component
  doSomething() {
    console.log('clicked...',this.hostElement);
  }

}
