export class LabelsComponent{
    title = "";
    description = "";

    basicFields = {
        Covered: false,
        Referral: false,
        CoPayInsurance:
          {
            InNetwork: null,
            OutOfNetwork: null
          },
        Limits: null}

    constructor (_title:string, _desc?:string)
    {
        this.title = _title;
        this.description = _desc == null? "": _desc;
    }
}