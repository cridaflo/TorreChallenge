import { OnInit, Component, ViewChild} from "@angular/core";
import { Router } from "@angular/router";
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-cultural-profile',
  templateUrl: './cultural-profile.component.html',
  styleUrls: ['./cultural-profile.component.scss']
})
export class CulturalProfileComponent implements OnInit {

  orderedCulturalProfile = [];
  constructor(
    private router: Router
  ) {
    //Checks if the required information is stored
    if( !sessionStorage.getItem('culturalProfile')) {
      this.router.navigate(['/professional-dynamics-selection']);
    }
  }

  ngOnInit() {
    //Generation of radar chart
    const culturalProfile = JSON.parse(sessionStorage.getItem('culturalProfile'));
    const data = culturalProfile.map(x => x.average_correlation);
    const max = data.reduce((a,b)=>Math.max(a,b), -Infinity);
    const options = {
        series: [{
        name: 'Series 1',
        data: data
      }],
        chart: {
          width: 860,
          type: 'radar',
          background: '#222326',
          dropShadow: {
            enabled: false,
            blur: 1,
            left: 1,
            top: 1
          },
          toolbar: {
            show: false,
          }
        },
      yaxis: {
        decimalsInFloat: 0,
        min: 0, 
        max: Math.floor((max/5)+1)*5,
        tickAmount: 5,
        labels: {
          style: {
            colors: '#D3D936',
            fontFamily:  'Montserrat, sans-serif',
          },
          formatter: (value) => { return value+'%' },
        }
      },
      fill: {
        opacity: 0.1,
      },
      background: {
        chart: {
          background: '#0D0D0D'
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: 
          culturalProfile.map(x => {
            const name = x.cultural_dynamic_name;
            return name[0].toUpperCase() + name.slice(1);
          }),
        labels: {
          style: {
            colors: ['#9EA0A3'],
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
        },
        }
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
