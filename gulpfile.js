const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("compile", function () {
    return gulp.src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"));
    });

gulp.task("watch-sass", function () {
    gulp.watch("scss/main.scss", gulp.series("compile"));

});

gulp.task ("default", gulp.series ("compile", "watch-sass"), function() {

});


