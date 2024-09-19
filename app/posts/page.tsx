// DYNAMIC RENDERING
// need to use edge runtime

interface Post {
    id: string;
    title: string;
}

interface PostResponse {
    posts: Post[];
}

export const runtime = 'edge'

export const dynamic="force-dynamic";

const PostsPage = async () => {
    const res: PostResponse = await fetch("https://dummyjson.com/posts").then((response) => response.json());
    const posts = res.posts;

  return (
    <div>PostsPage
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default PostsPage