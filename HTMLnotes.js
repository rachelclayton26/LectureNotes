/*

// HTML: HYPER TEXT MARKUP LANGUAGE

        - tags are used to surround content and apply meaning. (aka, p, h2, etc)

        - src is an attribue used to specify a URI for an external file or resource

        - class=" " gives a class value to a given tag, allows them to be grabbed by CSS later on


    // STARTER CODE (aka boilerplate--goes in the index.html file, shortcuti is ! + tab)

            Example Syntax:
            <!DOCTYPE html>
            <html>
              <head>

              </head>
              <body>
                <h1>Hello World</h1>
              </body>
            </html>
    
        - DOCTYPE is the of doc, aka HTLM

        - <head> comes in between the <html> and <body> tags and contains metadata. Excluding the <title> tag, contents inside the head tag are not visible on the page.

        - <title> tag is required in all HTML docs and difines the title in the browser toolbar, provides a title for the page when it's added to favorites, and displays a title for the page in search-engine results

        - <body> conatins the bulk of the content and will render to the DOM and be visible


    // H & P TAGS

        - <p> is a paragraph tag

        - <h1>, <h2>, <h3>, <h4>, <h5> & <h6> are header tags with pre-applied formatting (can be over-written)


    //LISTS

        - <ul> is an unordered list (bullet point by default)

        - <ol> is an ordered list (numbered by default)

        - <li> stands for "list item" and is used in both <ul>s and <ol>s


    //LINKS

        - <a> is and anchor tag and marks the beginging and end of a hypertext link.

        - "href" a tag with links to the url or local path for your link (common syntax is <a href="www.google.com">Google</a>)

        - target="blank", causes link to open on a new tab


    //IMAGES

        - <img> tags define images and DO NOT have a closing tag.

        - <hr> stands for "horizontal rule," it desplays a horizontal line between elements for separation, and is self-closing (doesn't have a closing tag)

        - <br> is a line break; it results in a new line. It is self-closing.


    //TABLES

        - <table> tags define HTML tables.
        - <tr> defines a table row.
        - <th> defines a table header
        - <td> defines a data cell in that table


    //DIVS 

        - <divs> tags stand for "division," they are basically containers for code and can be given an attribue, class or id, that is referenced with CSS and JS


    //INPUTS

        - <input /> tag provides and empty field which can be filled with text. It does not have a closing tag as it is an "empty" element (self-closing or void). 


    //FORMS

        - <form> a coherent collection of elements

        - <fieldset> empowers us to group related elements tightly inside a form and gives us access to the <legend> tag

        -<legend> tag defines a caption for the <feildset> element

        - <textarea> provides a multi-line text input field. Its possible to specify the number of rows and columns within a given <textarea> but it is not always necessary.

            Extra Reading:
            https://www.w3.org/TR/html401/interact/forms.html


    //SECTIONS

        - <section> tags are like <divs> but they are semantic groupings. They help the browser understand there is a particular grouping (ex. chapters, headers, footers, etc). It allows us to avoid "divitis." It helps us separate code, but moreover indicates that the content inside the section is grouped with a common theme. Divs contain only children. 

            Extra Reading: https://www.w3.org/TR/html/sections.html#the-section-element


    //ARTICLES & HEADERS

        - <header> are containers for other informational elements and act as a title for the element they are contained within. They are NOT the same as "headings."

        - <article> is used for any "independent item of content." An example would be a blog post.


    //FOOTERS

        - <footer> is an element specific for a section or document. It should contain information avout the containing element. Can be used to contain copyright, contact info, terms, and auther info. 

            Extra Reading: 
            http://html5doctor.com/the-footer-element/ (Links to an external site.)
            http://www.creativebloq.com/web-design/website-footers-1131597


    //NAVS

        - <nav> tags are used to collect a set of navigation links, ones that traverse different pages in your application, usually in a "navbar" at the top of the page

            Extra Reading:
            http://www.html-5-tutorial.com/nav-element.htm


    //iFRAMES

        - <iframe> is used to embed another document, ex. a youtube video, inside of an HTML doc.  

            Common syntax:
            <iframe width="500" height= "300" src="https://www.example.com/embed/extention" frameborder = "0" allowfullscreen></iframe>

            Extra Reading: 
            http://html.com/tags/iframe/



    ** NOTE: You can use CSS directly in a HTML doc by using the <style> tag. 

    EX:

    <style>
    body {
    background-color: blue;
    }
    </style>

    OR

    <p style="color: red;">Hello World!</p>


*/




