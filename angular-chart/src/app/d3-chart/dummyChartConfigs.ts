import { ChartConfig } from './types/ChartConfig'

export const wsChart:  ChartConfig =  {
  margins: {
    top: 5,
    left: 55,
    bottom: 30,
    right: 53
  },
  xaxes: [
    {
      mode: "time",
      colour: "#404040",
      position: "bottom",
      ticks: {
        size: 6,
        padding: 10
      }
    }
  ],
    yaxes: [
    {
      label: "Wind Speed (kts)",
      colour: "#404040",
      labelWidth: 20,
      ticks: 5,
      min: 0,
      max: 50
    }
  ],
    series: [
    {
      label: "WS (kts)",
      colour: "#e41a1c",
      lines: {
        show: true
      },
      points: {
        show: true,
        transform: {
          component: "PointDirection",
          config: {
            selector: {param: "WD"},
            svg: {
              path: {
                d: "M0,-11L-7.5,7.29L-6.79,8L0,5L6.79,8L7.5,7.29L0,-11Z",
                style: {
                  stroke: "black",
                  fill: "white"
                }
              }

            },
            originTransform: ""
          }
        }
      },
      selector: {
        param: "WS"
      }
    },
    {
      label: "WG (kts)",
      colour: "#377eb8",
      lines: {
        show: true
      },
      points: {
        show: false
      },
      selector: {
        param: "WG"
      }
    }
  ]
}

export const wdChart = {
  margins: {
    top: 5,
    left: 55,
    bottom: 30,
    right: 53
  },
  xaxes: [
    {
      mode: "time",
      colour: "#404040",
      position: "bottom"
    }
  ],
  yaxes: [
    {
      axisLabel: "Wind Direction (°)",
      colour: "#404040",
      labelWidth: 20,
      min: 0,
      max: 360,
      format: "0",
      ticks: {
        minorInterval: 45,
        majorInterval: 45,
        labelInterval: 90,
        size: 5,
        padding: 7
      }
    }
  ],
  series: [
    {
      label: "WD (°)",
      colour: "#377eb8",
      lines: {
        show: false
      },
      points: {
        show: true
      },
      selector: {
        param: "WD"
      }
    }
  ]
}
