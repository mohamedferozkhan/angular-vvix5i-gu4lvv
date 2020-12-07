import { Component, OnInit, Inject } from "@angular/core";
import { CartService } from "../cart.service";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: [];
  constructor(
    private cartService: CartService,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit() {
    // this.items = this.cartService.getItems();
    this.items = this.storage.get("myCart");
  }

  removeItem(productNumber) {
    this.items.splice(productNumber, 1);
    this.storage.set("myCart", this.items);
    this.items = this.storage.get("myCart");
  }

  routeTo400() {
    this.router.navigateByUrl("page-not-found");
  }

  routeTo500() {
    this.router.navigateByUrl("internal-server-error");
  }

  routeToGeneralErro() {
    this.router.navigateByUrl("error");
  }
}
