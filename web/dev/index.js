import ko from 'knockout';
import 'knockout-postbox'
import "material-design-lite/material.js"

import "material-design-lite/material.min.css"
import "./styles.css"
import "./colors.css"

import "./components/button/MyButton.js"

import { createStore } from 'redux'
import buttonClicker from './reducers'

let store = createStore(buttonClicker)

class Greeter {
  constructor() {
    ko.postbox.subscribe("myTopic", function(newValue) {
      alert(newValue)
    });
  }
}



new Greeter()


ko.applyBindings()
