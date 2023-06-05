import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { users } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${users?.email}`);
      console.log("is admin", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
