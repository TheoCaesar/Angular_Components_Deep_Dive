import { AfterContentChecked, AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'doSomething()'
  }
})
export class ControlComponent implements AfterContentInit{
  label = input.required<string>();
  userInput = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('cntrlInput')
  private hostElement = inject(ElementRef);

  constructor() {
  }

  ngOnInit(): void {
    // /console.log('onInit',this.userInput()?.nativeElement)
  }
  
  ngAfterContentInit(): void {
      // console.log('onInit',this.userInput()?.nativeElement)
  }
  doSomething () {
    console.log(`from control Component...\nInput -> ${this.userInput().nativeElement.value}`);
  }
}
