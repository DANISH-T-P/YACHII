exports.getHome = (req, res) => {
  res.json({ title: "Welcome Home", content: "Home page content" });
};

exports.getAbout = (req, res) => {
  res.json({ title: "About Us", content: "Company background info" });
};

exports.getCareer = (req, res) => {
  res.json({ title: "Join Our Team", content: "Career opportunities" });
};

exports.getContact = (req, res) => {
  res.json({ title: "Contact Us", content: "Reach out to us!" });
};
