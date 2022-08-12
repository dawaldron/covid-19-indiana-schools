var ACPI = window.anvp.AnvatoCustomPluginInterface;
function Plugin() {
  ACPI.call(this, 'anvatoExtension');
}
Plugin.prototype = Object.create(ACPI.prototype);
Plugin.prototype.init = function(cb) {
  cb();
};
ACPI.registerCustomPlugin(new Plugin());
window.anvp.__extension__ = Plugin;