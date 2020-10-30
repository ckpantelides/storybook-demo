import { Injectable } from '@angular/core';

import { Component, OnInit, ViewContainerRef } from '@angular/core';

import * as applicationSettings from 'application-settings';

import {
  ModalDialogOptions,
  ModalDialogService,
} from 'nativescript-angular/modal-dialog';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private _modalService: ModalDialogService) {}

  characterIncomplete(): Boolean {
    if (
      !applicationSettings.hasKey('userName') ||
      !applicationSettings.hasKey('isFemale') ||
      !applicationSettings.hasKey('avatar')
    ) {
      return true;
    } else {
      return false;
    }
  }

  noNameOrGender(): Boolean {
    if (
      !applicationSettings.hasKey('userName') ||
      !applicationSettings.hasKey('isFemale')
    ) {
      return true;
    } else {
      return false;
    }
  }

  noAvatar(): Boolean {
    if (!applicationSettings.hasKey('avatar')) {
      return true;
    } else {
      return false;
    }
  }
}
