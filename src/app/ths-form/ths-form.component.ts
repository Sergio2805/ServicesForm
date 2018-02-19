import { Component, OnInit } from '@angular/core';
import { LabelsComponent } from '../labels.component';
import {LabelsService} from '../labels.service'


@Component({
  selector: 'app-ths-form',
  templateUrl: './ths-form.component.html',
  styleUrls: ['./ths-form.component.css']
})
export class ThsFormComponent implements OnInit {

  constructor() { }

  title="Treatment and Health Services";
  description="Fill in the boxes for the services you think you may need.";

  labels : Array<LabelsComponent>;
  service : LabelsService;
  
  ngOnInit() {
    this.service = new LabelsService();
    this.labels = sessionStorage.length > 0? JSON.parse(sessionStorage.getItem("Data")) : this.service.getLabels();
  }

  saveDataInSS(){
    sessionStorage.setItem("Data", JSON.stringify(this.labels))
  }
}