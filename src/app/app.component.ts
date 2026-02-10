import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient]
})
export class AppComponent {
  title = 'chiropractic';

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  constructor(private http:HttpClient){
    
  }


}
