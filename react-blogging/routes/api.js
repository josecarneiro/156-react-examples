"use strict";

const { Router } = require("express");
const router = Router();

// GET    /
// POST   /post/create
// GET    /post/:id
// PATCH  /post/:id
// DELETE /post/:id

const Post = require("./../models/post");

router.get("/", (req, res, next) => {
  Post.find()
    .then(posts => {
      res.json({ type: "success", data: { posts } });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/post/create", (req, res, next) => {
  const { title, body } = req.body;
  Post.create({
    title,
    body
  })
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/post/:id", (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

router.patch("/post/:id", (req, res, next) => {
  const id = req.params.id;
  const { title, body } = req.body;
  Post.findByIdAndUpdate(
    id,
    {
      ...(title && { title }),
      ...(body && { body })
    },
    { new: true }
  )
    .then(post => {
      res.json({ type: "success", data: { post } });
    })
    .catch(error => {
      next(error);
    });
});

router.delete("/post/:id", (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(() => {
      res.json({ type: "success" });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
