import React, { Component } from 'react';
import {connect } from 'react-redux';
import Home from './container';

const mapStateToProps = state =>({
    isLoadin: state.isLoading
})

export default connect(mapStateToProps, {})(Home);
