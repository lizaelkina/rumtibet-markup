'use strict';

import {paths} from '../gulpfile.babel';
import gulp from 'gulp';
import pug from 'gulp-pug';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import browsersync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('views', () => {
  return gulp.src(paths.views.src)
    .pipe(pug({
      pretty: true
    }))
    //ссылки
    .pipe(gulpif(production, replace( /(['"](?!http)[^'"]*)(\.css)/gm, '$1.min.css')))
    .pipe(gulpif(production, replace( /(['"](?!http)[^'"]*)(\.js)/gm, '$1.min.js')))
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
});