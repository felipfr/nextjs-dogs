'use client'
import Feed from '../Feed/Feed';
import React from 'react';
import Head from '../Helper/Head';

const UserProfile = ({ id }) => {

  return (
    <>
    <Head title={id} />
    <section className="container mainSection">
      <h1 className="title">{id}</h1>
      <Feed user={id} />
    </section>
    </>
  );
};

export default UserProfile;