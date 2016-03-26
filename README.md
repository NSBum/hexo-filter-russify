# hexo-filter-russify
Custom filter for hexo blog to change color and font of selected Cyrillic text

This extends the [Hexo](https://hexo.io) blogging system with a filter that converts text demarcated by double pipes `||` to a new span with custom markup.

For example, `||мой, твой, его, её, наш, ваш, их||` will be rendered as:

![Rendered output](http://i.imgur.com/0X6U8DM.png)

##Installation

``` bash
$ npm install hexo-filter-russify --save
```

In your theme css, implement the Cyrillic markup for the span:

``` css
span.rsb {
    font-family: Georgia,serif;
    color: #B30000;
    font-weight: bold;
}
```

##Usage

Anything that you want rendered in this fashion, enclose in double pipes as above.
