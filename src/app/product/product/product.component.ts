import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  segmentChanged(segment: any):void{
    if(segment.detail.value === 'product-list'){
      console.log('PRODUCT LIST');
      
      this.router.navigateByUrl('product/product-list');
    } else {
      console.log('ADD PRODUCT');
      this.router.navigateByUrl('product/add-product');
    }
  }

}
