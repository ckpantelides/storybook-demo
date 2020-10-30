import { Component, OnInit, Input } from '@angular/core';
import { Page, View } from 'ui/page';
// import { superheroStory } from '../superhero-data';
import { StoryContent } from '../StoryContentClass';
import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';
import { MusicPlayerService } from '../music-player.service';

@Component({
  selector: 'storypage-component',
  templateUrl: './storypage.component.html',
  styleUrls: ['./storypage.component.css'],
})
export class StorypageComponent implements OnInit {
  private part1: string;
  private part2: string;
  private background: string;
  private counter: number;
  private isFemale: boolean;
  private story: StoryContent[];
  private sectionLength: number;
  private musicOn: boolean;

  constructor(
    page: Page,
    private _routerExtensions: RouterExtensions,
    private _musicPlayerService: MusicPlayerService
  ) {
    page.actionBarHidden = true;
    this.counter = 0;
    this.musicOn = this._musicPlayerService.isPlaying();
  }

  @Input() importedStory: StoryContent[];
  @Input() nextComponent: string;
  @Input() previousComponent: string;

  nextPage(): void {
    this.counter++;
    if (this.counter >= this.sectionLength) {
      this._routerExtensions.navigate([this.nextComponent]);
    } else {
      this.updateTextAndImage();
    }
  }

  goBack(): void {
    this.counter--;
    if (this.counter < 0) {
      this._routerExtensions.navigate([this.previousComponent]);
    } else {
      this.updateTextAndImage();
    }
  }

  togglePlay(): void {
    // The musicOn boolean determines which icon is showing
    this.musicOn === true ? (this.musicOn = false) : (this.musicOn = true);
    return this._musicPlayerService.togglePlay();
  }

  updateTextAndImage(): void {
    if (this.isFemale) {
      this.part1 = this.story[this.counter].part1female;
      this.part2 = this.story[this.counter].part2female;
    } else {
      this.part1 = this.story[this.counter].part1male;
      this.part2 = this.story[this.counter].part2male;
    }
    this.background = this.story[this.counter].background;
  }

  ngOnInit(): void {
    this.isFemale = applicationSettings.getBoolean('isFemale');
    this.story = this.importedStory;
    this.sectionLength = this.story.length;
    this.updateTextAndImage();
  }
}
