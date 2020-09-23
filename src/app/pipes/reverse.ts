import { Pipe, PipeTransform } from '@angular/core';


@Pipe( {   name:'reverse' })

export class Reversepipe implements PipeTransform{
   constructor(){

       }

       transform (input:string){
        let reversed:string="";
        for (let i= input.length-1;i>=0;i--){
             reversed += input.charAt(i)
        }
        console.log(reversed)
        return reversed;
   }
    
}
    