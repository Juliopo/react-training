import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchList } from '../actions';

import List from '../components/List';

export class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  _renderList = () => {
    if (this.props.isLoading) {
      return (
        <h2>Loading...</h2>
      );
    }

    if (this.props.params.id) {
      return (
        <List list={[this.props.params.id]} />
      );
    }

    return (
      <List list={ this.props.list } />
    );
  }

  render() {
    return  this._renderList();
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listReducer.list,
    isLoading: state.listReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => {
      dispatch(fetchList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
