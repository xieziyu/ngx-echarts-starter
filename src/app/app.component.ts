import { Component } from '@angular/core';
import { MockServerService } from './mock-server.service';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { echarts } from './custom-echarts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class AppComponent {
  options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  mergeOption: any;
  loading = false;

  constructor(private api: MockServerService) {}

  getData() {
    this.loading = true;
    this.api
      .getData()
      .then((data) => {
        this.mergeOption = { series: [{ data }] };
      })
      .then(() => {
        this.loading = false;
      });
  }
}
