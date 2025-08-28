
### 6. Questions and Answers:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** 

            these is used find html element in javaScript. 
            There is a difference between these.
            getElementById means just calling id. 
            getElementByClassName means calling all class in based class name and provide HTMLCollection and array like object.
            querySelector just calling first css selector.
            querySelectorAll get all css selector and provide NodeList and array like object.  

2. How do you **create and insert a new element into the DOM**?

  **Answer:**

        we could make new element in createElement(). 
        then append new element in body.
        example: document.body.appendChild(new element name) 

3. What is **Event Bubbling** and how does it work?

  **Answer:** 

        it's worked upward parent then parent then parent then body, html, document, window.
        Since bubbling upward-facing. So we add click event parent and child. Than click child, it's worked both means parent and child because bubbling is upward parent. but i clicked just child 
        
4. What is **Event Delegation** in JavaScript? Why is it useful?

  **Answer:** 

        event delegation means child parent.
        it's used website dynamic and easy work and less code.
        it's very useful and important.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

  **Answer:**

        preventDefault() means form reload off. 
        or stopPropagation() means event bubbling off. 