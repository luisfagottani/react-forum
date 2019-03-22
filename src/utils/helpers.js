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
