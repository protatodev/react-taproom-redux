import React from 'react';
import { connect } from 'react-redux';

const KegForm = (props) => {
  
  return(
    <div>
      <form>
        <input type="text" placeholder="Name the new keg"/>
        <input type="text" placeholder="Price the new keg"/>
        <input type="text" placeholder="Enter a brand"/>
        <textarea placeholder="Enter a description for the new keg"></textarea>
        <button type="submit">Add Keg</button>
      </form>
    </div>
  );
};

export default connect()(KegForm);