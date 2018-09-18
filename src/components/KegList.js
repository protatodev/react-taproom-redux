import React from 'react';
import KegListItem from './KegListItem';
import { connect } from 'react-redux';

const KegList = (props) => {

  return(
    <div>
      {
        props.kegs.map(keg => {
          return (
            // <div key={keg.id}>
            <KegListItem adminRights={props.adminRights} key={keg.id} keg={keg}/>
            // </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    kegs: state
  }
}

export default connect(mapStateToProps)(KegList);