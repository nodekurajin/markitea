const https = require('https');
const fs = require('fs');

const sitemapUrl = 'https://www.example.com/sitemap.xml'; // Replace with the actual sitemap URL
const outputFile = 'sitemap.txt';

function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

function extractUrls(xmlData) {
  const urls = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlData, 'text/xml');
  const locElements = doc.getElementsByTagName('loc');
  for (let i = 0; i < locElements.length; i++) {
    urls.push(locElements[i].textContent);
  }
  return urls;
}

function writeToFile(urls, filename) {
  const content = urls.join('\n');
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Sitemap URLs written to ${filename}`);
    }
  });
}

fetchSitemap(sitemapUrl)
  .then(extractUrls)
  .then((urls) => writeToFile(urls, outputFile))
  .catch((error) => {
    console.error('Error fetching sitemap:', error);
  });
