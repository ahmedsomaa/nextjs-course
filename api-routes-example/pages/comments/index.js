import { useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const req = await fetch("/api/comments");
    const data = await req.json();
    setComments(data.comments);
  };

  const addComment = async () => {
    const req = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    if (req.ok) {
      alert("We successfully added your comment");
      setComment("");
    }
  };

  const deleteComment = async (id) => {
    const req = await fetch("/api/comments/" + id, {
      method: "DELETE",
    });
    if (req.ok) {
      alert("We successfully deleted your comment");
    }
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        placeholder="add your comment here..."
        onChange={({ target }) => setComment(target.value)}
      />
      <br />
      <br />
      <button onClick={addComment}>Add Comments</button>
      <button onClick={fetchComments}>Load Comments</button>
      <br />
      <br />
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} - {comment.text}
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
