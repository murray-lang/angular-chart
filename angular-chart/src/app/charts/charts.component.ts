import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfig } from '../d3-chart/types/ChartConfig'
import { wsChart, wdChart} from '../d3-chart/dummyChartConfigs'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  charts = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, config: wsChart },
          //{ title: 'Card 2', cols: 1, rows: 1, config: wdChart },
          //{ title: 'Card 3', cols: 1, rows: 1 },
          //{ title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, config: wsChart },
        //{ title: 'Card 2', cols: 1, rows: 1, config: wdChart },
        //{ title: 'Card 3', cols: 1, rows: 2 },
        //{ title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
