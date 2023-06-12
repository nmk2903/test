import { LoginPayload, RegisterPayload } from "../@type/auth.type";
import axios, { AxiosRequestConfig } from "axios";
import { API_ENDPOINT, DEV_URL } from "../@type/api.type";
import { HttpRequestParamsInterface } from "../Models/http-client/http-request-params.interface";
import { HttpClient } from "../Models/http-client/http-client";
import { userComment } from "../@type/comment.type";

class Comment {
    public getByProduct(payload: number): Promise<userComment[]> {
        const params: HttpRequestParamsInterface = {
            requiresToken: false,
            url: `${API_ENDPOINT}/auth/user_comment/${payload}`,
            payload: payload,
        };
        return HttpClient.get(params);
    } 
    // public login(payload: LoginPayload): Promise<LoginPayload> {
    //     const params: HttpRequestParamsInterface = {
    //         requiresToken: false,
    //         url: `${API_ENDPOINT}/auth/login`,
    //         payload: payload,
    //     };
    //     return HttpClient.post(params);
    // }  
}
export default new Comment();