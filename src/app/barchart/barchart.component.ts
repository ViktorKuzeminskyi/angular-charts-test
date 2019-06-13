import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {Options, SeriesAbandsOptions} from 'highcharts';

const formatter = function chartTooltipformatter() {
  const {
    key,
    color,
    y,
    series: {
      options: {
        parent, name
      }
    }
  } = this;

  return `${key}:\\${parent}\\${name}<br> Unprotected files <b style="color:${color}">${y}</b>`;
};

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  @Input() disk: string;
  @Input() parentName: string;
  @Input() folderName: string;
  @Input() folderData: SeriesAbandsOptions[];

  chart: Chart;

  ngOnInit() {
    this.init();
  }

  public addSerie(serie) {
    this.chart.addSeries(serie, true, true);
  }

  public removeSerie(index) {
    this.chart.removeSeries(index);
  }

  public init() {
    const options: Options = {
      chart: {
        inverted: true,
        type: 'column',
        height: 130,
        spacing: [0, 0, 0, 0],
        margin: 0,
        backgroundColor: 'transparent'
      },
      title: {
        style: {
          display: 'none'
        }
      },
      colors: ['#d92c33'],
      plotOptions: {
        column: {
          stacking: 'percent',
          events: {
            click: console.log
          }
        }
      },
      xAxis: [{
        visible: false,
        categories: [this.disk]
      }],
      yAxis: [{
        visible: false
      }],
      series: this.folderData,
      legend: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        formatter
      }
    };
    const chart = new Chart(options);

    this.chart = chart;
  }
}
