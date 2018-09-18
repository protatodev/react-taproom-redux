import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const KegListItem = (props) => {

  return(
    <div>
      {props.adminRights ? <Link to={`/edit/${props.keg.id}`}><h3>{props.keg.name}</h3></Link> : <h3>{props.keg.name}</h3>}
      <p>Brand: {props.keg.brand}</p>
      <p>Price: <span className={props.keg.price > 7 ? 'price-high' : 'price-low'}>${props.keg.price}</span></p>
      <p>Description: {props.keg.description}</p>
      <hr/>
    </div>
  );
}

export default connect()(KegListItem); 