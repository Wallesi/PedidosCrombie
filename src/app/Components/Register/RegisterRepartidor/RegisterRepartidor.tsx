import React from 'react'
import RegisterFormRepartidor from './RegisterFormRepartidor'

type FormType = {
  nombre: string,
  email: string;
  phone: string;
  password: string,
  ciudad:string,
  rol: string;
};

export const RegisterRepartidor = ({datosGenerales} : { datosGenerales: FormType }) => {
  return (
        <div className='h-full'>
            <RegisterFormRepartidor datosGenerales={datosGenerales}/>
        </div>
  )
}
