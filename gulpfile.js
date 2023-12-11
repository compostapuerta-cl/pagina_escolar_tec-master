//GULP NOS DA CIERTAS FUNCIONES
const { src, dest, watch } = require("gulp");
//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
function css(done) {
   src("src/scss/**/*.scss") //Identificar el archivo de SASS
       .pipe(plumber())
       .pipe(sass()) //Compilarlo
       .pipe(dest("build/css")) //Almacenarla en el disco duro
   done(); //es un callback que avisa a gulp cuando llegamos al final
}
function dev(done){
   watch("src/scss/**/*.scss", css); //Watch es para que siga ejecutandose
   done();
}
exports.css = css;
exports.dev = dev;

const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
function purgeCssTask() {
  return gulp.src('build/css/app.css') //AGARRA TODO EL CODIGO DE BS5
      .pipe(purgecss({
          content: ['index.html'] //COMPARA LAS CLASES CON ESTE ARCHIVO
      }))
      .pipe(gulp.dest('build/css/bootstrap')); //LO OPTIMIZA 
}
exports.purgecss = purgeCssTask;