import { Component, OnInit } from '@angular/core';
import { Page, View } from 'ui/page';
import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  templateUrl: './superhero-q1.component.html',
  styleUrls: ['./superhero-q1.component.css'],
})
export class SuperheroQ1Component implements OnInit {
  private background: string;
  private avatar: string;
  private question: string;
  private noRouteParam: string;
  private yesRouteParam: string;

  constructor(private page: Page, private _routerExtensions: RouterExtensions) {
    page.actionBarHidden = true;
    this.question = 'Call for help?';
    this.yesRouteParam = 'superhero-alt1';
    this.noRouteParam = 'superhero-main2';
  }

  ngOnInit(): void {
    this.avatar = applicationSettings.getString('avatar');
    this.background = `~/assets/images/superhero/05-${this.avatar}.jpg`;
  }
}
