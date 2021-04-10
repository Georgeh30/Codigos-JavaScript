/* Archivo de configuracion para gul
gulp --> es un automatizador de tareas que lo que va a hacer
        es convertir noestro codigo, de codigo nuevo a codigo viejo
        cada vez que nosostro guardemos
*/

import gulp from "gulp"
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"

gulp.task("babel", () => {
    return gulp
        .src("dev/js/*.js")
        .pipe(plumber())
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            }),
        )
        .pipe(concat("scripts-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("public/js"))
})

gulp.task("default", () => {
    gulp.watch("dev/js/*.js", gulp.series("babel"))
})
