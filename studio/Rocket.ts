import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    function  sumMass(item: Payload[]) : number {
        let sum: number = 0;
        for(var i of items){
            sum += i.massKg;
        }
        return sum;
    } 

    currentMassKg(): number {
        let overallSum: number = 0
        for (var i of this.astronauts){
            overallSum += a.massKg;
        }
        for (var c of this.cargoItems){
            overallSum += c.massKg;
        }
        return overallSum;
    }

    canAdd(item: Payload): boolean {
        return.this.currrentMassKg() + item.massKg <= this.totalCapacityKgl
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
           this.cargoItems.push(cargo); 
        }  else {
            return false;
        }

    addAstronaut(a: Astronaut): boolean{
            if(this.canAdd(a)){
               this.astronauts.push(a); 
            }  else {
                return false;
            }
    
    }
}


