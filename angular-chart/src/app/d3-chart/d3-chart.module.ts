import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { D3ChartComponent } from './d3-chart.component';
import { PlotAreaComponent } from './plot-area/plot-area.component';
import { AxesComponent } from './axes/axes.component';
import { TimeCursorComponent } from './time-cursor/time-cursor.component';

@NgModule({
  declarations: [
    D3ChartComponent,
    PlotAreaComponent,
    AxesComponent,
    TimeCursorComponent
  ],
  exports: [
    D3ChartComponent
  ],
  schemas: [NO_ERRORS_SCHEMA] // This is so that any svg element can be in a component template
})
export class D3ChartModule { }
