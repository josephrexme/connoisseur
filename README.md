# Connoisseur Theme

Connoisseur is a simple theme for blogging with a gradiented home page, smooth transitions and animations for features like page navigation, share button toggle, and a foldable wrapper for disqus comments.

# Features
- Reading time display
- Syntax highlight with [prism](//prismjs.com)
- Animated reading progress
- Supports for RSS feeds
- Disqus Comments
- Google Analytics
- Sharing options
- JSONLD Schema for page SEO
- Social icons
- Display word count only on local version of blog


Homepage

![Screenshot](https://cdn.rawgit.com/josephrexme/windener/60018193/images/screenshot.png)


Single post page

![Blog screenshot](https://cdn.rawgit.com/josephrexme/windener/3d1a6529/images/screenshot-single.png)


## Installation

Inside the folder of your Hugo site run:

    $ git clone https://github.com/josephrexme/windener.git themes/windener

If you use [netlify](https://netlify.com), you should add that directory as a submodule:

    $ git submodule add -b master https://github.com/josephrexme/windener.git themes/windener

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

### Configuration

The [example config](https://github.com/josephrexme/windener/blob/master/exampleSite/config.toml) can be copied to the root of your hugo folder directory. Customize the configurations as you wish.

**Logo** and **Favicon** could be changed from the config file. You could also add username for **disqus**, **google analytics** code. Feel free to [file an issue](https://github.com/josephrexme/windener/issues).

#### Adding pages to the navigation
Create a markdown file in the content directory (e.g `about.md`) and add a `_index.md` and you can create as many static pages as you want that way but note that the theme doesn't visually organize the pages into a hamburger when you have too many.

## License

This theme is released under the MIT license. For more information read the [license](https://github.com/josephrexme/windener/blob/master/LICENSE.md).

## Todo

- Bundle assets with gulp

