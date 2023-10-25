"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import { Eatable } from "@/app/types/Eatable";

const schemaMenu = yup.object().shape({
  title: yup.string().required("Ingrese un nombre para su menu"),
  description: yup.string().required("Debes Ingresar una descripcion"),
  photo: yup.string(),
  price: yup.string().required("Ingrese el precio del producto"),
  menuType: yup.string(),
  name: yup.string()
});

export default function FormMenu() {
  const [menuType, setmenuType] = useState("SWEET");
  const [image, setImage] = useState("")

  const imageInputRef = useRef(null); // Create a ref for the file input

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const objectURL = URL.createObjectURL(file); // Create a URL for the selected file
    setImage(objectURL); // Set the image state with the URL
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Eatable>({
    resolver: yupResolver(schemaMenu),
  });


  const handleChange = (e: { target: { value: string } }) => {
    if (e.target.value === "dulce") {
      setmenuType("SWEET");
    } else if (e.target.value === "salado") {
      setmenuType("SALTY");
    } else {
      setmenuType("BEBERAGE");
    }
  };

  const onSubmit = handleSubmit(async (information, e: any) => {
    e.preventDefault();
    information.menuType = menuType;
    information.photo = image;

    console.log(information);
    
    
    fetch('https://pedidos-crombie-production.up.railway.app/eatables/2816ab9f-b8e4-4a06-be0e-5d831db94441', {
        method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(information)
        })
  });

  return (
    <div className="w-full max-w-2xl items-center justify-center">
      <form className="flex flex-col items-center gap-4" onSubmit={onSubmit}>
        <div className="block mb-5">
          <label className="font-medium">Nombre del menu</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Hamburguesas con papas"
            {...register("title")}
            name="title"
          />
          {errors.title?.message ? (
            <p className="h-3 text-red-500">{errors.title?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="block mb-5">
          <label className="font-medium">Nombre del alimento</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="Hamburguesa"
            {...register("name")}
            name="name"
          />
        </div>

        <div className="block mb-5">
          <label className="font-medium">Descipcion del menu</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            placeholder="hamburguesa de 200g con queso cheddar y papas fritas"
            {...register("description")}
            name="description"
          />
          {errors.description?.message ? (
            <p className="h-3 text-red-500">{errors.name?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="block mb-5">
          <label className="font-medium">Precio</label>
          <input
            type="number"
            className="input input-bordered input-primary w-full"
            placeholder="2000"
            {...register("price")}
            name="price"
          />
        </div>

        <div className="block mb-5">
          <label className="font-medium">Ingrese una imagen ilustrativa</label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            onChange={handleImageChange} // Handle file input change
            ref={imageInputRef} // Attach the ref to the file input
          />
        </div>

        <div className="block mb-5">
          <label className="font-medium">Ingrese el tipo de comida</label>
          <select
            className="select select-primary w-full"
            onChange={handleChange}
          >
            <option>dulce</option>
            <option>salado</option>
            <option>bebida</option>
          </select>
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Agregar menu
        </button>
      </form>
    </div>
  );
}
