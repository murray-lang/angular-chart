import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfig } from '../d3-chart/types/ChartConfig'
import { DisplayConfigService } from '../services/DisplayConfig.service'

type ChartContainer = {
  config?: ChartConfig,
  cols: number,
  rows: number
}
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  config?: any;
  charts$!: Observable<ChartContainer[]>;
  wsChartConfig?: ChartConfig;
  wdChartConfig?: ChartConfig;
  /** Based on the screen size, switch from standard to one column per row */
  // charts = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1, config: this.wsChartConfig },
  //         //{ title: 'Card 2', cols: 1, rows: 1, config: this.wdChartConfig },
  //         //{ title: 'Card 3', cols: 1, rows: 1 },
  //         //{ title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }
  //
  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1, config: this.wsChartConfig },
  //       //{ title: 'Card 2', cols: 1, rows: 1, config: this.wdChartConfig },
  //       //{ title: 'Card 3', cols: 1, rows: 2 },
  //       //{ title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver,
              private displayConfigService: DisplayConfigService) {}

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig(): void {
    this.displayConfigService.getConfig('miscCharts')
      .subscribe(config => {
        this.config = config;
        this.wsChartConfig = config.widgets.wsChart;
        this.wdChartConfig = config.widgets.wdChart;
        this.setCharts()
      });
  }

  setCharts(): void {
    this.charts$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { config: this.wsChartConfig, cols: 1, rows: 1  },
            //{ title: 'Card 2', cols: 1, rows: 1, config: this.wdChartConfig },
            //{ title: 'Card 3', cols: 1, rows: 1 },
            //{ title: 'Card 4', cols: 1, rows: 1 }
          ];
        }

        return [
          { config: this.wsChartConfig, cols: 2, rows: 1 },
          //{ title: 'Card 2', cols: 1, rows: 1, config: this.wdChartConfig },
          //{ title: 'Card 3', cols: 1, rows: 2 },
          //{ title: 'Card 4', cols: 1, rows: 1 }
        ];
      })
    );
  }
}
