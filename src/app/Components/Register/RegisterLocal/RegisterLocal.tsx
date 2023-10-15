import React from 'react'
import RegisterFormLocal from './RegisterFormLocal'
import { User } from '@/app/types/User'


export const RegisterLocal = ({datosGenerales}:{datosGenerales: User}) => {
  return (
        <div className='h-full'>
            <RegisterFormLocal datosGenerales={datosGenerales}/>
        </div>
  )
}
