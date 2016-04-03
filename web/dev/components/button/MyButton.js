import ko from 'knockout'
import 'knockout-postbox'

class MyButton {
  constructor(params){
    this.message = params
  }

  saySomething(){
    ko.postbox.publish("myTopic", this.message);
  }
}

ko.components.register('my-button', {
    viewModel: MyButton,
    template: '<button data-bind="click: saySomething">Click me!</button>'
});
