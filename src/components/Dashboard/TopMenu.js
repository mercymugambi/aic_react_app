import React from 'react';

const TopMenu = ({ user }) => {
  return (
    <div className='bg-blue-950'>
      <div>{user}</div>
      <div className='text-primary'>Other Top Menu Items</div>
    </div>
  );
};

export default TopMenu;
