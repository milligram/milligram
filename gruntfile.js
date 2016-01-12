module.exports = function ( grunt ) {

	'use strict';


	// ================================================================
	// CONFIG TASKS
	// ================================================================

	// Define the configuration
	grunt.initConfig({

		// Specifics of npm's package.json handling
		pkg: grunt.file.readJSON( 'package.json' ),

		// Banner
		banner:
			'/*!\n'+
			' * Milligram v<%= pkg.version %>\n'+
			' * <%= pkg.homepage %>\n'+
			' *\n'+
			' * Copyright (c) '+new Date().getFullYear()+' CJ Patoilo\n'+
			' * Licensed under the <%= pkg.license %> license\n'+
			'*/\n\n',

		// DEFAULT TASK
		// ================================================================

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
					'src/**/*.sass'
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

		// Compile Sass files to CSS
		sass: {
			minify: {
				options: {
					banner: '<%= banner %>',
					noCache: true,
					sourcemap: 'none',
					style: 'compressed'
				},
				files: {
					'dist/milligram.min.css': [ 'src/**/*.sass', '!src/**/_*.sass' ]
				}
			},
			default: {
				options: {
					banner: '<%= banner %>',
					noCache: true,
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'dist/milligram.css': [ 'src/**/*.sass', '!src/**/_*.sass' ]
				}
			}
		},

		// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database.
		autoprefixer: {
			minify: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: {
						inline: false
					}
				},
				files: {
					'dist/milligram.min.css': 'dist/milligram.min.css'
				}
			},
			default: {
				options: {
					browsers: [
						'last 1 versions'
					],
					map: false
				},
				files: {
					'dist/milligram.css': 'dist/milligram.css'
				}
			}
		}

	});


	// ================================================================
	// REGISTER TASKS
	// ================================================================

	// Default task
	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	// Build task
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
