'use client';

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';
import {Address} from "@/app/types/Address"
import SelectInputProvincia from "./SelectInputProvincia";
import SelectInputCiudades from "./SelectFormCiudades";

const schemaAddress = yup.object().shape({
  state: yup.string().required(),
  city: yup.string().required(),
  CP: yup
    .string()
    .required("por favor ingresa un codigo postal")
    .min(1, "Debe ingresar un codigo postal")
    .max(15, "Ese codigo postal es demasiado largo"),
  street: yup
    .string()
    .required("por favor ingresa una calle")
    .min(3, "Debe ingresar una calle valida")
    .max(50, "Esa calle existe?"),
  number: yup.string().required("Ingrese el numero de su calle"),
});

export default function FormAdress() {

  const [provincia, setProvincia] = useState({ provincia: "Misiones" , id: 54})
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>({
    resolver: yupResolver(schemaAddress)
  })

  function handleSelectChangeProvincia(value: any) {
    setProvincia(value)
    console.log(value);
  }

  function handleSelectChangeCiudad(value: string){
    console.log(value);
  }

  const onSubmit = handleSubmit(async (information, e) => {
    e.preventDefault()
    information.state = provincia.provincia;
    console.log(information);
  });

  return (
    <div className="w-full">
      <form className="flex flex-col items-center gap-4" onSubmit={onSubmit}>
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Direccion</h3>
        </div>

      <SelectInputProvincia
          onSelectChange={handleSelectChangeProvincia}
        />

        <SelectInputCiudades onSelectChangeCiudad={handleSelectChangeCiudad} id={provincia.id} />

        <div className="w-full">
          <div className="block">
            <label>Ingrese su codigo postal</label>
          </div>
          <input
            type="text"
            placeholder="3016"
            className="input input-bordered input-primary w-full"
            {...register("CP")}
          />
          {errors.CP?.message ? <p className="h-3 text-red-500">{errors.CP?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label>Ingrese el nombre de su calle</label>
          </div>
          <input
            type="text"
            placeholder="calle 17"
            className="input input-bordered input-primary w-full"
            {...register("street")}
          />
          {errors.street?.message ? <p className="h-3 text-red-500">{errors.street?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label>Ingrese la altura en la cual vive</label>
          </div>
          <input
            type="text"
            placeholder="2578"
            className="input input-bordered input-primary w-full"
            {...register("number")}
          />
          {errors.number?.message ? <p className="h-3 text-red-500">{errors.number?.message}</p> : <p className="h-3"></p>}
        </div>
       
        <button className="btn btn-primary w-full" type="submit">
          adress
        </button>
      </form>
    </div>
  )
}


