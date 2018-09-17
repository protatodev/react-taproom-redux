import React from 'react';
import KegForm from './KegForm';
import { connect } from 'react-redux';
import { editKeg, removeKeg, sellPint } from '../actions/keg';

const EditKegPage = (props) => (
  <div>
    <h1>Edit Keg</h1>
    <KegForm
      keg={props.keg}
      onSubmit={keg => {
        props.dispatch(editKeg(props.keg.id), keg);
        props.history.push('/admin');
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeKeg({ id: props.keg.id }));
        props.history.push('/admin');
      }}
    >Remove</button>
    <button
      onClick={() => {
        props.dispatch(sellPint(props.keg.id, props.keg))
      }}
    >Sell Pint</button>
    <p>Pint's left: {props.keg.pints}</p>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    keg: state.find(p => p.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditKegPage);
