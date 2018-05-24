import React from 'react';
import './scss/main.scss';
import classNames from 'classnames';
import ItemsList from './ItemsList';

/**
 * A React To Do Screen with list of items.
 */

class ReactToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
      listOfItems: []
    };
  }

  render() {
    return (
      <div class="react-todo">
          <div class="title">
              <span>{"React ToDo List"}</span>
          </div>
          <div class="title-space"></div>
          <div class="todo-section">
              <form class="add-item" onSubmit={(e) => this._onSubmit(e)}>
                  <input type="text"
                          class="item-input"
                          id="itemText"
                          onChange={(e) => this._addItemtoList(e)}
                          value={this.state.item}
                          placeholder="Enter an item"/>
                  <button class="button-color"
                          type="submit">
                          {"+"}
                          </button>
              </form>
              <ItemsList listOfItems={this.state.listOfItems}/>
          </div>
      </div>
    );
  }

  _addItemtoList(e){
      this.setState({
        item: e.target.value
      })
  }

  _onSubmit(e){
    e.preventDefault();
    this.setState({
      item: '',
      listOfItems: [...this.state.listOfItems, this.state.item]
    })
  }
}

export default ReactToDo;
