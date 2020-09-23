export class Customer{
    name:string;
    id:number;
    balance:number;
    
    constructor(id: number ,name : string , balance:number){
      this.name =name;
      this.balance=balance;
      this.id=id;
    }
  
    getCustomerName():string{
      return this.name;
    }
  
    getBalance():number{
      return this.balance;
    }
  
  }
  