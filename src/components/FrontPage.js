import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getPosts } from '../actions/posts';

const propTypes = {
  posts: PropTypes.object.isRequired
};

const defaultProps = {};

class FrontPage extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.posts.loaded) {
      this.props.getPosts();
    }
  }

  render() {
    console.log(this.props);

    let underneath;

    if (this.props.posts.loaded) {
      underneath = (
        <ListGroup>
          {
            this.props.posts.posts.map(post => {
              const post_link = `/post/${post.id}`;
              return (
                <ListGroup.Item key={post.id}>
                  <Link to={post_link}>{post.title}</Link>
                </ListGroup.Item>
              );
            }
                                      )}
        </ListGroup>
      );
    } else if (this.props.posts.loading) {
      underneath = (
        <p>Loading...</p>
      );
    } else if (!this.props.posts.loading && this.props.posts.failure) {
      underneath = (
        <p>Error: check console log</p>
      );
    } else {
      underneath = (
        <div>Nothing is being attempted</div>
      );
    }
    
    return (
      <Container fluid={false}>
        <h1>Welcome to my page!</h1>
        { underneath }
      </Container>
    );
  }
};

FrontPage.propTypes = propTypes;
FrontPage.defaultProps = defaultProps;

// later to be added via redux
const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(FrontPage);
