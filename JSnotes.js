/*

// JAVASCRIPT

    //NUMBERS

        - numbers: all numeric values in JS, many other languages refer to these as "int" (integers)
        - console.log(): calls the result

        SHORTHAND OPERATORS

        Operator    Example     Equivalent

           +=       a += b       a = a + b      (addition)
           -=       a -= b       a = a - b      (subtraction)
           *=       a *= b       a = a * b      (multiplication)
           /=       a /= b       a = a / b      (division)
           %=       a %= b       a = a % b      (remainder)

    
    //VARIABLES

        - variables: containers to store values and starts with var, let, or name

        - decloration: stating the variable name

        - initalize: giving the variable and assigned value

            EX:
            let     x            =              10;
                (variable)  (opporator)  (initalized value)


        - let: assigning a value to a variable that CAN be changed

        - const: assigning a PERMANENT value to a variable that CANNOT be changed

        - naming the fuction: can be almost anything (excluding: abstract, boolean, break, byte, case, catch, char, class, const, continue, debugger, default, delete, do, or double or anything that starts with an integer (ex. "2night" is wrong, but could be "tonight").

        - camel casing: naming structure where first letter begins with lowercase letter and each consecutive word begins with an uppercase letter, with no spaces between (ex. thisIsACamelCaseNamingStructure).
    

    //STRINGS

        -strings: a sequence of one or more characters that may consist of letters, numbers, or symbols used in EVERY JS application. Strings in JavaScript are primitive data types and immutable, which means they are unchanging. Can use "", '', or ``.

            Ex:
            let x = "This is a string";

        - Methods: functions are functions when they are part of an object. They can be accessed with the dot (.) operator. 

            EX:

                        Method                                              Description

                    string.length               Returns length of str
                    str.toUpperCase             Converts str to all UPPERCASE letters
                    st.toLowerCase              Converts str to all lowercase letters
                    str.split(separator)        Splits str into an array of substrings separated by parameter separator
                    str.slice(start, end)       Extracts a section of str from start to end

            More: https://www.shortcutfoo.com/app/dojos/javascript-strings/cheatsheet


    //BOOLEANS

        - booleans: a data type that can only have one of two possible values, such as True/False, Off/On, Yes/No

            Ex:     let isLoggedIn = true;


        // COMPARISON/RELATIONAL OPERATORS

             Opporator                   Meaning

                ==               Equality
                ===              Strict Equality
                !=               Inequality
                !==              Strict Inequality
                >                Greater than
                >=               Greater than or equal to
                <                Less than  
                <=               Less than or equal to 

                
        // LOGICAL OPERATORS

             Opporator          Meaning

                &&               And
                ||               Or
                !                Not


        //VERSUS- checking equality (strick, not strick), inequality (strick, not strick), etc. 

            Expression                         Result                               Reason

            2 == "2";                           True                 This checks for equality, not type.
            1 == "1";                           True                 This checks for equality, not type.
            2 === "2";                          False                Euality is the same, the type is different.
            2 === 2;                            True                 Equality and type are the same.
            "Password12!!" === "Password12!!"   True                 Equality and type are the same.


//CONDITIONALS

    - if: boolean (true/false) that checks the conditions in your program. 
        
        Ex:
        
            If (1 == "1") = true {
                console.log ("One is equal to one!")
            }

            Shorthand:

            if(1 == "1") {
                console.log ("One is equal to one!")
            }

    
//FUNCTIONS

    - function: a block of code created by the programmer to perform a tast and (often but not always) return a value. A funtion allows us to quickly reuse code in many places of an application without needlessly writing out the action again and again. 

        Ex:

            function hello() {
                console.log ("Hello World!")
            }

        Call/Invoke the Function:

            hello()

    
    //PARAMETERS AND ARGUMENTS 
        
        - parameters: (aka params) the names listed in the parentheses of the function definition.

        - arguments: the real values received by the function when you call it

        - return: stops the exicution at a given point. At this point a function will return a calue. 

            EX:

                function getMyBattingAverage(atBats, numberOfHits){
                    let myAverage = numberOF Hits/atBats;
                        return myAverage;
                }

                console.log(getMyBattingAverage(250,91);
            

            Result (shown in console):

                0.364


    //LOOPS
                
        - for: a statement that creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop. Can exicute code more quickly than writing out lists of console.logs. 

            Syntax:
                
                for ([initialEspression]; [condition]; (incrementExpression])
                    statement

            Ex:
        
                for (let i = 1; i <= 10; i++){             // means i = 1, for every instance where i is less than/equal to 10, add 1)
                    console.log(i);                        // show the new value of i
                }  

            Result (shown in console):
                
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10

                
        //ForLoops

            -Loops offer us a quick and easy way to do something repeatedly, or loop over something.
            -There are many kinds of loops, but they all roughly do the same thing.
            -It will repeat until a specified condition evvaluates to true
                -for statement
                -do while statement
                -while statement
                -labled statement
                -break statement
                -for in statement
                -for of statement

        Note: there is a danger of infinate loops. There are three main parts to a loop:
                -initial expression
                -condition
                -increment expression
        

let i = 7;

for(i = 0; i < 10 ; i = i + 1) {
    console.log(i)
}


        //ForInLoops

        -For in loops are great for iterating over values in an object. Properties in objects are what's called enumerable (countable)

            -For in loops interate over an object's enumberable properties

            Ex:
                
                let student = {
                name: "Peter",
                awesome: true,
                degree: "JavaScript",
                week: 1
                }

                for (item in student){
                console.log(item);
                console.log(student[item]);

}

        //ForOfLoops

            -For of loops and for in loops for do the same thing which is loop over data structures. There is one key difference, what they iterate over.
               
                -for in loops iterate over the enumeable (countable) properties in an object
               
                -for of loops iterate over the values of an interable (indicy containing) object

//Best used for ARRAYS

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for(cat of catArray){
    console.log(cat)
}


        
    //ARRAYS

        - arrays: a numerically indexed map of values. An array doesn't store one value, it stores a list of values. Arrays allow us to collect items like names, usernames, product names, prices, etc.

            Ex: 

            //index                    0       1         2         3        4       5         6
                let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
            

                OR

                let myFavoriteThings = ['Broccoli', 46074, 'Zombie Cats From Mars'];

                OR

                let raceWinners = [33, 72, 64];

       Key points:

            - create an array like a variable with any name.
            - use square brackets [] to collect/initialize values.
            - we separate items with commas within the brackets.
            - we can have a collection of one type  OR
            - we can assign multiple types:
            - indexing arrays starts with the first item in the array as 0.

    
    //OBJECTS

        - object: a data type allowing us to store a collection of properties and methods.
        - object literal: a comma-separated list of name-value pairs wrapped in curly braces.
        - can be denoted by {}
            - objects store 2 things, a key (ex. x) and a value (ex. 100 or "Bob")
            - we can access these values, by digging into the object with dot (.) notation - object value

            EX 1:
                let artist = {
                //key  // value
                name:   'Queen',
                albums: 15,
                allMembersAlive: false
                }

                console.log(artist)
                //Example of Dot notation
                console.log(artist.allMembersAlive)
                console.log(typeofartist.name)


            Ex 2:

                console.log(bobAlcorn.age);

            Result:

                59


            Ex 3:

                let bobAlcorn = {                
                    name            : "Bob Alcorn",
                    age             : 59,
                    vocation        : "Chief Operating Officer",
                    isRetired       : false
                };
            

            Ex 4:
                let netflix = {
                    id: 1,
                    name: "The Office",
                    season1: {
                        seasonInfo: {
                            episodeInfo: [{
                                    episode: 1,
                                    episodeName: "Pilot"
                                },
                                {
                                    episode: 2,
                                    episodeName: "Diversity Day"
                                },
                                {
                                    episode: 3,
                                    episodeName: "Health Care"
                                },
                                {
                                    episode: 4,
                                    episodeName: "The Alliance"
                                },
                                {
                                    episode: 5,
                                    episodeName: "Basketball"
                                },
                                {
                                    episode: 6,
                                    episodeName: "Hot Girl"
                                },
                            ]
                        }
                    },
                    season2: {},
                    season3: {}
                };

                console.log("All Data:", netflix);

                //Specific Season
                console.log("Just Season info:", netflix.season1.seasonInfo);

                //Speciic Episode
                console.log("Specific episode:", netflix.season1.seasonInfo.episodeInfo[3]);

                //Specific Episode Name
                console.log("Specific episode name:", netflix.season1.seasonInfo.episodeInfo[3].episodeName);


         ** NOTE: dot operator (.) gives you access to the object's properties and their values. Use the object's name (bobAlcorn), then the dot opporator (.), then the property name (age). 

         ** NOTE: bracket notation allows us to acess an object's properties if it conatins a space within the object's key

            Ex:
                let garden = {
                    vegetable: "zucchini",
                    flower: "sun flower",
                    "my fruit": "grape",
                    water: true,
                    sun: true,
                    size: 10,
                }

                let test = Object.keys(garden);
                console.log(test);
                console.log(typeof test[0]);

                //can't have spaces in key
                console.log(garden.vegetable);

                //can have spaces in key
                console.log(garden["my fruit"]);


        Key points:

            - use the let keyword, create a name and add an equal sign (=).
            - next, add { }.
            - name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.
            - each of the properties has a value (aka, "Bob Alcorn", 59, "Chief Operating Office", false)

        - undefined: a value returned when you try to access an non-existing property.
                

    // HOISTING

        -Hoisting: Basically, wrighting the call function first, then defining and itializing it after. JS reads top to bottom so:

            -first pass: stores our variable/function declarations, but does not assign values. Anything that needs hoisted is hoisted here.
            -second pass: assigns the values to our variables and executes any hoisted sorce code.


    //LITERALS

        - literal: represents a fixed value that we as developers insert into the code

            //String literal
                let car = "ford";

            //numeric literal
                let december = 12;

            //boolean literal
                let tired = true;

            //object literal
                let soup ={
                    a: "chicken noodle",
                    b: "tomato",
                    c: "beef and barely"
                }

            //array literal 
                let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    
    //STRINGS PROPERTIES & METHODS
                
        - methods are functions when they are a part of an object 
            EX:
                let myName = "Rachel";
                console.log(myName.length);
                            /
                            / just a property, so not invoked     


        - properties are qualities that are associaated with data types, they are not functions, and they do not need to be invoked 
            Ex: 
                let myNameIs = "Rachel";
                console.log(myNameIs.toLocaleUpperCase())
                                        
                                        // invoked function ()

    
    //TYPES: BOOLEANS, NULL, UNDEFINED, STRINGS, NUMBERS, & ARRAYS

        //Booleans (see line 65)

        //Null vs. Undefined:

                - null is like an empty bucket, the bucket is there, but there's nothing in it.
                - undefined is like the materials we will use to create the bucket
                - we can also think of these two variables as pizza boxes
                - null is like the empty pizza box, just waiting for pizza
                - undefined is like the usassembled box

        //Strings (see line 43)
        
        - numbers (100) vs. strings ("100"), 100 will be treated as a number and can be used for math functions, "100" will be treated like a string/word and return "100" even if you try to run a math function on it.
    

        //Arrays (also see line 175)

            - Denote by []
            - You can access a value by digging into the array with array [0]
            
            EX:

                let list = [ 'item 1', 'item2', 'item3']
                (0)       (1)      (2)


            ** Addition VS Concatenation
                - addition is adding numbers together
                - concatenation is adding strings together

            EX:

                let add = 100 + 100
                console.log(add)

                let concat = 'Rachel' + 'Christopher'
                console.log(concat)

                let stillConcat = '1050' + 100
                console.log(stillConcat)
    
    
    

    

*/

