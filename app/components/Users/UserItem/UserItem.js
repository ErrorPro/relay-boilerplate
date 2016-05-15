import React from 'react';
import { Link } from 'react-router';

export default class AddUser extends React.Component {
  render() {
    const { user, deleteUser, onSetPreview } = this.props;

    return (
      <li>
        <Link to={`item/${user.id}`}>
          <span>{user.name}</span>
        </Link>
        <span onClick={() => deleteUser(user.id)}> Delete </span>
        <span onClick={() => onSetPreview(user.id)}> Preview </span>
      </li>
    )
  }
}
