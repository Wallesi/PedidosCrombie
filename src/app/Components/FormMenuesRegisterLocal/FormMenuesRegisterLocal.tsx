'use client'
import React, { useState } from 'react'
import FormMenu from '../FormMenu/FormMenu'
import { useRouter } from "next/navigation";
import { toast } from 'sonner'

export const FormMenuesRegisterLocal = ({id} : {id:string}) => {

    const router = useRouter()

    const [receivedNumber, setReceivedNumber] = useState(0);

    const handleCounter = (value: number) => {
      setReceivedNumber(receivedNumber + value);
    };

    const validatior = () => {
        if(receivedNumber < 3){
            return <FormMenu id={id} counter={handleCounter}/>
        }else{
            toast.success("Registro exitoso")
            router.push("/")
        }
    }

  return (
    <div className='w-full'>
      <h3 className='text-center text-black text-2xl font-medium leading-9 mb-5'>Ingrese al menos 3 menues para continuar</h3>
      <h3 className='text-center text-black text-xl font-medium leading-9'>menu numero {receivedNumber + 1}</h3>
        { validatior()}
    </div>
  )
}
