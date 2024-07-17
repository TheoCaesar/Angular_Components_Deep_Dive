import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host : {
    id: 'status'
  }
})
export class ServerStatusComponent implements OnInit{
  // Limit possible string values to assign to props
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit(): void {
    setInterval(()=> {
      let random = Math.random(); // 0- 0.999
      if (random < 0.5) this.currentStatus = "offline"
      else if (random < 0.9) this.currentStatus = "online"
      else this.currentStatus = "unknown"
    }, 5000)
  }
}
