module.exports = function (grunt) {
	grunt.initConfig({
		
             less: {
                 development: {
                     options: {
                         paths: ["less/"]
                     },
                     files: {"css/style.css": "less/style.less"}
                 },
                 production: {
                     options: {
                         paths: ["less/"],
                         cleancss: true
                     },
                     files: {"css/style.css": "less/style.less"}
                 }
             },
		cssmin: {
			dist: {
				files: {'css/style.min.css':'css/style.css'}
			}
		}, 
		watch: {
			dist: {
				files: ['less/*.less','js/main.js'],
				tasks: ['less','cssmin']
			},
			grunt: {
				files: ['Gruntfile.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-less');
};