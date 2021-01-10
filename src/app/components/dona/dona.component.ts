import {Component, Input} from '@angular/core';
import {Color, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

@Input()  title: string = "Sin titulo"

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Data1', 'Data2', 'Data3'];

  @Input('data') doughnutChartData: MultiDataSet = [
    [0, 0, 0],
  ];

  public colors: Color[] = [
    {backgroundColor: ['#6857e6','#009fee','#f02059']}
  ];

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
