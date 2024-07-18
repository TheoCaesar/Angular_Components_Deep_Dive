import { AfterContentChecked, Component, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentChecked{
  label = input.required<string>();
  //we will use one decorator cos each instance gets either an input or 
  @ContentChild('cntrlInput') userInput ?: ElementRef <HTMLInputElement | HTMLTextAreaElement>
  private hostElement = inject(ElementRef); //get metadata on this.component
  
  ngAfterContentChecked () {
    console.log(`from control Component...\nInput -> ${this.userInput?.nativeElement.value}`);
  }

}
