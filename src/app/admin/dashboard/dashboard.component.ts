import { Component, OnInit,ChangeDetectorRef,OnDestroy,ViewEncapsulation} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  view;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.view='subjects';
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  viewChange(value){
    this.view=value;
  }
}
