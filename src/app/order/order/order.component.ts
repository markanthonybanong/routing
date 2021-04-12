import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  constructor(
    public router: Router,
    private menu: MenuController
  ) { }

  ngOnInit() {
    document.querySelector('.order-container').parentElement.style.width = "100%";
  }
  onSegmentChanged(segment: any): void {
    if (segment.detail.value === 'order-list') {
       this.router.navigate(['order/order-list']);
    } else {
       this.router.navigate(['order/add-order']);
    }
}
  openMenu(){
    this.menu.enable(true, 'menu-content');
    this.menu.open('menu-content');
  }

}
