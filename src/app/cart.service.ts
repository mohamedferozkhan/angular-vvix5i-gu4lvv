import { Inject, Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class CartService {
  items = [];

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.items = this.storage.get("myCart") ? this.storage.get("myCart") : [];
  }

  addToCart(product) {
    this.items.push(product);
    this.storage.set("myCart", this.items);
  }

  getItems() {
    this.storage.get("myCart");
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.storage.remove("myCart");
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
