import React from 'react';
import { Link } from 'react-router';

export default class AddUser extends React.Component {
  render() {
    const { user, deleteUser } = this.props;

    return (
      <li>
        <Link to={`item/${user.id}`}>
          <span>{user.name}</span>
        </Link>
        <span onClick={() => deleteUser(user.id)}> Delete </span>
      </li>
    )
  }
}
