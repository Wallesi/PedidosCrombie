'use client'

import { FormAddTitleAndTypeLocal } from '@/app/Components/FormAddTitleAndTypeLocal/FormAddTitleAndTypeLocal';

const page = () => {

  return (
    <div className='flex mx-auto justify-center align-middle items-center'>
      <FormAddTitleAndTypeLocal typeCrud='UPDATE'/>
    </div>
  )
}

export default page