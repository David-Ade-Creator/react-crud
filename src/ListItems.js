import React from 'react';
import './ListItems.css';

function ListItems(props) {
  const items = props.items;
  const ListItems = items.map(item =>{
    return<div className="col-lg-11 list" key={item.key}>
    <div className="text"><p><input type="text" id={item.text} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}>
    </input></p></div><div className="libtn"><button className="btn btn-primary lbtn" onClick={()=>{
      props.deleteItem(item.key)}}>X</button></div>
    </div>
  })
    return (
      <div>{ListItems}</div>
    )
}

export default ListItems;
