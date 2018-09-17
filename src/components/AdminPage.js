import React from 'react';
import KegList from './KegList';

const AdminPage = () => (
  <div>
    <button>Add New Keg</button>
    <KegList adminRights={true}/>
  </div>
);

export default AdminPage;