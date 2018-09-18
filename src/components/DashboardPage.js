import React from 'react';
import KegList from './KegList';

const DashboardPage = () => (
  <div>
    <div className="jumbotron">
      <h1>Dashboard</h1>
      <h3>Here is what we currently have on tap!</h3>
    </div>
    <KegList adminRights={false} />
  </div>
);

export default DashboardPage;