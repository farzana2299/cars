import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonStructure";

export const registerApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/user/register`, body, "")
  }
  export const loginApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/user/login`, body, "")
  }
  export const categoryApi = async (body) => {
    return await commonApi('POST', `${BASE_URL}/user/category`, body, "")
  }