1. Answer to the question no 1.
i) By using getElementById it will returns a single element by its ID.

ii) By using  getElementsByClassName it will returns multiple elements as an HTMLCollection by class name.

iii) By using querySelector it will  returns the first element matching any CSS selector.

iv) By using  querySelectorAll  it will returns all elements matching any CSS selector as a NodeList.

2. Answer to the question no 2.

const newDiv = document.createElement("div");  // create element
newDiv.innerText = "Hello World";             // add text/content
document.body.appendChild(newDiv);            // insert into DOM

3. Answer to the question no 3
Definition: An event starts at the child element and bubbles up to its parent elements.
Example:

Child clicked
Parent clicked


When you click a button inside a div, the event triggers the button first, then the div.


4. Answer to the question no 4

Definition: Attaching a single event listener to a parent element to handle events on its child elements.
Why useful:

Fewer event listeners

Can handle dynamically added elements

Better performance

Example:

document.getElementById("parent").addEventListener("click", function(e){
  if(e.target.tagName === "BUTTON"){
    console.log("Button clicked");
  }
});



5. Answer to the question no 5

In JavaScript, preventDefault() stops the browser’s normal action, like following a link or submitting a form. stopPropagation() stops the event from moving up to parent elements. preventDefault() changes the browser’s behavior, while stopPropagation() just controls how the event spreads. They can be used together to manage events more precisely.