import React, { Component } from 'react';
import {connect } from 'react-redux';
import Header from './container';

const mapStateToProps = state =>({
    isLoadin: state.isLoading
})

export default connect(mapStateToProps, {})(Header);
