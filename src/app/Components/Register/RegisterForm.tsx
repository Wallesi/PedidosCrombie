import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button, Card, Label, TextInput } from 'flowbite-react';
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
    <Card className="max-w-5xl w-full">

      <form className={formValue === false ? `flex flex-col gap-4` : "hidden"} onSubmit={onSubmit}>
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Registrate para comenzar 🍕</h3>
        </div>

        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Ingrese su nombre / nombre de local"
          />
        </div>
        <TextInput
          id="name"
          className="h-16 mt-5 drop-shadow-lg"
          type="name"
          {...register("nombre")}
          name="nombre"
          placeholder="nombre"
        />
        {errors.nombre?.message ? <p className="h-3 text-red-500">{errors.nombre?.message}</p> : <p className="h-3"></p>}

        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Ingrese su Email"
          />
        </div>
        <TextInput
          id="email"
          className="h-16 mt-5 drop-shadow-lg"
          type="email"
          {...register("email")}
          name="email"
          placeholder="Email"
        />
        {errors.email?.message ? <p className="h-3 text-red-500">{errors.email?.message}</p> : <p className="h-3"></p>}


        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phone"
              value="Ingrese su numero de telefono"
            />
          </div>
          <TextInput
            id="tel"
            className="mt-5 pb-0 drop-shadow-lg"
            type="tel"
            {...register("phone")}
            name="phone"
            placeholder="Phone"
          />
        </div>
        {errors.phone?.message ? <p className="h-3 text-red-500">{errors.phone?.message}</p> : <p className="h-3"></p>}

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Ingrese su contraseña"
            />
          </div>
          <TextInput
            id="password"
            className="h-16 mt-5 drop-shadow-lg"
            type="password"
            {...register("password")}
            name="password"
            placeholder="contraseña"
          />
        </div>
        {errors.password?.message ? <p className="h-3 text-red-500">{errors.password?.message}</p> : <p className="h-3"></p>}

        <RegisterSelectInputCiudad
          onSelectChange={handleSelectChangeCiudad}
        />

        <SelectInput
          onSelectChange={handleSelectChange}
        />

        <Button type="submit" color="purple">Continuar</Button>

      </form>

      {data?.rol === "Repartidor" ? <RegisterRepartidor datosGenerales={data} /> 
      :
      data?.rol === "Negocio" ? <RegisterLocal datosGenerales={data} /> 
      :
      null  
      }
    </Card>
  )
}


