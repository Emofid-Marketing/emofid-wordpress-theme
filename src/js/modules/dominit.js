function Dominit(appSelector, domObject) {

  appSelector = appSelector;
  domObject = domObject;

  //method to create and appent element
  function createAndAppend(element, attrs, innerText, events, parentNode) {

    //create element
    var createdElement = document.createElement(element);

    //add attributes
    if (attrs) {
      for (var key of Object.keys(attrs)) {
        createdElement.setAttribute(key, attrs[key]);
      }
    }

    //add inner text
    if (innerText) {
      createdElement.textContent = innerText;
    }

    //append to parent element
    if (parentNode) {
      parentNode.appendChild(createdElement);
    }

    //add events to element
    if (events) {
      for (var eventName of Object.keys(events)) {
        createdElement.addEventListener(eventName, events[eventName]);
      }
    }


    //return created element
    return createdElement;

  }



  //method to create childrens
  function createChildrens(element, parentNode) {
    element.children.forEach((childElement) => {
      const craetedChild = createAndAppend(childElement.el, childElement.attrs, childElement.text, childElement.events, parentNode);
      if (childElement.children) {
        createChildrens(childElement, craetedChild);
      }
    });
  }


  var AppContainer = createAndAppend(domObject.el, domObject.attrs, domObject.text, domObject.events, appSelector);
  createChildrens(domObject, AppContainer);
}


export default Dominit;
