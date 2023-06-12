import axios from "axios";
import { DEV_URL } from "../@type/api.type";

export const getProductsByCategory = async (id:number) : Promise<product[]> => {
    var response = await axios.get<product[]>(`${DEV_URL}/product-category/${id}`);
    return response.data;
}