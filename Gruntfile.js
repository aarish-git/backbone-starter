module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      html: {
        src: "index.html",
        dest: "build/"
      }
    },
    concat: {
      options: {
        separator: ";"
      },
      scripts: {
        src: [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/underscore/underscore.js",
          "node_modules/backbone/backbone.js",
          "node_modules/handlebars/dist/handlebars.js",
          "src/index.js",
          "src/app.js",
          "src/Modal.js",
          "src/collection.js",
          "src/Views/HomeView.js",
          "src/Views/todoView.js",
          "src/routes.js"
        ],
        dest: "build/js/scripts.js"
      }
    },
    uglify: {
      options: {
        banner:
          '/! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> /\n'
      },
      build: {
        src: "build/js/scripts.js",
        dest: "jsmin/scripts.js"
      }
    },
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: [
          "node_modules/bootstrap/dist/css/bootstrap.css",
          "./assets/css/app.css"
        ],
        dest: "build/styles.css"
      }
    },
    watch: {
      files: ["src/**", "assets/css/**"],
      tasks: ["default"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("default", [
    "copy",
    "concat",
    "uglify",
    "watch"
  ]);
};
