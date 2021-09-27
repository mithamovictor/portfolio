'use strict'

const gulp = require( 'gulp' );
const autoprefixer = require( 'gulp-autoprefixer' );
const sass = require( 'gulp-sass' );
const cleanCss = require( 'gulp-clean-css' );
const sourcemaps = require( 'gulp-sourcemaps' );
const rimraf = require( 'rimraf' );

// Delete css folder
gulp.task( 
	'clean', 
	function(done) {
		rimraf( 
			'./dist/css', 
			done 
		);
	}
);

// Compile css
gulp.task( 
	'css', 
	() => {
		return gulp.src( './scss/**/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			outputStyle: 'compressed'
		})
		.on( 
			'error', 
			sass.logError 
		) )
		.pipe( autoprefixer() )
		.pipe( cleanCss({
			compatibility: 'ie9'
		}))
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( 
			'./dist/css' 
		) );
	}
);

// Watch for changes
gulp.task( 'watch', function() {
	gulp.watch( 
		'./scss/**/*.scss', 
		gulp.parallel( 
			'css' 
		) 
	);
});

// Build for deployment
gulp.task( 
	'build', 
	gulp.series( 
		'clean', 
		gulp.parallel( 
			'css' 
		) 
	) 
);