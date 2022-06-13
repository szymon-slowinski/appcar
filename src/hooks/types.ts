
export interface User {
    email: string ;
    password: string ;
}

export interface CreateUser extends User {
    name: string ;
    surname: string ;
}

export interface NewUser {
    id: string ;
    name: string ;
    surname: string ;
}

export interface UserData {
    name: string,
    surname: string;
}

export interface CarProperties{
    make:string,
    model:string,
    production_year: string,
    registration_number:string,
    vehicle_mileage:number,
    damage_history:string,
    car_review: string    
}

export interface CreateCar extends CarProperties {
    make:string,
    model:string,
    production_year: string,
    registration_number:string,
    vehicle_mileage:number,
    damage_history:string,
    car_review: string
}