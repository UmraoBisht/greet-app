
// greet function is a controller function that handles the GET request to /api/greet
// It takes the name query parameter from the request object and returns a greeting message
export const greet = (req, res) => {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({ error: "Name is required." });
    }
  
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
  };