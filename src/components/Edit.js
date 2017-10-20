import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Edit extends Component {
  constructor(props) {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      phone: ''
    };
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState(_.assign({}, item));
  }
  render() {
    const { item, confirmAction } = this.props;

    return (
      <div className="container">
        <div className="edit-container">
          <img alt="profile" src={ item.avatar_url } />
          <input
            id="firstname"
            type="text"
            value={ this.state.firstname }
            placeholder={ item.firstname }
            onInput={(event) => {
              this.setState({
                firstname: event.target.value
              });
            }}
          />
          <input
            id="lastname"
            type="text"
            value={ this.state.lastname }
            placeholder={ item.lastname }
            onInput={(event) => {
              this.setState({
                lastname: event.target.value
              });
            }}
          />
          <input
            id="phone"
            type="tel"
            placeholder={ item.phone }
            value={ this.state.phone }
            onInput={(event) => {
              this.setState({
                phone: event.target.value
              });
            }}
          />
          <button onClick={() => confirmAction(this.state)} className="btn btn-success">
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

Edit.defaultProps = {
  item: {}
};

Edit.propTypes = {
};

export default Edit;
