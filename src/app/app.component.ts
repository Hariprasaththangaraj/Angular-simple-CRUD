import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-simple-crud';
  initialValue = '';
  newData: string[] = [];
  completedData: string[] = [];
  completeDataItem: string[] = [];
  indexData: number | null = null;


  save() {
    if (this.indexData != null) {
      this.newData = this.newData.map((val, i) => {
        if (this.indexData == i) {
          val = this.initialValue;
        }
        return val;
      })
    } else {
      this.newData.push(this.initialValue);
    }
    this.indexData = null;
    this.initialValue = '';
  }

  update(indexData: number) {
    this.indexData = indexData;
    const editData = this.newData.find((val, i) => {
      return indexData == i;
    });
    if (editData)
      this.initialValue = editData;
  }

  delete(indexData: number) {
    this.newData = this.newData.filter((val, i) => {
      return indexData !== i;
    }
    )
  }

  complete(completeData: number) {
    const completeDataItem = this.newData.find((val, i) => {
      return completeData == i;
    })
    this.newData = this.newData.filter((val, i) => {
      return completeData !== i;
    })
    if (completeDataItem)
      this.completeDataItem.push(completeDataItem)
    console.log(this.completeDataItem)
  }
}
