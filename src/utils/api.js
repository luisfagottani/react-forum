const api = `${process.env.REACT_APP_API_DOMAIN}:${
  process.env.REACT_APP_API_PORT
}`;

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
  .toString(36)
  .substr(-8);

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token
};

export const getAllCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
  .then(res => res.json())
  .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data =>
    Object.values(data).reduce((totalValue, currentData) => {
      totalValue[currentData.id] = currentData;
      return totalValue;
    }, {})
  );


export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());

export const getCommentsByPost = postId =>
  fetch(`${api}/posts/${postId}/comments`, {
    headers,
  }).then(res => res.json())
  .then(data =>
    Object.values(data).reduce((totalValue, currentData) => {
      totalValue[currentData.id] = currentData;
      return totalValue;
    }, {})
  );



export const getInitialData = () => {
  return Promise.all([getAllCategories(), getAllPosts()]).then(
    ([categories, posts]) => ({
      categories,
      posts
    })
  );
};

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: "PUT",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json());

// export const search = query =>
//   fetch(`${api}/search`, {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ query })
//   })
//     .then(res => res.json())
//     .then(data => data.books);
