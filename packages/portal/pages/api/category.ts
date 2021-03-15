export default function handler(req, res) {
  res.end(
    JSON.stringify([
      {
        name: "first category",
      },
      {
        name: "second category",
      },
      {
        name: "third category",
      },
    ])
  );
}
