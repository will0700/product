import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProduct = {
    title: "",
    price: 0,
    image_url: ""
  }
  errors = []

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  handleCancel(){
    this._router.navigate(['/products'])
  }

  handleSubmit(){
    this._httpService.createProduct(this.newProduct)
    .subscribe((data: any) => {
      if(data.hasOwnProperty('errors')){
        this.errors = data.errors
      } else {
        this._router.navigate(['/products'])
      }
    })
  }
}
