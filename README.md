# jQuery lazyload

jQuery lazyload wont make your site faster.

It just fades in elements when the user scrolls down the page.

## Example

### Put the elements that will lazy show in this way

You can use modernizr or similar to add a class to your code when javascript is available. 

Add this to your CSS:

  <pre>
    <code>
      .js .lazy {opacity:0;}
    </code>
  </pre>

  <pre>
    <code>
      &lt;div class="lazy"&gt; Div content &lt;/div&gt;
    </code>
  </pre>

### Load the library

  <pre>
    <code>
      &lt;script src="jquery.js"&gt;&lt;/script&gt;
      &lt;script src="jquery.lazyload.js"&gt;&lt;/script&gt;
    </code>
  </pre>

### Turn on lazyload for the selected elements

In this case, there is a 10px threshold, so the elements will load when the fold is 10px from them. The threshold is optional.

  <pre>
    <code>
      &lt;script&gt;
        $(function(){
          $('div.lazy').lazyload({threshold: 10});
        });
      &lt;/script&gt;
    </code>
  </pre>