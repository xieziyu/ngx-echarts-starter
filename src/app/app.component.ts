import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockServerService } from './mock-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  constructor(private api: MockServerService, private http: HttpClient) {}

  getData() {
    this.loading = true;
    this.api
      .getData()
      .then((data) => {
        this.mergeOption = { series: [{ data }] };
      })
      .catch((e) => {
        /** Error Handler */
      })
      .then(() => {
        this.loading = false;
      });
  }
}
