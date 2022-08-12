jQuery(document).ready(function($){
	let loginButton = $("#MG2login"); 
	let logoutButton = $("#MG2logout"); 
	let activateAccountButton = $("#MG2activation"); 
	let myAccountButton = $("#MG2MyAccount"); 
	let subscribeButton = $("#MG2Subscribe"); 

	MG2Loader.init({
		plugins: [{
			name: "FP",
			initOptions: {
				version: "aim",
				environment: "prod"
			}
		}, {
			name: "DL",
			initOptions: {
				version: "aim",
				collectors: ["connext"],
				tagManager: "GTM",
				containerId: MG2Loader_options.gtm_container_id
			}
		}, {
			name: "NXT",
			initOptions: {
				clientCode: "aim",
				environment: "prod",
				siteCode: MG2Loader_options.site_code_id,
				configCode: MG2Loader_options.configuration_code,
				debug: true,
// 				silentmode: true,
// 				runSettings: { runOffset: 3000 },
				publicEventHandlers: {
					onNotAuthorized: function(eventData) {
						loginButton.show();
						subscribeButton.show();
						activateAccountButton.hide();
						myAccountButton.hide();
						logoutButton.hide();
					},
					onAuthorized: function(eventData) {
						loginButton.hide();
						subscribeButton.show();
						activateAccountButton.show();
						myAccountButton.hide();
						logoutButton.show()
					},
					onHasNoActiveSubscription: function(eventData) {
						loginButton.hide();
						subscribeButton.show();
						activateAccountButton.show();
						myAccountButton.hide();
						logoutButton.show()
					},
					onHasAccessNotEntitled: function(eventData) {
						loginButton.hide();
						subscribeButton.show();
						activateAccountButton.show();
						myAccountButton.hide();
						logoutButton.show()
					},
					onHasAccess: function(eventData) {
						loginButton.hide();
						subscribeButton.hide();
						activateAccountButton.hide();
						myAccountButton.show();
						logoutButton.show()
					}
				}
			}
		}]
	});
});
// document.addEventListener('onFinish', function() {
//     Connext.OpenResetPasswordForm()
// });