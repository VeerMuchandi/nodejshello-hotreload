const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log("hello");
    var message="Welcome from Node";
    res.send({ message: message });
  });

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);

});
