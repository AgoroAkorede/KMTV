export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const data = await import(`../${name.toLowerCase()}.json`);
    res.status(200).json(data.default);
  } catch (err) {
    res.status(404).json({ error: 'Not found' });
  }
}