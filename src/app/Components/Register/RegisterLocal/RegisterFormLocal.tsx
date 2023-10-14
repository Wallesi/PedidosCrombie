'use client';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import RegisterSelectInputLocal from './RegisterSelectInputLocal';
import { useState } from 'react';

type NegocioType = {
  descripcion: string,
  tipoNegocio: string
}

type FormType = {
  nombre: string,
  email: string;
  phone: string;
  password: string,
  ciudad: string,
  rol: string;
};

const schemaNegocio = yup
  .object({
    descripcion: yup
      .string()
      .required("por favor ingresa una descripcion")
      .min(5, "La descripcion debe contener un minimo 5 digitos")
      .max(300, "La descripcion debe contener maximo 300 digitos"),
    tipoNegocio: yup
      .string()
      .required("Debes seleccionar una vehiculo")
      .default("Restaurante")
  })
  .required();

export default function RegisterFormLocal({ datosGenerales }: { datosGenerales: FormType }) {

  const [negocioSeleccionado, setNegocioSeleccionado] = useState("Restaurante")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NegocioType>({
    resolver: yupResolver(schemaNegocio)
  })

  const funcionTipoNegocioSeleccionado = (n: string) => {
    setNegocioSeleccionado(n)
  }

  const onSubmit = handleSubmit(async (information) => {
    information.tipoNegocio = negocioSeleccionado;
    console.log({ ...datosGenerales, ...information });
  });

  return (
    <div className="w-full">
      <form className="flex flex-col items-center gap-4" onSubmit={onSubmit}>
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Ingrese datos de su Negocio <br /> para continuar 🏪🍕</h3>
        </div>
        <div className="w-full">
          <div className="block">
            <label>Ingrese una descripcion para su Negocio</label>
          </div>
          <input
            type="text"
            placeholder="Negocio de comida rapida"
            className="input input-bordered input-primary w-full"
            {...register("descripcion")}
          />
          {errors.descripcion?.message ? <p className="h-3 text-red-500">{errors.descripcion?.message}</p> : <p className="h-3"></p>}
        </div>


        <RegisterSelectInputLocal onSelectChange={funcionTipoNegocioSeleccionado} />

        <button className="btn btn-primary w-full" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  )
}


