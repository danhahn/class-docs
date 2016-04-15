# Links

Links are away to connect one document to another.  The connecting file could be local or an an other website, telephone number, email address or any file to be downloaded.

## Anchor tag

The HTML Anchor Element `<a>` defines a hyperlink to a location on the same page or any other page on the Web. It can also be used (in an obsolete way) to create an anchor point—a destination for hyperlinks within the content of a page, so that links aren't limited to connecting simply to the top of a page.

### Attributes

* `href` - This was the single required attribute for anchors defining a hypertext source link, but is no longer required in HTML5. The href attribute indicates the link target, either a URL or a URL fragment. A URL fragment is a name preceded by a hash mark (#), which specifies an internal target location (an ID) within the current document. URLs are not restricted to Web (HTTP)-based documents. URLs might use any protocol supported by the browser. For example, file, ftp, and mailto work in most user agents.
* `target` - This attribute specifies where to display the linked resource. In HTML4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:
    * \_blank: Load the response into a new HTML5 browsing context (window or tab based on the configuration of the local browser).

### Example

```html
<a href="file.html">Link to file</a>
```
<a href="file.html">Link to file</a>

## Relative paths

A relative link specifies the name of the file to be linked to only as it is related to the current document.

### Both in the same folder

When linking to a file in the same folder the href just needs the file name.

```html
<a href="same-folder.html">same folder link</a>
```

### Link to file in subfolder

When Linking to a file in a subfolder you need to define both the folder and the file name.

```html
<p>You need to <a href="folder_name/filename.html">define both the folder and file name</a></p>
```

**Reminder:** since a link is an inline element it needs to be wrapped in a block element like a `<p>`.  You can place a link at any point within a paragraph or any other elements.

### Linking from a subfolder to its parent

When linking from a subfolder to the contents of its parent directory you need to add `../` for every directory level you want to ascend.   So if you need to go up two directories you would need to prepend the file with `../../`.  

```html
<p>Ascend one directory <a href="../file_name.html">to find this file.</a></p>
```

### Ascending and descending directories in one paths

It could be the case that you need to ascend one or more directories only to have descend in to an other directory.  It is valid to to have both `../` and `folder_name` in the same `href` value.

```html
<p>Ascend two directory <a href="../../folder_name/file_name.html">and descending one directory to find this file.</a></p>
```

## Absolute external paths

An absolute external path is any path that contains the full url including `http://` or `https://` depending on if it is secure or not.

Sometimes some sites will require you add `www` and others will not.  This is configuration of each server.  

###Linking to an external site or file

```html
<p>When linking an <a href="http://www.svahtml.com">external site</a> or file you need to put the full path in the href.</p>
```

### Subdomains

Sometime website will be configured to replace the `www` with another name or value this is called a subdomain.

```html
<p>Some sites have a <a href="http://html.svahtml.com">subdomain</a></p>
```

### Full path

You can also link to a file by putting the full path in the `href`

```html
<p>Link to a <a href="http://html.svahtml.com/files/fall/2014/syllabus.pdf">external file</a></p>
```

## Building a Navigation

In terms of html a navigation is nothing more that a list of links.  To better define it as a navigation wrap the list with a `<nav>`.

```html
<nav>
	<ul>
		<li><a href="http://www.cnn.com">News</a></li>
		<li><a href="http://www.espn.com">Sports</a></li>
		<li><a href="http://www.weather.com">Weather</a></li>
	</ul>
</nav>
```
**Note:** at this point we have just set up the HTML to represent the content correct.  It will get its look and feel from the CSS that we will add later.
