import React, { useState } from 'react';
import HomeAboutMe from './HomeAboutMe';

const Contact = () => {
  const [name, setName] = useState('Sean');

  return (
    <div>
      <HomeAboutMe
        name={name}
        changeName={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default Contact;
