import { Helmet } from 'react-helmet';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppTitle extends React.Component {
  render() {
    const { pathname } = this.props;
    const pathnameMatchTitle = {
      '/': '타임라인',
      '/login': '로그인',
      '/register': '회원가입',
      '/friends': '친구관리',
      '/profile': '프로필',
    };

    return (
      <Helmet>
        <title>
          {`Timeline ${pathname ? pathnameMatchTitle[pathname] : ''}`}
        </title>
      </Helmet>
    );
  }
}

AppTitle.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppTitle);
