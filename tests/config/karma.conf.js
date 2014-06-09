module.exports = function(config){
  config.set({
    basePath : '../../',

    files : [
      'public/app/lib/angular/angular.js',
      'public/app/lib/angular/angular-*.js',
      'public/app/lib/ui-utils-0.1.1/ui-utils.js',
      'public/app/lib/angular-multiselect-master/src/multiselect.js',
      'public/app/modules/**/*.js',
      'tests/test/unit/*.js',
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
