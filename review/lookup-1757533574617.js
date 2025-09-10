(function(window, undefined) {
  var dictionary = {
    "dac2b488-8fb9-43c4-b998-908d45e3a243": "Transportation",
    "3a8e9060-cca6-4d8e-9d95-9c9332282ae3": "Activities",
    "11e24691-278c-433b-b26b-7a7096d3ff52": "Dining",
    "cd476704-c223-40f6-946b-f45d865b73dc": "FAQ",
    "380c3ea7-d3bf-4d25-8443-6939bc0cd793": "Accomodations",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);