import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, TrafficComponent, ServerStatusComponent,TicketsComponent]
})
export class AppComponent {
}
