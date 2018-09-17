import React from 'react';
import KegListItem from './KegListItem';
import { connect } from 'react-redux';

const KegList = (props) => {

  return(
    <div>
      <h3>Here is what we currently have on tap!</h3>
      <KegListItem/>
    </div>
  );
};

export default connect()(KegList);