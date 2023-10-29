export class Empleado{
    name:string;
    lastName:string;
    document:string;
    address:string;
    phone:string;

    constructor(name:string, lastName:string, document:string, address:string, phone:string){
        this.name = name;
        this.lastName = lastName;
        this.document = document;
        this.address = address;
        this.phone = phone;
    }
}
