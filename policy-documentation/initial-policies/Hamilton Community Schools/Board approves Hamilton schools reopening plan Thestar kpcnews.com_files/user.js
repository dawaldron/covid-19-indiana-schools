(function() {

"use strict";

/* {{{ log( string ) */

/**
 * Log to console if available
 * 
 * @param string sMessage
 * 	The message to log to console
 */
function log(sMessage) {
	if (console.warn) {
		console.warn(sMessage);
	}
}

/* }}} */
// {{{ decodeJWT( string sJWT ) : object

/**
 * Decode and extract the payload of a JWT.
 *
 * Verification of the JWT's signature is *not* performed.
 *
 * @param string
 *		JWT to decode.
 * @return object | null
 *		The JWT's payload, or null if the JWT could not be decoded.
 */
function decodeJWT( sJWT ) {
	try {
		return JSON.parse(atob(sJWT.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
	}
	catch ( oErr ) {
		log('Failed to decode JWT: '+ oErr.message);

		return null;
	}
}

// }}}
// {{{ getUserClaims( void ) : object

/**
 * Get app claims for the current logged-in user.
 *
 * @return object | null
 *		The user's claims, or null if the user is not logged in.
 */
function getUserClaims() {
	var sJWT = getCookieValueByName('tncms-user');
	if ( ! sJWT )  return null;

	var oPayload = decodeJWT(sJWT);
	if ( ! oPayload )  return null;

	return oPayload.app || null;
}

// }}}
/* {{{ redirect( string ) */

/**
 * Redirect browser to a URL by various means
 * 
 * @param string sURL
 * 	The URL to redirect too
 * 
 */
function redirect(sURL) {
	
	if (window.location.replace) {
		window.location.replace(sURL);
	} else if (window.location.assign) {
		window.location.assign(sURL);
	} else {
		window.location.href = sURL;
	}
}

/* }}} */
/* {{{ boolean isLoggedIn() */

/**
 * Check if the user is logged in
 * 
 * @return boolean
 * 	Returns true if the user is logged in, or false otherwise
 */
function isLoggedIn() {
	return document.cookie.indexOf('tncms-user') !== -1 // new
		|| document.cookie.indexOf('tncms-authtoken') !== -1; // old, removable after 1.58.0
}

/* }}} */
/* {{{ boolean isAdmin */

/**
 * Check if a logged in user is also an admin.
 * 
 * @return boolean
 */
function isAdmin() {
	var oClaims = getUserClaims();

	if ( oClaims !== null ) {
		return oClaims.user && oClaims.user.adm;
	}
	else {
		// Fall back to pre-1.58.0 cookie definitions.
		return isLoggedIn() && getCookieValueByName('tncms-isadmin') == true;
	}
}

/* }}} */
// {{{ getScreenName( void ) : string

/**
 * Get the logged-in user's screen name.
 *
 * @return string | null
 *		The logged-in user's screen name, or null if there is no user session.
 */
function getScreenName() {
	var oClaims = getUserClaims();

	if ( oClaims && oClaims.user && oClaims.user.scr ) {
		return oClaims.user.scr;
	}
	else {
		// Fall back to pre-1.58.0 cookie definitions.
		return getCookieValueByName('tncms-screenname');
	}
}

// }}}
/* {{{ forceBrowserRefresh( string ) */

/**
 * Forces browser to refresh
 * 
 * If the wrong 'view' from cache is being served, this method will cause
 * the browser to fetch from the server instead of continuing to use a
 * locally cached copy.
 * 
 * @param string sMode
 * 	The mode
 */
function forceBrowserRefresh(sMode)
{	     
	 // Cache busting will be needed to get the viewport to go back to the
	 // server. An optional mode can be passed to try and make sure that
	 // a common cached view will be used in that event.
	 
	 var aLoc = window.location.href.split('#'),
		sURL = aLoc[0],
		sHash = aLoc[1];
 
	 if (sURL.indexOf('_dc=' + sMode) > -1) {
		 log('Attempt to auto-fix logged/anonymous view failed');
		 return;
	 }
	 
	 if (sURL.indexOf('?') > -1) {
		 sURL += '&_dc=' + sMode;
	 } else {
		 sURL += '?_dc=' + sMode;
	 }

	 if ( sHash )  sURL += '#'+ sHash;
	 
	 redirect(sURL);		
}

/* }}} */
/* {{{ string getCookieValueByName( string ) */

/**
 * Retrieve a cookie's value
 * 
 * @param string sName
 * 	The name of the cookie to retrieve
 * 
 * @return string
 * 	The value of the cookie found or null
 */
function getCookieValueByName(sName)
{
	 var sNameEQ = sName + "=";
	 var aCookie = document.cookie.split(';');
	 for(var i=0; i < aCookie.length; i++) {
		 var sChunk = aCookie[i];
		 while (sChunk.charAt(0)==' ') {
			 sChunk = sChunk.substring(1,sChunk.length);
		 }
		 
		 if (sChunk.indexOf(sNameEQ) == 0) {
			 return decodeURIComponent(
				 sChunk.substring(sNameEQ.length,sChunk.length).replace(/\+/g, " ")
			 );
		 }
	 }
	 return null;
}

/* }}} */

// {{{ initializeHeartbeat( void ) : void

var initializeHeartbeat = (function() {
	// Wait at least 4 hours between server contacts
	var nIntervalLength = 4 * 60 * 60 * 1000;

	// localStorage key to store last run time
	var sLastRunKey = 'TNCMSUserHeartbeatTime';

	// Document event to fire when heartbeat logs the user out
	var sLogoutEvent = 'TNCMSUserLogout';

	var nIntervalID;

	function heartbeat() {
		var nNow = Date.now(),
			nLastRun = localStorage.getItem(sLastRunKey),
			sScreenName = getScreenName();

		if ( ! nLastRun ) {
			// Skip first heartbeat regardless of how it was triggered.
			localStorage.setItem(sLastRunKey, nNow);
			return;
		}

		if ( nLastRun >= (nNow - nIntervalLength) ) {
			// Fire no more often than once per interval.
			return;
		}

		if ( ! isLoggedIn() ) {
			// Terminate the heartbeat if the user is no longer logged in.
			clearInterval(nIntervalID);
			return;
		}

		var oReq = new XMLHttpRequest;

		oReq.open('POST', '/tncms/auth/heartbeat');

		oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

		oReq.addEventListener('load', function() {
			var oResp = JSON.parse(oReq.responseText);

			if ( ! oResp.logged_in ) {
				log('User logged out by heartbeat');

				var oEvent = new Event(sLogoutEvent);

				oEvent.user = {
					screen_name: sScreenName
				};

				document.dispatchEvent(oEvent);

				clearInterval(nIntervalID);
			}

			localStorage.setItem(sLastRunKey, nNow);
		});

		oReq.send();
	}

	return function() {
		if ( ! isLoggedIn() || ! window.localStorage )  return;

		// Initial check on page load.
		heartbeat();

		// Subsequent checks on page left open.
		nIntervalID = setInterval(heartbeat, nIntervalLength);

		// Subsequent checks on tab switching/waking.
		document.addEventListener('visibilitychange', heartbeat);
	};
})();

// }}}

// Declare TNCMS namespace if not declared

if (!window.TNCMS) {
	window.TNCMS = {}; 
}

/**
 * BLOX User Javascript Interface
 * 
 * Provides utility methods for accessing data about BLOX users, recovering
 * persistent sessions, and refreshing user views based on logged in status. 
 * To fix browser views, you could add the following to pages that care about
 * logged in user status in a script tag:
 * 
 * [% if cms.request.is_anonymous_user %]
 * TNCMS.User.validateAnonymousView();
 * [% else %]
 * TNCMS.User.validateLoggedInView();
 * [% end %]
 * 
 * Template code that relies on logged in status could also use other utility
 * methods to make decisions, for example:
 * 
 * if (TNCMS.User.isLoggedIn()) {
 *   document.write('Welcome back: ' + TNCMS.User.getScreenName());
 * }
 * 
 */
window.TNCMS.User = {
	/* {{{ string getScreenName() */
	
	/**
	 * Retrieve a screen name from the last logged in user
	 * 
	 * @return string
	 * 	Returns the screen name of the last logged in user, or null
	 */
	getScreenName: getScreenName,
	
	/* }}} */
	// {{{ getAvatarURL( void ) : string

	/**
	 * Get the logged-in user's avatar URL.
	 *
	 * @return string | null
	 *		The avatar URL for the current logged-in user, or null if the user
	 *		is not logged in or doesn't have an avatar.
	 */
	getAvatarURL: function() {
		var oClaims = getUserClaims();

		if ( oClaims && oClaims.user && oClaims.user.ava ) {
			return oClaims.user.ava;
		}
		else {
			// Fall back to pre-1.58.0 cookie definitions.
			return getCookieValueByName('tncms-avatarurl');
		}
	},

	// }}}
	/* {{{ boolean hasPersistentSession() */
	
	/**
	 * Check if there is a persistent session token
	 * 
	 * @deprecated
	 *		"Remember me" functionality no longer depends on a separate
	 *		persistent session token. This method now only returns whether
	 *		the user is logged in.
	 * @return boolean
	 *		Returns true if the user is logged in.
	 */
	hasPersistentSession: isLoggedIn,
	
	/* }}} */
	/* {{{ boolean isLoggedIn() */
	
	/**
	 * Check if the user is logged in
	 * 
	 * @return boolean
	 * 	Returns true if the user is logged in, or false otherwise
	 */
	isLoggedIn: isLoggedIn,
	
	/* }}} */
	/* {{{ boolean isAdmin() */
	
	/**
	 * Check if the logged in user is an admin or super user
	 * 
	 * @return boolean
	 * 	Returns true if the user is logged in and is an admin
	 */
	isAdmin: isAdmin,
	
	/* }}} */
	// {{{ getClaim( string sApp, string sClaim ) : mixed

	/**
	 * Get a public app claim for the current logged-in user.
	 *
	 * @param string
	 *		App name.
	 * @param string
	 *		Claim name.
	 * @return mixed
	 *		The claim's value, or null if there is no active login session or
	 *		the claim does not exist.
	 */
	getClaim: function( sApp, sClaim ) {
		var oClaims = getUserClaims();

		if (
			oClaims !== null
			&& oClaims[sApp] !== undefined
			&& oClaims[sApp][sClaim] !== undefined
		) {
			return oClaims[sApp][sClaim];
		}
		else {
			return null;
		}
	},

	// }}}
	/* {{{ validateAnonymousView() */
	
	/**
	 * Verify that an anonymous user page is being served correctly
	 * 
	 * If the page is not being served to a valid anonymous user, or the
	 * user has a remember me session that can be recovered, this method
	 * will cause this to happen.
	 * 
	 */
	validateAnonymousView: function() {
		// If an authtoken exists, the user is viewing the wrong version of
		// the page and must refresh the page to see the logged-in view
		// version of this page
		
		if (isLoggedIn()) {
			forceBrowserRefresh('logged_in');
		}
	},
	
	/* }}} */
	/* {{{ validateLoggedInView() */
	
	/**
	 * Validate that the logged in view is being delivered to a logged in user
	 * 
	 * 
	 */
	validateLoggedInView: function() {
		// If the user is not logged in and is viewing the wrong version of
		// the page, the browser will need to be refreshed
		
		if (!isLoggedIn()) {
			forceBrowserRefresh('anonymous');
		}
	},
	
	/* }}} */
	/* {{{ restorePersistentSession() */
	
	/**
	 * Restore sessions that the user requested to be 'remembered'
	 * 
	 * @deprecated
	 *		"Remember me" functionality no longer depends on a restoration call
	 *		when returning to the site. This function is now a no-op.
	 * @return void
	 */
	restorePersistentSession: function() {
		// No-op
	}

	/* }}} */
};

// {{{ onLoad( void ) : void

/**
 * Initialize module on document load.
 *
 * @return void
 */
function onLoad() {
	initializeHeartbeat();
}

// }}}

if ( document.readyState === 'loading' ) {
	onLoad();
}
else {
	document.addEventListener('DOMContentLoaded', onLoad);
}

})();
