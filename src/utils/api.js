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

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
  .then(res => res.json())
  .then(data => data.categories);


export const getPostById = (id) =>
  fetch(`${api}/posts/${id}`, {
    headers
  })
  .then(res => res.json())
  .then(data => data)

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


export const addPost = (data) => {
  const {
    post
  } = data;

  return fetch(`${api}/posts`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      id: generateUID(),
      timestamp: post.timestamp,
      body: post.body,
      author: post.author,
      title: post.title,
      category: post.category
    })
  }).then(res => res.json());
}

export const addComment = (data) => {
  const {
    comment
  } = data;

  return fetch(`${api}/comments`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      id: generateUID(),
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
      voteScore: 0
    })
  }).then(res => res.json());
}

export const updateCommentById = (data) => {
  const {
    comment
  } = data;

  return fetch(`${api}/comments/${comment.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify({
      timestamp: comment.timestamp,
      body: comment.body,
    })
  }).then(res => res.json());
}


export const updatePostById = (data) => {
  const {
    post
  } = data;


  return fetch(`${api}/posts/${post.id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    })
  }).then(res => res.json());
}


export const deleteCommentById = (data) => {
  return fetch(`${api}/comments/${data.id}`, {
    headers,
    method: "DELETE",
  }).then(res => res.json());
}

export const deletePostById = (data) => {
  return fetch(`${api}/posts/${data.id}`, {
      headers,
      method: "DELETE",
    }).then(res => res.json())
    .then(data => ({
      [data.id]: data
    }))
}

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


export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, {
    headers
  })
  .then(res => res.json())
  .then(data => Object.values(data).reduce((totalValue, currentData) => {
    totalValue[currentData.id] = currentData;
    return totalValue;
  }, {}))

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
