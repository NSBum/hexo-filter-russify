hexo.extend.filter.register('after_post_render', function(data) {
    var re = /(\|{2}?)((.|\n)+?)(\|{2}?)/gm;
    data.content = data.content.replace(re,'<span class="rsb">$2</span>');
    return data;
});
