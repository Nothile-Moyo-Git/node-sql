# Express TypeScript SCSS Template Project

## This project is a template project for Express TypeScript CSS Templates
Hello, welcome to this app. This app allows you to use TypeScript, Node.js, SCSS, Express, nodemon & gulp.

SCSS is compiled from ".src/sass" to ".src/css" using the command `npm run watch`.

In order to run your local typescript server, use the command `npm run start`.

You'll be able to find your index file in "./src/index.ts". Import all your code into there and use it.

For static files, you can use express static for the images and css folders within "./src".

## Installation process
If you're using this template, simply run `npm run install` to install all necessary dependencies.

If you'd like to do it yourself, you can follow the instructions below.

### TypeScript
To begin with, use `npm init -y` to create a package.json file with default options.

From there, run the command `npm install typescript --save-dev`.

After this, we'll need to install ambient types. This sets types for common node modules "file", "path", "fs" etc... To do this, run the command `npm install @types/node --save-dev`.

We need to set a typescript config file. To do this we need to run the following command:
`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --allowJs true`.

Once this all done, create a `src` folder with an `index.ts` file to go inside it.

### Nodemon for cold reloading
Nodemon (pronounced node-mon) is a package that allows for "cold reloading". 
Cold reloading is a concept that insolves executing and reloading typescript files whenever they change.

This also applies to files imported into the index file.

To do this, start by running `npm install --save-dev ts-node nodemon`.

Once it's installed, create a "nodemon.json" config file and copy the following details into it:

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}

In your package.json file, add the following under the "scripts" section of your file:

"start": "nodemon src/index.ts".

### Express
Now that you have typescript and nodemon running. You'll need to create a server. You can do this using the "http", "https" or "express" servers. In this template project, we'll use express.

To do this, we'll need to install the appropriate packages. 

Start by running `npm install express --save` followed by `npm install @types/express --save-dev`.

This install express and the typescript extension for it. You can now instantiate it in your index.ts file found in "src".

### Common packages
Since we're creating a template project, there are some useful to help us build our application.

We have *body-parser* which allows us to parse the body from the response object.

We have *dotenv* which allows us to use a configuration (.env) file locally.
**Note: Please don't upload your .env file to the same directory.**

To install these packages, please run `npm install body-parser dotenv --save`.

### Gulp and SCSS
In order to use SCSS with this project, I would advise that you follow the BEM convention.

BEM stands for "Block, Element, Modifier". It's a way of writing stylesheets which is more scalable and maintainable.

You'll need to install the appropriate gulp packages.
`npm install gulp gulp-sass node-sass gulp-concat --save-dev`.

Once you've done this, you'll need to create a new folder. Create a sass folder in the "src" folder.

Following on from this, you'll need to create a gulpfile. Please call this "gulpfile.js" and place it in your main folder.

For this template, write this inside of it:

`'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass')(require('node-sass'));

const concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {

   return gulp.src('src/sass/**/*.scss')
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('src/css'));
});

// Gulp watcher, automatically runs
gulp.task('sass:watch', function () {

   gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});`

**Note: This has been written to work with TypeScript**

It will allow you to run gulp runs manually, or to use a gulp "watch" which basically means a service which updates your css file as you write your SCSS code. You'll need to refresh the page to see your changes as this is server side.

Once you've done this, add some new scripts to your package.json file.

"scss" : "gulp sass",
"watch" : "gulp sass:watch"

In order to convert your scss to css code. Run `npm run scss`.
In order to start a watch run (which dynamically compiles scss changes), run `npm run watch`.

**Note: You don't need to import Shared.scss into your page files. Simply import page file and the shared styles will automatically be imported. You can see an example of this inside "home.scss"**

### Optional: filepaths
You'll find a path.ts file found in "src/util/path.ts".


