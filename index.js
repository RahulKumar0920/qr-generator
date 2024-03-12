import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Please enter the website url :",
      name: "URL",
    },
  ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qe_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("Files is saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
