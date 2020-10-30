import { Injectable } from '@angular/core';
import { DATAITEMS } from './mock-dataItems';
import { DataItem } from './data-item';
import { InAppPurchase } from '../IapInterface';
import { IAP } from '../IapData';
// imported for local storage of purchases
import * as applicationSettings from 'application-settings';

import * as purchase from 'nativescript-purchase';
import {
  Transaction,
  TransactionState,
} from 'nativescript-purchase/transaction';
import { Product } from 'nativescript-purchase/product';
import { ItemEventData } from 'ui/list-view';

import { RouterExtensions } from 'nativescript-angular/router';

// The transactionUpdated events provide info about the transaction state while it's executing
// and take necessary actions when the transaction completes (i.e saving the transaction in applicationSettings)
// Android version - includes consume events. Use code above for IOS
purchase.on(purchase.transactionUpdatedEvent, (transaction: Transaction) => {
  if (transaction.transactionState === TransactionState.Purchased) {
    alert(`Congratulations you just bought ${transaction.productIdentifier}!`);
    console.log(transaction.transactionDate);
    console.log(transaction.transactionIdentifier);
    applicationSettings.setBoolean(transaction.productIdentifier, true);
    if (transaction.productIdentifier.indexOf('.consume') >= 0) {
      purchase
        .consumePurchase(transaction.transactionReceipt)
        .then((responseCode) => console.log(responseCode)) // If responseCode === 0 the purchase has been successfully consumed
        .catch((e) => console.log(e));
    }
    // Restoring purchases
  } else if (transaction.transactionState === TransactionState.Restored) {
    applicationSettings.setBoolean(
      transaction.originalTransaction.productIdentifier,
      true
    );
  } else if (transaction.transactionState === TransactionState.Failed) {
  }
});

@Injectable({
  providedIn: 'root',
})
export class IAPService {
  constructor(private routerExtensions: RouterExtensions) {}

  getIAP() {
    applicationSettings.getBoolean('com.christos.storybook.story13')
      ? (IAP[1].priceFormatted = 'Purchased')
      : (IAP[1].priceFormatted = '£1.99');
    applicationSettings.getBoolean('com.christos.storybook.story23')
      ? (IAP[2].priceFormatted = 'Purchased')
      : (IAP[2].priceFormatted = '£2.99');
    return IAP;
  }

  // SpaceCamp is free to the user. It needs to be marked as purchased when the
  // app is first used
  setSpaceAsPurchased() {
    if (!applicationSettings.hasKey('Space Camp')) {
      applicationSettings.setBoolean('Space Camp', true);
    }
  }

  buyIAP(item: InAppPurchase) {
    if (purchase.canMakePayments()) {
      // The'product' passed to the purchase methods must be the same instance as the one returned from getProducts()
      // purchaseInitPromise is initialised in main.ts
      (global as any).purchaseInitPromise.then(() => {
        purchase.getProducts().then((products: Array<Product>) => {
          // Iterate through the available products. If the product is the same as the item selected
          // buy the product
          products.forEach((product: Product) => {
            if ((product.productIdentifier = item.productIdentifier)) {
              purchase.buyProduct(product);
            }
          });
        });
      });
    } else {
      alert('Sorry, your account is not eligible to make payments!');
    }
  }
  restorePurchases() {
    purchase.restorePurchases().then(() => alert('Purchases restored'));
  }
}
