'use strict';

import {paths} from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';

gulp.task('files', () => {
  return gulp.src(paths.files.src)
    .pipe(gulp.dest(paths.files.dist))
    .pipe(debug({
      'title': 'Files'
    }));
});