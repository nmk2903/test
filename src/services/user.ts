import { API_ENDPOINT } from "../@type/api.type";
import { HttpClient } from "../Models/http-client/http-client";
import { HttpRequestParamsInterface } from "../Models/http-client/http-request-params.interface";

class UserService {
    public getUser() {
        const params: HttpRequestParamsInterface = {
            requiresToken: true,
            url: `${API_ENDPOINT}/auth/user-profile`,
        };
        return HttpClient.get(params);
    }
}

export default new UserService();