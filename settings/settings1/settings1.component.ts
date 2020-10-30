import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page';
import * as applicationSettings from 'application-settings';

@Component({
  templateUrl: './settings1.component.html',
  styleUrls: ['./settings1.component.css'],
})
export class Settings1Component implements OnInit {
  private girlChosen: Boolean;
  private boyChosen: Boolean;
  private userName: string;
  constructor(
    private _page: Page,
    private router: RouterExtensions,
    private _activeRoute: ActivatedRoute
  ) {
    _page.actionBarHidden = true;
    this.userName = '';
  }
  ngOnInit(): void {
    if (applicationSettings.hasKey('isFemale')) {
      applicationSettings.getBoolean('isFemale') === true
        ? (this.girlChosen = true)
        : (this.boyChosen = true);
    }
    if (applicationSettings.hasKey('userName')) {
      this.userName = applicationSettings.getString('userName');
    }
  }
  onNavigate(): void {
    if (this.userName.length > 0) {
      applicationSettings.setString('userName', this.userName);
    }
    this.router.navigate(['settings2'], {
      animated: true,
      transition: { name: 'slide', duration: 400 },
    });
  }
  onClose(): void {
    if (this.userName.length > 0) {
      applicationSettings.setString('userName', this.userName);
    }
  }
  chooseGirl(): void {
    this.boyChosen = false;
    this.girlChosen = true;
    applicationSettings.setBoolean('isFemale', true);
  }

  chooseBoy(): void {
    this.girlChosen = false;
    this.boyChosen = true;
    applicationSettings.setBoolean('isFemale', false);
  }
}
