import React from 'react';
import { Link } from 'react-router-dom';
import { Div, Title, Rating } from './styles';

const Service = ({ service }) => {
  return (
    // eslint-disable-next-line no-underscore-dangle
    <Link to={`/services/${service._id}`}>
      <Div img={service.image}>
        <Title>{service.name}</Title>
        <Rating>{service.rating}</Rating>
      </Div>
    </Link>
  );
};

export default Service;
