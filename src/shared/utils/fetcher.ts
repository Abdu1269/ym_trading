// import axiosInstance from "@/shared/utils/axios_instance";

// const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

// export default fetcher;
import axiosInstance from "./axios_instance";
import { collectionQueryBuilder } from "./CollectionQueryBuilder";

const fetcher = ({ url, params }: { url: string; params: {} }) => {
  const queryArgs = {
    url,
    method: "get",
    params: params ? collectionQueryBuilder(params) : {},
  };
  return axiosInstance(queryArgs).then((response) => response.data);
};

export default fetcher;
