import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const useCart = () => {
  const { users } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", users?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${users?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
