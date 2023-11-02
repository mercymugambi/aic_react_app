import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: 'blue', width: '200px', height: '100vh' }}>
      <ul class="text-white-600">
        <li>Users</li>
        <li>Devotions</li>
        <li>Events</li>
        <li>Members</li>
        <li>Leadership Positions</li>
      </ul>
    </div>
  );
};

export default Sidebar;
