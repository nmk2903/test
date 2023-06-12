import { LoginPayload, RegisterPayload } from "../@type/auth.type";
import axios, { AxiosRequestConfig } from "axios";
import { API_ENDPOINT, DEV_URL } from "../@type/api.type";
import { HttpRequestParamsInterface } from "../Models/http-client/http-request-params.interface";
import { HttpClient } from "../Models/http-client/http-client";
import { billPayload } from "../@type/bill.type";

class BillService{
    public getAllBills(): Promise<billPayload[]>{
        const params: HttpRequestParamsInterface = {
            requiresToken: false,
            url: `${API_ENDPOINT}/bills`,
        }
        return HttpClient.get(params);
    }
}

export default new BillService();