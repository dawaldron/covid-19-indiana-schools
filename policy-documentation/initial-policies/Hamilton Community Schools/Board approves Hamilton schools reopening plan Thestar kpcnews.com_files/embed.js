var OwnLocalWidget = (function() {
  var SCRIPT_ID = 'ownlocal-script';

  var getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  var createQueryParameter = function(name, value) {
    if (value === null || value === undefined) {
      return '';
    }

    return '&' + name + '=' + value;
  };

  var getValues = function(options) {
    var values = '';

    for (var prop in options) {
      if (options.hasOwnProperty(prop) && options[prop] !== null && options[prop] !== undefined) {
        values += options[prop];
      }
    }

    return values;
  };

  var getScriptParams = function(script) {
    var scriptUrl = script.getAttribute('src'),
        publisherUUID = getParameterByName('uuid', scriptUrl),
        targetIDs = getParameterByName('target_ids', scriptUrl);

    return {
      outParams: {
        baseUrl: scriptUrl.slice(0, scriptUrl.indexOf('.js')),
        publisherUUID: publisherUUID !== null ? '/' + publisherUUID : '',
        queryString: {
          minFeaturedLevel: createQueryParameter('min_featured_level', getParameterByName('min_featured_level', scriptUrl)),
          category: createQueryParameter('category', getParameterByName('category', scriptUrl)),
          subcategory: createQueryParameter('subcategory', getParameterByName('subcategory', scriptUrl)),
          businessCentric: createQueryParameter('business_centric', script.dataset.active === 'businesses' || script.dataset.active === null || script.dataset.active === undefined),
          daysAgo: createQueryParameter('days_ago', getParameterByName('days_ago', scriptUrl)) || '&days_ago=30',
          n: createQueryParameter('n', getParameterByName('n', scriptUrl))
        }
      },
      inParams: {
        height: getParameterByName('h', scriptUrl),
        targetIDs: targetIDs !== null ? targetIDs.split(',') : ['ownlocal']
      }
    };
  };

  var styles = {
    iFrame: 'border:0 none; width:100%; height:100%; position:absolute; top:0; left:0;',
    hidden: 'display:none;',
    div: 'width:100%; min-width:200px; max-width:1280px; height:600px; min-height:50px; \
          max-height:1200px; position:relative; box-shadow:0 0 10px rgba(0,0,0,0.15); \
          margin:0 auto 20px;'
  };

  var setWidget = function(target, contents, containerStyle) {
    var container, iframe;
    container = document.createElement('div');
    container.className = 'ownlocal-widget';
    container.setAttribute('style', containerStyle);

    iframe = document.createElement('iframe');
    iframe.setAttribute('style', styles.iFrame);

    target.appendChild(container);
    container.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(contents);
    iframe.contentWindow.document.close();
  };

  var downloadWidget = function(url, target, height) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function () {
      // readyState 4 means the request is done.
      var DONE = 4,
          divStyle;

      if (xhr.readyState === DONE) {
        if (xhr.status === 200) {
          divStyle = styles.div + 'height:' + height + 'px;'
          setWidget(target, xhr.response, divStyle);
        } else {
          setWidget(target, '', styles.hidden);
        }
      }
    };
  };

  var mergetTargetOptions = function(dataset, query) {
    var businessCentric;

    if (dataset.active === null || dataset.active === undefined) {
      businessCentric = query.businessCentric;
    } else {
      businessCentric = createQueryParameter('business_centric', dataset.active === 'businesses');
    }

    return {
      minFeaturedLevel: createQueryParameter('min_featured_level', dataset.minFeaturedLevel) || query.minFeaturedLevel,
      category: createQueryParameter('category', dataset.category) || query.category,
      subcategory: createQueryParameter('subcategory', dataset.subcategory) || query.subcategory,
      businessCentric: businessCentric,
      loadListings: createQueryParameter('load_listings', dataset.listings) || query.listings,
      daysAgo: createQueryParameter('days_ago', dataset.daysAgo) || query.daysAgo,
      n: createQueryParameter('n', dataset.n) || query.n
    };
  };

  var load = function() {
    var script = document.getElementById(SCRIPT_ID),
        scriptParams;

    if (script === null) {
      console.log('Element with id ' + SCRIPT_ID + ' not found');
      return;
    }

    scriptParams = getScriptParams(script);

    for (var i = 0; i < scriptParams.inParams.targetIDs.length; i++) {
      var target = document.getElementById(scriptParams.inParams.targetIDs[i]),
        options = scriptParams.outParams,
        params = mergetTargetOptions(target.dataset, options.queryString),
        height = target.dataset.height || scriptParams.inParams.height,
        url;

      url = options.baseUrl + options.publisherUUID + '?' + getValues(params);
      downloadWidget(url, target, height);
    }
  };

  return {
    getParameterByName: getParameterByName,
    createQueryParameter: createQueryParameter,
    getValues: getValues,
    getScriptParams: getScriptParams,
    mergetTargetOptions: mergetTargetOptions,
    load: load
  };
}());

OwnLocalWidget.load();

/*
==================
Example Embed Code
==================
<var id="ownlocal"><script async id="ownlocal-script" src="ENTER_DOMAIN_HERE/embed.js?h=600" data-active="businesses"></script></var>
*/
