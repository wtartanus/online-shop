import {Component, OnInit, OnDestroy} from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var FilmRoll:any;
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/toPromise';

import { HeaderComponent } from "./../components/header.component.js";
import { ProductsComponent } from "./../components/products.component.js";
import { SplashComponent } from "./../components/splash.component.js";
import { FooterComponent } from "./../components/footer.component.js";

import {WarehouseService} from './../services/warehouse.service.js';
// import {SearchService} from './../services/search.service.js';
// import {MessageService} from './../services/message.service.js';
// import { WindowSize } from './../models/windowSize.js';
// import { Inspiration } from './../models/inspiration.js';
// declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/views/app.component.html',
  providers: [WarehouseService],
  entryComponents: [HeaderComponent]
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent implements OnInit {
    public selectedCategory: string = null; //This should be null when in home page
    public data: any;
    public selectedProducts: any;
    private dataReceived: boolean = false;
    ngOnInit() {
      var dataPromise = this.warehouse.initData();
      dataPromise.then(result => this.onDataReceived(result));
    }

    onCategoryChange(category: string): void {
      this.selectedCategory = category;
      if (this.dataReceived) {
         this.selectedProducts = this.data.productsByCategory[this.selectedCategory];
         console.log("selected", this.selectedProducts[0]);
      } else {
        this.selectedProducts = [];
      }
    }

  constructor(private warehouse: WarehouseService ) { //private messageService: MessageService
    //this.substriction = this.messageService.getMessage().subscribe(message => this.updateDates(message));
  };

  onDataReceived(data: any): void{
    this.data = data;
    this.dataReceived = true;
    console.log("Data in place");
  }


//   ngOnInit(): void {
//     this.windowSize = this.commonService.getWindowSize();
//     let input = document.getElementById('locationTextField');
//     let autocomplete = new google.maps.places.Autocomplete(input);
//     if (this.windowSize.getWidth() >= 1200) {
//       this.height = '56.79px';
//       this.width = '100%';
//     }

//     this.departOptions = this.setOptions(false);
//     this.returnOptions = this.setOptions(true);
//   }

//   ngOnDestroy(): void {
//      this.substriction.unsubscribe();
//   }

}

/******* TODO
 * - Download all photos
 * - Navigation items should have pointer cursor on hover
 * - Fix photos display in singleProduct, if most of things have only one photo then show only one
 * - Remove all not need things from singleProduct 
 * - assuer that data been loaded
 * - add page to ask if user is 18 years old
 * - Products list should display set number of items
 * - hook up search
 * - add filters to products list
 * - Single product should show sizes
 * - Products list should show only existing sizes
 * - Update home page 
 * - Map if product is in stock in to items
 * - Map sizes in to items
 * - Map discounted
 * - On singleProduct display the same things what in xtrader
 * - Work out relation between selecting category, selecting product
 * - Check if basket work properly
 * - Add videos.
 * - Add basket page??
 * - Add checkout page
 * - Add new table for orders
 * - Add page to display all orders
 * ********/

