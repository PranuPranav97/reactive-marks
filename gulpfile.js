const gulp = require("gulp");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-minify-css");
const gulpIf = require("gulp-if");
const mkdirp = require("mkdirp");
const fs = require("fs");

gulp.task("combine-css", () => {
  return gulp
    .src("./src/styles/*.css")
    .pipe(concat("dist.css"))
    .pipe(minifyCSS())
    .pipe(
      gulpIf(
        () => !fs.existsSync("dist/styles"), // Check if the "dist/styles" directory exists
        gulp.dest("dist/styles")
      )
    );
});

// gulp.task("watch", () => {
//   return gulp.watch("./src/styles/**/*.css", gulp.series("combine-css"));
// });

gulp.task("default", gulp.series("combine-css"));
