import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  afterRender,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    // OnChanges,
    // DoCheck,
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
    // afterRender(()=>{
    //   console.log("lifeCycle - after render");      
    // })

    // afterNextRender(()=>{
    //   console.log('lifeCycle - after next render...');
      
    // })
  }

  ngOnInit() {
    console.log('lifeCycle ngOnInit');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges');
  //   console.log(changes);
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
