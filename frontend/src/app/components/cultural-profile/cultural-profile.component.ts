import { OnInit, Component, ViewChild} from "@angular/core";
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-cultural-profile',
  templateUrl: './cultural-profile.component.html',
  styleUrls: ['./cultural-profile.component.scss']
})
export class CulturalProfileComponent implements OnInit {

  orderedCulturalProfile = [];
  constructor() {
  }

  ngOnInit() {
    const culturalProfile = JSON.parse(sessionStorage.getItem('culturalProfile'));
    console.log(culturalProfile)
    const data = culturalProfile.map(x => x.average_correlation);
    const max = data.reduce((a,b)=>Math.max(a,b), -Infinity);
    const options = {
      series: [{
      name: 'Series 1',
      data: data
    }],
      chart: {
      height: 500,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    yaxis: {
      decimalsInFloat: 0,
      min: 0, 
      max: Math.floor((max/5)+1)*5,
      labels: {
        formatter: (value) => { return value },
      }
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: culturalProfile.map(x => x.cultural_dynamic_name)
    }
    };

    const chart = new ApexCharts(
        document.querySelector('#apex-cultural-profile'),
        options
    );

    chart.render();
    this.orderedCulturalProfile = culturalProfile.sort( (e1, e2) => e2.average_correlation-e1.average_correlation)
}



}
