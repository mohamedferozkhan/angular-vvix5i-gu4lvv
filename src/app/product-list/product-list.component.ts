import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  // template: "htts",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("The product has been shared!!!!!");
  }

  onNotify(product) {
    window.alert("Notificationasdfasasfdafsd!" + product.name);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
