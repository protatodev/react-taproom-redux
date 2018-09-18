import React from 'react';
import KegForm from './KegForm';
import { connect } from 'react-redux';
import { addKeg } from '../actions/keg';

const AddKegPage = (props) => (
  <div>
    <div className="jumbotron">
      <h1>Add A New Keg</h1>
    </div>
    <KegForm
      onSubmit={keg => {
        props.dispatch(addKeg(keg));
        props.history.push('/admin');
      }}
    />
  </div>
);

export default connect()(AddKegPage);