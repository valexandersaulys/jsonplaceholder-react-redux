import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import { getPosts } from '../actions/posts';

const propTypes = {
  params: PropTypes.object
};

const defaultProps = {};

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("mounting");
    if (!this.props.posts.loaded) {
      this.props.getPosts(this.props.match.params.id);
    };
  }

  render() {
    const post_id = this.props.match.params.id;
    
    const post = this.props.posts.loaded ? this.props.posts.posts[post_id] : this.props.posts.posts[0];
    const { title, body } = post;
    
    return (
      <Container>
        <h1>Post #{post_id}: {title}</h1>
        <p>{body}</p>
      </Container>
    );
  }
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Post);
