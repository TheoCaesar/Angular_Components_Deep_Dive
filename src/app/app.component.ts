import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardWrapperComponent } from './dashboard/dashboard-wrapper/dashboard-wrapper.component';
import { LifecycleComponent } from './dashboard/lifecycle/lifecycle.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LifecycleComponent,HeaderComponent, DashboardWrapperComponent, TrafficComponent, ServerStatusComponent,TicketsComponent]
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
