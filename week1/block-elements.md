# Block Elements

In this lesson we will be talking about block elements. A block element is any element that when rapping content is content will be displayed on his online.  Block elements are able to display padding on the top and the bottom, have a width set on them.

Block elements may also have additional styles based on the tag type.

## Paragraph

The `<p>` element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are usually represented in visual media as blocks of text that are separated from adjacent blocks by vertical blank space.  Paragraphs can contain one or more sentences of content.

### Example

`<p>`Example content.`</p>`

<p>Example content.</p>

### Usage

```html
<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>

<p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit.</p>

```

## Headings

Heading elements implement six levels of document headings, `<h1>` is the most important and `<h6>` is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically( just like the fixed sider bar of this page on the right).

**Usage note:**

* Do not use lower levels to decrease heading font size: use the CSS font-size property instead.
* Avoid skipping heading levels: always start from `<h1>`, next use `<h2>` and so on.

### Example

`<h1>`Heading level 1`</h1>`
`<h2>`Heading level 2`</h2>`
`<h3>`Heading level 3`</h3>`
`<h4>`Heading level 4`</h4>`
`<h5>`Heading level 5`</h5>`
`<h6>`Heading level 6`</h6>`

<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>

### Usage

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

### Line break

The HTML element line break `<br>` produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

Do not use `<br>` to increase the gap between lines of text; use the CSS `margin` property or the `<p>` element.

### Example

`<p>`111 5th Ave`<br>`New York, NY`</p>`

<p>111 5th Ave<br>New York, NY</p>

**Note:** older versions of html it was required to close all tags so you might see a break tag displayed like this `<br />`.  

### Usage

```html
<p>
By Sam Jones<br>
June 30, 2004
</p>
```

## Lists

The `<ol>` Element (or Ordered List) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets.

**Ordered List**

### Example

`<ol>`
&nbsp;&nbsp;&nbsp;&nbsp;`<li>`item 1`</li>`
&nbsp;&nbsp;&nbsp;&nbsp;`<li>`item 2`</li>`
`</ol>`

1. item 1
2. item 2

**Unordered List**

The `<ul>` element (or Unordered List) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless.

### Example

`<ul>`
&nbsp;&nbsp;&nbsp;&nbsp;`<li>`item 1`</li>`
&nbsp;&nbsp;&nbsp;&nbsp;`<li>`item 2`</li>`
`</ul>`

* item 1
* item 2

**Note:** This style of the bullets or numbers is not defined in the HTML description of the page, but in its associated CSS, using the `list-style-type` property.

The `<li>` element (List Item) is used to represent an item in a list.

There is no limitation to the depth and overlap of lists defined with the `<ol>` and `<ul>` elements.

### Usage

```html
<ul>
	<li>Red</li>
	<li>Blue
		<ol>
			<li>Light Blue</li>
			<li>Dark Blue</li>
			<li>Blue Green</li>
		</ol>
	</li>
	<li>Green</li>
</ul>
```

## Blockquote

The `<blockquote>` Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation.

### Example

`<blockquote>`
&nbsp;&nbsp;&nbsp;&nbsp;`<p>`I like to read, especially nonfiction. I love learning, so I study languages, cook, learn basic HTML, and enjoy other activities that stimulate communication and the dark recesses of my musician's brain.`</p>`
`</blockquote>`

<blockquote>
	<p>I like to read, especially nonfiction. I love learning, so I study languages, cook, learn basic HTML, and enjoy other activities that stimulate communication and the dark recesses of my musician's brain.</p>
</blockquote>

### Usage

```html
<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>

<blockquote>
	<p>In '93 to '94, every browser had its own flavor of HTML. So it was very difficult to know what you could put in a Web page and reliably have most of your readership see it.</p>
</blockquote>

<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly.</p>
```

## Page divisions

