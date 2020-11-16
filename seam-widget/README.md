# How to embed the widget into your web page

Keep in mind that in all of these examples you have to provide the correct url that links to where your widget is hosted.

## If you want it to be loaded on every page of your application

The following code can be included in your index.html header tag and will load the widget on every page which is dependent on that particular index.html (which includes all of the routes of a react app, of an angular app, etc.)

```
<script>
  (function (w, d, s, o, f, js, fjs) {
    w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', '_seam_widget', 'http://localhost:8080/widget.js'));
_seam_widget('init');
</script>
```

## If you want it to be loaded in a particular html element

### Using static html

If your webpage is a simple html document that does not use any of the popular component-based rendering frameworks, you may simply put the following code wherever you want in your document. 

```
<div id="seam-root">
  <script>
    (function (w, d, s, o, f, js, fjs) {
      w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', '_seam_widget', 'http://localhost:8080/widget.js'));
    _seam_widget('init', { element: document.getElementById('seam-root') });
  </script>
</div>
```

### Using React

If your webpage is rendered using React or any framework that allows the use of script tags in components, you may add the code give in the section "Using static html" inside of your component JSX.

### Using Angular

If your webpage is rendered using Angular, we have to embed the component in a particular way in order to have it load under a specific container. First of all, add the following div to one of your component templates:

```
<div id="seam-root"></div>
```

Then, we have to add the script dynamically to the inside of the div after the component has finished loading. you may do so by adding AfterViewInit to your component and using the following method:

```
ngAfterViewInit(): void {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.innerHTML = `(function (w, d, s, o, f, js, fjs) {
      w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
    }(window, document, 'script', '_seam_widget', 'http://localhost:8080/widget.js'));
    _seam_widget('init', { element: document.getElementById('seam-root') });`;
  document.getElementById('seam-root').appendChild(script);
} 
```