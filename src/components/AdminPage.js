import React from 'react';
import KegList from './KegList';
import { Link } from 'react-router-dom';

const AdminPage = () => (
  <div>
    <Link to='/create'><button>Add New Keg</button></Link>
    <KegList adminRights={true}/>
  </div>
);

export default AdminPage;