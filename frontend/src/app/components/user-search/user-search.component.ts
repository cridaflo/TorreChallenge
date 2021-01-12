import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';
import { Router } from '@angular/router';
import { CulturalProfileService } from 'src/app/services/cultural-profile.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  inputName: string = '';
  userList: any = [];

  torreLogo = '../../../assets/torreLogo.png'

  currentPage = 1;
  currentSearchName = '';

  pageSize = 20;
  lastPage = 1;

  constructor(
    private searchUserService: UserSearchService, 
    private router: Router,
    private culProfileService: CulturalProfileService,
    private spinner: NgxSpinnerService
  ) {
     //Checks if the requiered information is stored
    if( !sessionStorage.getItem('culturalProfile')) {
      this.router.navigate(['/professional-dynamics-selection']);
    }
  }

  ngOnInit(): void {
    this.getUsersByName();
  }

  //Performs search by nae in the current page
  getUsersByName() {
    this.spinner.show();  
    this.searchUserService.searchUsersByName(this.currentSearchName, (this.currentPage-1)*this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.userList  = data.results;
      this.lastPage = Math.ceil(data.total/this.pageSize);
      this.spinner.hide();
    });
  }

  //Handles the event of selecting a user and calculates their cultural compatibility factor in the cases in which is possible
  selectUser(user) {
    this.spinner.show();
    this.culProfileService.compareProfiles(user.username)
    .subscribe( (data: any) =>{
      this.spinner.hide();
      if(!data.failed) {
        sessionStorage.setItem('consultedUser', JSON.stringify(user.name));
        sessionStorage.setItem('userCulturalProfileComparisson', JSON.stringify(data));
        this.router.navigate(['/comparison-dashboard'])
      } else {
        user.alert = true;
      }
    });
  }
  
  //Retrieves users of the previous page
  previous() {
    this.currentPage-=1;
    this.getUsersByName();
  }

  //Retrieves users of the next page
  next() {
    this.currentPage+=1;
    this.getUsersByName();
  }

  //Performs search by a new name
  search() {
    this.currentPage = 1;
    this.currentSearchName = this.inputName;
    this.getUsersByName();
  }
}
