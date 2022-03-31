import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open: boolean = false;
  public title: string = "Wybór produktów";
  public form: FormGroup;
  public products: Array<Product> = [{ id: 'Bananas', name: '30', description: 'in stock' }, { id: 'Apples', name: '42', description: 'N/A' }, { id: 'Appleas', name: '422', description: 'N/As' }];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ product: '' });
    this.subscribeChanges();
  }

  subscribeChanges() {
    this.form.valueChanges.subscribe(
      result => console.log(result.product)
    );
  }
}
