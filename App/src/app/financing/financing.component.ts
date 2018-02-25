import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from "lodash";

import { FinancingService } from './financing.service';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.css'],
})

export class FinancingComponent {

  /**
   * Constructor Financing
   */
  constructor(public financingService: FinancingService) { }

   public async enviar(data: any) {
    const listA = data.form.value;

      // await this.financingService.get().subscribe((response) => {
      //   console.log(response);
      // })

      await this.financingService.post(listA)
      .subscribe((response: any) => {
        console.log("Retorno "+ JSON.stringify(response));
        return response;
      });
  }

}
