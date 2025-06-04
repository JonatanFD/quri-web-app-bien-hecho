export class Profile {
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;

    constructor(name:string, email: string, firstName: string, lastName: string, gender: string) {
        this.name = name;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}
