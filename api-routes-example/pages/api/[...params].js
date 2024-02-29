export default function handler(req, res) {
  res.status(200).json({ params: req.query.params });
}
