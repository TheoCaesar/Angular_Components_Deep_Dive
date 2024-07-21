import { Component, input } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
}
