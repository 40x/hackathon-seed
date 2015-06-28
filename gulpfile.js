//required stuff
var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var liveReload = require('browser-sync');
var wiredep = require('wiredep').stream;
var concat = require('gulp-concat');


//create css
gulp.task('sass', function(){
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist/css'));
});

//reload when something changes once scss is converted to css
gulp.task('trigger-reload', ['sass'], function(){
    liveReload.reload('./index.html');
});

//inject once scss is converted to css
gulp.task('inject',['sass'], function () {
    var target = gulp.src('./index.html');

    var sources = gulp.src([
                    'src/**/*.module.js', //load all modules first
                    'src/**/*.controller.js',  //load all controllers
                    'src/**/*.directive.js', //load all directives
                    'src/**/*.factory.js', //load all factories
                    'src/**/*.service.js', //load all services
                    'src/**/*.filter.js', //load all services
                    'dist/css/*.css' //pick the concatenated css from the converted scss files

                    ], {read: false});

    return target
        .pipe(wiredep({
            devDependencies: true
        }))
        .pipe(inject(sources))
        .pipe(gulp.dest('./'));
});


//set watchers to reload
gulp.task('watch', function(){
    liveReload({
        server: {
            baseDir:'./'
        }
    });
    gulp.watch('src/**/*.js', ['trigger-reload']); //js change
    gulp.watch('src/**/*.scss', ['trigger-reload']); //scss change
    gulp.watch('src/**/*.html', ['trigger-reload']); //html change
});


//default
gulp.task('default', ['sass', 'inject', 'watch'], function(){});