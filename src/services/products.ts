import { API_ENDPOINT } from "../@type/api.type";
import { HttpClient } from "../Models/http-client/http-client";
import { HttpRequestParamsInterface } from "../Models/http-client/http-request-params.interface";

class ProductService {
    public getProducts() {
        const params: HttpRequestParamsInterface = {
            requiresToken: true,
            url: `${API_ENDPOINT}/products`,
        };
        return HttpClient.get(params);
    }
}

export default new ProductService();