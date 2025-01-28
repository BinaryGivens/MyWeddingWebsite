const express = require('express');
const cors = require('cors');  // Import CORS
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());  // Enable CORS for all origins (you can customize this if needed)

app.use(express.json());  // Middleware to parse JSON request body

// POST route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, phone } = req.body;
    console.log(`Received submission: ${name}, ${email}, ${phone}`);

    // Write data to submissions.txt
    const data = `Name: ${name}, Email: ${email}, Phone: ${phone}\n`;
    fs.appendFile(path.join(__dirname, 'submissions.txt'), data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Data saved successfully');
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
