import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { DoublepipePipe } from "./doublepipe.pipe";
import { HalfPipe } from "./half.pipe";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { GeneralErrorComponentComponent } from "./general-error-component/general-error-component.component";
import { PageNotFoundComponentComponent } from "./page-not-found-component/page-not-found-component.component";
import { InternalServerErrorComponentComponent } from "./internal-server-error-component/internal-server-error-component.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "error", component: GeneralErrorComponentComponent },
      { path: "page-not-found", component: PageNotFoundComponentComponent },
      {
        path: "internal-server-error",
        component: InternalServerErrorComponentComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    DoublepipePipe,
    HalfPipe,
    CartComponent,
    ShippingComponent,
    GeneralErrorComponentComponent,
    PageNotFoundComponentComponent,
    InternalServerErrorComponentComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
