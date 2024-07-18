import { AfterContentChecked, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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
  // @ContentChild('cntrlInput') userInput ?: ElementRef <HTMLInputElement | HTMLTextAreaElement>
  userInput = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('cntrlInput')
  private hostElement = inject(ElementRef); //get metadata on this.component
  
  doSomething () {
    console.log(`from control Component...\nInput -> ${this.userInput().nativeElement.value}`);
  }

}
