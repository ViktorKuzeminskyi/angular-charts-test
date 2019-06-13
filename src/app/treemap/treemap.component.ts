import { Component, OnInit } from '@angular/core';
import { Options } from 'highcharts';
import { Chart } from 'angular-highcharts';
import { Router } from '@angular/router';
import { treeMapData } from '../shared/mock-data';

const pointFormatter = function chartPointFormatter() {
  const {total, value} = this;
  const unprotected = total - value;

  return `<br>Protected files <b style="color:#9bc225">${value}</b>
          <br>Unprotected files <b style="color:#d92c33">${unprotected}</b>`;
};
const formatter = function chartTitleFormatter() {
  const {
    key,
    point: {
      total, value
    }
  } = this;
  const amountUnprotected = total - value;
  let text = 'All files protected';

  if (total !== value) {
    text = `${amountUnprotected} unprotected files`;
  }
  return `<a class="nodrilldown"
              routerLink="/barchart"
              style="line-height: 2">${key}</a><br>${text}`;
};

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnInit {
  chart: Chart;

  private options: Options = {
    title: {
      text: 'Machines'
    },
    plotOptions: {
      series: {
        events: {
          click: (e) => {
            e.preventDefault();
            this.router.navigate(['/dpm/', e.point.id]);
          }
        },
        dataLabels: {
          enabled: true,
          useHTML: true,
          formatter
        }
      }
    },
    tooltip: {
      useHTML: true,
      headerFormat: '<b style="font-size:13px">{point.key}</b>',
      pointFormatter
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      levels: [{
        dataLabels: {
          enabled: true
        },
      }],
      data: treeMapData
    }]
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.chart = new Chart(this.options);
  }
}
