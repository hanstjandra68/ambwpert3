import { Injectable } from '@angular/core';
import { Data } from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {
  allData: Data[] = [
    {
      judul: "andaikan",
      isi: "aku bersinar",
      tanggal: "19-12-2000",
      status: "favorite",
      index: 0
    }
  ];
  constructor() { }
  
  public initdata(data: Data[]) {
    this.allData = data;
  }
  saveData(note: Data) {
    this.allData.push(note);
  }
  editStatus(index: number) {
    this.allData[index].status = "favorite";
  }
  getStatus(index: number) {
    return this.allData[index].status;
  }
}
