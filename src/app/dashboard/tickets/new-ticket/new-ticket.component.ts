import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') varForm ?: ElementRef<HTMLFormElement>
  varForm = viewChild<ElementRef<HTMLFormElement>>('form')
  onSubmit(titleElement: string, requestElement:HTMLTextAreaElement) {
    let title  = titleElement;
    let request = requestElement.value;
    this.varForm()?.nativeElement.reset() 
  }

  ngOnInit(): void {
    // console.log('onInit',this.varForm()?.nativeElement)
  }

  ngAfterViewInit(): void {
    // console.log('after view init',this.varForm()?.nativeElement)
  }
}
