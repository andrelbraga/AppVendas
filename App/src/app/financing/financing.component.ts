import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as _ from "lodash";

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.css']
})

export class FinancingComponent {
  
  /**
   * Constructor Financing
   */
  constructor() { }

   private enviar(data: any) {
    const listA = data.form.value;
    const list = [];

      _.forEach(listA, function(key, value) {
        list.push({
          'item': value,
          'value': key
        });
      });

    console.log(list);
    console.log(data.form.controls);
  }

}
