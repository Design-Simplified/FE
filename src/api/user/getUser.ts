import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/users";
import { ApiResponse } from "@/types/api";

export default function getUser() {
  const {
    data: getUserData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<ApiResponse<User>, Error>({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await api.get<ApiResponse<User>>("/users/me");
      return response.data;
    },
    enabled: false,
  });
  return { getUserData, isLoading, isError, error, refetch };
}
