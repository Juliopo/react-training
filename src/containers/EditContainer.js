import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import PropTypes from 'prop-types';

import { fetchListItem, editUpdate } from '../actions';
import Edit from '../components/Edit';

export class EditContainer extends Component {
  componentDidMount() {
    const { dispatchFetchListItem, params } = this.props;
    const { id } = params;

    dispatchFetchListItem(id);
  }

  handleConfirm = (itemState) => {
    const { dispatchEditUpdate, params, item } = this.props;

    dispatchEditUpdate(_.assign({}, item, itemState));
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.isUpdating && !nextProps.isUpdating) {
      history.goBack();
    }
  }

  render() {
    const { item } = this.props;

    return (
      <Edit item={ item } confirmAction={ this.handleConfirm } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.editReducer.isLoading,
    isUpdating: state.editReducer.isUpdating,
    item: state.editReducer.item
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchListItem: (id) => {
      dispatch(fetchListItem(id));
    },
    dispatchEditUpdate: (item) => {
      dispatch(editUpdate(item));
    }
  };
};

EditContainer.defaultProps = {
};

EditContainer.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer);
