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
      max: Math.floor((Math.max(max1, max2)/5)+1)*5,
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
  }

}
