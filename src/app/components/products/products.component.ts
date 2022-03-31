import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ProductsComponent), multi: true }
  ]
})
export class ProductsComponent implements ControlValueAccessor {
  @Input() products!: Array<Product>;
  obj: any;
  propagateChange = (_: any) => { };
  // propagate the new value 

  selectProduct(product: Product) {
    this.obj = product;
    this.propagateChange(this.obj);
  }

  getStyleForSelectedProduct(product: Product) {
    return { selected: this.obj && this.obj.id === product.id }
  }

  writeValue(obj: any): void {
    if (obj) this.obj = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(): void { }
}
