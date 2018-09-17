import React from 'react';

const KegListItem = (props) => {
  
  return(
    <div>
      <h3>{props.keg.name}</h3>
      <p>Brand: {props.keg.brand}</p>
      <p>Price: ${props.keg.price}</p>
      <p>Description: {props.keg.description}</p>
    </div>
  );
}

export default KegListItem;