# Fetch Sitemap XML from URL and Export to .TXT File

## Variables:
- `sitemapUrl`: Stores the URL of the sitemap to fetch. Replace with the actual URL of your sitemap.
- `outputFile`: The filename for the extracted URLs text file.

## fetchSitemap function:
Takes the sitemap URL as input.
Uses https.get to fetch the sitemap content.
Returns a promise that resolves with the fetched data or rejects with an error.
## extractUrls function:
Takes the XML data from the sitemap as input.
Uses a DOMParser to parse the XML string.
Extracts the URLs from the <loc> tags and stores them in an array.
Returns the array of extracted URLs.
## writeToFile function:
Takes an array of URLs and a filename as input.
Joins the URLs into a single string with newlines as delimiters.
Uses fs.writeFile to write the URL content to the specified file.
Logs an error message if writing fails, or a success message if successful.

## Main execution:
1. Calls fetchSitemap with the sitemap URL.
2. Uses then chaining to process the fetched data.
3. Calls extractUrls to get the URLs from the XML data.
4. Calls writeToFile with the extracted URLs and the output filename.
5. Catches any errors during the process and logs them.

## How to use:

- Replace 'https://www.example.com/sitemap.xml' with the actual URL of your sitemap.
- Run the script using Node.js: node fetch_sitemap.js
- This script will fetch the sitemap, extract the URLs, and write them to the specified text file.