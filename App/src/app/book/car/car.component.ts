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
      const slug = this.route.snapshot.paramMap.get('slug');
      const id = this.route.snapshot.paramMap.get('id');
    }


}
