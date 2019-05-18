import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Title, Button } from 'reactbulma';
import { Link } from 'react-router-dom';

const propTypes = {};

const defaultProps = {};

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section>
        <Container>
          <Title>Hello World!</Title>
          <hr/>
          <div>
            <Link to="/alsoworld/">
              <Button large>Button</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }
};

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;

export default HelloWorld;
