export default function handler(req, res) {
  res.setPreviewData({});
  res.end(
    JSON.stringify([{ name: "sub-category-1" }, { name: "sub-category-2" }])
  );
}
