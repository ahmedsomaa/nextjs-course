import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { commentId } = req.query;
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    const deleted = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const deletedIndex = comments.indexOf(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(deletedIndex, 1);
    res.status(200).json(deleted);
  }
}
