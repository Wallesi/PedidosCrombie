'use client'

import { FormAddTitleAndTypeLocal } from '@/app/Components/FormAddTitleAndTypeLocal/FormAddTitleAndTypeLocal';
import { parseCookies } from 'nookies';

const page = () => {
  const cookies = parseCookies();
  const userId = cookies.userId;

  return (
    <div>
      <h2>Editar datos</h2>
      <FormAddTitleAndTypeLocal id={userId} typeCrud='UPDATE'/>
    </div>
  )
}

export default page