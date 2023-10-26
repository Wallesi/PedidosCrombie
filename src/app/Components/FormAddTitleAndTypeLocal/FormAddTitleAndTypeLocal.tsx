import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import React, { useState } from "react";
import RegisterSelectInputLocalCategory from "../SelectInputLocalCategory/RegisterSelectInputLocalCategory";
import FormAdress from "../FormDirection/FormAdress";

type localType = {
  localName: string;
  description: string;
  type?: string;
};

const schema = yup.object({
  localName: yup
    .string()
    .required("por favor ingresa el nombre del local")
    .min(3, "minimo 3 caracteres"),
  description: yup
    .string()
    .required("por favor ingresa una descripcion del local")
    .max(50, "maximo 50 caracteres"),
  type: yup.string(),
});

export const FormAddTitleAndTypeLocal = ({ id }: { id: string}) => {
  const [typeLocal, setTypeLocal] = useState<string>("RESTAURANT");
  const [validData, setValidData] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<localType>({
    resolver: yupResolver(schema),
  });

  const handleChange = (value: string) => {
    setTypeLocal(value);
  };

  const onSubmit = handleSubmit (async (information, e) => {
    e?.preventDefault();
    information.type = typeLocal;
    try {
        const response = await fetch(`https://pedidos-crombie-production.up.railway.app/locals/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(information),
        });
        if (response.ok) {
            setValidData(true)
          } 
      } catch (error) {
        console.error("Error en la solicitud fetch:", error);
      }
  });

  return (
    <div className="max-w-xl w-full bg-base-100">
      <form
        className={!validData ? `flex flex-col gap-4 w-full items-center` : "hidden"}
        onSubmit={onSubmit}
      >
        <div>
          <h3 className="text-center text-black text-2xl font-medium leading-9">
            Ingresa algunos datos para continuar 🍕
          </h3>
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese el nombre de su local</label>
          </div>
          <input
            id="localName"
            className="input input-bordered input-primary w-full"
            type="localName"
            {...register("localName")}
            name="localName"
            placeholder="Pizzeria mostachole"
          />
          {errors.localName?.message ? (
            <p className="h-3 text-red-500">{errors.localName?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese una descripcion para su local</label>
          </div>
          <input
            id="description"
            className="input input-bordered input-primary w-full"
            type="description"
            {...register("description")}
            name="description"
            placeholder="Pizzeria numero 1 en el barrio"
          />
          {errors.description?.message ? (
            <p className="h-3 text-red-500">{errors.description?.message}</p>
          ) : (
            <p className="h-3"></p>
          )}
        </div>

        <RegisterSelectInputLocalCategory onSelectChange={handleChange} />

        <button className="btn btn-primary w-full" type="submit">
          Continuar
        </button>
      </form>

      { validData ? <FormAdress id={id} type='LOCAL'/> : null}
    </div>
  );
};
