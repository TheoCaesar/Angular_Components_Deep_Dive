import { Component, input, output, signal } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import {type Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  complete = output<string>();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible)
    this.detailsVisible.update((wasVisible)=>!wasVisible)
  }

  onMarkComplete(ticket: Ticket){
    this.complete.emit(ticket.id);
  }
}
