hexo.extend.filter.register('after_render:html', function(data) {
    var re = /(\|{2}?)((.|\n)+?)(\|{2}?)/gm;
    var result = str.replace(re,'<span class="rsb">$2</span>');
    return result;
    //data.content = data.content.replace(re,'<span class="rsb">$2</span>');
    //return data;
});
