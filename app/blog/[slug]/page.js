const BlogPost = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Content of the blog post goes here...</p>
    </div>
  );
};

export default BlogPost;
