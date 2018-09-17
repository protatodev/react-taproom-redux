import uuid from 'uuid';

export const addKeg = (
  {
    name = '',
    price = 0,
    description = '',
    brand = ''
  } = {}) => ({
    type: 'ADD_KEG',
    keg: {
      id: uuid(),
      name,
      description,
      price,
      brand
    }
});

export const removeKeg = ({ id } = {}) => ({
  type: 'REMOVE_KEG',
  id
});

export const editKeg = (id, updates) => ({
  type: 'EDIT_KEG',
  id,
  updates
});
