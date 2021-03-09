import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Data } from "../data.model";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.page.html',
  styleUrls: ['./halaman2.page.scss'],
})
export class Halaman2Page implements OnInit {
  semuaData: Data[];
  tempData: Data;
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData = this.globalVar.allData;
  }

  ngOnInit() {
    this.semuaData = this.globalVar.allData;
  }

  favorite(index: number) {
    this.globalVar.editStatus(index);
  }
}
