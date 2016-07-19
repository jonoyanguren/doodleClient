import React from 'react';
import { connect } from 'react-redux';

const ProfileContainer = () => <h1>Hello {localStorage.getItem("username")}</h1>;

// const mapState = state => state.user;

export default ProfileContainer;
