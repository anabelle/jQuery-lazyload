# jQuery lazyload

jQuery lazyload makes your site faster.

It loads your images only when the user scrolls down the page.

## Example

### Put the images that will lazy load in this way

Noscript is necessary for the browsers with JavaScript off.

  <pre>
    <code>
      &lt;img class="lazy" src="placeholder.gif" original-src="original-image.jpg" /&gt;
      &lt;noscript&gt;
        &lt;img src="original-image.jpg" /&gt;
      &lt;/noscript&gt;
    </code>
  </pre>

### Load the library

  <pre>
    <code>
      &lt;script src="jquery.js"&gt;&lt;/script&gt;
      &lt;script src="jquery.lazyload.js"&gt;&lt;/script&gt;
    </code>
  </pre>

### Turn on lazyload for the selected images

In this case, there is a 30px threshold, so the images will load when the fold is 30px from them. The threshold is optional.

  <pre>
    <code>
      &lt;script&gt;
        $(function(){
          $('img.lazy').lazyload({threshold: 30});
        });
      &lt;/script&gt;
    </code>
  </pre>