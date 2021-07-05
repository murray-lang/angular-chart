import {
  Component,
  Input,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { ChartConfig } from './types/ChartConfig'
import uniqueId from '../util/uniqueId'

//x="{{config?.margins?.left ?? 0}}"
//y="{{config?.margins?.top ?? 0}}"

@Component({
  selector: 'd3-chart',
  template: `
    <div class="container" #container>
      <!---->
      <svg:svg [id]="id" class="chart" >

        <svg:svg plot-area
             [id]="plotAreaId"
             [config]="config"
             [attr.x]="config?.margins?.left ?? 0"
             [attr.y]="config?.margins?.top ?? 0"
             [width]="plotAreaWidth"
             [height]="plotAreaHeight"
        >
        </svg:svg>
      </svg:svg>
      <!---->
    </div>
  `,
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements AfterViewChecked {
  @Input() config? : ChartConfig;
  @ViewChild('container') container?: ElementRef;

  id = uniqueId('chart');
  plotAreaId = `${this.id}-plot-area`;
  viewBox: { x:number, y:number, width:number, height: number} = { x:0, y:0, width:800, height:175}

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    const clientRect = this.container?.nativeElement.getBoundingClientRect()
    this.viewBox.width = clientRect.width;
    this.viewBox.height = clientRect.height;
  }


  get plotAreaWidth(): number {
    const left:number = this.config?.margins.left ?? 0
    const right:number = this.config?.margins.right ?? 0
    return this.viewBox.width - left - right
  }

  get plotAreaHeight(): number {
    const top:number = this.config?.margins.top ?? 0
    const bottom:number = this.config?.margins.bottom ?? 0
    return this.viewBox.height - top - bottom
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const clientRect = this.container?.nativeElement.getBoundingClientRect()
    this.viewBox.width = clientRect.width;
    this.viewBox.height = clientRect.height;
  }

}
