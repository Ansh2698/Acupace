import {Component, OnInit} from '@angular/core';
import {ChartDB} from '../../../../fack-db/chart-data';
import {ApexChartService} from '../../../../theme/shared/components/chart/apex-chart/apex-chart.service';

@Component({
  selector: 'app-crt-apex',
  templateUrl: './crt-apex.component.html',
  styleUrls: ['./crt-apex.component.scss']
})
export class CrtApexComponent implements OnInit {
  public chartDB: any;

  constructor(public apexEvent: ApexChartService) {
    this.chartDB = ChartDB;
  }

  ngOnInit() {}

}
