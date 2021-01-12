import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-comparison-dashboard',
  templateUrl: './comparison-dashboard.component.html',
  styleUrls: ['./comparison-dashboard.component.scss']
})
export class ComparisonDashboardComponent implements OnInit {

  unionIntersectionRatio;
  constructor() { }

  ngOnInit(): void {
    const culturalProfile = JSON.parse(sessionStorage.getItem('culturalProfile'));
    const comparisonResults = JSON.parse(sessionStorage.getItem('userCulturalProfileComparisson'));
    const userCulturalProfile = comparisonResults.user_cultural_profile;
    this.unionIntersectionRatio = comparisonResults.union_inter_ratio;

    const data = culturalProfile.map(x => x.average_correlation);
    const dataUser = userCulturalProfile.map(x => x.average_correlation);

    const max1 = data.reduce((a,b)=>Math.max(a,b), -Infinity);
    const max2 = dataUser.reduce((a,b)=>Math.max(a,b), -Infinity);
    const options = {
    series: [{
        name: 'Job cultural profile',
        data: data
      }, {
        name: 'User cultural profile',
        data: dataUser
      }],
      chart: {
        width: 700,
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
        max: Math.floor((Math.max(max1, max2)/5)+1)*5,
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
      },
      legend: {
        fontFamily:'Montserrat, sans-serif',
        fontSize: '16px',
        labels: {
          colors: '#9EA0A3'
        },
      }
    };

    const chart = new ApexCharts(
        document.querySelector('#apex-cultural-profile'),
        options
    );

    chart.render();
  }

}
