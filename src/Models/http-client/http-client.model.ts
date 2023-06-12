import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { HttpRequestParamsInterface } from "./http-request-params.interface";
import { HttpClientInterface } from "./http-client.interface";
import { StorageKey } from "../../constants/StorageKey";
import { DEFAULT_TOKEN_KEY } from "../../@type/api.type";

type HttpClientOption = CreateAxiosDefaults;
/**
 * @name HttpClientModel
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientModel implements HttpClientInterface {
  private axios: AxiosInstance;
  private DEFAULT_CONTENT_TYPE = "application/json";

  private getToken(): string {
    const ACCESS_TOKEN = localStorage.getItem(StorageKey.ACCESS_TOKEN);
    const VALID_TOKEN_KEY = ACCESS_TOKEN || DEFAULT_TOKEN_KEY;
    return VALID_TOKEN_KEY;
  }

  constructor(option?: HttpClientOption) {
    this.axios = axios.create(option);
    // OPTIONAL for now: Add request interceptor to handle errors or other things for each request in one place
  }

  public get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken && options.headers) {
        const token = this.getToken();
        options.headers.Authorization = `Bearer ${token}`;
      }

      this.axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse | any) => {
          reject(error);
        });
    });
  }

  public post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload, contentType } = parameters;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken && options.headers) {
        const token = this.getToken();
        options.headers.Authorization = `Bearer ${token}`;
        options.headers["Content-Type"] = contentType
          ? contentType
          : this.DEFAULT_CONTENT_TYPE;
      }

      this.axios
        .post(url, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse | any) => {
          reject(error);
        });
    });
  }

  public delete<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;

      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken && options.headers) {
        const token = this.getToken();
        options.headers.Authorization = `Bearer ${token}`;
      }

      this.axios
        .delete(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse | any) => {
          reject(error);
        });
    });
  }
}
