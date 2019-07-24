import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Layout } from 'antd';

import './AppHeader.css';

const { Header } = Layout;

// eslint-disable-next-line react/prop-types
function AppHeader({ isLoggedIn }) {
  return (
    <Header className="app-header">
      <Link to="/">
        <h5 className="header-title">
          Time<span className="color-emphasize">line</span>
        </h5>
      </Link>
      {isLoggedIn ? (
        <nav className="header-nav">
          <Link className="header-nav-item" to="/">
            타임라인
          </Link>
          <Link className="header-nav-item" to="/profile">
            내 프로필
          </Link>
          <Link className="header-nav-item" to="/friends">
            친구관리
          </Link>
          <Avatar className="user-icon" shape="square" icon="user" />
        </nav>
      ) : (
        <Link
          className="header-login-button ant-btn ant-btn-primary"
          to="/login"
        >
          로그인
        </Link>
      )}
    </Header>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.account.isLoggedIn,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);
