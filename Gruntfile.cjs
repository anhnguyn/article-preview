module.exports = function (grunt) {
  grunt.initConfig({
    svg_sprite: {
      basic: {
        // Target basics
        expand: true,
        src: ["**/*.svg"],
        dest: "src",
        // Target options
        options: {
          mode: {
            css: {
              // Activate the «css» mode
              render: {
                css: true, // Activate CSS output (with default options)
              },
            },
          },
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-svg-sprite");

  grunt.registerTask("default", ["svg_sprite"]);
};
