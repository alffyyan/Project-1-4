const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Import the cors package

const app = express();
const upload = multer({
  dest: 'uploads/' // Destination folder to temporarily store uploaded files
});
const jsonPath = path.join(__dirname, 'data.json');

// Serve static files from the "img" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());// Enable CORS for all routes

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
      // Move the uploaded file to the "img" folder
      const fileId = generateId(); // Generate a unique ID for the file
      const fileExt = path.extname(req.file.originalname);
      const fileName = `${fileId}${fileExt}`;
      const filePath = path.join(__dirname, 'uploads', fileName);
      const publicPath = `/uploads/${fileName}`;
      console.log(fileName);
  
      fs.rename(req.file.path, filePath, (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Failed to save the file' });
        } else {
          // File successfully uploaded and moved
  
          // Save the file path into a JSON file
          const data = { id: fileId, path: publicPath };
          
  
          fs.readFile(jsonPath, 'utf8', (err, jsonString) => {
            if (err) {
              // If the JSON file doesn't exist, create a new array with the data
              const newData = [data];
              fs.writeFile(jsonPath, JSON.stringify(newData), (error) => {
                if (error) {
                  console.error(error);
                  res.status(500).json({ message: 'Failed to save the file path' });
                } else {
                  res.json({ message: 'File uploaded successfully', path: publicPath });
                }
              });
            } else {
              // If the JSON file exists, append the new data to the existing array
              let existingData = JSON.parse(jsonString);
              existingData.push(data);
              fs.writeFile(jsonPath, JSON.stringify(existingData), (error) => {
                if (error) {
                  console.error(error);
                  res.status(500).json({ message: 'Failed to save the file path' });
                } else {
                  res.json({ message: 'File uploaded successfully', path: publicPath });
                }
              });
            }
          });
        }
      });
    } else {
      // No file uploaded
      res.status(400).json({ message: 'No file selected' });
    }
  });

  // Read all files
app.get('/uploads', (req, res) => {
    fs.readFile(jsonPath, 'utf8', (err, jsonString) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to read files' });
      } else {
        const files = JSON.parse(jsonString);
        res.json(files);
      }
    });
  });
  
  // Read a specific file by ID
  app.get('/uploads/:id', (req, res) => {
    const fileId = req.params.id;
    fs.readFile(jsonPath, 'utf8', (err, jsonString) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to read the file' });
      } else {
        const files = JSON.parse(jsonString);
        const file = files.find((f) => f.id === fileId);
        if (file) {
          res.json(file);
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      }
    });
  });
  
  // Update a file by ID
  app.put('/uploads/:id', (req, res) => {
    const fileId = req.params.id;
    const updatedData = req.body;
  
    fs.readFile(jsonPath, 'utf8', (err, jsonString) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to update the file' });
      } else {
        let files = JSON.parse(jsonString);
        const index = files.findIndex((f) => f.id === fileId);
        if (index !== -1) {
          files[index] = { ...files[index], ...updatedData };
          fs.writeFile(jsonPath, JSON.stringify(files), (error) => {
            if (error) {
              console.error(error);
              res.status(500).json({ message: 'Failed to update the file' });
            } else {
              res.json({ message: 'File updated successfully' });
            }
          });
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      }
    });
  });
  
  // Delete a file by ID
  app.delete('/uploads/:id', (req, res) => {
    const fileId = req.params.id;
  
    fs.readFile(jsonPath, 'utf8', (err, jsonString) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete the file' });
      } else {
        let files = JSON.parse(jsonString);
        const index = files.findIndex((f) => f.id === fileId);
        if (index !== -1) {
          files.splice(index, 1);
          fs.writeFile(jsonPath, JSON.stringify(files), (error) => {
            if (error) {
              console.error(error);
              res.status(500).json({ message: 'Failed to delete the file' });
            } else {
              res.json({ message: 'File deleted successfully' });
            }
          });
        } else {
          res.status(404).json({ message: 'File not found' });
        }
      }
    });
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Helper function to generate a unique ID
function generateId() {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    return `${timestamp}${randomString}`;
  }
  
