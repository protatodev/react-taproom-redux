import React from 'react';
import KegList from './KegList';

const DashboardPage = () => (
  <div>
    <h1>Dashboard</h1>
    <KegList adminRights={false}/>
  </div>
);

export default DashboardPage;