import React from 'react';
import KegForm from './KegForm';
import { connect } from 'react-redux';
import { editKeg, removeKeg, sellPint } from '../actions/keg';

const EditKegPage = (props) => (
  <div>
    <div className="jumbotron">
      <h1>Edit Keg</h1>
      <div className="pints-footer">
        <button
          onClick={() => {
            props.dispatch(removeKeg({ id: props.keg.id }));
            props.history.push('/admin');
          }}
          className="btn btn-danger"
        >Remove</button>
        <button
          onClick={() => { if (props.keg.pints > 0) props.dispatch(sellPint(props.keg.id, props.keg)) }}
          className="btn btn-success"
        >Sell Pint</button>
        <p>PINTS REMAINING: <span className={props.keg.pints > 100 ? 'pints' : props.keg.pints > 50 ? 'pints-100' : props.keg.pints > 10 ? 'pints-50' : 'pints-10'}>{props.keg.pints}</span></p>
      </div>
    </div>
    <KegForm
      keg={props.keg}
      onSubmit={keg => {
        props.dispatch(editKeg(props.keg.id, keg));
        props.history.push('/admin');
      }}
    />
    
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    keg: state.find(p => p.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditKegPage);



// if (props.keg.pints > 100) {
//   return 'pints';
// } else if (props.keg.pints > 50) {
//   return 'pints-100';
// } else if (props.keg.pints > 10) {
//   return 'pints-50';
// } else {
//   return 'pints-10';
// }

//props.keg.pints > 100 ? 'pints' : props.keg.pints > 50 ? 'pints-100' : props.keg.pints > 10 ? 'pints-50' : 'pints-10';