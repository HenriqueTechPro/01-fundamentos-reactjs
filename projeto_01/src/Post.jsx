function Post(props) {
  return (
    <div>
      <p>Post export default</p>
     <strong><p>{props.author}</p> </strong> 
      <span>{props.content}</span>
    </div>
  );
}

export default Post;

export function PostComponent(props) {
  return (
    <div>
      <p>Post Export Name</p>
      <p>{props.author}</p>
      <span>{props.content}</span>
    </div>
  );
}
