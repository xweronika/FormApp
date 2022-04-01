import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open: boolean = false;
  public title: string = "Wybór Produktów";
  public form: FormGroup;
  public products: Array<Product> =
    [{ id: 1, name: 'Produkt 1', description: 'Produkt 1 - najlepszy' },
    { id: 2, name: 'Produkt 2', description: 'Produkt 2 - najlepszy' },
    { id: 3, name: 'Produkt 3', description: 'Produkt 3 - najlepszy' },
    { id: 4, name: 'Produkt 4', description: 'Produkt 4 - najlepszy' },
    { id: 5, name: 'Produkt 5', description: 'Produkt 5 - najlepszy' },
    { id: 6, name: 'Produkt 6', description: 'Produkt 6 - najlepszy' }];

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
