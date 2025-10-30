import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

declare var bootstrap: any; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'chiropractic';

  ngAfterViewInit() {
    // Collapse 初期化
    const collapseElement = document.querySelector('.navbar-collapse');
    if (collapseElement) {
      new bootstrap.Collapse(collapseElement, { toggle: false });
    }
  }

  closeNavbar() {
    const collapseElement = document.querySelector('.navbar-collapse'); 
    const bsCollapse = bootstrap.Collapse.getInstance(collapseElement);
    if (bsCollapse) {
      bsCollapse.hide(); 
    }
  }
}
