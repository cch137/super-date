const path = require('path');
const fs = require('fs');
const core = require('@node-minify/core');
const compressor = require('@node-minify/uglify-js');
const initialize = require('./');


const exportFile = (outputFilepath, minify=false, overrideNativeDate=true, isModule) => {
  return new Promise((resolve, reject) => {
    const script = `const SuperDate = (${initialize.toString()})(${overrideNativeDate});${isModule ? 'export default SuperDate;' : ''}`;
    if (minify) {
      const tempDirname = path.join(__dirname, './temp/');
      if (!fs.existsSync(tempDirname)) fs.mkdirSync(tempDirname);
      const tempFilepath = path.join(tempDirname, `./super-date-${Date.now()}-${btoa(Math.random())}.temp`);
      fs.writeFileSync(tempFilepath, script);
      core({
        compressor,
        input: tempFilepath,
        output: outputFilepath,
        sync: false,
        callback: (err, min) => {
          try {
            fs.rmSync(tempFilepath);
            if (fs.readdirSync(tempDirname).length === 0) {
              fs.rmdirSync(tempDirname);
            }
          } catch (er) { err = er; }
          if (err) reject(err);
          else resolve();
        }
      });
    } else {
      fs.writeFile(outputFilepath, script, (err) => {
        if (err) reject(err);
        else resolve();
      });
    }
  });
}

/**
 * Export the SuperDate code file to the front-end.
 */
module.exports.script = (
  outputFilepath,
  minify=false,
  overrideNativeDate=true
) => exportFile(outputFilepath, minify, overrideNativeDate, false);


/**
 * Export the SuperDate code module file to the front-end.
 */
module.exports.module = (
  outputFilepath,
  minify=false,
  overrideNativeDate=true
) => exportFile(outputFilepath, minify, overrideNativeDate, true);