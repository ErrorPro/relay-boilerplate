import React from 'react';

export default class AddUser extends React.Component {
  render() {
    const { addUser } = this.props;

    return (
      <div>
        <input ref='name'/>
        <button onClick={() => addUser({name: this.refs.name.value})}>Add user</button>
      </div>
    )
  }
}
