import axios from "axios";
import { DEV_URL } from "../@type/api.type";

export const getProductById = async (id:number) : Promise<product[]> => {
    var response = await axios.get<product[]>(`${DEV_URL}/products/${id}`);
    return response.data;
}