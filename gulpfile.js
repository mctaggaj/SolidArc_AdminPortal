/**
 * @author Jason McTaggart
 */

var gulp = require('gulp');
var config = require('./buildConfig.json');
var serverConfig = require('./serverConfig.json');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require("gulp-ng-html2js");
var watch = require('gulp-watch');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var util = require('util'),
    spawn = require('child_process').spawn,
    server;


gulp.task('copy-index-html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./package'));
});

gulp.task('html2js', function () {
    return gulp.src(config.partials.src)
        .pipe(ngHtml2Js({
            moduleName: "app-partials",
            prefix: "/src/"
        }))
        .pipe(concat("partials.js"))
        .pipe(gulp.dest("package/src"));
})

gulp.task('copy-styles', function() {
    return gulp.src(config.styles.src,{ base: './' })
        .pipe(less())
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task('copy-images', function() {
    return gulp.src(config.images.src,{ base: './' })
        .pipe(gulp.dest(config.images.dest));
});

gulp.task('copy-fonts', function() {
    return gulp.src(config.fonts.src,{ base: './' })
        .pipe(gulp.dest(config.images.dest));
});

gulp.task('copy-bower-components', function() {
    return gulp.src(config.bower_components.src,{ base: './' })
        .pipe(gulp.dest(config.bower_components.dest));
});


gulp.task('build-ts', function() {
        return gulp.src(config.ts.src)
            .pipe(sourcemaps.init())
            .pipe(ts({
                sortOutput: true
            })).js
            .pipe(concat("app.js"))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.ts.dest));
    }
);

gulp.task('watch', function () {
    gulp.watch(config.ts.src, ["deploy"]);
    gulp.watch(config.styles.src, ["deploy"]);
    gulp.watch(config.styles.all, ["deploy"]);
    gulp.watch('./index.html', ["deploy"]);
    gulp.watch(config.partials.src, ["deploy"]);
});

gulp.task("deploy", function () {
    return runSequence("build","deploy-copy");
})

gulp.task("deploy-copy", function () {
    setTimeout(function () {
        console.log("Deploying");
        gulp.src("./package/**/*")
            .pipe(gulp.dest("./dist/package/"))
        console.log("Deployed");
    },5000);

})

gulp.task("build", function () {
    return runSequence(["build-ts", "copy-index-html", "html2js", "copy-images", "copy-fonts","copy-bower-components", "copy-styles"]);
});

gulp.task("run-server", function() {
  console.log("Going to start the server at address " + serverConfig.host + ":" + serverConfig.port);
  server = spawn('./run-server.sh', [serverConfig["host"], serverConfig["port"]]);
  function echo(msg) { console.log("" + msg); }
  server.stdout.on('data', echo);
  server.stderr.on('data', echo);
  server.on('exit', function(code) {
    echo("Server exited with code " + code);
  });
})
gulp.task("clean", function() {
  rm = spawn('rm', ['-rf', 'dist/package', 'package']);
  function echo(msg) { console.log("" + msg); }
  rm.on('exit', function(code) {
    echo("Cleaned package files");
  });
});

gulp.task('default', ["deploy", "watch", "run-server"]);

gulp.task('no-server', ["deploy", "watch"])
