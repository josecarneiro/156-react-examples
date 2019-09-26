import React from "react";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";

const Navigation = props => {
  const list = props.pokemonList;
  return (
    <div>
      <ListGroup>
        {list.map(item => (
          <ListGroup.Item key={item.name}>
            <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Navigation;
