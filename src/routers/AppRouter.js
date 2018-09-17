import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AdminPage from '../components/AdminPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AddKegPage from '../components/AddKegPage';
import EditKegPage from '../components/EditKegPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={DashboardPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/edit/:id" component={EditKegPage}/>
        <Route path="/create" component={AddKegPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;