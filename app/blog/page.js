import Link from "@node_modules/next/link";
const Blog = () => {
  return (
    <div>
      <h1>Our Blog</h1>
      <ul>
        <li>
          <Link href="/blog/sample-post">
            How Nethub Can Help Your Business
          </Link>
        </li>
        <li>
          <Link href="/blog/sample-post">5 Tips for Effective SEO</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
