import React, { Component } from 'react';
import './App.css';


function ListItem (props){
  return (
    <li onClick={props.onClick} >
    {props.item}
    </li>
  );
}

class App extends Component {

  constructor(){
    super();
    this.state = { 
      list:['Running', 'Swimming', 'Cycling'],
    }
}

  addItem(){
    var item=document.getElementById("input-data").value;
    document.getElementById("input-data").value = "";

    if(item !== ""){
        var newList = this.state.list.slice();
        newList.push(item);
        this.setState({list:newList})
        }
  }

  onClick(index){
    var newList = this.state.list.slice();
    newList.splice(index,1);
    this.setState({list:newList})
  }

  render() {
    var listItem = [];
    this.state.list.forEach((item,i)=>{
      listItem.push(<ListItem  item={item} onClick={()=> this.onClick(i) } />)
    });

    return (
      <div className="App">
      <h1 className="title">Tasks List for {this.props.name}.</h1>
      <input type="text" id="input-data" placeholder="Add Item" />
      <button type="button" onClick={()=> this.addItem()} >Add it</button>
        <ul>
          {listItem}
        </ul>
      </div>
    );
  }
}

export default App;
