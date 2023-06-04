import React from "react";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const handleDelete = (item) => {
    console.log(item);
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: </h3>
        <h3 className="text-3xl">Total Price: ${""}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {cart.map((item, index) => ( */}
            <tr key={"item._id"}>
              <td>{"index + 1"}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      // src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{"item.name"}</td>
              <td className="text-end">${"item.price"}</td>
              <td>
                <button
                  //   onClick={() => handleDelete(item)}
                  className="btn btn-ghost bg-red-600  text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
