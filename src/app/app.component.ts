import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chiropractic';

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse.show') as HTMLElement;
    if (navbar) {
      const collapse = new (window as any).bootstrap.Collapse(navbar, { toggle: false });
      collapse.hide();
    }
  }
}
