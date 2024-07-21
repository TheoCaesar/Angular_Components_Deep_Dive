import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { type Ticket } from './tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: {
    id: 'tickets'
  }
})
export class TicketsComponent {
  tickets : Ticket[] = [];
  
  onAdd(_$event: { title: string; request: string; }) {
    const newTicket: Ticket = {
      ..._$event,
      id : new Date().getTime().toString(),
      status: 'open'      
    }
    // console.dir( newTicket)
    this.tickets.push(newTicket);
  }

  onCompleteTicket(id:string){
    this.tickets = this.tickets.map((ticket)=>(ticket.id === id) ? {...ticket, status : 'closed'} : ticket)
  }
}
