import { Injectable } from '@angular/core';
import { LabelsComponent } from './labels.component';

@Injectable()
export class LabelsService {


  constructor() { }

  getLabels (){
      return [
        new LabelsComponent("Primary care visit", ""),
        new LabelsComponent("Specialist visits", ""),
        new LabelsComponent("Emergency room or urgent care", ""),
        new LabelsComponent("Hospital care", ""),
        new LabelsComponent("Prescription medicines", "(ex. mammogram, colonoscopy)"),
        new LabelsComponent("Preventive screenings", ""),
        new LabelsComponent("Imaging", "(ex. X-ray, MRI, CT scan, PET scan)"),
        new LabelsComponent("Surgery", "(including reconstructive)"),
        new LabelsComponent("Radiation therapy", ""),
        new LabelsComponent("Chemotherapy", "(oral, IV and injectable)"),
        new LabelsComponent("Second opinion", ""),
        new LabelsComponent("Care plan ", "(Can I get a written cancer care plan from my doctor?)"),
        new LabelsComponent("Clinical trials", ""),
        new LabelsComponent("Mental health services", "(ex. distress screening, psychotherapy)"),
        new LabelsComponent("Palliative and supportive care", "(ex. care for nausea, pain, fatigue and other side effects)"),
        new LabelsComponent("Physical therapy", ""),
        new LabelsComponent("Homehealth care", ""),
        new LabelsComponent("Medical equipment", "(ex. compression garments, cane)"),
        new LabelsComponent("Genetic / biomarker testing and counseling", ""),
        new LabelsComponent("Fertility preservation", ""),
        new LabelsComponent("Transplants", "(ex. stem cell and bone marrow)"),
        new LabelsComponent("Preventive treatments", "(ex. preventive mastectomy)"),
        new LabelsComponent("Respite care", ""),
        new LabelsComponent("Hospice care", "")];
  };

  

}
