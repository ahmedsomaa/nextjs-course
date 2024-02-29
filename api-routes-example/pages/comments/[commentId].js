import { comments } from "@/data/comments";

export default function CommentDetails({ comment }) {
  return (
    <div>
      <h1>
        {comment.id} - {comment.text}
      </h1>
    </div>
  );
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/api/comments");
  const { comments } = await req.json();

  return {
    paths: comments.map((comment) => ({
      params: { commentId: String(comment.id) },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return {
    props: {
      comment,
    },
  };
}
