import React from 'react';
import KegForm from './KegForm';
import { connect } from 'react-redux';
import { addKeg } from '../actions/keg';

const AddKegPage = (props) => (
  <div>
    <h1>Add A New Keg</h1>
    <KegForm
      onSubmit={keg => {
        props.dispatch(addKeg(keg));
        props.history.push('/admin');
      }}
    />
  </div>
);

export default connect()(AddKegPage);