The `<div>` element (or Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.

`<div>`
&nbsp;&nbsp;&nbsp;&nbsp;`<h2>`Section Title`</h2>`
&nbsp;&nbsp;&nbsp;&nbsp;`<p>`Section Content.`</p>`
&nbsp;&nbsp;&nbsp;&nbsp;`<p>`Section Content.`</p>`
&nbsp;&nbsp;&nbsp;&nbsp;`<p>`Section Content.`</p>`
`</div>`

<div>
	<h2>Section Title</h2>
	<p>Section Content.</p>
	<p>Section Content.</p>
	<p>Section Content.</p>
</div>

**Note:** The `<div>` does not have any visual changes.  All changes will be applied in the css.

### Example

```html
<div>
	<h1>Lorem ipsum dolor.</h1>
	<div>
		<h2>Lorem ipsum dolor.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, a.</p>
		<p>Sequi, rerum ratione ducimus unde porro quibusdam veritatis vitae iure?</p>
		<p>Impedit quas debitis, non, ratione quisquam sequi ipsa adipisci? Incidunt.</p>
	</div>
	<div>
		<h2>A, rerum, debitis.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, cumque.</p>
		<p>Accusantium expedita quae nostrum delectus sapiente debitis perspiciatis veniam officia.</p>
		<p>Numquam perspiciatis culpa porro atque sint officia illo, qui eos?</p>
	</div>
</div>
```

## Div like elements

With HTML 5 there are a number of new elements that are designed to help better semantically lay out the page. These tags act the same as the `<div>` tag but have better naming to help define sections within the page. Well these elements behave the same as a `<div>`  they make it easy for others to come in and understand the code.

### section

The `<section>` element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element.

```html
<section>
    <h1>Heading</h1>
    <p>Bunch of awesome content</p>
</section>
```

### header

The `<header>` element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.

```html
<header>
    <h1>Lorem ipsum.</h1>
</header>
```
### nav

The `<nav>` element  Navigation Element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### footer

The `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

```html
<footer>
    <p>&copy; 2001 Some Website</p>
</footer>
```


### article

The `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). This could be a forum post, a magazine or newspaper article, a blog entry, an object, or any other independent item of content. Each `<article>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<article>` element.

```html
<article>
	<h2>Lorem ipsum.</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, officiis?</p>
	<p>Deserunt, laudantium amet hic ex unde id rem cum nemo.</p>
</article>
```

### aside

The HTML `<aside>` element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts. They often contain the definitions on the sidebars, such as definitions from the glossary; there may also be other types of information, such as related advertisements; the biography of the author; web applications; profile information.

```html
<section>
	<article>
		<h2>Lorem ipsum.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, deserunt?</p>
		<p>Quod vitae laborum, perferendis praesentium vel neque nisi consequatur illum.</p>
	</article>
	<aside>
		<ul>
			<li>Lorem ipsum.</li>
			<li>Dicta, sed!</li>
			<li>Eaque, tempore.</li>
		</ul>
	</aside>
</section>
```

## Page Layout

You can mix and match the element in any way that works for your design.  Most of the visual changes will be handled with your CSS.

```html
<section>
	<header>
		<h1>Polar vortex</h1>
	</header>
	<nav>
		Navigation goes here!
	</nav>
	<section>
		<article>
			<p>
				By Dan Hahn<br>
				<span>January 27, 2016</span>
			</p>
			<p>A <strong>polar vortex</strong> (<em>also known as a polar cyclone, polar low, or a circumpolar whirl</em>) </p>
			<p>The Arctic vortex in the Northern Hemisphere has two centers, one near Baffin Island and the other over </p>
			<h2>Contents</h2>
		</article>
		<aside>
			<ul>
				<li>History</li>
				<li>Identification</li>
				<li>Duration and power</li>
				<li>Climate change</li>
				<li>Ozone depletion</li>
			</ul>
		</aside>
	</section>
	<footer>
		<p>&copy; 2013 My site</p>
	</footer>
</section>
```
