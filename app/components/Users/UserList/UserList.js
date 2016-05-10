import React, {Component} from 'React';

export default class UserListContainer extends Component {
  render() {
    const { list, onAddUserClick, addForm } = this.props;

    return (
      <div>
        {addForm}
        <ul>
          {list}
        </ul>
      </div>
    )
  };
};
