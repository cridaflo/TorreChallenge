import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/services/user-search.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CulturalProfileService } from 'src/app/services/cultural-profile.service';

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

  pageSize = 3;
  lastPage = 1;

  constructor(
    private searchUserService: UserSearchService, 
    private http: HttpClient,
    private router: Router,
    private culProfileService: CulturalProfileService,
  ) { 

  }

  ngOnInit(): void {
    this.getUsersByName();
    this.getPrueba();
  }

  getUsersByName() {
    this.searchUserService.searchUsersByName(this.currentSearchName, (this.currentPage-1)*this.pageSize, this.pageSize)
    .subscribe((data: any) => {
      this.userList  = data.results;
      this.lastPage = Math.ceil(data.total/this.pageSize);
      console.log(data);
    });
  }

  getPrueba() {
    this.http.get('https://flask-api-example-2021.herokuapp.com/').subscribe(
      data => {
        console.log(data);
      }
    )
  }

  selectUser(user) {
    this.culProfileService.compareProfiles(user.username)
    .subscribe( data =>{
      sessionStorage.setItem('userCulturalProfileComparisson', JSON.stringify(data));
      this.router.navigate(['/comparison-dashboard'])
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
