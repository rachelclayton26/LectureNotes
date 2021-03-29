/*

// DOM: DOCUMENT OBJECT MODLE

    //DOM EXPLAINED

        DOM:
            - allows our JS to interact with the HTML and CSS of our page (basically allows us to tie a JavaScript function to our HTML/CSS and make it happen on command [HTML button click = do java script function = function can use CSS controls changing a style])

            - is an object model: its the entire HTML document (or "page") represented as an object

            - just like any object, DOM has properties and methods (functions)
                * Example property is "style" for a given <p>


    //SETUP

        Ex:

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
            </html>


    //SYNTAX

        documentName.selectionFunction("ID/CLASS/TAG").propertyofHtmlElement.propertyofthatpreviouselement = "value"; (doesn't have to include value, but can)

            Ex:

            document.getElementById('testParagraph').style.color= 'blue';


            Types of Methods (Examples):

            * getElementsByTagName("p");
            * getElementsbyClassName("classHere");
            * getElementbyId("idHere");
            * querySelectorAll("p.classNameHere");
            

    //QUERY SELECTOR

        - uses CSS style selectors
        - returns a pseudo-array-like list of matching elements called a NODE LIST (select an element from resulting list via array-notation, even if there is only one element)

        Example:

            <body>
                <p id="testParagraph">sample text</p>
                <p class="sampleClass">This paragraph has a class of 'sampleClass'</p>
                <script type="text/javascript">
                    console.log(document.querySelectorAll("p.sampleClass"));
                </script>
            </body>
        
        Consuled Results:

            NodeList [p.sampleClass]
                > 0: p.sampleClass
                    length: 1
                > _proto_: NodeList


    //ELEMENT PROPERTIES IN DOM

        - STYLE is one of the most common properties to change. It's referencing the CSS of the element.
            
            Ex:  document.getElementById('testParagraph').style.color= 'blue';
            

        - INNERTEXT is a property that references only the text displayed on the screen " "

            Ex:  document.querySelectorAll("p.sampleClass")[0].innertext = "My text was changed!";


        - INNERHTML is a property that references only the HTML elements inside the tag.

            Ex:  document.querySelectorAll("p.sampleClass")[0].innerHTML = "<span>I an a whole new element!</span>";

                * this tag will create an entirely new element inside the tag
            
                * if we wanted to remove elements, we can do the same thing in reverse by simply setting the innerHTML to be blank; that will erase the contents.


    //EVENTS

        - events are what we use to make stuff happen when we want it to--like when a button gets clicked

        - they are a signal that JavaScript receives that will then cause the JS to run a function

            Events include:
                * clicks the mouse
                * presses a key on the keyboard
                * resizes the browser window
                * hovers the mouse over something
                * when a form gets sumitted
                * when the page finishes loading
                * etc
        
    //EVENT LISTENERS

        - JS that waits for an event to happen on an element (example button-click), then runs a particular function 

            Syntax:

            documentName.selectionFunction("ID/CLASS/TAG").addEventListener('event', *function goes here*);


            Ex:

                Anonymous Function:

                    document.getElementByID('clickThisButton').addEventListener('click', () => { 
                        console.log("I was clicked")
                    });

                OR

                Named Function:

                    document.getElementByID('clickThisButton').addEventListener('click', (details) => {     
                        console.log(details)
                    });


        - most of the time, you will want to use TARGET property
        
        - The TARGET property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.

            Example:

                document.getElementByID('clickThisButton').addEventListener('click', (details) => {
                    details.target.style.background.Color = 'red';
                });


    //FULL DOM EXAMPLE
    

        !DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <!-- All of our HTML code will go here -->
            <lable for ="nameInput">Enter Your Name: </lable>
            <input type="text" id="nameInput" placeholder = "John Smith" />

            <p>Welcome!</p>
            <p>No name has been entered</p>

            <script type = "text/javascript">
                document.getElementByID('nameInput').addEventListener('keyup', (event) => {
                    console.log(event);
                });
            </script>
        </body>


    

*/