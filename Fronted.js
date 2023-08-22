// Frontend code using Axios
const axios = require("axios");

// Assuming you have a text area or input where the user can input Python code
const pythonCode = 'print("Hello, Python!")';

axios.post("http://localhost:5000", { code: pythonCode })
  .then((response) => {
    console.log("Python execution result:", response.data.output);
  })
  .catch((error) => {
    console.error("An error occurred while executing Python code:", error);
  });