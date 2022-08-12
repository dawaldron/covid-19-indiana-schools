window.NXSTdata = window.NXSTdata || {};
window.NXSTdata.content = window.NXSTdata.content || {};
window.NXSTdata.page = window.NXSTdata.page || {};
window.NXSTdata.site = window.NXSTdata.site || {};
window.NXSTdata.ads = window.NXSTdata.ads || {};
window.NXSTdata.layout = window.NXSTdata.layout || {};
window.NXSTdata.privacy = window.NXSTdata.privacy || {};
populateNXSTData()

document.addEventListener('DOMContentLoaded', (event) => {
  if (window.NXSTdata.content.title === '') {
    window.NXSTdata.content.title = document.title;
  }

  window.NXSTdata.content.videoPlayerTypes = []
  if(window.NXSTdata.content.videoCount > 0) {
    // We know that the count corresponds to "anvato"
    // because it's the only counted video type at backend
    window.NXSTdata.content.videoPlayerTypes.push("anvato")
  }

  addVideoPlayer('div.s2nPlayer', 'sendtonews')
  addVideoPlayer('div.fb-video', 'facebook')
  addVideoPlayer('iframe[src*="youtube.com"]', 'youtube')
  addVideoPlayer('iframe[src*="venn.tv"], iframe[src*="https://venn-dev"]', 'venn')
})

function addVideoPlayer(selector, name) {
  const videoCount = document.querySelectorAll(selector).length
  if(videoCount) {
    window.NXSTdata.content.videoPlayerTypes.push(name)
    window.NXSTdata.content.videoCount += videoCount
  }
}

