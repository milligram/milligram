module.exports = function ( grunt ) {

	'use strict';


	// ================================================================
	// CONFIG TASKS
	// ================================================================

	// Define the configuration
	grunt.initConfig({

		// DEFAULT TASK
		// ================================================================

		// Specifics of npm's package.json handling
		pkg: grunt.file.readJSON( 'package.json' ),

		// Watch files and process the above tasks
		watch: {
			options: {
				livereload: false
			},
			grunt: {
				files: [
					'gruntfile.js'
				],
				options: {
					reload: true
				}
			},
			sass: {
				files: [
					'sass/**/*.sass'
				],
				tasks: [
					'sass',
					'autoprefixer'
				]
			}
		},

		// BUILD TASKS
		// ================================================================

		// Clear files and folders
		clean: {
			all: [ 'dist' ]
		},

		// Compile SASS files to CSS
		sass: {
			minify: {
				options: {
					noCache: true,
					sourcemap: 'none',
					style: 'compressed'
				},
				files: {
					'dist/milligram.min.css': [ 'sass/**/*.sass', '!sass/**/_*.sass' ]
				}
			},
			default: {
				options: {
					noCache: true,
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'dist/milligram.css': [ 'sass/**/*.sass', '!sass/**/_*.sass' ]
				}
			}
		},

		// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
		autoprefixer: {
			all: {
				options: {
					browsers: [
						'last 2 versions',
						'ie 8',
						'ie 9'
					],
					map: false
				},
				files: {
					'dist/milligram.min.css': 'dist/milligram.min.css',
					'dist/milligram.css': 'dist/milligram.css'
				}
			}
		}

	});


	// ================================================================
	// REGISTER TASKS
	// ================================================================

	// Default tasks
	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	// Build tasks
	grunt.registerTask( 'build', [
		'clean',
		'sass',
		'autoprefixer'
	]);


	// ================================================================
	// LOAD TASKS
	// ================================================================

	// Automatically loading Grunt tasks
	require( 'load-grunt-tasks' )( grunt );

	// Display the elapsed execution time of Grunt tasks
	require( 'time-grunt' )( grunt );


};


// Code is Poetry
