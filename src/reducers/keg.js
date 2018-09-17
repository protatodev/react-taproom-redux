const kegReducerDefaultState = [];

const kegReducer = (state = kegReducerDefaultState, {type, id, keg, updates}) => {
  switch(type) {
    case 'ADD_KEG':
      return [
        ...state,
        keg
      ];
    case 'REMOVE_KEG':
      return state.filter(p => p.id !== keg.id);
    case 'EDIT_KEG':
      return state.map(keg => {
        if(keg.id === id) {
          return {
            ...keg,
            ...updates
          }
        } else {
          return keg;
        }
      });
    default:
      return state;
  }
};

export default kegReducer;