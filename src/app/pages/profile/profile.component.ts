import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

interface UserProfile {
  firstName: string;
  lastName: string;
  username: string;
  userid: string;
  phone: string;
  role: string;
  status: string;
  id?: string; // optional property
  authorities?: { authority: string }[]; // array of authorities
  enabled?: boolean; // boolean property
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserProfile | null = null;

  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.user = this.login.getUser();
     // this.login.getCurrentUser().subscribe(
    //   (user: any) => {
    //     this.user = user;
    //   },
    //   (error) => {
    //     alert('error');
    //   }
    // );
  }
}
