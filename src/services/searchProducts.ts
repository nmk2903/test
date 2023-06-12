import axios from "axios";
import { DEV_URL } from "../@type/api.type";

export const getSearchProducts = async (keyword:string, page:number|null) : Promise<any> => {
    var response = await axios.get<any>(`${DEV_URL}/product/search/?keyword=${keyword}&page=${page}`);
    return response.data;
}