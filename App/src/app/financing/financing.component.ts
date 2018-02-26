import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


import { FinancingService } from './financing.service';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.css'],
})

export class FinancingComponent {
  @BlockUI() blockUI: NgBlockUI;
  /**
   * Constructor Financing
   */
  constructor(public financingService: FinancingService) { }

   public async enviar(data: any) {
    const listA = data.form.value;

      // await this.financingService.get().subscribe((response) => {
      //   console.log(response);
      // })
      this.blockUI.start('Enviando...'); // Start blocking
      await this.financingService.post(listA)
      .subscribe((res: any) => {

        if (res) {
          this.blockUI.stop();
        }

        return res;
      });
  }

}
