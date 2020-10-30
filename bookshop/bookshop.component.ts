import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './bookshop.component.html',
  styleUrls: ['./bookshop.component.css'],
})
export class BookshopComponent implements OnInit {
  constructor(private _page: Page, private router: RouterExtensions) {
    _page.actionBarHidden = true;
  }

  orderBook(bookType: string): void {
    let navigationExtras: NavigationExtras = {
      queryParams: { type: bookType },
    };
    this.router.navigate(['orderform1'], navigationExtras);
  }

  ngOnInit(): void {}
}
