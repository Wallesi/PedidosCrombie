'use client';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import RegisterSelectInputRepartidor from './RegisterSelectInputRepartidor';
import { useState } from "react";

type RepartidorType = {
  patente: string,
  vehiculo: string
}

type FormType = {
  nombre: string,
  email: string;
  phone: string;
  password: string,
  ciudad: string,
  rol: string;
};

//tipo repartidor
type Repartidor = RepartidorType & FormType;

const schemaRepartidor = yup
  .object({
    patente: yup.string()
      .required("por favor ingresa su patente")
      .min(6, "Esa patente no existe, la patente debe contener 6 digitos")
      .max(6, "Esa patente no existe, la patente debe contener 6 digitos"),
    vehiculo: yup
      .string()
      .required("Debes seleccionar una vehiculo")
      .default("Moto")
  })
  .required();



export default function RegisterFormRepartidor({ datosGenerales }: { datosGenerales: FormType }) {

  const [vehiculoSeleccionado, setvehiculoSeleccionado] = useState({ vehiculo: "Moto" })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RepartidorType>({
    resolver: yupResolver(schemaRepartidor)
  })

  const funcionVehiculoSeleccionado = (v: string) => {
    setvehiculoSeleccionado({ vehiculo: v })
  }

  const onSubmit = handleSubmit(async (information) => {
    information.vehiculo = vehiculoSeleccionado.vehiculo;
    console.log({ ...datosGenerales, ...information });
  });

  return (
    <div className='w-full'>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full items-center">
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Ingrese datos de su vehiculo para continuar 🛵🍕</h3>
        </div>
        
        <div className="w-full">
          <div className="block">
           <label htmlFor="">Numero de Patente</label>
          </div>
          <input
            id="patente"
            className="input input-bordered input-primary w-full"
            type="text"
            {...register("patente")}
            name="patente"
            placeholder="patente"
          />
          {errors.patente?.message ? <p className="h-3 text-red-500">{errors.patente?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
        <RegisterSelectInputRepartidor onSelectChange={funcionVehiculoSeleccionado} /> 
        </div>

        <button className="btn btn-primary w-full" color='purple' type="submit">
          Registrate
        </button>
      </form>
    </div>
  )
}


