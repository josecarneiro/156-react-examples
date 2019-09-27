import React, { Component } from "react";

import Button from "react-bootstrap/Button";

import PostForm from "./../components/PostForm";

import { create } from "./../services/post-api";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        body: ""
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  onFormValueChange(data) {
    this.setState({
      post: {
        ...this.state.post,
        ...data
      }
    });
  }

  createPost() {
    const post = this.state.post;
    create(post)
      .then(post => {
        this.props.history.push(`/post/${post._id}`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <PostForm
          value={this.state.post}
          onValueChange={this.onFormValueChange}
          onFormSubmit={this.createPost}
        >
          <Button type="submit">Create Post</Button>
        </PostForm>
      </div>
    );
  }
}