function uuid4() {
    /* Generetes a UUID (Version 4) per RFC 4122 using crypto API. */
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

function populatePage() {
    /* Define query parameter fetching function. */
    const getQueryParams = () => {
        /* Define value parsing function. */
        const parseValue = (value) => {
            try {
                return JSON.parse(value)
            }
            catch (error) {
                return value
            }
        }
        /* Read parameters. */
        const search = window.location.search || ''
        const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`)
        /* Parse and return parameters. */
        return [...params.entries()].reduce(
            (obj, [key, value]) => ({
                ...obj,
                [key]: (
                    obj.hasOwnProperty(key)
                    /* Convert existing key to array, or append to array. */
                    ? [...(Array.isArray(obj[key]) ? obj[key] : [obj[key]]), (parseValue(value))]
                    /* Add parsed value. */
                    : (parseValue(value))
                )
            }), {}
        )
    }
    /* Create and assign a unique ID. */
    window.NXSTdata.page.uniqueId = uuid4()
    /* Assign values. */
    window.NXSTdata.page.fullUrl = window.document.location.href || ""
    window.NXSTdata.page.queryParams = getQueryParams() || {}
    window.NXSTdata.page.urlHash = window.document.location.hash || ""
    window.NXSTdata.page.referrer = (
        (window.NXSTdata.page.queryParams.referrer || window.NXSTdata.page.queryParams.referrer === "")
        ? window.NXSTdata.page.queryParams.referrer
        : document.referrer
    )
}

function populateAdSlots() {
    /* Define ad slot fetching function. */
    const getAdSlots = () => (window.googletag.pubads().getSlots().map((slot) => (slot.getTargeting('pos')[0])) || [])
    /* Proceed if GPT is up. */
    if (window.googletag && googletag.pubadsReady) {
        /* Fetch slots. */
        window.NXSTdata.ads.adSlots = getAdSlots()
        /* Register event listener for future slot requests. */
        window.googletag.pubads().addEventListener('slotRequested', (event) => {
            window.NXSTdata.ads.adSlots = getAdSlots()
        })
    }
    else {
        /* Assign a value if previously did not assigned. */
        window.NXSTdata.ads.adSlots = window.NXSTdata.ads.adSlots || []
        /* Poll GPT until available. */
        setTimeout(populateAdSlots, 100)
    }
}

function populatePrivacy() {
    /* Assign default values. */
    window.NXSTdata.privacy = {
        activeRules: [],
        usPrivacyString: '',
        essentialCookies: true,
        limitNexstar: false,
        limitOthers: false,
        consentCookieSetDate: '',
        ccpaAlertClosed: false,
        __cookie_check: 10, // Control variable
        ...window.NXSTdata.privacy,
    }
    /* Determine if CCPA is active. */
    if (window.__inScopeForCCPA && !window.NXSTdata.privacy.activeRules.includes('ccpa')) {
        window.NXSTdata.privacy.activeRules.push('ccpa')
        /* Sort to normalize order. */
        window.NXSTdata.privacy.activeRules.sort()
    }
    /* Create control variables for cookie checks. */
    const must_cookies = [
        'usprivacy',
        'ConsentCookies',
        'CookieSetDate',
        'AlertBanner',
        'nxst_id',
    ]
    let should_check = must_cookies.length
    const check_limit_reached = (window.NXSTdata.privacy.__cookie_check <= 0)
    /* Fetch cookies. */
    const cookies = document.cookie
    /* Traverse cookies. */
    cookies.split(';').map((item) => {
        /* Fetch key - value pair. */
        const [ key, ...val_arr ] = item.trim().split('=')
        const value = val_arr.join('=')
        /* Adjust control variables. */
        if (must_cookies.includes(key)) {
            should_check = should_check - 1
        }
        /* Act based on key. */
        if (key === 'usprivacy') {
            /* Assign string value. */
            window.NXSTdata.privacy.usPrivacyString = value
        }
        else if (key === 'ConsentCookies') {
            /* Parse stored JSON. */
            const {
                strictly_necessary=window.NXSTdata.privacy.essentialCookies,
                block_nexstar=window.NXSTdata.privacy.limitNexstar,
                block_others=window.NXSTdata.privacy.limitOthers
            } = JSON.parse(value)
            /* Assign boolean values. */
            window.NXSTdata.privacy.essentialCookies = !!strictly_necessary
            window.NXSTdata.privacy.limitNexstar = !!block_nexstar
            window.NXSTdata.privacy.limitOthers = !!block_others
        }
        else if (key === 'CookieSetDate') {
            /* Parse date into array of strings with padding. */
            const numberStringList = value.match(/\d+/g).map((item, index) => (
                item.toString(10).padStart(index === 0 ? 4 : 2, '0')
            ))
            /* Assign string value. */
            window.NXSTdata.privacy.consentCookieSetDate = numberStringList.join('-')
        }
        else if (key === 'AlertBanner') {
            /* Assign string value. */
            window.NXSTdata.privacy.ccpaAlertClosed = (value === 'closed')
        }
        else if (key === 'nxst_id') {
            /* Ensure uniqueness. */
            if (!window.NXSTdata.privacy.activeRules.includes('nexstarid')) {
                /* Add Nexstar ID to active rules. */
                window.NXSTdata.privacy.activeRules.push('nexstarid')
                /* Sort to normalize order. */
                window.NXSTdata.privacy.activeRules.sort()
            }
        }
    })
    /* Register repeated function call if it fired too early. */
    if (should_check && !check_limit_reached) {
        /* Update stored control variable. */
        window.NXSTdata.privacy.__cookie_check = window.NXSTdata.privacy.__cookie_check - 1
        /* Schedule function call. */
        window.setTimeout(populatePrivacy, 100)
    }
    else {
        /* Remove stored control variable. */
        delete window.NXSTdata.privacy.__cookie_check
    }
}

function populateIdentity() {
    /* Assign default values. */
    window.NXSTdata.identity = {
        gaClientId: '',
        blueconicId: '',
        nexstarId: '',
        segmentUserId: '',
        __cookie_check: 10, // Control variable
        ...window.NXSTdata.identity
    }
    /* Create control variables for cookie checks. */
    const must_cookies = [
        'BCSessionID',
        '_ga',
    ]
    let should_check = must_cookies.length
    const check_limit_reached = (window.NXSTdata.identity.__cookie_check <= 0)
    /* Fetch cookies. */
    const cookies = document.cookie
    /* Traverse cookies. */
    cookies.split(';').map((item) => {
        /* Fetch key - value pair. */
        const [ key, ...val_arr ] = item.trim().split('=')
        const value = val_arr.join('=')
        /* Adjust control variables. */
        if (must_cookies.includes(key)) {
            should_check = should_check - 1
        }
        /* Act based on key. */
        if (key === 'BCSessionID') {
            /* Assign string value. */
            window.NXSTdata.identity.blueconicId = value
        }
        else if (key === '_ga') {
            /* Assign string value. */
            window.NXSTdata.identity.gaClientId = value.split('.').splice(2).join('.')
        }
        else if (key === 'nxst_id') {
            /* Assign string value. */
            window.NXSTdata.identity.nexstarId = value
        }
    })
    /* Try to assign SegmentID as NexstarID. If not available, fallback to BlueConicID. */
    window.NXSTdata.identity.segmentUserId = (
        window.NXSTdata.identity.nexstarId
        || window.NXSTdata.identity.blueconicId
    )
    /* Register repeated function call if it fired too early. */
    if (should_check && !check_limit_reached) {
        /* Update stored control variable. */
        window.NXSTdata.identity.__cookie_check = window.NXSTdata.identity.__cookie_check - 1
        /* Schedule function call. */
        window.setTimeout(populateIdentity, 100)
    }
    else {
        /* Remove stored control variable. */
        delete window.NXSTdata.identity.__cookie_check
    }
}

/* Populates all layer data */
function populateNXSTData() {
    /* Call populate functions for NXSTData */
    populatePage()
    populateAdSlots()
    populatePrivacy()
    populateIdentity()
}
