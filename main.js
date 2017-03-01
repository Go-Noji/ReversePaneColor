define(function (require, exports, module) {
  "use strict";

  var CommandManager = brackets.getModule("command/CommandManager"),
      KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
      AppInit = brackets.getModule("utils/AppInit"),
      Menus = brackets.getModule("command/Menus");
  var CLASS = 'reverseColor';
  
  AppInit.appReady(function(){
    var style = document.createElement('style');
    style.textContent = '.'+CLASS+'{-webkit-filter: invert(100%) hue-rotate(180deg)}';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
    console.log(Menus);
  });
  
  function handleReversePaneColor() {
    var pane = document.getElementById('first-pane');
    if(!pane.classList.contains('active-pane')){
      pane = document.getElementById('second-pane');
    }
    
    pane.classList.toggle(CLASS);
  }
  
  var MY_COMMAND_ID = "reversePaneColor.run";
  KeyBindingManager.addBinding(MY_COMMAND_ID, "Alt-3");
  CommandManager.register("ReversePaneColor", MY_COMMAND_ID, handleReversePaneColor);
  
  var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
  menu.addMenuItem(MY_COMMAND_ID);
});
