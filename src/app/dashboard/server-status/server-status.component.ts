import { Component, OnInit, OnDestroy } from '@angular/core';

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
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus : 'online' | 'offline' | 'unknown' = 'online';
  private interval ?: ReturnType<typeof setInterval>;    // NodeJS.Timeout | undefined

  constructor() {}

  ngOnInit(): void {
      this.interval = setInterval(()=> {
      let random = Math.random(); // 0- 0.999
      if (random < 0.5) this.currentStatus = "offline"
      else if (random < 0.9) this.currentStatus = "online"
      else this.currentStatus = "unknown"
    }, 5000)
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
