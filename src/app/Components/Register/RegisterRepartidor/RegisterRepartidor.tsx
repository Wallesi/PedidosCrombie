import React from 'react'
import RegisterFormRepartidor from './RegisterFormRepartidor'
import { User } from '@/app/types/User'


export const RegisterRepartidor = ({datosGenerales} : { datosGenerales: User }) => {
  return (
        <div className='h-full'>
            <RegisterFormRepartidor datosGenerales={datosGenerales}/>
        </div>
  )
}
