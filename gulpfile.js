const gulp = require('gulp');
const lost = require('lost');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const pxtorem = require('postcss-pxtorem');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const include = require('gulp-file-include');
const watch = require('gulp-watch');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util')

const srcDir = `${process.cwd()}/src`;
const distDir = `${process.cwd()}/public`;

const cssNanoConfig = {
	zindex: false,
	minifyFontValues: false,
	discardUnused: {fontFace: false},
	autoprefixer: ['last 2 versions', 'IE >= 9']
}

const sources = {
	watchCss: `${process.cwd()}/_sass/**/*.scss`,
	styles: `${process.cwd()}/_sass/main.scss`,
	watchJs: `${process.cwd()}/assets/scripts/**/*.js`,
	js: `${process.cwd()}/assets/scripts/main.js`,
	html: `${srcDir}/view/*.html`
}

const dist = {
	styles: `${process.cwd()}/assets/css`,
	js: `${process.cwd()}/assets/scriptsBuild`,
	html: `${distDir}/pages`
}

gulp.task('sass', () => {
	return gulp.src(sources.styles)
	.pipe(sourcemaps.init())
	.pipe(concat('app.min.css'))
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss([
		pxtorem(),
		autoprefixer(cssNanoConfig),
		cssnano(),
		lost()
		]))
	.pipe(rename('styles.css'))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.styles));
});

gulp.task('scripts', () => {
	return gulp.src(sources.watchJs)
	.pipe(concat('kombucha.min.js'))
	// .pipe(uglify())
	.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
	.pipe(gulp.dest(dist.js))
})

gulp.task('watch', ['sass', 'scripts'], () => {
	gulp.watch(sources.watchCss, ['sass']).on('change', browserSync.reload);
	gulp.watch(sources.watchJs, ['scripts']).on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'scripts'])