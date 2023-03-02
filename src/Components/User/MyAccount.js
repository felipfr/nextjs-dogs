'use client'
import Feed from '../Feed/Feed';
import React from 'react'
import { UserContext } from '@/src/UserContext';

const MyAccount = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
    {data ? <Feed user={data.id} /> : <Feed />}
    </>
  )
}

export default MyAccount