import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from "lodash";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

    constructor( private route: ActivatedRoute,
                 private router: Router, ) { }

    ngOnInit() {
      let b = null;
      let a = this.route.paramMap
        .switchMap((params: ParamMap) =>
          b = params.get('id'));
          console.log(b);
    }


}
