import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const useCart = () => {
  const { users, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  // console.log(users.email);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", users?.email],
    enabled:
      !loading && !!users?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${users?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
