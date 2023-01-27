const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

interface Occurrences {
  [key: string]: number;
}
/**
 * This generic function counts occurrences of data by specific column and returns that as a JSON data.
 * @param {*} key -> the column name that will be used for the processing
 * @returns
 */
function loadAllBlogDataCountByKey(key: string): Promise<Occurrences> {
  let rowArr: string[] = [];
  let occurrences: Occurrences = {};

  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "blog.csv"))
      .pipe(csv())
      .on("data", (chunk: { [key: string]: string }) => {
        if (chunk[key]) rowArr.push(chunk[key]);
      })
      .on("error", (err: Error) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(rowArr.length);
        if (rowArr.length == 0) {
          console.log("No data to return");
          resolve(occurrences);
        } else {
          console.log("Do we have data? " + rowArr);
          occurrences = rowArr.reduce(accumulate, {});
          resolve(occurrences);
        }
      });
  });
}

function accumulate(accumulator: Occurrences, currentValue: string) {
  accumulator[currentValue]
    ? ++accumulator[currentValue]
    : (accumulator[currentValue] = 1);
  return accumulator;
}

export { loadAllBlogDataCountByKey };
