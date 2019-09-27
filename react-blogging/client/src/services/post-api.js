import axios from "axios";

const postApi = axios.create({
  baseURL: "/api"
});

export const list = () => {
  return new Promise((resolve, reject) => {
    postApi
      .get("/")
      .then(response => {
        resolve(response.data.data.posts);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const load = id => {
  return new Promise((resolve, reject) => {
    postApi
      .get(`/post/${id}`)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const edit = (id, updatedPost) => {
  return new Promise((resolve, reject) => {
    postApi
      .patch(`/post/${id}`, updatedPost)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const remove = id => {
  return new Promise((resolve, reject) => {
    postApi
      .delete(`/post/${id}`)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const create = postData => {
  return new Promise((resolve, reject) => {
    postApi
      .post("/post/create", postData)
      .then(response => {
        resolve(response.data.data.post);
      })
      .catch(error => {
        reject(error);
      });
  });
};
