// To do: iteratie thourgh all of the json files read file
// get title if it exits: get the path, if no make path with backend + / + title
// write the results in a json file
import * as fs from "fs";
import * as path from "path";

// initialize Array
const componentsArray = [];

//  get backend data

const backendPath = "../../public/data/backend/";
const frontendPath = "../../public/data/frontend/";
const paths = [backendPath, frontendPath];

paths.forEach((p) => {
  try {
    const files = fs.readdirSync(p);

    files.forEach((f) => {
      const filePath = path.join(p, f);
      const raw = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(raw);
      data.map((component) => {
        const compObject = {
          title: component.title,
          path: component.path || `/backend/${f.split(".")[0]}`,
        };
        componentsArray.push(compObject);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

try {
  fs.writeFileSync(
    "componentsArray.json",
    JSON.stringify(componentsArray),
    "utf-8"
  );
  console.log("result: ", componentsArray);
} catch (error) {
  console.log(error);
}
