import React, { Component } from "react";

import { list } from "./../services/post-api";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    list()
      .then(posts => {
        this.setState({
          posts
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Link to={`/post/${post._id}`} key={post._id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    );
  }
}
