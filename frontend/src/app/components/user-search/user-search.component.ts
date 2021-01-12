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

  }

  ngOnInit(): void {
    this.getUsersByName();
  }

  getUsersByName() {
    this.spinner.show();  
    this.searchUserService.searchUsersByName(this.currentSearchName, (this.currentPage-1)*this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.userList  = data.results;
      this.lastPage = Math.ceil(data.total/this.pageSize);
      this.spinner.hide();
    });
  }

  selectUser(user) {
    this.spinner.show();
    this.culProfileService.compareProfiles(user.username)
    .subscribe( data =>{
      sessionStorage.setItem('userCulturalProfileComparisson', JSON.stringify(data));
      this.router.navigate(['/comparison-dashboard'])
      this.spinner.hide();
    });
  }
  previous() {
    this.currentPage-=1;
    this.getUsersByName();
  }

  next() {
    this.currentPage+=1;
    this.getUsersByName();
  }

  search() {
    this.currentPage = 1;
    this.currentSearchName = this.inputName;
    this.getUsersByName();
  }
}
