const { href } = window.location;
export const BASE_URL =
  (href.startsWith("http://solruf.com") ||
  href.startsWith("http://www.solruf.com") ||
  href.startsWith("https://www.solruf.com") ||
  href.startsWith("https://solruf.com"))
    ? "https://services.solruf.com/"
    : "https://services.dev.solruf.com/";

export const IMG_BASE_URL ="https://solruf-dev.s3.ap-south-1.amazonaws.com/"
