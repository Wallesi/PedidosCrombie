"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import FormAdress from "../FormDirection/FormAdress";
import FormVehicle from "../FormVehicle/FormVehicle";
import Link from "next/link";

type loginSchema = {
  email: string;
  password: string;
};

type dataType = {
  token: string,
  isValid: number,
  type: string,
  idRol:string
}

const schemaLogin = yup.object({
  email: yup.string().required("Ingrese un correo"),
  password: yup.string().required("Ingrese una contraseña"),
});

export default function LoginForm() {
  const [data, setData] = useState<dataType>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchema>({
    resolver: yupResolver(schemaLogin)
  })
  
  const onSubmit = handleSubmit(async (information, e) => {
    e?.preventDefault();
    try {
      const response = await fetch("https://pedidos-crombie-production.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(information),
      });
      if (response.ok) {
        setData(await response.json());
      } 
    } catch (error) {
      console.error("Error en la solicitud fetch:", error);
    }
  });

  const dataRecived = () => {
    if (data?.isValid == 1 && data?.type === 'CLIENT'){
      return <Link href="/Delivery"/>
    }

    if(data?.isValid == -1 && data?.type === 'CLIENT'){
      return <FormAdress id={data?.idRol} type='CLIENT'/> 
    }

    if(data?.isValid == -1 && data?.type === 'LOCAL'){   
      return <FormAdress id={data?.idRol} type='LOCAL'/> 
    }

    if(data?.isValid == -1 && data?.type === 'DELIVERY'){   
      return <FormVehicle id={data?.idRol}/> 
    }

    return null
  }

  return (
    <div className="max-w-xl w-full">
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div>
          <h3 className="text-center text-black text-2xl font-medium leading-9">
            Inicia sesion para empezar 🍕
          </h3>
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <label htmlFor="">Ingrese su email</label>
          </div>
          <input
            className="input input-bordered input-primary w-full"
            id="email"
            placeholder="johndoe@gmail.com"
             type="email"
            {...register("email")}
            name="email"
          />
          {errors.email?.message ? <p className="h-3 text-red-500">{errors.email?.message}</p> : <p className="h-3"></p>}
        </div>
        <div className="w-full">
          <div className="mb-2 block">
            <label htmlFor="">ingrese su contraseña</label>
          </div>
          <input
            className="input input-bordered input-primary w-full"
            id="password"
            type="password"
            {...register("password")}
            name="password"
            placeholder="contraseña"
          />
          {errors.password?.message ? <p className="h-3 text-red-500">{errors.password?.message}</p> : <p className="h-3"></p>}
        </div>

        <button color="purple" type="submit" className="btn btn-primary w-full">
          Ingresar
        </button>

        
      </form>

      {data ? dataRecived() : null} 

    </div>
  );
}
