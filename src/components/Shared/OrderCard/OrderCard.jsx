import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import useCart from "../../../hooks/useCart";
const OrderCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { users } = useContext(AuthContext);
  const location = useLocation();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    if (users && users.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: users.email,
      };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Done",
              text: "Your Data Inserted Done",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login Now",
        text: "Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Recipes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
