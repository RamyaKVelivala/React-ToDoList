import React from 'react';

const ItemsList = props => (
  <ul>
    {
      props.listOfItems && props.listOfItems.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default ItemsList;
