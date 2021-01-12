import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CulturalProfileService } from 'src/app/services/cultural-profile.service';
import { ProfessionalDynamicsService } from 'src/app/services/professional-dynamics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-professional-dynamics-selector',
  templateUrl: './professional-dynamics-selector.component.html',
  styleUrls: ['./professional-dynamics-selector.component.scss']
})
export class ProfessionalDynamicsSelectorComponent implements OnInit {
    
    professionalDynamicsList: any;
    selectedDynamics: any = [];

    showAlert = false;

    constructor(
        private profDynamicService: ProfessionalDynamicsService,
        private culProfileService: CulturalProfileService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {

    }
    ngOnInit(): void {
        this.getProfessionalDynamics();
    }

    getProfessionalDynamics() {
        this.spinner.show();
        this.profDynamicService.getProfessionalDynamics()
        .subscribe( data => {
            this.professionalDynamicsList = data;
            this.spinner.hide();
        })
    }

    select(item){
        const index = this.selectedDynamics.indexOf(item);
        if(index<0 && this.selectedDynamics.length <5){
            this.selectedDynamics.push(item);
        } else if(index >= 0) {
            this.selectedDynamics.splice(index, 1)
        }
    }

    generateCulturalProfile() {
        if (this.selectedDynamics.length == 5) {
            this.spinner.show();
            this.culProfileService.createCulturalProfile(this.selectedDynamics)
            .subscribe(data => {
                sessionStorage.setItem('culturalProfile', JSON.stringify(data));
                this.router.navigate(['/cultural-profile']);
                this.spinner.hide();
            })
        } else {
            this.showAlert = true;
        }
    }
}
