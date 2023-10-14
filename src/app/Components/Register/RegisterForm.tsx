import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import SelectInput from './RegisterSelectInput';
import { useState } from 'react';
import { RegisterRepartidor } from './RegisterRepartidor/RegisterRepartidor';
import RegisterSelectInputCiudad from "./RegisterSelectInputCiudad";
import { RegisterLocal } from "./RegisterLocal/RegisterLocal";

type FormType = {
  nombre: string,
  email: string;
  phone: string;
  password: string,
  ciudad: string,
  rol: string;
};

const schema = yup
  .object({
    nombre: yup.string()
      .required("por favor ingresa su nombre"),
    email: yup.string()
      .required("Por favor ingrese su correo electrónico")
      .email()
      .max(100, "Máximo 100 caracteres para su correo electrónico."),
    phone: yup.string()
      .required("Por favor ingrese su número de teléfono")
      .min(9, "Su número debe tener al menos 9 caracteres")
      .max(15, "Máximo 30 caracteres para su número de teléfono."),
    password: yup.string()
      .required("Por favor ingrese su contraseña")
      .min(5, "Este campo debe tener al menos 5 caracteres")
      .max(30, "Este campo debe tener un máximo de 30 caracteres"),
    ciudad: yup
      .string()
      .required("Debe seleccionar una opción")
      .default("Misiones"),
    rol: yup
      .string()
      .required("Debe seleccionar una opción")
      .default("Cliente")
  })
  .required("Este campo es obligatorio.");

export default function RegisterForm() {

  const [rol, setRol] = useState({ type: "Cliente" });
  const [ciudad, setCiudad] = useState({ city: "Misiones" })
  const [formValue, setFormValue] = useState(false);
  const [data, setData] = useState<FormType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema)
  })


  function handleSelectChange(value: string) {
    setRol({ type: value });
  }

  function handleSelectChangeCiudad(value: string) {
    setCiudad({ city: value })
  }

  const onSubmit = handleSubmit((information) => {
    information.rol = rol.type
    information.ciudad = ciudad.city
    setFormValue(true)
    setData(information)
    console.log(information);
  })

  return (
    <div className="max-w-xl w-full bg-base-100">

      <form className={formValue === false ? `flex flex-col gap-4 w-full items-center` : "hidden"} onSubmit={onSubmit}>
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Registrate para comenzar 🍕</h3>
        </div>
        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su nombre / nombre de local</label>
          </div>
          <input
            id="name"
            className="input input-bordered input-primary w-full"
            type="name"
            {...register("nombre")}
            name="nombre"
            placeholder="nombre"
          />
          {errors.nombre?.message ? <p className="h-3 text-red-500">{errors.nombre?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su Email</label>
          </div>
          <input
            id="email"
            className="input input-bordered input-primary w-full"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          {errors.email?.message ? <p className="h-3 text-red-500">{errors.email?.message}</p> : <p className="h-3"></p>}
        </div>



        <div className="w-full">
          <div className="block">
            <label htmlFor="">Ingrese su numero de telefono</label>
          </div>
          <input
            id="tel"
            className="input input-bordered input-primary w-full"
            type="tel"
            {...register("phone")}
            name="phone"
            placeholder="Phone"
          />
          {errors.phone?.message ? <p className="h-3 text-red-500">{errors.phone?.message}</p> : <p className="h-3"></p>}
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <label htmlFor="">Ingrese su contraseña</label>
          </div>
          <input
            id="password"
            className="input input-bordered input-primary w-full"
            type="password"
            {...register("password")}
            name="password"
            placeholder="contraseña"
          />
          {errors.password?.message ? <p className="h-3 text-red-500">{errors.password?.message}</p> : <p className="h-3"></p>}
        </div>


        <RegisterSelectInputCiudad
          onSelectChange={handleSelectChangeCiudad}
        />

        <SelectInput
          onSelectChange={handleSelectChange}
        />

        <button type="submit" className="btn btn-primary w-full">Continuar</button>

      </form>

      {data?.rol === "Repartidor" ? <RegisterRepartidor datosGenerales={data} />
        :
        data?.rol === "Negocio" ? <RegisterLocal datosGenerales={data} />
          :
          null
      }
    </div>
  )
}


