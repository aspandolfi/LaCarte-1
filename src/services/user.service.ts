import { Injectable } from "@angular/core";
import { Api } from "../providers/api/api";
import { User } from "../class/User";

@Injectable()
export class UserService {
    constructor(private restApi: Api) {

    }

    doLogin(userLogin: UserLogin) {
        return this.restApi.post("user/token", userLogin)
            .map(res => res);
    }

    salvar(usuario: User) {
        return this.restApi.post("user", usuario)
            .map(res => res);
    }
}

interface UserLogin {
    email: string;
    senha: string;
}