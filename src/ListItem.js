import React, { Component } from 'react';

 const ListItem = ({props})=>{
  return (
    <li onClick={props.onClick} >
    {props.item}
    </li>
  );
}

export default ListItem;
