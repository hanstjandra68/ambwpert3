import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Data } from "../data.model";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.page.html',
  styleUrls: ['./halaman3.page.scss'],
})
export class Halaman3Page implements OnInit {
  semuaData: Data[] = [
    {
      judul: "andaikan",
      isi: "aku bersinar",
      tanggal: "19-12-2000",
      status: "favorite",
      index: 0
    }
  ];
  tempData: Data;
  status_ok = "favorite";
  constructor(private router: Router, public globalVar: GlobalvarService) {
    this.semuaData.length = 0;
    for (let i = 0; i < this.globalVar.allData.length; i++) {
      if (this.globalVar.allData[i].status == this.status_ok) {
        this.semuaData.push(this.globalVar.allData[i]);
      }
    }
  }

  ngOnInit() {
    this.semuaData.length = 0;

    for (let i = 0; i < this.globalVar.allData.length; i++) {
      if (this.globalVar.allData[i].status == this.status_ok) {
        this.semuaData.push(this.globalVar.allData[i]);
      }
    }
  }

}
