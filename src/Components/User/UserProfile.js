import Feed from '../Feed/Feed';
import React from 'react';

const UserProfile = ({ id }) => {

  return (
    <section className="container mainSection">
      <h1 className="title">{id}</h1>
      <Feed user={id} />
    </section>
  );
};

export default UserProfile;