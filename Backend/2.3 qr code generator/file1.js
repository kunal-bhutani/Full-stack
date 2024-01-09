/*1. use the inquirer npm package to get user input
2. use the qr-image npm package to turn the user entered url into a QR code image.QR
3. create a txt file to save teh user input using the native fs node module. */

// step 1:
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "type in your URL: ",
        name:"URL",
    },
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });