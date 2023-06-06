import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgToken = import.meta.env.VITE_Image_Token;

console.log(imgToken);
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imgUrl = `https://api.imgbb.com/1/upload?key=${imgToken}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgUrl = imgRes.data.display_url;

          const { name, price, category, details } = data;

          const newItem = {
            name,
            price: parseFloat(price),
            category,
            details,
            image: imgUrl,
          };

          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"You can add a item"}
        heading={"Add a Item"}
      ></SectionTitle>
      <div className="w-full px-10">
        <SectionTitle
          subHeading="What's new"
          heading="Add an item"
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue="Pick One"
                className="select select-bordered"
              >
                <option disabled>Pick One</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Dessert</option>
                <option>Desi</option>
                <option>Drinks</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true, maxLength: 50 })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
