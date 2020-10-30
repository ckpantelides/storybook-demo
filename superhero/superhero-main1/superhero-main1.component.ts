import { Component, OnInit } from '@angular/core';
import { Page, View } from 'ui/page';
import { superheroMain1 } from '../superhero-main1-data';
import { StoryContent } from '../../StoryContentClass';
import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  templateUrl: './superhero-main1.component.html',
  styleUrls: ['./superhero-main1.component.css'],
})
export class SuperheroMain1Component implements OnInit {
  private story: StoryContent[];
  private nextComponent: string;
  private previousComponent: string;

  private sectionLength: number;
  constructor() {
    this.story = superheroMain1(
      applicationSettings.getString('userName'),
      applicationSettings.getString('avatar')
    );
    this.nextComponent = 'superhero-q1';
    this.previousComponent = 'hub';
  }

  ngOnInit(): void {}
}
