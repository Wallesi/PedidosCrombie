'use client'

import { FormAddTitleAndTypeLocal } from '@/app/Components/FormAddTitleAndTypeLocal/FormAddTitleAndTypeLocal';

const page = () => {

  return (
    <div>
      <h2>Editar datos</h2>
      <FormAddTitleAndTypeLocal typeCrud='UPDATE'/>
    </div>
  )
}

export default page