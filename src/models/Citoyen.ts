import { Zone } from "./Zone";

export class Citoyen {
    constructor(
        public prenom:string,
        public nom:string,
        public zone:Zone,
        public is_adult:boolean
    ) {}
}
