import React from 'react';
import KegList from './KegList';
import { Link } from 'react-router-dom';

const AdminPage = () => (
  <div>
    <div className="jumbotron">
      <h1>Admin Section</h1>
      <Link to="/create">
       <button className="btn btn-success">Add New Keg</button>
      </Link>
    </div>
    <KegList adminRights={true} />
  </div>
);

export default AdminPage;