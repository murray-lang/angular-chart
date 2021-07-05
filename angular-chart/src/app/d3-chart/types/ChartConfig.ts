
export type TicksConfig = {
  size: number,
  padding: number
}

export type AxisConfig = {
  mode?: string,
  colour: string,
  position?: string,
  label?: string,
  labelWidth?: number,
  ticks?: number | TicksConfig,
  min?: number,
  max?: number
}

export type MarginsConfig = {
  top: number,
  left: number,
  bottom: number,
  right: number
}

export type LinesConfig = {
  show: boolean
}

export type SelectorConfig = {
  param: string
}

export type TransformConfig = {
  component: string,
  config: object
}

export type PointsConfig = {
  show: boolean,
  transform?: TransformConfig
}

export type SeriesConfig = {
  label: string,
  colour: string,
  selector: SelectorConfig,
  lines: LinesConfig,
  points: PointsConfig
}

export type ChartConfig = {
  title?: string,
  margins: MarginsConfig,
  xaxes: AxisConfig[],
  yaxes: AxisConfig[],
  series: SeriesConfig[]
}
