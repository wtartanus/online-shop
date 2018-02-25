import {Component, OnInit, OnDestroy, Input} from '@angular/core';
// import { SingleProductComponent } from './singleProduct.component.js';
// import { ProductsListComponent } from "./productsList.component.js";
declare var jquery:any;
declare var $ :any;
declare var cbpShop: any;
declare var w3l: any;
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'products',
  templateUrl: 'src/app/views/products.component.html'
  //entryComponents: [ProductsListComponent, SingleProductComponent]
})
export class ProductsComponent implements OnInit {
  @Input() selectedCategory: string;
  @Input() data: any;
  public selectedProduct: any;

  ngOnInit() {
    // this.initShop();
    // this.initPopUpBox();
  }

  onProductSelection(selectedProduct: any): void{
    this.selectedProduct = selectedProduct;
  }

  initShop(): void {
    var shop = new cbpShop( document.getElementById( 'cbp-pgcontainer' ) ); 
  }

 initPopUpBox(): void {
    $(document).ready(function() {
      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
    });
 }

  initCart(): void {
      //TODO maybe not needed
      w3l.render();

      w3l.cart.on('w3agile_checkout', function (evt: any) {
          var items, len, i;

          if (this.subtotal() > 0) {
            items = this.items();

            for (i = 0, len = items.length; i < len; i++) { 
            }
          }
      });
  }
}
