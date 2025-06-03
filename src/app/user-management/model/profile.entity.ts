export class Profile {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;

    constructor(email: string, firstName: string, lastName: string, gender: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}
