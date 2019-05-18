import React from 'react';
import PropTypes from 'prop-types';
import { Section, Container, Title } from 'reactbulma';

const propTypes = {};

const defaultProps = {};

class AlsoWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section>
        <Container>
          <Title>This is another page.</Title>
        </Container>
      </Section>
    );
  }
};

AlsoWorld.propTypes = propTypes;
AlsoWorld.defaultProps = defaultProps;

export default AlsoWorld;
