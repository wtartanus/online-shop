import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
declare var jquery:any;
declare var $ :any;
declare var cbpShop: any;
declare var w3l: any;
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'singleProduct',
  templateUrl: 'src/app/views/singleProduct.component.html',
  // entryComponents: [InspirationsComponent, DatePickerComponent]
})
export class SingleProductComponent implements OnInit {
  @Input() data: any;
  @Input() product: any;

  ngOnInit() {
    // this.initShop();
    // this.initPopUpBox();
    this.initSome();
  }

  initShop(): void {
    var shop = new cbpShop( document.getElementById( 'cbp-pgcontainer' ) ); 
  }

  initSome(): void{
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
      });
    });
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
