module.exports = function(config){
  config.set({
    basePath : '../../',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/angular-sanitize/angular-sanitize.js',
      'public/app/lib/angular-multiselect-master/src/multiselect.js',
      'public/app/modules/**/*.js',
      'public/app/utilities/**/*.js',
      'public/app/utilities/schedule/scheduleModule.js',
      'tests/test/unit/*.js',
      // MOMENT
      'public/bower_components/moment/moment.js',
      'public/bower_components/moment-timezone/moment-timezone.js',
      'public/app/lib/moment-timezone-data.js',
      'public/app/js/non-angular/moment.config.js'
    ],

    exclude : [
      'public/app/lib/angular/angular-loader.js',
      'public/app/lib/angular/*.min.js',
      'public/app/lib/angular/angular-scenario.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};