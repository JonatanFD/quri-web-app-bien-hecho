import { Profile } from './profile.entity';

export class User {
    id: string;
    name: string;
    email: string;
    token: string;
    profile: Profile;
    rol: string;

    constructor(
        id: string,
        name: string,
        email: string,
        token: string,
        firstName: string,
        rol: string,
        lastName: string,
        gender: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.token = token;
        this.profile = new Profile(email, firstName, lastName, gender);
        this.rol = rol;
    }
}
