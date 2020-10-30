import { Component, OnInit } from '@angular/core';
import { Page, View } from 'ui/page';
import { superheroAlt1 } from '../superhero-alt1-data';
import { StoryContent } from '../../StoryContentClass';
import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  templateUrl: './superhero-alt1.component.html',
  styleUrls: ['./superhero-alt1.component.css'],
})
export class SuperheroAlt1Component implements OnInit {
  private story: StoryContent[];
  private nextComponent: string;
  private previousComponent: string;
  private sectionLength: number;
  constructor() {
    this.story = superheroAlt1(
      applicationSettings.getString('userName'),
      applicationSettings.getString('avatar')
    );
    this.nextComponent = 'superhero-main2';
    this.previousComponent = 'superhero-q1';
  }
  ngOnInit(): void {}
}
