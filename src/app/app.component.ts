import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';
  username: string;
  password: string;
  message: string;

  onLoginClick()
  {
    if(this.username == "shehzad" && this.password == "shehzad123")
    {
      this.message = "Successful Login";
    }
    else
    {
      this.message = "Invalid Login";
    }
  }
}
