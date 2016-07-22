﻿module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    "public/css/perk.min.css": "less/perk.less"
                }
            }          
        },
        watch: {
            files: ['less/*.less','less/mixins/*.less'],
            tasks: ['less'],
            options: {
                spawn: false,
            }
        }
    });
    
    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less','watch']);

}