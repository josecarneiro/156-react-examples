import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const BlogNavbar = () => {
  return (
    <Navbar>
      <Link to="/">Blog</Link>
      <Link to="/post/create">+ Create a Post</Link>
    </Navbar>
  );
};

export default BlogNavbar;
