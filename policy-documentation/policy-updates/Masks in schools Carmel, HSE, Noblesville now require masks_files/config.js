/* eslint-disable spaced-comment */
(function() {
  var confiantGlobal = window.confiant || (window.confiant = {});
  var clientSettings = (window.confiant && window.confiant['r5TdgVvkbv-PeaJCKaQfCh5Xsto'] && window.confiant['r5TdgVvkbv-PeaJCKaQfCh5Xsto'].clientSettings)
    || window.confiant;

  var integrationSetting = {
    config_ver: '202108182217',
    integration_type: 'gpt_and_prebid_v3l',
    integration_version: '202108021541',
    prebid_integration_version: confiantGlobal.prebid_integration_version || '202108061510',
    gpt_integration_version: confiantGlobal.gpt_integration_version || '202108061510',
    c_integration_version: confiantGlobal.c_integration_version || 'undefined',
    exec_test_ver: null,
  };
  function defaultCallback() {
    console.log('Confiant: ad blocked', arguments);
  };
  if (clientSettings.enable_integrations && clientSettings.devMode != 2){
    clientSettings.enable_integrations = null;
  }
  var settings = {
    propertyId: 'r5TdgVvkbv-PeaJCKaQfCh5Xsto',
    adServer: 'https://protected-by.clarium.io',
    confiantCdn: 'https://clarium.global.ssl.fastly.net',
    confiant_cdn_v3: 'confiant-integrations.global.ssl.fastly.net',
    mapping: 'W3siaSI6MjQsInQiOiJ7e2suaGJfYXBfaWR9fTp7e3d9fXh7e2h9fSIsInAiOjUwLCJEIjowLCJyIjpbeyJ0IjoicmVnZXgiLCJzIjoidGFnIiwidiI6IlwvcGJqcy5yZW5kZXJBZFwvIn1dfSx7ImkiOjIsInQiOiJ7e299fTp7e3d9fXh7e2h9fSIsInAiOjAsIkQiOjEsInIiOltdfSx7ImkiOjYsInQiOiJ7e2NvfX06e3t3fX14e3tofX0iLCJwIjo1MCwiRCI6MCwiciI6W3sidCI6ImV4IiwicyI6bnVsbCwidiI6ImNvIn1dfV0=',
    activation: '|||MjE5NzEzNDY3Mw==,|||MjM1ODA4NzI0Mw==,|||MjM1ODA3NzIxMQ==,|||MjM1ODA2NjY2MA==,|||MjM1ODA0NTU0MA==,|||MjM1Nzc3MTUwMA==,|||MjM1Nzc2Mzk5MQ==,|||MjM1Nzc1ODI0Ng==,|||MjM1Nzc1NTg0OQ==,|||MjM1Nzc1MDgyMQ==,|||MjM1NzczOTAwMQ==,|||MjM1NzM2ODIzNQ==,|||MjM1NzM2MzQ5NQ==,|||MjM1NzM1NDMwMw==,|||MjM1NzM1MjQ0Ng==,|||MjE1MjUyNDE0OQ==,|||MjE1MzI2MjIyNw==,|||MjE1MjUyMzkwMA==,|||MjE1MzI4NTI1OQ==,|||MjE2MTk2ODEzOA==,|||MjExMTg4ODU0OA==,|||MjExMTkzNTQyMg==,|||MjE1MjU0OTYyNw==,|||MjE1MzI4MzM0OA==,|||MjE1NDkwMzM1Nw==,|||MjExMTg5MzA4MQ==,|||MjExMTkzNzA0NQ==,|||MjE1MjU5MjYzMQ==,|||MjE1MjU5MzI4NQ==,|||MjE1MzE4ODcxNw==,|||MjE1MjUyOTY2NQ==,|||MjE1MzI4NDA2Mg==,|||MjE1MjU5NTcyMQ==,|||MjE1MjUyMzk2Ng==,|||MjE1MzI4NTY5MQ==,|||MjI1Njk4NzMyNw==,|||MjE1MjUyODk3Mg==,|||MjE1MzI2MTcyMA==,|||MjE1MjYxNjExMg==,|||MjE1MzI1OTU3NQ==,|||MjI5MzE3NzE5OQ==,|||MjI5MzYyMDIzNA==,|||MjE1NDYwNTg5Ng==,|co|ex|MQ==,|||MjQxOTcyMjY1MA==,|||MjQyMDI0ODczMQ==,|||MjM2ODI3Njk1Mg==,|||MjE4MTI1MTk4Mg==,|||MjQxNTQyNTkyOQ==,|||MjQxNTQ3OTkwMQ==,|||MjQyNjgwNzQwOQ==,|||MjQyNjgzNjI4NA==,|||MjE1NjUzNzE2Ng==,|||MjQwNDc5MjcxMg==,|||MjQwNTc1MDc2NA==,|||MjI5MzI2NzU5Mg==,|||MjI5MzM1NTkyNg==,|||MjU3MTQ3MDYxOA==,|||MjU5Mzk3Nzc1Ng==,|||MjU5MzQ1NzQxMw==,|||MjU5Mzk3OTE4Nw==,|||MjQ3OTQ1OTg0Nw==,|||MjQ3OTQ2MTAzOA==,|||MjQ3OTQ2MTMwNQ==,|||MjQ4MDIzMjQyOQ==,|||MjQ4MDIzMjg0Ng==',
    cdt_version: '202108061510',
    prebidExcludeBidders: clientSettings.prebidExcludeBidders || [], //prebid bidder exclusion list
    sandbox: clientSettings.sandbox || '0',
    prebidNameSpace: clientSettings.prebidNameSpace || 'pbjs',
    callback: clientSettings.callback || defaultCallback,
    isMaster: true,
    devMode: clientSettings.devMode,
    enable_integrations: clientSettings.enable_integrations || 'prebid:true,gpt:true',
    isAR: clientSettings.isAR || 'false' === 'true',
    isPerf: 'undefined' === 'true',
    isHT: clientSettings.isHT || 'undefined' === 'true',
    isSA: 'true' === 'true',
    isAZOnly: 'true' === 'true',
    isXF: 'undefined' === 'true',
    prebidUseTopWindow:  typeof clientSettings.prebidUseTopWindow == 'boolean' ? clientSettings.prebidUseTopWindow :'undefined' === 'true',
    isIntegrationEnabled: isIntegrationEnabled,
    isNativeLL: 'false' === 'true',
    isStandardSwitch: 'false' === 'true' || 'false' === 'true',
    isNS: 'true' === 'true',
    nsSample: '1'
  };
  var scriptId = !!confiantGlobal.settings ? settings.propertyId : null;
  var propertySettings = scriptId ? confiantGlobal[scriptId] || (confiantGlobal[scriptId] = {}) : confiantGlobal;

  propertySettings.settings = settings;
  propertySettings.settings['gpt_and_prebid_v3l'] = integrationSetting;
  function injectScript(path) {
    var e = document.createElement('script');
    e.onload = initConfiantQueue;
    e.onerror = initConfiantQueue;
    if (scriptId) {
      e.id = scriptId;
    }
    e.async = true;
    e.src = path;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
  }
  var shouldAddAllIntegerations = propertySettings.settings.propertyId === 'test_account';
  var integrationsCounter = 0;
  function isIntegrationEnabled(type) {
    var integrations = propertySettings.settings.enable_integrations;
    var checkType = Array.isArray(integrations) ? type : type + ':true';
    return shouldAddAllIntegerations || (integrations && integrations.indexOf(checkType) > -1);
  }

    var integrationsString = 'gptprebidnative_v3l';
    integrationsCounter++;
    var versionToUse = integrationSetting.exec_test_ver ?
      integrationSetting.exec_test_ver :
      integrationSetting.integration_version ?
        integrationSetting.integration_version :
        integrationSetting.gpt_integration_version;
    injectScript('//' + [propertySettings.settings.confiant_cdn_v3, integrationsString, versionToUse, 'wrap.js'].join('/'));

  if (settings.isNativeLL && !isIntegrationEnabled('native')) {
    function injectNative() {
      injectScript('//' + [propertySettings.settings.confiant_cdn_v3, 'r5TdgVvkbv-PeaJCKaQfCh5Xsto', 'native', 'config.js'].join('/'));
    }
    window.addEventListener('load', injectNative);
    if (document.readyState == 'complete') injectNative();
  }

  if (!isIntegrationEnabled('gpt') && !isIntegrationEnabled('prebid')) {
    console.warn('Confiant', 'Current configuration is set not to monitor, please contact support@confiant.com');
  }

  function initConfiantQueue() {
    integrationsCounter--;
    if (integrationsCounter === 0) {
      confiantGlobal.cmd = confiantGlobal.cmd || [];
      for (var i = 0; i < confiantGlobal.cmd.length; i++) {
        try {
          confiantGlobal.cmd[i].call(null);
        } catch (e) {}
      }
      confiantGlobal.cmd = {};
      confiantGlobal.cmd.push = function(funcToExec) {
        funcToExec.call(null);
      };
    }
  }
})();
