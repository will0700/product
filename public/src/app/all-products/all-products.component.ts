import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {

  products = []

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getProducts()
    .subscribe((data: any) => {
      this.products = data.products
    })
  }

  goToEdit(id){
    this._router.navigate(['/products/edit/' + id])
  }

  deleteProduct(id){
    this._httpService.deleteProduct(id)
    .subscribe((data: any) => {
      this.products = this.products.filter(product => product._id !== id)
    })
  }

}
