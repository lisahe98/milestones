/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');



/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  fs.createReadStream('./myfile.zip')
  .pipe(
    unzipper.Extract({path:'elisa'}
    
  ));

};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {

  fs.readFile('./elisa',(err,data) => {
    const newArr = [];
    if (err) {
      return err
    } else {
      newArr.push(data)
    }
      return newArr
  })

};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

module.exports = {
  unzip,
  readDir,
  grayScale
};



// Unzip the file

// 1. use node fs require 
// 2. use unzipper 
// 3. usage of nodejs createReadStream to read myfile zip file  
// 4. extract zip to a path with new ./unzipped
// 5. inside .pipe, put a console.log(Extraction operation complete)

// Read Dir  It will take in a directory path as a parameter, and will 
//give back an array of file paths for all the png files that exist in that directory. 

// 1. make fs.readFile(path of unzipped file)
// 2. return data 
// 3. create an empty array and push the pictures with path into new array 

// Change images to grayscale

// 1. create grayScale(pathIn, pathOut)
// 2. figure out pngjs library and parse pathIn image
// 3. grab pixels and loop pixel array while using grayscale algorithm to +/-
// 4. save modified array and apply to pathOut directory
