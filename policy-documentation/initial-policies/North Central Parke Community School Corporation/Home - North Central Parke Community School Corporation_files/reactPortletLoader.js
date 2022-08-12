//Fetch the resources JSON file for each React component, then add links to those resources to the page (and remove any duplicate resources).
window.reactComponentLoader = window.reactComponentLoader || {
  _isInitailized: false,

  componentMaps: {
    "modernCalendar": "calendar",
    "staffDirectory": "staffDirectorySearch"
  },

  loadedReactComponents: [],
  loadedResources: [],
  _scripts: [],
  _index: 0,

  loadReactComponents: function (reactCommonResourcesPath) {
    this._init();
    this._loadReactCommonResources(reactCommonResourcesPath);
  },

  _init: function() {
    if (!this._isInitailized) {
      this._isInitailized = true;
      this._addResourcesToPage = this._addResourcesToPage.bind(this);
    }
    this._index = 0;
  },

  _loadReactCommonResources: function (reactCommonResourcesPath) {
    var $this = this;
    var components = this._getAllReactComponents();
    var resourcesLinks = [];
    var total = components.length, count = 0;

    for (var i = 0; i < total; i++) {
      var componentName = components[i];

      $.ajax({
        url: reactCommonResourcesPath + "/" + componentName + "_resources.json",
        success: function (data) {
          for (var r = 0; r < data.length; r++) {
            if (resourcesLinks.indexOf(data[r]) === -1) {
              resourcesLinks.push(data[r]);
            }
          }
        }
      }).complete(function () {
        count++;
        if (count === total) {
          $this._addResourcesToPage(resourcesLinks, reactCommonResourcesPath);
        }
      });
    }
  },

  _getAllReactComponents: function () {
    var uniqueComponents = [];
    var allComponents = document.getElementsByClassName("reactComponent");
    for (var i = 0; i < allComponents.length; i++) {
      var component = allComponents[i];
      var className = component.className.split(" ");
      var componentName = className.length > 1 ? className[className.length - 1] : "";
      var index = componentName.lastIndexOf("Component");
      if (index !== -1) componentName = componentName.substring(0, index);
      if (this.componentMaps[componentName]) componentName = this.componentMaps[componentName];
      if (componentName !== "" && uniqueComponents.indexOf(componentName) === -1 &&
        this.loadedReactComponents.indexOf(componentName) === -1) {

        uniqueComponents.push(componentName);
        this.loadedReactComponents.push(componentName);
      }
    }
    return uniqueComponents;
  },

  // Add the CSS links and JS script tags to the page.
  _addResourcesToPage: function (resources, reactCommonResourcesPath) {
    var $this = this;
    var cssResources = [];
    var scripts = [];
    //Collect all the CSS links and JS script URLs.
    for (var r = 0; r < resources.length; r++) {
      var resource = resources[r];
      resource = resource.replace(/\(RESOURCE_PATH\)/gi, reactCommonResourcesPath);
      var resourceLowerCase = resource.toLowerCase();
      if ($this.loadedResources.indexOf(resourceLowerCase) === -1) {
        $this.loadedResources.push(resourceLowerCase);
        if (resource.indexOf(".css") != -1) {
          cssResources.push(resource);
        } else if (resource.indexOf(".js") != -1) {
          var src = $(resource).attr("src");
          scripts.push(src);
        }
      }
    }

    // Add the CSS links to the page.
    this._loadCssResources(cssResources);
    //Load the scripts in order.
    this._scripts = scripts;
    this._loadScripts();
  },

  _loadCssResources: function (cssResources) {
    for (var i = 0; i < cssResources.length; i++) {
      this._loadCssResource(cssResources[i]);
    }
  },

  _loadScripts: function () {
    if (this._index < this._scripts.length) {
      var that = this;
      this._loadScript(this._scripts[this._index])
        .done(function () {
          that._index++;
          that._loadScripts();
        });
    }
  },

  _loadCssResource: function (path) {
    $("head").append(path);
  },

  // Replacement for $.ajax/$.getScript(), which preserves script tag so that you can debug source maps:
  // From http://balpha.de/2011/10/jquery-script-insertion-and-its-consequences-for-debugging/
  _loadScript: function (path) {
    var result = $.Deferred(),
      script = document.createElement("script");
    script.async = "async";
    script.type = "text/javascript";
    script.src = path;
    script.onload = script.onreadystatechange = function (_, isAbort) {
      if (!script.readyState || /loaded|complete/.test(script.readyState)) {
        if (isAbort)
          result.reject();
        else
          result.resolve();
      }
    };
    script.onerror = function () { result.reject(); };
    $("head")[0].appendChild(script);
    return result.promise();
  }
}