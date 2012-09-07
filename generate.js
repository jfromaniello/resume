var md = require("node-markdown").Markdown,
  fs = require("fs"),
  path = require("path"),
  content = fs.readFileSync(path.join(__dirname, "readme.md")).toString(),
  template = fs.readFileSync(path.join(__dirname, "index.template.html")).toString();

var output = template.replace("{{{CONTENT}}}", md(content));

fs.writeFileSync(path.join(__dirname, "index.html"), output);
