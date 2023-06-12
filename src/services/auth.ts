import { LoginPayload, RegisterPayload } from "../@type/auth.type";
import axios, { AxiosRequestConfig } from "axios";
import { API_ENDPOINT, DEV_URL } from "../@type/api.type";
import { HttpRequestParamsInterface } from "../Models/http-client/http-request-params.interface";
import { HttpClient } from "../Models/http-client/http-client";

class AuthService {
    public register(payload: RegisterPayload): Promise<RegisterPayload> {
        const params: HttpRequestParamsInterface = {
            requiresToken: false,
            url: `${API_ENDPOINT}/auth/register`,
            payload: payload,
        };
        return HttpClient.post(params);
    } 
    public login(payload: LoginPayload): Promise<LoginPayload> {
        const params: HttpRequestParamsInterface = {
            requiresToken: false,
            url: `${API_ENDPOINT}/auth/login`,
            payload: payload,
        };
        return HttpClient.post(params);
    }  
    public logout(): Promise<void> {
        const params: HttpRequestParamsInterface = {
            requiresToken: true,
            url: `${API_ENDPOINT}/auth/logout`,
        };
        return HttpClient.post(params);
    } 
}
export default new AuthService();