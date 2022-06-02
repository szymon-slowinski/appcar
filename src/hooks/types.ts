
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