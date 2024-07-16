import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-wrapper.component.html',
  styleUrl: './dashboard-wrapper.component.css'
})
export class DashboardWrapperComponent {
  headerProps = input.required<{src:string, alt:string, title: string}>();

}
