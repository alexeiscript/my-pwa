import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

  inputChange = event => {
    this.setState({addFormValue: event.target.value});
  };

  formSubmit = event => {
    const {formValue} = this.state;
    const {addTodo} = this.props;
    event.preventDefault();
    addTodo({title: formValue});
    this.setState({formValue: ""});
  };

  renderForm = () => {
    const {showForm, formValue} = this.state;
    if (showForm) {
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <i>Add</i>
              <input 
                type="text"
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext"
              />
              <label htmlFor="toDoNext">What Next?</label>
            </div>
          </form>
        </div>
      );
    }
  };
  renderToDo() {
    const {data} = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <h4>You have no more things To Do!</h4>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchToDos();
  }
  render() {
    const {showForm} = this.state;
    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>
        <div>
          <button onClick={() => this.setState({showForm: !showForm})}>
          {showForm ? (
            <i>Close</i>
          ) : (
            <i>Add</i>
          )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  }
}

export default connect(mapStateToProps, actions)(List);
