module.exports = function (grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    // Project configuration.
    grunt.initConfig({
        connect: {
            localhost: {
                options: {
                    port: 15001,
                    base: "dist/",
                    keepalive: true
                }
            }
        }
    });

};
