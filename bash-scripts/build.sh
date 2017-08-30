#!/bin/bash

clear
cd angular/
rm -rf dist/
npm install
npm run build
cd ../
cd express/
npm install
cd ../
rm -rf ../package-lock.json
