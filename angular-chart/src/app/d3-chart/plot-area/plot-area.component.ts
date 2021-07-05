import {Component, Input, OnInit} from '@angular/core';
import { ChartConfig } from '../types/ChartConfig'

@Component({
  selector: 'svg:svg[plot-area]',
  template: `
    <svg:rect x="0" y="0" [attr.width]="width" [attr.height]="height"/>
  `,
  styleUrls: ['./plot-area.component.css']
})
export class PlotAreaComponent implements OnInit {
  @Input() id?: string;
  @Input() config? : ChartConfig;
  @Input() width? : number;
  @Input() height? : number;

  constructor() { }

  ngOnInit(): void {
  }


}
