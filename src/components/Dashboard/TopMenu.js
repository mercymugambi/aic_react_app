import React from 'react';

const TopMenu = ({ user }) => {
  return (
    <div className='bg-blue-950'>
      <div>{user}</div>
      <div>Other Top Menu Items</div>
    </div>
  );
};

export default TopMenu;
