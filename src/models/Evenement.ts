import { TypeIncident } from "./TypeIncident";

export class Evenement {
    constructor(
        public date:string,
        public heure:string,
        public typeIncident:TypeIncident,
        public confirmed:number
    ) {}
}
