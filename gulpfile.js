const { src, dest, parallel, watch, lastRun } = require('gulp');
const pandoc = require('gulp-pandoc');
const mathjax = require('gulp-mathjax-page');

const post = {
    options: {
        from: 'markdown',
        to: 'html5',
        ext: '.html',
        args: ['--template', './pandoc_templates/post.html', '--metadata', 'pagetitle="SCE Blog"', '--mathjax']
        // pagetitle provided only to satisfy pandoc's pagetitle requirement for HTML5 documents.
        // Not required.
    },
    src: './posts/*.md',
    dest: './_posts/'
};

const math = {
    options: {
        mjpageConfig: {
            output: 'html',
            fragment: 'true'
        },
        mjnodeConfig: {}
    }
};

function posts(cb) {
    src(post.src)
        .pipe(pandoc(post.options))
        .pipe(mathjax(math.options))
        .pipe(dest(post.dest));
    cb();
}

function watchPosts(cb) {
    src(post.src, { since: lastRun(watchPosts)})
        .pipe(pandoc(post.options))
        .pipe(mathjax(math.options))
        .pipe(dest(post.dest));
    cb()
}

exports.build = parallel(posts);
exports.watch = function () {
    watch(post.src, { ignoreInitial: false }, watchPosts)
}