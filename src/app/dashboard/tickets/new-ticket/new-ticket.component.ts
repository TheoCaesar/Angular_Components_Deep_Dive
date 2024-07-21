import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  varForm = viewChild<ElementRef<HTMLFormElement>>('form')
  add = output<{title:string, request: string}>();
  titleContent = "";
  requestContent = "";
  
  onSubmit() {
    let title = this.titleContent;
    let request = this.requestContent;
    this.add.emit({title, request})
    this.titleContent = "";
    this.requestContent = "";
  }
}
