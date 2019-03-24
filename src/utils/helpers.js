export function generateUID() {
  return (
    Math.random()
    .toString(36)
    .substring(2, 15) +
    Math.random()
    .toString(36)
    .substring(2, 15)
  );
}

export function commentsCountRender(comments) {
  if (!comments || comments === 0) {
    return "não contem respostas";
  }
  if (comments && comments === 1) {
    return "contem um comentário";
  }
  return `contem ${comments} comentários`;
}

export const dateToFormat = (data) => new Date(data.timestamp).toLocaleDateString("pt-BR");
export const formatListCategories = (posts, categories) => (
  Object.values(categories).map(category => {
    const numberOfPosts = Object.values(posts).reduce((totalNumber, post) => {
      if (post.category === category.path) {
        return totalNumber + 1
      }
      return totalNumber
    }, 0)

    const numberOfReplies = Object.values(posts).reduce((totalNumber, post) => {
      if (post.category === category.path) {
        return totalNumber + post.commentCount
      }
      return totalNumber
    }, 0)

    return {
      "category": category,
      "numberOfPosts": numberOfPosts,
      "numberOfReplies": numberOfReplies
    }
  })
)
