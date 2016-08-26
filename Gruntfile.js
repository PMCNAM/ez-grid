module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded',
					precision: 3,
					sourcemap: 'none'
				},
				files: {
					'css/ezgrid.css': 'scss/ezgrid.scss'
				}
			}
		},

		cssmin: {
			minify: {
				src: 'css/ezgrid.css',
				dest: 'css/min/ezgrid.min.css'
			}
		},

		watch: {
			css: {
				files: ['scss/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('default',['watch']);
	grunt.registerTask('build', ['sass', 'cssmin']);

}
