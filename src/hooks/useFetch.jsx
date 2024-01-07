import { useQuery } from "@tanstack/react-query";
import { useGetData } from "../Service/api";

export const useApi = () => {
  const { data: isLoading, error, data } = useQuery(["data"], useGetData);

  return { isLoading, error, data };
};
