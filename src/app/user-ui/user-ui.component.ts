import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.css'
})
export class UserUIComponent implements DoCheck{
  user: { name: string, email: string };
  
  constructor(private http: HttpClient) {
    this.user = {
      name: '',
      email: ''
    };

}
 headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
handleClick(event: Event) {
  console.log("hellllllllllllllllllllo",this.user.name)
  event.preventDefault();
  this.http.post<any>('http://localhost:3000/users', this.user, { headers: this.headers })
      .subscribe(response => {
          console.log('User added successfully:', response);
      }, error => {
          console.error('Error adding user:', error);
      });
}
ngDoCheck() {
  console.log('Changes detected');
  console.log('Name:', this.user.name);
  console.log('Email:', this.user.email);
}

}

