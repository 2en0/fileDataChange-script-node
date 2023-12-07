const fs = require("fs");

// Loop through the JSON files
for (let i = 1; i <= 2500; i++) {
  const filename = `json/${i}.json`; // Assuming the JSON files are named as "0.json", "1.json", etc.

  // Read the JSON file
  const data = fs.readFileSync(filename);
  const jsonData = JSON.parse(data);

  // Update the image property
  jsonData.image = `${
    `https://bafybeiddpla5kzmle5zvsyv52tz25m5zopl3ktip4n6sunzprpzbxsh25i.ipfs.nftstorage.link/` +
    i
  }.png?ext=png`; // Assuming the new image names follow the pattern "0.png", "1.png", etc.

  jsonData.properties.files[0].uri = `${
    `https://bafybeiddpla5kzmle5zvsyv52tz25m5zopl3ktip4n6sunzprpzbxsh25i.ipfs.nftstorage.link/` +
    i
  }.png?ext=png`; // Assuming the new image names follow the pattern "0.png", "1.png", etc.

  // Write the updated data back to the file
  fs.writeFileSync(filename, JSON.stringify(jsonData));
}

console.log("Image names updated for all JSON files.");
