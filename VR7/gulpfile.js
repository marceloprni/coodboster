import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

import autoprefixer from 'gulp-autoprefixer';
import browserSyncPkg from 'browser-sync';

import gulpConcat from 'gulp-concat';

import gulpBabel from 'gulp-babel';

import gulpUglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

const browserSync = (browserSyncPkg && browserSyncPkg.default) ? browserSyncPkg.default : browserSyncPkg;
const bs = browserSync.create();

// compila o sass e atualiza o browser
export function compilaSass() {
  return gulp
    .src("scss/*.scss")
    .pipe(sass({ style: "compressed" }).on("error", sass.logError))

    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )

    .pipe(gulp.dest("css/"))
    .pipe(bs.stream()); // atualiza o browser se altera o scsss ou css
}

/* gulp sass - para iniciar só sass */
gulp.task('sass', compilaSass);

// concatena os plugins css em um só arquivo
function pluginCSS() {
  return gulp.src("css/lib/*.css")
    .pipe(gulpConcat('plugins.css')) // concatena todos os arquivos em plugins.css
    .pipe(gulp.dest('css/')) // enviar o arquivo 
    .pipe(bs.stream()); // atualiza o browser se altera o scsss ou css
}

// task para rodar a função pluginCSS
gulp.task("plugincss", pluginCSS);


// concatena, transpila e minifica o js
function gulpJS() {
  return gulp
    .src("js/scripts/*.js") 
    .pipe(gulpConcat('all.js')) // concatena todos os arquivos em all.js
    .pipe(gulpBabel({
        presets: ['@babel/env']
    })) // transpila o js para uma versão mais compatível e antiga para web
    .pipe(gulpUglify()) // minifica o js
    .pipe(gulp.dest("js/")) // salva o all.js em js/dist/
    .pipe(bs.stream()); // atualiza o browser se altera o js ou css
}

gulp.task("alljs", gulpJS);


// concatena os plugins em um só arquivo
function pluginsJS() {
  return gulp
    .src(["./js/lib/aos.min.js", "./js/lib/swiper.min.js"]) 
    .pipe(gulpConcat('plugins.js')) // concatena todos os arquivos em plugins.js
    //.pipe(gulpUglify()) // minifica o js
    .pipe(gulp.dest("js/")) // salva o plugins.js em js/dist/
    .pipe(bs.stream()); // atualiza o browser se altera o js ou css
}

// task para rodar a função pluginsJS
gulp.task("pluginjs", pluginsJS);

// inicia o browser-sync
function BrowserSync() {
  bs.init({
    server: {
      baseDir: './'   // ajuste se usar um backend/proxy
    },
    open: true,
    notify: false
  });
}

/* gulp browser-syn - para iniciar só browser */
gulp.task("browser-sync", BrowserSync);

// watch - observa alterações nos arquivos
function watchSass() {
  gulp.watch("scss/*.scss", compilaSass);
  gulp.watch("css/lib/*.css", pluginCSS).on('change', bs.reload); // atualiza se alterar o css
  gulp.watch("*.html").on('change', bs.reload); // atualiza se alterar o html
  gulp.watch("js/scripts/*.js", gulpJS).on('change', bs.reload); // atualiza se alterar o js
  gulp.watch("js/lib/*.js", pluginsJS).on('change', bs.reload); // atualiza se alterar o js
}   

/* gulp watch - para iniciar só watch */
gulp.task('watch', watchSass);

/* gulp - para iniciar só watch e o browser */
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'alljs', 'pluginjs'));