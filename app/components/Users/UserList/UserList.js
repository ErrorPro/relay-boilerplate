import React, {Component} from 'React';
import forceFetch from './forceFetch';

export default class UserListContainer extends Component {
  render() {
    const {
      list,
      addForm,
      userPreview,
    } = this.props;
    console.log(this.props)
    return (
      <div>
        {addForm}
        <ul>
          {list}
        </ul>
        {userPreview}
        <button onClick={() => /*this.props.relay.forceFetch()*/ forceFetch()}>forceFetch</button>
      </div>
    )
  };
};
