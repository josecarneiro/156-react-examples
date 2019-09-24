import React from 'react';

import Card from 'react-bootstrap/Card';

const StudentItem = ({ student }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Lorem Ipsum</Card.Text>
        <Card.Link>
          <img
            src={`https://www.countryflags.io/${student.country}/flat/64.png`}
            alt={student.country}
          />
        </Card.Link>
        <Card.Link href={`https://github.com/${student.username}`}>
          {student.username}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default StudentItem;
