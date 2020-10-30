import { Component, OnInit, Input } from '@angular/core';
import { Page, View } from 'ui/page';
import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';
import { MusicPlayerService } from '../music-player.service';

@Component({
  selector: 'questionpage-component',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css'],
})
export class QuestionpageComponent implements OnInit {
  private avatar: number;
  private musicOn: boolean;

  constructor(
    private page: Page,
    private _routerExtensions: RouterExtensions,
    private _musicPlayerService: MusicPlayerService
  ) {
    page.actionBarHidden = true;
    this.musicOn = this._musicPlayerService.isPlaying();
  }
  @Input() question: string;
  @Input() background: string;
  @Input() yesRouteParam: string;
  @Input() noRouteParam: string;

  ngOnInit(): void {}

  togglePlay(): void {
    // The musicOn boolean determines which icon is showing
    this.musicOn === true ? (this.musicOn = false) : (this.musicOn = true);
    return this._musicPlayerService.togglePlay();
  }
  goBack(): void {
    this._routerExtensions.back();
  }

  yesRoute(): void {
    this._routerExtensions.navigate([this.yesRouteParam]);
  }

  noRoute(): void {
    this._routerExtensions.navigate([this.noRouteParam]);
  }
}
