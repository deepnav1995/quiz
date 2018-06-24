import { Component } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader: boolean;

      constructor(
          private loader: LoaderService) {
      }

      ngOnInit() {
          this.loader.status.subscribe((val: boolean) => {
              this.showLoader = val;
          });
      }
}
