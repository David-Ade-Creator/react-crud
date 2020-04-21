import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text:'',
        key:''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleChange(e){
    this.setState({
      currentItem:({
        text: e.target.value,
        key: Date.now()
      })
    });
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
      this.setState({
        items:items,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  setUpdate(text,key){
    console.log("items:" +this.state.items);
    const items = this.state.items;
    items.map( item => {
      if(item.key===key){
        console.log(item.key + "   "+key)
        item.text = text;
      }
     })
    this.setState({
      items:items
    })
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
    item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

 render() {
  return (
  <div className="App">
  <div className="container">
  <div className="col-lg-6 col-md-6 col-sm-6 .col-12 offset-md-3 the-app">
  <form className="row inputfield" id="to-do-form" onSubmit={this.addItem}>
  <input
  type="text"
  className="form-control"
  name="input"
  id="text"
  placeholder="Enter activity"
  onChange={this.handleChange}
  value={this.state.currentItem.text}
  />
  <button
  type="submit"
  className="btn btn-primary"
  >
  Add
  </button>
  </form>
  <p>{this.state.items.text}</p>
  <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
  </div>
  </div>
  </div>
  );
}
}

export default App;
