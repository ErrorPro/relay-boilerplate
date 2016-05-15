import React from 'react';

export default class UserPreview extends React.Component {
  render() {
    const { viewer: { user } } = this.props;

    return (
      <div>
        {user && <span>{user.name}</span>}
      </div>
    )
  }
}
