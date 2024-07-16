import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
