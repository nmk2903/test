import axios from "axios";
import { DEV_URL } from "../@type/api.type";

export const getAllCategories = async () : Promise<category[]> => {
    var response = await axios.get<category[]>(`${DEV_URL}/category`);
    return response.data;
}

