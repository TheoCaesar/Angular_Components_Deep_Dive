import { Component, OnInit, OnDestroy, inject, DestroyRef, signal, effect } from '@angular/core';

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
  currentStatus  = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef)
  private interval ?: ReturnType<typeof setInterval>;    // NodeJS.Timeout | undefined

  constructor() {
    // effect(()=> console.log('current status ', this.currentStatus()))
  }

  ngOnInit(): void {
      this.interval = setInterval(()=> {
      let random = Math.random(); // 0- 0.999
      if (random < 0.5) this.currentStatus.set("offline")
      else if (random < 0.9) this.currentStatus.set("online")
      else this.currentStatus.set("unknown");
    }, 5000);

    this.destroyRef.onDestroy(()=>{
      clearTimeout(this.interval)
    })
  }

//   ngOnDestroy(): void {
//     clearTimeout(this.interval);
//   }
}
