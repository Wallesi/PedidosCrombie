import React from 'react'
import RegisterFormLocal from './RegisterFormLocal'

type FormType = {
  nombre: string,
  email: string;
  phone: string;
  password: string,
  ciudad:string,
  rol: string;
};

export const RegisterLocal = ({datosGenerales}:{datosGenerales: FormType}) => {
  return (
        <div className='h-full'>
            <RegisterFormLocal datosGenerales={datosGenerales}/>
        </div>
  )
}
