const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

const paths = {
  source: {
    scripts: [
      'static/js/vendor/barba.min.js',
      'static/js/vendor/web-animations.min.js',
      'static/js/vendor/prism.js',
      'static/js/src/main.js',
    ],
    styles: [
      'static/css/vendor/*.css',
      'static/scss/**/*.scss'
    ]
  },
  target: {
    scripts: 'static/js',
    styles: 'static/css',
    sourcemaps: './maps',
  }
};

gulp.task('styles', () => {
  gulp.src(paths.source.styles)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
    .pipe($.concat('app.css'))
    .pipe($.autoprefixer({browsers: ['last 2 versions', '> 1%', 'Firefox ESR']}))
    .pipe($.cssnano())
    .pipe($.sourcemaps.write(paths.target.sourcemaps))
    .pipe(gulp.dest(paths.target.styles))
});

gulp.task('scripts', () => {
  gulp.src(paths.source.scripts)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe($.sourcemaps.write(paths.target.sourcemaps))
    .pipe(gulp.dest(paths.target.scripts))
});

gulp.task('default', ['scripts', 'styles']);
