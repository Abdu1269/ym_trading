import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from "axios";

interface AxiosBaseQueryArgs {
  baseUrl: string;
}

interface AxiosQueryArgs {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  headers?: AxiosRequestConfig["headers"];
  params?: AxiosRequestConfig["params"];
  responseType?: ResponseType;
}

const defaultBaseUrl =
  process.env.NEXT_PUBLIC_APP_API ?? "https://mint-1nmg.onrender.com/api";

const axiosBaseQuery = (
  { baseUrl }: AxiosBaseQueryArgs = { baseUrl: defaultBaseUrl },
) => {
  return async ({
    url,
    method,
    data,
    params,
    headers,
    responseType,
  }: AxiosQueryArgs): Promise<{
    data?: unknown;
    error?: { status?: number; data?: unknown };
  }> => {
    const config: AxiosRequestConfig = {
      url: `${baseUrl}${url}`,
      method,
      data,
      params,
      responseType,
      headers: {
        ...headers,
        // "x-api-key": "CO1tfl8xcSbtmQD3054dc1a-301c-45ff-90eb-900b5e67ecc3",
      },
    };

    try {
      const { data }: AxiosResponse = await axios(config);
      return { data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };
};

export default axiosBaseQuery;
