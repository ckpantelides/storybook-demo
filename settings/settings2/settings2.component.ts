import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import * as applicationSettings from 'application-settings';
import { DataItemService } from '~/data-item.service';

@Component({
  templateUrl: './settings2.component.html',
  styleUrls: ['./settings2.component.css'],
})
export class Settings2Component implements OnInit {
  private girlChosen: Boolean;
  private avatar1chosen: Boolean;
  private avatar2chosen: Boolean;
  private avatar3chosen: Boolean;
  private avatar4chosen: Boolean;
  private avatar5chosen: Boolean;
  private avatar6chosen: Boolean;
  private avatar7chosen: Boolean;
  private avatar8chosen: Boolean;
  private avatar9chosen: Boolean;
  private avatar10chosen: Boolean;
  private avatar11chosen: Boolean;
  private avatar12chosen: Boolean;

  constructor(
    private router: RouterExtensions,
    private page: Page,
    private dataItemService: DataItemService
  ) {
    page.actionBarHidden = true;
  }

  onBack(): void {
    this.router.back();
  }

  restorePurchases(): void {
    this.dataItemService.restorePurchases();
  }

  onClose(): void {
    // this._params.closeCallback('return value2');
    this.router.navigate(['hub']);
  }
  avatarChosen(val: number): void {
    if (val === 1) {
      applicationSettings.setString('avatar', '01');
      this.avatar1chosen = true;
      this.avatar2chosen = this.avatar3chosen = this.avatar4chosen = this.avatar5chosen = this.avatar6chosen = false;
    }
    if (val === 2) {
      applicationSettings.setString('avatar', '02');
      this.avatar2chosen = true;
      this.avatar1chosen = this.avatar3chosen = this.avatar4chosen = this.avatar5chosen = this.avatar6chosen = false;
    }
    if (val === 3) {
      applicationSettings.setString('avatar', '03');
      this.avatar3chosen = true;
      this.avatar1chosen = this.avatar2chosen = this.avatar4chosen = this.avatar5chosen = this.avatar6chosen = false;
    }
    if (val === 4) {
      applicationSettings.setString('avatar', '04');
      this.avatar4chosen = true;
      this.avatar1chosen = this.avatar2chosen = this.avatar3chosen = this.avatar5chosen = this.avatar6chosen = false;
    }
    if (val === 5) {
      applicationSettings.setString('avatar', '05');
      this.avatar5chosen = true;
      this.avatar1chosen = this.avatar2chosen = this.avatar3chosen = this.avatar4chosen = this.avatar6chosen = false;
    }
    if (val === 6) {
      applicationSettings.setString('avatar', '06');
      this.avatar6chosen = true;
      this.avatar1chosen = this.avatar2chosen = this.avatar3chosen = this.avatar4chosen = this.avatar5chosen = false;
    }
    if (val === 7) {
      applicationSettings.setString('avatar', '07');
      this.avatar7chosen = true;
      this.avatar8chosen = this.avatar9chosen = this.avatar10chosen = this.avatar11chosen = this.avatar12chosen = false;
    }
    if (val === 8) {
      applicationSettings.setString('avatar', '08');
      this.avatar8chosen = true;
      this.avatar7chosen = this.avatar9chosen = this.avatar10chosen = this.avatar11chosen = this.avatar12chosen = false;
    }
    if (val === 9) {
      applicationSettings.setString('avatar', '09');
      this.avatar9chosen = true;
      this.avatar7chosen = this.avatar8chosen = this.avatar10chosen = this.avatar11chosen = this.avatar12chosen = false;
    }
    if (val === 10) {
      applicationSettings.setString('avatar', '10');
      this.avatar10chosen = true;
      this.avatar7chosen = this.avatar8chosen = this.avatar9chosen = this.avatar11chosen = this.avatar12chosen = false;
    }
    if (val === 11) {
      applicationSettings.setString('avatar', '11');
      this.avatar11chosen = true;
      this.avatar7chosen = this.avatar8chosen = this.avatar9chosen = this.avatar10chosen = this.avatar12chosen = false;
    }
    if (val === 12) {
      applicationSettings.setString('avatar', '12');
      this.avatar12chosen = true;
      this.avatar7chosen = this.avatar8chosen = this.avatar9chosen = this.avatar10chosen = this.avatar11chosen = false;
    }
  }
  ngOnInit(): void {
    // Show either the girl or boy avatars
    if (applicationSettings.hasKey('isFemale')) {
      applicationSettings.getBoolean('isFemale') === true
        ? (this.girlChosen = true)
        : (this.girlChosen = false);
    }
    // Highlight any previously chosen avatar
    applicationSettings.getString('avatar') === '01'
      ? (this.avatar1chosen = true)
      : '';
    applicationSettings.getString('avatar') === '02'
      ? (this.avatar2chosen = true)
      : '';
    applicationSettings.getString('avatar') === '03'
      ? (this.avatar3chosen = true)
      : '';
    applicationSettings.getString('avatar') === '04'
      ? (this.avatar4chosen = true)
      : '';
    applicationSettings.getString('avatar') === '05'
      ? (this.avatar5chosen = true)
      : '';
    applicationSettings.getString('avatar') === '06'
      ? (this.avatar6chosen = true)
      : '';
    applicationSettings.getString('avatar') === '07'
      ? (this.avatar7chosen = true)
      : '';
    applicationSettings.getString('avatar') === '08'
      ? (this.avatar8chosen = true)
      : '';
    applicationSettings.getString('avatar') === '09'
      ? (this.avatar9chosen = true)
      : '';
    applicationSettings.getString('avatar') === '10'
      ? (this.avatar10chosen = true)
      : '';
    applicationSettings.getString('avatar') === '11'
      ? (this.avatar11chosen = true)
      : '';
    applicationSettings.getString('avatar') === '12'
      ? (this.avatar12chosen = true)
      : '';
  }
}
