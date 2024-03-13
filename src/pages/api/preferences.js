// pages/api/preferences.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { preferences } = req.body;

    // Process the preferences here. This might involve saving them to a database,
    console.log(preferences);

    // Send a response back to the client.
    res.status(200).json({ status: "Preferences received" });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
