require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
  const prods = Array.from(Array(126), (_,i) => i+1);
  const pathsConfig = {
    '/product/:id': [
      {
        id: prods
      }
    ]
  };
  return new Sitemap(router)
    .applyParams(pathsConfig)
    .build("https://solruf.com")
    .save("./public/sitemap.xml");
}

generateSitemap();
