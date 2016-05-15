import React, {Component} from 'React';

export default class UserListContainer extends Component {
  render() {
    const {
      list, 
      addForm,
      userPreview,
    } = this.props;

    return (
      <div>
        {addForm}
        <ul>
          {list}
        </ul>
        {userPreview}
      </div>
    )
  };
};
