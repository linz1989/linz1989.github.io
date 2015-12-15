var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    mincss = require('gulp-mini-css'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    connect=require('gulp-connect'),
    rev = require('gulp-rev'),//对文件名加MD5后缀
    notify = require('gulp-notify'),//控制台输出信息
    runSequence = require('gulp-sequence'),//顺序执行task
    revCollector = require('gulp-rev-collector');//路径替换

var raw_css = 'raw/css',
    com_css = 'compress/css',
    raw_js = 'raw/js',
    com_js = 'compress/js',
    raw_html = 'raw/html';

//处理scss
gulp.task('sass',function () {
    return sass(raw_css + '/**/*.scss')
        .pipe(mincss())
        .pipe(rev()) //添加md5后缀
        .pipe(gulp.dest(com_css))//输出到compressed目录
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(rename('css-rev-manifest.json')) //重命名
        .pipe(gulp.dest('manifest')); //- 将 rev-manifest.json 保存到 rev 目录内
});

//处理js
gulp.task('minjs', function () {
    return gulp.src(raw_js + '/**/*.js')
        //.pipe(changed(com_js))
        .pipe(uglify())
        .pipe(rev()) //添加md5后缀
        .pipe(gulp.dest(com_js))
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(rename('js-rev-manifest.json')) //重命名
        .pipe(gulp.dest('manifest')); //- 将 rev-manifest.json 保存到 rev 目录内
});

//替换html中的js、css文件名，并输出到当前根目录下面
gulp.task('rev', function() {
    return gulp.src(['manifest/*-rev-manifest.json',raw_html+'/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./'))                                 //- 替换后的文件输出的目录
    //.pipe(notify({ message: 'after manifest files....' }));
});

//清理
gulp.task('clean', function() {
    return gulp.src(['*.html','compress/*','manifest/*'], { read : false })
        .pipe(clean());
});

//启动server
gulp.task('connect', function() {
    connect.server({
        port:8018
    });
});

//监控改变
gulp.task('watch', function () {
    gulp.watch(raw_css + '/**/*.scss', ['sass']);
    gulp.watch(raw_js + '/**/*.js', ['minjs']);
    gulp.watch(raw_html + '/*.html', ['rev']);
});

//顺序执行任务
gulp.task('prod', function(cb) {
    runSequence('clean', ['sass', 'minjs'],'rev', cb);
});


gulp.task('default',function () {
    gulp.run('prod');
    gulp.run('connect');
    gulp.run('watch');
});
