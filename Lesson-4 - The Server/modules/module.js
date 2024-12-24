const firstServe = (req, res) => {
//   console.log(res);
  if (res.statusCode === 200) {
    res.end("Hello! Welcome to your first created server called Gemmi");
  } else {
    res.send("<h1> Success</h1>");
  }
};

module.exports = { firstServe };
