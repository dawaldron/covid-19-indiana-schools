//// Here "addEventListener" is for standards-compliant web browsers and "attachEvent" is for IE Browsers.
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
//// Now...
//// if 
////    "attachEvent", then we need to select "onmessage" as the event. 
//// if 
////    "addEventListener", then we need to select "message" as the event
var isMinimizePressed = false;
var isClosedPressed = false;
var isFirstIE = true;
var IsChatSwitchBtn = "false";

var userAgent = navigator.userAgent.toString().toLowerCase();

var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var tabPosition = '';
//// Listen to message from child IFrame window
eventer(messageEvent, function (e) {
    var originalURL = window.url;
    var postBackURL = e.origin;
    originalURL = originalURL.replace(/\\|\//g, '');
    postBackURL = postBackURL.replace(/^(?:https?:\/\/)?/i, "").split('/')[0];
    if (originalURL.toLowerCase() == postBackURL.toLowerCase()) {
        if (!isHidden(iFrameLetsTalkTab, e.data)) {
            return false
        }
        else {
            //if (e.data == undefined) {
            var ChatIframeExists = document.getElementById("iFrameLetsTalkChat");
            if (ChatIframeExists) {
                if (e.data == 'hideLanguage') {
                    document.getElementsByClassName('optEng')[0].style.display = 'none';
                    document.getElementsByClassName('optSpa')[0].style.display = 'none';
                    document.getElementsByClassName('switchToTab')[0].style.borderTop = 'none'
                    return false;
                }
                document.getElementById('iFrameLetsTalkTab').style.display = "none";
                document.getElementById('iFrameLetsTalkChat').style.display = "none";
                document.getElementById("ChatTabHomeScreen").style.display = 'none';
                document.getElementById('previewTab').style.display = "block";
                resetPreviewTab()
                document.getElementById('wraperTab').setAttribute('IsChatSwitch', false)
                document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false)
                if (e.data == 'minimize') {
                    document.getElementById('wraperTab').setAttribute('minimizedByChatbot', true)
                    resetPreviewTab()
                }
                else if (e.data == 'closing') {
                    //document.getElementById("ChatTabHomeScreen").setAttribute("firstTimeLoadChatScreen",true);
                    //document.getElementById('wraperTab').setAttribute('ClosedByChatbot', true)
                    resetPreviewTab()
                    var isThanksViewShown = document.getElementById("wraperTab").getAttribute('thanksViewShown');
                    if (isThanksViewShown == 'true') {
                        //document.getElementById("iFrameLetsTalkTab").src = '';
                        //document.getElementById("wraperTab").setAttribute('thanksViewShown', false)
                        document.getElementById('wraperTab').setAttribute('thanksNextLoad', false);
                    }

                }
            }
            //document.getElementById('wraperTab').style.bottom = 0;
            //}
        }
    }

    //    // Do whatever you want to do with the data got from IFrame in Parent form.


}, false);



//to animate LT_Tab
var tab = null,
    animate,
    letsTalkIframeWindow; //Post Message

function getBodyOffset() {
    try {
        if (window.getComputedStyle) {
            return parseInt(window.getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('margin-top'));
        }
        else if (document.documentElement.currentStyle) {
            return parseInt(document.getElementsByTagName('body')[0].currentStyle.marginTop);
        }
        else {
            return 0;
        }
    }
    catch (e) {
        return 0;
    }
}


function tabPos() {
    if (!isMobile) {
        if (tabPosition == 'left' || tabPosition == 'right') {
            var chatbotenable = document.getElementById('wraperTab').getAttribute('ischatbotenable');
            if (chatbotenable != 'true') {
                document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
            }
            document.getElementById('wraperTab').style.overflowX = '';
            if (document.documentElement.clientHeight < 575) {
                if (tabPosition == 'left') {
                    document.getElementById('wraperTab').style.overflowY = parseInt(document.getElementById('wraperTab').style.right) < 0 ? '' : 'auto';
                    if (chatbotenable != 'true') {
                        document.getElementById('wraperTab').style.width = (parseInt(document.getElementById('wraperTab').style.right) < 0 ? "420px" : "480px");
                    }
                }
                else {
                    document.getElementById('wraperTab').style.overflowY = parseInt(document.getElementById('wraperTab').style.left) < 0 ? '' : 'auto';
                    if (chatbotenable != 'true') {
                        document.getElementById('wraperTab').style.width = (parseInt(document.getElementById('wraperTab').style.left) < 0 ? "420px" : "480px");
                    }
                }
                document.getElementById('wraperTab').style.maxHeight = "100%";
            }
            else {
                document.getElementById('wraperTab').style.overflowY = '';
                document.getElementById('wraperTab').style.maxHeight = "none";
                if (chatbotenable != 'true') {
                    document.getElementById('wraperTab').style.width = "463px";
                }
            }
        }
        else if (tabPosition == 'bottomRight' || tabPosition == 'bottomLeft') {
            if (document.documentElement.clientHeight < 618) {
                document.getElementById('wraperTab').style.overflowY = 'auto';
                document.getElementById('wraperTab').style.width = "437px";
                document.getElementById('wraperTab').style.maxHeight = "100%";
            }
            else {
                document.getElementById('wraperTab').style.overflowY = 'hidden';
            }
        }
    }
    else {
        setTimeout(function () {
            var isiPad = navigator.userAgent

            if ((isiPad.toString()).indexOf('iPad') != -1) {
                document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 50 - bubbleOffset - getBodyOffset()) + 'px'
            }
            else {
                document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 20 - bubbleOffset - getBodyOffset()) + 'px'
            }
        }, 500)
    }
}
var mainDiv, pageURL, ChatBotpageURL, TabChatURL;
function initTab() {

    var checkWrapperExist = document.getElementById("wraperTab");
    if (checkWrapperExist != null) {
        return false;
    }

    // For Manor Independent School District
    if (ClientURL.indexOf('manorisd') !== -1) {
        if (typeof (existingOnload) == "function") { existingOnload(); }
    }
    // For Manor Independent School District

    // For CMS Charlotte-Mecklenburg Schools
    if (ClientURL.indexOf('wearecms') !== -1) {
        if (typeof (existingOnload) == "function") { existingOnload(); }
    }
    // For CMS Charlotte-Mecklenburg Schools

    var dates = new Date()

    if (isChatbot) {
        ChatBotpageURL = ChatBotpageURL + '&rnd=' + dates.getTime();
    }
    else {
        pageURL = window.url + 'Lets-Talk/LetsTalkTab.aspx?k=' + window.key + '&rnd=' + dates.getTime();
    }


    var link = document.createElement("link");
    link.href = window.url + "/Lets-Talk/css/LtTabLayout.css?k=63";
    link.rel = "Stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
    link = null;

    var script = document.createElement("script");
    var d = new Date();
    var n = d.getTime();
    script.src = window.url + "Lets-Talk/LTTabConfig.aspx?k=" + window.key + "&isNew=true&rnd=" + n;
    script.onload = function (e) { try { this.remove(); } catch (e) { } }
    document.getElementsByTagName("head")[0].appendChild(script);
    script = null;

    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'wraperTab');



        mainDiv.setAttribute('class', 'wraperTab' + (tabPosition + 'LT'));

        //mainDiv.setAttribute('tabindex', '0');
        document.getElementsByTagName("body")[0].appendChild(mainDiv);

        tab2 = document.getElementById('wraperTab');
        setTimeout(function () {

            if (tab2.addEventListener) {                // For all major browsers, except IE 8 and earlier
                tab2.addEventListener("click", animateTab);
                //tab2.addEventListener("keyup", getKeyUp);
                //tab2.addEventListener("keydown", getKeyDown);
            } else if (tab2.attachEvent) {              // For IE 8 and earlier versions
                tab2.attachEvent("onclick", animateTab);
                //tab2.attachEvent("onkeyup", getKeyUp);
                //tab2.addEventListener("onkeydown", getKeyDown);
            }

        }, 1500)
    }
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        if (document.addEventListener) {                // For all major browsers, except IE 8 and earlier
            document.addEventListener("click", documentClick);
        } else if (document.attachEvent) {              // For IE 8 and earlier versions
            document.attachEvent("onclick", documentClick);
        }
    }
    else {
        document.addEventListener("click", documentClick);
    }
}

function isHidden(el, event) {
    var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
    if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {

        if (isFirstIE == true) {
            isFirstIE = false;
            return false;
        }
        if (event == undefined) {
            event = "";
        }

        if (event == "minimize") {
            return true;
        }
        else if (event == "closing") {
            return true;
        }
        else if (event == "IsChatSwitch") {
            if (IsChatSwitchBtn == "true") {
                return true;
            }
            else if (IsChatSwitchBtn == "false") {
                return false;
            }
        }

        var istaborchatopen = document.getElementById("wraperTab").getAttribute('istaborchatopen');
        return (istaborchatopen === "false")
    }
    else {
        return (el.offsetParent === null)
    }
}

function documentClick(e) {
    if (!e) { var e = window.event; }

    var S = e.srcElement ? e.srcElement : e.target;

    if (S.className == 'previewDivMobile' || S.className == 'headDivMobile' || S.className == 'previewDivMobileCustom' || S.className == 'previewDivMobileCustomBubble' || S.className == 'TabChatHeaderMininmize' || S.className == 'TabChatHeaderMininmizeImg' || S.className == 'BackToHome' || S.className == "TabChatHeaderMininmize TabChatHeaderMininmizeLeft") {
        return false;
    }
    var ChatBotActive = '';

    if (isMobile) { }
    else{
        ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
        if (ChatBotActive == 'true') {

            if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {
                if (!isHidden(iFrameLetsTalkChat)) { return false }
            }
            else {
                if (!isHidden(iFrameLetsTalkChat)) { return false }
            }

            var isClosedByChatbot = document.getElementById("wraperTab").getAttribute('ClosedByChatbot');
            if (!isHidden(ChatTabHomeScreen) && isClosedByChatbot != 'true') {
                //if (!isHidden(ChatTabHomeScreen)) {
                return false;
            }

            var isChatSwitchEnable = document.getElementById("wraperTab").getAttribute('IsChatSwitch');
            if (!isHidden(iFrameLetsTalkTab) || !isHidden(iFrameLetsTalkChat)) {
                if (isChatSwitchEnable == 'true' && S.className != 'previewTabText' && S.className != '' && S.className != "previewTab custom") {
                    return false;
                }
            }

            //var e = this.className;
            //if (!isHidden(iFrameLetsTalkChat)) { return false }
            //if (!isHidden(iFrameLetsTalkTab)) {
            //    if (isChatSwitchEnable == 'true' && S.className == 'BackToHome') {
            //        return false;
            //    }
            //}


            //var isclosedbychatbot = document.getElementById("wraperTab").getAttribute('closedbychatbot');
            //if (isclosedbychatbot == 'true') {
            //    //TabLoadWithChatbot(true);
            //    setTimeout(function () { document.getElementById("wraperTab").setAttribute('isclosedbychatbot', false) }, 3000);
            //    return false;
            //}

            var isMinimizedbychatbot = document.getElementById("wraperTab").getAttribute('minimizedbychatbot');
            if (isMinimizedbychatbot == 'true') {
                //TabLoadWithChatbot(true);
                MoveToChatbot();
                //document.getElementById("previewTab").style.display='none'
                setTimeout(function () { document.getElementById("wraperTab").setAttribute('minimizedbychatbot', false) }, 1000);

                return false;
            }

            if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {
                if (isChatbot) {
                    firstTimeLoad()

                    return false;
                }
            }
        }
    }

    if (isMobile) {
        if (S.className == 'previewDivMobile' || S.parentNode.id == 'previewDivMobileAnchor' || S.className == 'ltAssitantMenu' || S.className == 'ltAssistantMenuLogo' || S.className == 'ltAssistantMenuTextWrapper' || S.className == 'ltTabMenu' || S.className == 'ltTabMenuLogo' || S.className == 'ltTabMenuTextWrapper') {
        }
        else {
            if (isChatbot == true) {
                document.getElementById('menuWrapper').style.display = 'none';
            }
        }
    }
    else {
        var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
        if (ChatBotActive == 'true') {
            if (!isHidden(iFrameLetsTalkTab)) {
                document.getElementById("BackToHome").style.display = 'block'
                if (tabPosition == 'left' || tabPosition == 'right') {
                    document.getElementById("previewTabIcon").style.left = 'auto'
                    document.getElementById("previewTabText").style.left = 'auto'
                }
                else {
                    document.getElementById("previewTabIcon").style.left = '38px'
                    document.getElementById("previewTabText").style.left = '115px'
                }
                document.getElementById("BackToHome").setAttribute('onclick', 'BackToChatWindow(this)');
            }
        }
        var iconEle = document.getElementById('previewTabIcon').className;
        if (tabPosition == 'left') {
            tab2.style.right = '-420px';
            if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {
                if (ChatBotActive == 'true') {
                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.right = '0px';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        return false;
                    }
                }
            }

            document.getElementById('wraperTab').style.overflow = '';
            document.getElementById('wraperTab').style.width = "463px";



            document.getElementById('previewArr').setAttribute('class', 'previewArr');
            document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
            document.getElementById('previewTab').style.height = tabWidth + "px";

            if (iconEle.indexOf('tabIcon1') != -1) {
                document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                document.getElementById('previewTabText').style.bottom = "0px";
            }
            else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
            }
            document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
            document.getElementById('wraperTab').style.height = (parseInt(tabWidth)) + "px";

            if (ChatBotActive == 'true') {
                var checkTabIsOpen = document.getElementById("wraperTab").getAttribute("istaborchatopen");
                if (checkTabIsOpen == 'true') {
                    document.getElementById("wraperTab").style.width = '463px';
                }
                document.getElementById("BackToHome").style.display = 'none'
                document.getElementById("TabChatSwitch").style.display = 'none'
                document.getElementById("SwitchBackground").style.display = 'none'
            }

        }
        else if (tabPosition == 'right') {
            tab2.style.left = '-420px';
            if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {
                if (ChatBotActive == 'true') {
                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.left = '0px';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        return false;
                    }
                }
            }
            document.getElementById('wraperTab').style.overflow = '';
            document.getElementById('wraperTab').style.width = "463px";




            document.getElementById('previewArr').setAttribute('class', 'previewArr');
            document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
            document.getElementById('previewTab').style.height = tabWidth + "px";
            if (iconEle.indexOf('tabIcon1') != -1) {
                document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                document.getElementById('previewTabText').style.bottom = "0px";
            }
            else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
            }
            document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
            document.getElementById('wraperTab').style.height = (parseInt(tabWidth)) + "px";

            if (ChatBotActive == 'true') {
                var checkTabIsOpen = document.getElementById("wraperTab").getAttribute("istaborchatopen");
                if (checkTabIsOpen == 'true') {
                    document.getElementById("wraperTab").style.width = '463px';
                }
                document.getElementById("BackToHome").style.display = 'none'
                document.getElementById("TabChatSwitch").style.display = 'none'
                document.getElementById("SwitchBackground").style.display = 'none'
            }
        }
        else if (tabPosition == 'bottomRight' || tabPosition == 'bottomLeft') {

            document.getElementById('wraperTab').style.maxHeight = "none";
            // document.getElementById('wraperTab').style.overflow = "";

            if (isDepartment) {
                tab2.style.bottom = '-523px';
                if (ChatBotActive == 'true') {
                    if (!isHidden(iFrameLetsTalkTab)) {
                        document.getElementById("BackToHome").style.display = 'none'
                        document.getElementById("previewTabIcon").style.left = '5px'
                        //document.getElementById("previewTabText").style.left = '80px'
                        document.getElementById('wraperTab').style.maxHeight = "100%";

                        //adjust width of previewtab
                        var iconEle = document.getElementById('previewTabIcon').className;

                        document.getElementById('previewArr').setAttribute('class', 'previewArr');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
                        document.getElementById('previewTab').style.width = tabWidth + "px";
                        if (iconEle.indexOf('tabIcon1') != -1) {
                            document.getElementById('previewTabText').style.left = "";
                            document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                            document.getElementById('previewTabText').style.left = "10px";
                        }
                        else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                            document.getElementById('previewTabText').style.left = "";
                            document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
                        }
                        else {
                            document.getElementById('previewTabText').style.left = "";
                            document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
                        }
                        document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
                    }
                }
                var iconEle = document.getElementById('previewTabIcon').className;

                document.getElementById('previewArr').setAttribute('class', 'previewArr');
                document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
                document.getElementById('previewTab').style.width = tabWidth + "px";
                if (iconEle.indexOf('tabIcon1') != -1) {
                    document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                    document.getElementById('previewTabText').style.left = "10px";
                }
                else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                    document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
                }
                else {
                    document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
                }
                document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
            }
            else {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    tab2.style.bottom = '-592px';
                }
                else {

                    var ChatBotTabFirstTime = document.getElementById('wraperTab').getAttribute('firstTimeLoadByChatBot');
                    if (ChatBotTabFirstTime == 'true' && ChatBotActive == 'true') {
                        document.getElementById('wraperTab').setAttribute('firstTimeLoadByChatBot', false)
                    }
                    else {
                        tab2.style.bottom = '-585px';
                    }
                    var isOpenTab = document.getElementById("wraperTab").className;
                    if (ChatBotActive == 'true' && !isHidden(iFrameLetsTalkTab) && ChatBotTabFirstTime != 'true') {
                        if (!isHidden(iFrameLetsTalkTab)) {
                            document.getElementById("BackToHome").style.display = 'none'
                            document.getElementById("previewTabIcon").style.left = '5px'
                            //document.getElementById("previewTabText").style.left = '80px'
                            var iconEle = document.getElementById('previewTabIcon').className;

                            //adjust width of previewtab
                            var iconEle = document.getElementById('previewTabIcon').className;

                            document.getElementById('previewArr').setAttribute('class', 'previewArr');
                            document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
                            document.getElementById('previewTab').style.width = tabWidth + "px";
                            if (iconEle.indexOf('tabIcon1') != -1) {
                                document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                                document.getElementById('previewTabText').style.left = "10px";
                            }
                            else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                                document.getElementById('previewTabText').style.left = "";
                                document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
                            }
                            else {
                                document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
                            }
                            if (ChatBotTabFirstTime == 'true' && ChatBotActive == 'true') {
                                document.getElementById('wraperTab').style.width = "375px";
                            }
                            else {
                                document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
                            }
                        }
                    }
                }

                var iconEle = document.getElementById('previewTabIcon').className;

                document.getElementById('previewArr').setAttribute('class', 'previewArr');
                document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
                document.getElementById('previewTab').style.width = tabWidth + "px";
                if (iconEle.indexOf('tabIcon1') != -1) {
                    document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
                    document.getElementById('previewTabText').style.left = "10px";
                }
                else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
                    document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
                }
                else {
                    document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
                }

                if (ChatBotTabFirstTime == 'true' && ChatBotActive == 'true') {
                    document.getElementById('wraperTab').style.width = "375px";
                }
                else {
                    document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
                }

            }
        }

        document.getElementById("iFrameLetsTalkTab").style.display = 'none';
        document.getElementById("previewTabText").setAttribute("aria-expanded", "false");
        document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false);
        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class').split('isOpen')[0].trim())

    }
    if (typeof letsTalkIframeWindow != 'undefined')  //Post Message
    {
        letsTalkIframeWindow.postMessage('Thank you', '*');
    }
}


function animateTab() {

    var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
    var isChatSwitchEnable = document.getElementById("wraperTab").getAttribute('IsChatSwitch');

    if (ChatBotActive) {
        var e = this.className;

        if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) && ChatBotActive == 'true') {
            if (!isHidden(iFrameLetsTalkChat)) { return false }
            if (!isHidden(iFrameLetsTalkTab)) {
                if (isChatSwitchEnable == 'true' && e == 'BackToHome') {
                    return false;
                }
            }
        }
        else {
            if (!isHidden(iFrameLetsTalkChat)) { return false }
            if (!isHidden(iFrameLetsTalkTab)) {
                if (isChatSwitchEnable == 'true' && e == 'BackToHome') {
                    return false;
                }
            }
        }

        var isMinimizedByChatBot = document.getElementById("wraperTab").getAttribute('minimizedByChatbot');
        if (isMinimizedByChatBot == 'true') {
            TabLoadWithChatbot(true);
            setTimeout(function () { document.getElementById("wraperTab").setAttribute('minimizedByChatbot', false) }, 1000);

            return false;
        }
        var isclosedbychatbot = document.getElementById("wraperTab").getAttribute('closedbychatbot');
        if (isclosedbychatbot == 'true') {
            //TabLoadWithChatbot(true);
            setTimeout(function () { document.getElementById("wraperTab").setAttribute('isclosedbychatbot', false) }, 1000);
            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false);
            return false;
        }

        if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
            var thanksNextLoadSwitch = document.getElementById("wraperTab").getAttribute('thanksNextLoad');
            var isThanksViewShown = document.getElementById("wraperTab").getAttribute('thanksViewShown');
            if (thanksNextLoadSwitch != 'true' || document.getElementById('wraperTab').getAttribute('class').indexOf('isOpen') == -1) {
                if (isThanksViewShown == 'true') {
                    document.getElementById("iFrameLetsTalkTab").src = pageURL;
                    document.getElementById("wraperTab").setAttribute('thanksViewShown', false)
                    document.getElementById('wraperTab').setAttribute('thanksNextLoad', false);
                }
            }

        }




        var IsTabChatClosed = document.getElementById("previewTab").getAttribute('iscloseddown');
        if (IsTabChatClosed == 'true') {
            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false)
            document.getElementById("previewTab").setAttribute('iscloseddown', false);
            return false;
        }
        firstTimeLoad();
    }

    if (document.getElementById("iFrameLetsTalkTab").getAttribute('src')) {
        document.getElementById("iFrameLetsTalkTab").style.display = 'block'
    }
    else {
        document.getElementById("iFrameLetsTalkTab").style.display = 'none'
    }



    //PRT 92758  LT_Bibb (20119)
    //PRT 92957  LT_KentISD (16594)
    //PRT 107513  lt_pinellas (52639)
    if (isredirectTab == "True") {
        //PRT 116143  LT_wilson (31460)
        window.open(strredirectURL, '_blank');
    }
    else if ((corpno == "20119" && LtTabId == "702") || (corpno == "16594" && LtTabId == "190") || (corpno == "52639" && LtTabId == "1228")) {
        if (corpno == "20119" && LtTabId == "702") {
            window.open('https://www.bcsdk12.net/about_us/let_s_talk', '_blank');
        } else if (corpno == "16594" && LtTabId == "190") {
            window.open('https://www.k12insight.com/Lets-Talk/embed.aspx?k=WY4N5FLT', '_blank');
        } else {
            window.open('https://www.pcsb.org/domain/211', '_blank');
        }
    }
    else {
        if (isMobile) {
            var refURL = pageURL;
            window.open(refURL, "Let's Talk!")
        }
        else {

            if (ChatBotActive == 'true') {
                if (!isHidden(iFrameLetsTalkTab)) {
                    document.getElementById("BackToHome").style.display = 'block'
                    if (tabPosition == 'left' || tabPosition == 'right') {
                        document.getElementById("previewTabIcon").style.left = 'auto'
                        document.getElementById("previewTabText").style.left = 'auto'
                    }
                    else {
                        document.getElementById("previewTabIcon").style.left = '38px'
                        document.getElementById("previewTabText").style.left = '115px'
                    }

                    document.getElementById("BackToHome").setAttribute('onclick', 'BackToChatWindow(this)');
                }
            }
            if (isChatbot) {
                document.getElementById("previewTabText").setAttribute("aria-expanded", "true");
                //document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true);
                document.getElementById('wraperTab').style.overflowX = '';
                if (tabPosition == 'left') {

                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.right = '0px';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        return false;
                    }

                    if (document.documentElement.clientHeight < 575) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "375px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    if (parseInt(tab.style.right) < 0) {

                        isPostBack = false;
                        tab.style.display = 'block';
                        tab2.style.right = parseInt(tab2.style.right) + 20 + 'px';
                        if (isDepartment) {
                            document.getElementById('previewTab').style.height = "525px";
                            document.getElementById('wraperTab').style.height = "525px";
                        }
                        else {
                            document.getElementById('previewTab').style.height = "595px";
                            document.getElementById('wraperTab').style.height = "575px";
                        }
                        document.getElementById('previewTabText').style.width = "450px";
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
                        document.getElementById('wraperTab').style.width = "463px";
                        animate = setTimeout(animateTab, 10);


                    }
                    else if (parseInt(tab.style.right) > 0) {
                        isPostBack = false;
                        tab2.style.right = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')

                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.right) == 0) {

                        isPostBack = true;
                        tab2.style.right = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')

                        firstTimeLoad()
                    }

                }
                else if (tabPosition == 'right') {

                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.left = '0px';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        return false;
                    }

                    if (document.documentElement.clientHeight < 575) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "480px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    if (parseInt(tab.style.left) < 0) {
                        isPostBack = false;
                        tab.style.display = 'block';
                        tab2.style.left = parseInt(tab2.style.left) + 20 + 'px';
                        if (isDepartment) {
                            document.getElementById('previewTab').style.height = "525px";
                            document.getElementById('wraperTab').style.height = "525px";
                        }
                        else {
                            document.getElementById('previewTab').style.height = "595px";
                            document.getElementById('wraperTab').style.height = "575px";
                        }
                        document.getElementById('previewTabText').style.width = "450px";
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
                        document.getElementById('wraperTab').style.width = "463px";
                        animate = setTimeout(animateTab, 10);
                    }
                    else if (parseInt(tab.style.left) > 0) {
                        isPostBack = false;
                        tab2.style.left = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.left) == 0) {
                        isPostBack = true;
                        tab2.style.left = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                }
                else if (tabPosition == 'bottomRight' || tabPosition == 'bottomLeft') {

                    if (document.documentElement.clientHeight < 618) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "375px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    else {
                        document.getElementById('wraperTab').style.overflowY = 'hidden';
                    }
                    if (parseInt(tab.style.bottom) < 0) {
                        isPostBack = false;
                        tab.style.display = 'block';
                        document.getElementById('previewTab').style.width = "375px";
                        document.getElementById('wraperTab').style.width = "375px";
                        document.getElementById('previewTabText').style.width = "";
                        tab2.style.bottom = parseInt(tab2.style.bottom) + 25 + 'px';
                        animate = setTimeout(animateTab, 10);
                    }
                    else if (parseInt(tab.style.bottom) > 0) {
                        isPostBack = false;
                        tab2.style.bottom = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.bottom) == 0) {
                        isPostBack = true;
                        tab2.style.bottom = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()

                    }


                }
                setTimeout(function () {
                    var iframe = document.getElementById("iFrameLetsTalkTab");
                }, 10);
            }
            else {
                document.getElementById("previewTabText").setAttribute("aria-expanded", "true");
                document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true);
                document.getElementById('wraperTab').style.overflowX = '';
                if (tabPosition == 'left') {
                    if (document.documentElement.clientHeight < 575) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "480px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    if (parseInt(tab.style.right) < 0) {
                        isPostBack = false;
                        tab.style.display = 'block';
                        tab2.style.right = parseInt(tab2.style.right) + 20 + 'px';
                        if (isDepartment) {
                            document.getElementById('previewTab').style.height = "525px";
                            document.getElementById('wraperTab').style.height = "525px";
                        }
                        else {
                            document.getElementById('previewTab').style.height = "595px";
                            document.getElementById('wraperTab').style.height = "575px";
                        }
                        document.getElementById('previewTabText').style.width = "450px";
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
                        document.getElementById('wraperTab').style.width = "463px";
                        animate = setTimeout(animateTab, 10);
                    }
                    else if (parseInt(tab.style.right) > 0) {
                        isPostBack = false;
                        tab2.style.right = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.right) == 0) {
                        isPostBack = true;
                        tab2.style.right = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                }
                else if (tabPosition == 'right') {
                    if (document.documentElement.clientHeight < 575) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "480px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    if (parseInt(tab.style.left) < 0) {
                        isPostBack = false;
                        tab.style.display = 'block';
                        tab2.style.left = parseInt(tab2.style.left) + 20 + 'px';
                        if (isDepartment) {
                            document.getElementById('previewTab').style.height = "525px";
                            document.getElementById('wraperTab').style.height = "525px";
                        }
                        else {
                            document.getElementById('previewTab').style.height = "595px";
                            document.getElementById('wraperTab').style.height = "575px";
                        }
                        document.getElementById('previewTabText').style.width = "450px";
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
                        document.getElementById('wraperTab').style.width = "463px";
                        animate = setTimeout(animateTab, 10);
                    }
                    else if (parseInt(tab.style.left) > 0) {
                        isPostBack = false;
                        tab2.style.left = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.left) == 0) {
                        isPostBack = true;
                        tab2.style.left = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                }
                else if (tabPosition == 'bottomRight' || tabPosition == 'bottomLeft') {

                    if (document.documentElement.clientHeight < 618) {
                        document.getElementById('wraperTab').style.overflowY = 'auto';
                        document.getElementById('wraperTab').style.width = "437px";
                        document.getElementById('wraperTab').style.maxHeight = "100%";
                    }
                    else {
                        document.getElementById('wraperTab').style.overflowY = 'hidden';
                    }
                    if (parseInt(tab.style.bottom) < 0) {
                        isPostBack = false;
                        tab.style.display = 'block';
                        document.getElementById('previewTab').style.width = "420px";
                        document.getElementById('wraperTab').style.width = "420px";
                        document.getElementById('previewTabText').style.width = "";
                        tab2.style.bottom = parseInt(tab2.style.bottom) + 25 + 'px';
                        animate = setTimeout(animateTab, 10);
                    }
                    else if (parseInt(tab.style.bottom) > 0) {
                        isPostBack = false;
                        tab2.style.bottom = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                    else if (parseInt(tab.style.bottom) == 0) {
                        isPostBack = true;
                        tab2.style.bottom = '0px';
                        document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                        document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
                        clearTimeout(animate);
                        document.getElementById('wraperTab').setAttribute('class', document.getElementById('wraperTab').getAttribute('class') + ' isOpen')
                        firstTimeLoad()
                    }
                }
                setTimeout(function () {
                    var iframe = document.getElementById("iFrameLetsTalkTab");
                }, 10);
            }
        }
    }
}

var loopCOunt = 0;
function firstTimeLoad() {
    //alert('2 firstTimeLoad');
    if (!isChatbot) {
        if (!document.getElementById("iFrameLetsTalkTab").getAttribute('src')) {
            document.getElementById("iFrameLetsTalkTab").setAttribute('src', pageURL);
            //Start Post Message
            document.getElementById("iFrameLetsTalkTab").onload = function () {
                document.getElementById("tabLoaderWrapper").style.display = 'none'
                letsTalkIframeWindow = this.contentWindow;

                if (isLoadBind == false) {
                    function receiveMessage(event) {
                        if (event.data == 'thanks') {
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                }
                            }
                            else {
                                document.getElementById("iFrameLetsTalkTab").src = pageURL;
                            }
                        }
                        else if (event.data == 'ThanksMsg') {
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                    document.getElementById('wraperTab').setAttribute('thanksNextLoad', true);
                                }
                            }
                        }
                        else if (event.data == 'bottomRight' || event.data == 'bottomLeft' || event.data == 'right' || event.data == 'left') {
                            document.getElementById('wraperTab').scrollTop = 0;
                        }
                        else if (event.data == 'lostFocus') {
                            documentClick(event)
                        }
                    }
                }




                if (window.addEventListener)
                    window.addEventListener('message', receiveMessage, false);
                else
                    window.attachEvent('onmessage', receiveMessage);



                isLoadBind = true;
                document.getElementById("iFrameLetsTalkTab").style.display = 'block'
            };
            //End Post Message
        }
        else {

            document.getElementById("iFrameLetsTalkTab").style.display = 'block'
        }
    }
    else {
        var isChatSwitchEnable = document.getElementById("wraperTab").getAttribute('IsChatSwitch');
        if (isChatSwitchEnable == 'true') {
            return false;
        }
        var isMinimizedByChatBot = document.getElementById("wraperTab").getAttribute('minimizedByChatbot');
        if (isMinimizedByChatBot == 'true') {
            return false;
        }
        //var loopCOunt = 0;
        var elementExists = document.getElementById("ChatTabHomeScreen");
        if (elementExists) {

            var IsTabChatClosed = document.getElementById("previewTab").getAttribute('iscloseddown');
            if (loopCOunt == 0) {
                document.getElementById("tabLoaderWrapper").style.display = 'none';
                document.getElementById("previewTab").style.display = 'none';
                document.getElementById("wraperTab").style.width = '375px';
                document.getElementById("wraperTab").style.height = '395px';
                document.getElementById("wraperTab").style.bottom = '0px';
                document.getElementById("ChatTabHomeScreen").style.display = 'block';

                if (tabPosition == 'left') {
                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.right = '0px';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        document.getElementById("TabChatHeaderMininmize").setAttribute('class', document.getElementById("TabChatHeaderMininmize").getAttribute('class') + ' TabChatHeaderMininmizeLeft')
                        document.getElementById("TabChatContainer").setAttribute('class', document.getElementById("TabChatContainer").getAttribute('class') + ' left')
                        document.getElementById("TabChatHeadContent").setAttribute('class', document.getElementById("TabChatHeadContent").getAttribute('class') + ' left')
                        document.getElementById("wraperTab").style.bottom = '';
                        return false;
                    }
                    else {
                        document.getElementById("wraperTab").style.right = '0px';
                    }
                }
                else if (tabPosition == 'right') {
                    var FirstTimeLoadChatScreen = document.getElementById("ChatTabHomeScreen").getAttribute("firstTimeLoadChatScreen");
                    if (FirstTimeLoadChatScreen == 'true') {
                        tab2.style.left = '0px';
                        tab2.style.right = '';
                        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                        document.getElementById("TabChatHeaderMininmize").setAttribute('class', document.getElementById("TabChatHeaderMininmize").getAttribute('class') + ' TabChatHeaderMininmizeRight')
                        document.getElementById("TabChatContainer").setAttribute('class', document.getElementById("TabChatContainer").getAttribute('class') + ' right')
                        document.getElementById("TabChatHeadContent").setAttribute('class', document.getElementById("TabChatHeadContent").getAttribute('class') + ' right')
                        document.getElementById("wraperTab").style.bottom = '';
                        return false;
                    }
                    else {
                        document.getElementById("wraperTab").style.left = '0px';
                    }
                }

            }
            else if (IsTabChatClosed == 'true') {
                document.getElementById("tabLoaderWrapper").style.display = 'none';
                document.getElementById("ChatTabHomeScreen").style.display = 'block';
                document.getElementById("previewTab").style.display = 'none';
                document.getElementById("wraperTab").style.bottom = '0';
                if (tabPosition == 'left') {
                    document.getElementById("wraperTab").style.right = '0px';
                    document.getElementById("wraperTab").style.bottom = '';
                }
                else if (tabPosition == 'right') {
                    document.getElementById("wraperTab").style.left = '0px';
                    document.getElementById("wraperTab").style.bottom = '';
                }
                document.getElementById("wraperTab").style.width = '375px';
                document.getElementById("wraperTab").style.height = '395px';
                document.getElementById("previewTab").setAttribute('iscloseddown', false);
            }
            else {
                if (tabPosition == 'left') {
                    tab2.style.right = '0px';
                    document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                    document.getElementById("tabLoaderWrapper").style.display = 'none';
                    document.getElementById("ChatTabHomeScreen").style.display = 'block';
                    document.getElementById("previewTab").style.display = 'none';
                    document.getElementById("wraperTab").style.width = '375px';
                    document.getElementById("wraperTab").style.height = '395px';
                    document.getElementById("wraperTab").style.bottom = '';
                    document.getElementById("previewTab").setAttribute('iscloseddown', false);
                }
                else if (tabPosition == 'right') {
                    tab2.style.left = '0px';
                    tab2.style.right = '';
                    document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                    document.getElementById("tabLoaderWrapper").style.display = 'none';
                    document.getElementById("ChatTabHomeScreen").style.display = 'block';
                    document.getElementById("previewTab").style.display = 'none';
                    document.getElementById("wraperTab").style.width = '375px';
                    document.getElementById("wraperTab").style.height = '395px';
                    document.getElementById("wraperTab").style.bottom = '';
                    document.getElementById("previewTab").setAttribute('iscloseddown', false);
                }
                else {
                    document.getElementById("tabLoaderWrapper").style.display = 'none';
                    document.getElementById("ChatTabHomeScreen").style.display = 'block';
                    document.getElementById("previewTab").style.display = 'none';
                    document.getElementById("wraperTab").style.width = '375px';
                    document.getElementById("wraperTab").style.height = '395px';
                    //document.getElementById("wraperTab").style.bottom = '0';
                    document.getElementById("previewTab").setAttribute('iscloseddown', false);
                }

            }
        }
        loopCOunt++;
    }
}



function getKeyDown(e) {
    e.stopPropagation();
}
function getKeyUp(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        if (document.getElementById('wraperTab').getAttribute('class').indexOf('isOpen') > 0) {
            documentClick(e)
        }
        else {
            animateTab()
            setTimeout(function () {
                var iframe = document.getElementById("iFrameLetsTalkTab");
            }, 100);
        }
    }
}

//117322 : Implement Combind UI feature for LtTab and LT! Assistant in mobile
function LTShowMenu() {
    var ele = document.getElementById("menuWrapper");

    if (ele.style.display === "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}

window.onresize = tabPos;

// For Manor Independent School District
var ClientURL = window.location.href
var existingOnload = window.onload; // To get existing onload function if any
// For Manor Independent School District

window.onload = initTab;
window.onscroll = alignTabBubble;
document.ontouchmove = alignTabBubble;
var tabWidth = "";
var isMobile = false;
var isLiveServer = true;
var isDepartment = false;
var isLoadBind = false;
var isPostBack = false;
var isLogochange = false;
var corpno;
var LtTabId;
var bubbleOffset;
var isredirectTab;
var strredirectURL;
var ChatBotProject;
var MainCorpNoEncry;
var isChatbot;
var passDues = "";
function LTConfig(data) {
    isMobile = data.IsMobile;
    tabPosition = data.TabPosition;
    tabWidth = data.TabWidth;
    isLiveServer = data.isLiveServer;
    isDepartment = data.isDepartment;
    corpno = data.TabCorpNo;
    bubbleOffset = parseInt(data.BubbleOffset);
    LtTabId = data.LtTabId;
    isredirectTab = data.isredirectTab;
    strredirectURL = data.strredirectURL;
    passDues = data.PassDueDays;

    //PRT-NO 79739--START--
    LtTitle = data.Title;
    // --END--

    //117322 : Implement Combind UI feature for LtTab and LT! Assistant in mobile
    ChatBotProject = data.ChatBotProject;
    MainCorpNoEncry = data.MainCorpNoEncry;
    isChatbot = data.isChatbot;

    ChatBotpageURL = '';

    if (window.url.split(':').length > 0 && (window.url.split(':')[0] == 'http' || window.url.split(':')[0] == 'https')) {
        ChatBotpageURL = window.url.split(':')[1];
    }
    else {
        ChatBotpageURL = window.url;
    }

    ChatBotpageURL = 'https:' + ChatBotpageURL + 'chatbot/chatbot/OpenChatWindow?strMainCorpno=' + MainCorpNoEncry + '&projectId=' + ChatBotProject + '&LtTabKey=' + window.key + '&isLtTab=' + isChatbot + '&LtTabColor=' + data.TabColor.toString().replace('#', '') + '@' + data.TabTextColor.toString().replace('#', '');// + '&rnd=' + dates.getTime();

    if (isMobile) {

        var checkMobDivExist = document.getElementById("previewDivMobile");
        if (checkMobDivExist != null) {
            return false;
        }

        var isiPad = navigator.userAgent
        var node = document.createElement('div');
        var textee = document.createElement('label');
        var textAnchor = document.createElement('a');
        //textee.innerHTML = "Let's Talk Tab"
        textee.innerHTML = data.ProductName + " Tab";

        var menuWrapper = document.createElement('div');
        var ltAssistantMenu = document.createElement('div');
        var ltTabMenu = document.createElement('div');
        var ltAssistantMenuLogo = '<span class="ltAssistantMenuLogo"><img src="' + window.url + 'Lets-Talk/img/ltAssistantLink-icon.svg"></span>';
        var ltTabMenuLogo = '<span class="ltTabMenuLogo"><img src="' + window.url + 'Lets-Talk/img/ltTablink-icon.svg"></span>';
        var ltAssistantMenuText = '<div class="ltAssistantMenuTextWrapper"><p class="title">Assistant</p><p class="subTitle">Start a conversation with our virtual assistant.</p></div>'
        var ltTabMenuText = '<div class="ltTabMenuTextWrapper"><p class="title">Contact our Team</p><p class="subTitle">Send us a message and we will get back to you within ' + (data.PassDueDays > 1 ? data.PassDueDays + ' business days' : '1 business day') + '</p></div>';

        if (data.TabCorpNo == "31834") {
            node.setAttribute('class', 'previewDivMobileCustom');
            if ((isiPad.toString()).indexOf('iPad') != -1) {
                node.style.width = '80px';
                textee.style.width = '80px';
                textAnchor.style.width = '80px';
                node.style.height = '80px';
                textee.style.height = '80px';
                textAnchor.style.height = '80px';
            }
            else {
                node.style.width = '56px';
                textee.style.width = '56px';
                textAnchor.style.width = '56px';
                node.style.height = '55px';
                textee.style.height = '55px';
                textAnchor.style.height = '55px';
            }
        }
        else if (data.TabCorpNo == "19106") {
            node.setAttribute('class', 'previewDivMobileCustomBubble');
            if ((isiPad.toString()).indexOf('iPad') != -1) {
                node.style.width = '80px';
                textee.style.width = '80px';
                textAnchor.style.width = '80px';
                node.style.height = '80px';
                textee.style.height = '80px';
                textAnchor.style.height = '80px';
            }
            else {
                node.style.width = '56px';
                textee.style.width = '56px';
                textAnchor.style.width = '56px';
                node.style.height = '55px';
                textee.style.height = '55px';
                textAnchor.style.height = '55px';
            }
        }
        else if (data.TabCorpNo == "20718") {
            node.setAttribute('class', 'previewDivMobileLTbataviaCustom');
            if (data.MobileIcon == 'mobileIcon1' || data.MobileIcon == 'mobileIcon2' || data.MobileIcon == 'mobileIcon3') {
                node.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textee.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textAnchor.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {
                    node.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textee.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textAnchor.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                }
            }
            else {
                node.style.height = data.MobileIconSize + 'px';
                textee.style.height = data.MobileIconSize + 'px';
                textAnchor.style.height = data.MobileIconSize + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {
                    node.style.height = (data.MobileIconSize + 25) + 'px';
                    textee.style.height = (data.MobileIconSize + 25) + 'px';
                    textAnchor.style.height = (data.MobileIconSize + 25) + 'px';
                }
            }
            node.style.width = (data.MobileIconSize + 1) + 'px';
            textee.style.width = (data.MobileIconSize + 1) + 'px';
            textAnchor.style.width = (data.MobileIconSize + 1) + 'px';
            if ((isiPad.toString()).indexOf('iPad') != -1) {
                node.style.width = (data.MobileIconSize + 25) + 'px';
                textee.style.width = (data.MobileIconSize + 25) + 'px';
                textAnchor.style.width = (data.MobileIconSize + 25) + 'px';
            }
        }
        else if (data.IsRequestedLogo == 'True') {
            node.setAttribute('class', 'previewDivMobile ' + data.strLogofileName + 'Custom');
            if (data.MobileIcon == 'mobileIcon2' || data.MobileIcon == 'mobileIcon3') {
                node.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textee.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textAnchor.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {
                    node.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textee.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textAnchor.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                }
            }
            else {
                node.style.height = data.MobileIconSize + 'px';
                textee.style.height = data.MobileIconSize + 'px';
                textAnchor.style.height = data.MobileIconSize + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {  
                    node.style.height = (data.MobileIconSize + 25) + 'px';
                    textee.style.height = (data.MobileIconSize + 25) + 'px';
                    textAnchor.style.height = (data.MobileIconSize + 25) + 'px';
                }
            }
            node.style.width = (data.MobileIconSize + 1) + 'px';
            textee.style.width = (data.MobileIconSize + 1) + 'px';
            textAnchor.style.width = (data.MobileIconSize + 1) + 'px';
            if ((isiPad.toString()).indexOf('iPad') != -1) {
                node.style.width = (data.MobileIconSize + 25) + 'px';
                textee.style.width = (data.MobileIconSize + 25) + 'px';
                textAnchor.style.width = (data.MobileIconSize + 25) + 'px';
            }
        }
        else {

            //This should display as it is but just position will shift right to le
            if (data.IsMobileLogoshowLeftbottom == 'True') {
                 
                node.setAttribute('class', 'previewDivMobile LT_ShowLeftBottomCustom ' + data.MobileIconColor + ' ' + data.MobileIcon);
            }
            else {
                node.setAttribute('class', 'previewDivMobile ' + data.MobileIconColor + ' ' + data.MobileIcon);
            }
             
            if (data.MobileIcon == 'mobileIcon2' || data.MobileIcon == 'mobileIcon3') {
                node.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textee.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                textAnchor.style.height = Math.ceil(data.MobileIconSize * 50 / 80) + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {
                    node.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textee.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                    textAnchor.style.height = (Math.ceil(data.MobileIconSize * 50 / 80) + 25) + 'px';
                }
            }
            else {
                node.style.height = data.MobileIconSize + 'px';
                textee.style.height = data.MobileIconSize + 'px';
                textAnchor.style.height = data.MobileIconSize + 'px';
                if ((isiPad.toString()).indexOf('iPad') != -1) {
                    node.style.height = (data.MobileIconSize + 25) + 'px';
                    textee.style.height = (data.MobileIconSize + 25) + 'px';
                    textAnchor.style.height = (data.MobileIconSize + 25) + 'px';
                }
            }
            node.style.width = (data.MobileIconSize + 1) + 'px';
            textee.style.width = (data.MobileIconSize + 1) + 'px';
            textAnchor.style.width = (data.MobileIconSize + 1) + 'px';
            if ((isiPad.toString()).indexOf('iPad') != -1) {
                node.style.width = (data.MobileIconSize + 25) + 'px';
                textee.style.width = (data.MobileIconSize + 25) + 'px';
                textAnchor.style.width = (data.MobileIconSize + 25) + 'px';
            }

            if (isChatbot == true) {
                node.classList.add("isChatbot");
            }
        }
         
        node.setAttribute('id', 'previewDivMobile');
        //PRT 92758  LT_Bibb (20119)
        //PRT 92957  LT_KentISD (16594)
        //PRT 107513  lt_pinellas (52639)

        if (data.isredirectTab == "True") {
            //PRT 116143  LT_wilson (31460)
            pageURL = data.strredirectURL;
        }
        else if ((data.TabCorpNo == "20119" && data.LtTabId == "702") || (data.TabCorpNo == "16594" && data.LtTabId == "190") || (data.TabCorpNo == "52639" && data.LtTabId == "1228")) {
            if (data.TabCorpNo == "20119" && data.LtTabId == "702") {
                pageURL = 'https://www.bcsdk12.net/about_us/let_s_talk';
            } else if (data.TabCorpNo == "16594" && data.LtTabId == "190") {
                pageURL = 'https://www.k12insight.com/Lets-Talk/embed.aspx?k=WY4N5FLT';
            }
            else {
                pageURL = 'https://www.pcsb.org/domain/211';
            }
        }

        if (isChatbot == false) {
            textAnchor.setAttribute('href', pageURL)
            textAnchor.setAttribute('target', '_blank')
        }
        textAnchor.setAttribute('id', 'previewDivMobileAnchor')

        document.getElementsByTagName("body")[0].appendChild(node)
        document.getElementById("previewDivMobile").appendChild(textAnchor)
        document.getElementById("previewDivMobileAnchor").appendChild(textee)

        //117322 : Implement Combind UI feature for LtTab and LT! Assistant in mobile
        if (isChatbot == true) {
            textAnchor.setAttribute('onclick', 'LTShowMenu();')
            menuWrapper.setAttribute('id', 'menuWrapper')
            ltAssistantMenu.setAttribute('id', 'ltAssitantMenu')
            ltTabMenu.setAttribute('id', 'ltTabMenu')

            ltAssistantMenu.innerHTML = '<a href="' + ChatBotpageURL + '" target="_blank">' + ltAssistantMenuLogo + ltAssistantMenuText + '</a>';
            ltTabMenu.innerHTML = '<a href="' + pageURL + '" target="_blank">' + ltTabMenuLogo + ltTabMenuText + '</a>';

            document.getElementsByTagName("body")[0].appendChild(menuWrapper)
            document.getElementById("menuWrapper").appendChild(ltAssistantMenu)
            document.getElementById("menuWrapper").style.display = "none";
            document.getElementById("menuWrapper").appendChild(ltTabMenu)


            var rightVal = parseInt(document.getElementById("previewDivMobile").style.width);

            if (screen.availWidth == 320) {
                if (rightVal > 70) {
                    rightVal = rightVal - 8;
                }
            }

            document.getElementById("menuWrapper").style.right = rightVal + 'px'
        }

        if ((isiPad.toString()).indexOf('iPad') != -1) {
            //document.getElementById('previewDivMobile').style.width = (data.MobileIconSize + 25) + 'px';
            //document.getElementById('previewDivMobile').style.height = (data.MobileIconSize + 25) + 'px';
            document.getElementById('previewDivMobile').style.right = '40px';
            document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 50 - bubbleOffset - getBodyOffset()) + 'px'

        }
        else {
            //Commented for PRT 117429
            //document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 20 - bubbleOffset - getBodyOffset()) + 'px'
        }
        //PRT 110983 
        if (corpno == "56750") {
            document.getElementById('previewDivMobile').style.top = "50%";
            document.getElementById('previewDivMobile').style.position = "fixed";
        }
    }
    else {
        var addLoaderWrapper = document.createElement('div');
        var BackToHome = '';
        addLoaderWrapper.setAttribute('class', 'tabLoaderWrapper');
        addLoaderWrapper.setAttribute('id', 'tabLoaderWrapper');
        mainDiv.appendChild(addLoaderWrapper);

        var loaderImgSRC = document.createElement('img');
        loaderImgSRC.setAttribute('src', data.CdnUrl + 'Lets-Talk/img/LTFeedLoader.png');
        loaderImgSRC.setAttribute('id', 'LTTabVideo');
        loaderImgSRC.setAttribute('alt', 'Loading');
        document.getElementById("tabLoaderWrapper").appendChild(loaderImgSRC);

        if (isChatbot) {
            document.getElementById('wraperTab').setAttribute('IsChatBotEnable', true)
            //Chat Tab Home Screen 
            var divChatTab = document.createElement("div");
            divChatTab.setAttribute('id', 'ChatTabHomeScreen');
            divChatTab.setAttribute('class', 'ChatTabHomeScreen');
            divChatTab.setAttribute('firstTimeLoadChatScreen', true);
            mainDiv.appendChild(divChatTab);
            var IconColor = 'default';
            var textColor = '';
            if (data.TabColor == '#bb202e') {
                IconColor = 'IconRed'
                textColor = '#E0E0E0';
            }
            else if (data.TabColor == '#f6c63a') {
                IconColor = 'IconYellow'
                textColor = '#303030';
            }
            else if (data.TabColor == '#f27422') {
                IconColor = 'IconOrange'
                textColor = '#303030';
            }
            else if (data.TabColor == '#92c440') {
                IconColor = 'IconLightGreen'
                textColor = '#303030';
            }
            else if (data.TabColor == '#138971') {
                IconColor = 'IconDarkGreen'
                textColor = '#000000';
            }
            else if (data.TabColor == '#255467') {
                IconColor = 'IconDarkBlue'
                textColor = '#E0E0E0';
            }
            else if (data.TabColor == '#3b93cf') {
                IconColor = 'IconLightBlue'
                textColor = '#030303';
            }
            else if (data.TabColor == '#37295e') {
                IconColor = 'IconViolet'
                textColor = '#E0E0E0';
            }
            else if (data.TabColor == '#3d166e') {
                IconColor = 'IconPurple'
                textColor = '#E0E0E0';
            }
            else if (data.TabColor == '#b8b8b9') {
                IconColor = 'IconLightGray'
                textColor = '#303030';
            }
            else if (data.TabColor == '#5d5e66') {
                IconColor = 'IconDarkGray'
                textColor = '#F5F5F5';
            }
            else if (data.TabColor == '#2c3638') {
                IconColor = 'IconBlack'
                textColor = '#E0E0E0';
            }
            var chatBotLangDropDwn = "";

            if (data.SpanishChatbot) {
                chatBotLangDropDwn = '<div class="chatLangCombined"> <label class="chatLangCombinedLbl" id="chatLangCombinedLbl" aria-label="Selected Language - English" tabindex="0" onkeypress="changeLangCombined(this)" onclick="changeLangCombined(this)">English</label><div class="chatLangCombinedOptions" id="chatLangCombinedOptions"><div class="optEngCombined"> <input value="1" name="language" type="radio" id="chatLangCombinedEnglish" class="LTSGRadio" style="margin-left:0;display:none;" checked="checked" onchange="changeCombinedChatbotLanguage(1)"> <label class="LTSGRadioLable" for="chatLangCombinedEnglish" tabindex="0" aria-label="English" onkeypress="changeCombinedChatbotLanguage(1)">English</label></div><div class="optSpaCombined"> <input value="4" name="language" type="radio" id="chatLangCombinedSpanish" class="LTSGRadio" style="margin-left:0;display:none;" onchange="changeCombinedChatbotLanguage(4)"> <label class="LTSGRadioLable" for="chatLangCombinedSpanish" tabindex="0" aria-label="Español" onkeypress="changeCombinedChatbotLanguage(4)">Español</label></div></div></div>';
            }

            var ChatTabHomeHTML = '<div class="TabChatContainer"  id="TabChatContainer"> <div class="TabChatHeadContent" id="TabChatHeadContent" style="background:' + data.TabColor + '"><div class="TabChatHeader"> <div class="TabChatHeaderLogo">' + chatBotLangDropDwn + '<img src="' + window.url + 'Lets-Talk/img/combinedTabChatbot/LTChatTabLogo.svg" alt="Logo"/></div><div class="TabChatHeaderMininmize" id="TabChatHeaderMininmize" tabindex="0" aria-label="Minimize the tab"><img class="TabChatHeaderMininmizeImg" src="' + window.url + 'Lets-Talk/img/ChatDownArrow.svg" alt="Minimize"/></div></div><div class="TabChatHeaderDiv"> <div class="TabChatHeadTxt" id="TabChatHeadTxt" aria-label="We are here to help" tabindex="0" style="color:' + textColor + '">We are here to help</div><div class="TabChatHeadDesc" id="TabChatHeadDesc" aria-label="Select an option below" tabindex="0"  style="color:' + textColor + '">Select an option below</div><div class="ChatTabLoading" id="ChatTabLoading"><img src="' + window.url + '/Lets-Talk/img/Timeline_loader.gif" alt="Loading" style="width: 5%;" /></div></div></div><div class="TabChatBtnSection"><div class="ChatBtnCall" id="ChatBtnCall" role="button" aria-labelledby="ChatBtnHead ChatBtnHeadDesc" tabindex="0" onclick="TabLoadWithChatbot(true)"> <div class="ChatBtnImg ' + IconColor + '"></div><div class="ChatBtnContent"> <div class="ChatBtnHead" id="ChatBtnHead">Ask a Question</div><div class="ChatBtnHeadDesc" id="ChatBtnHeadDesc">Start a conversation with our virtual assistant.</div></div></div><div class="TabBtnCall" id="TabBtnCall" role="button" aria-labelledby="TabBtnHeadTab TabBtnHeadDescTab" tabindex="0" onclick="TabLoadWithChatbot(false)"> <div class="TabBtnImg ' + IconColor + '"></div><div class="TabBtnContent"> <div class="TabBtnHead" id="TabBtnHeadTab">Contact our Team</div><div class="TabBtnHeadDesc" id="TabBtnHeadDescTab">Send us a message and we will get back to you within ' + (data.PassDueDays > 1 ? data.PassDueDays + ' business days' : ' 1 business day') + '</div></div></div></div></div>';
            document.getElementById("ChatTabHomeScreen").innerHTML = ChatTabHomeHTML;

            document.getElementById('TabChatHeaderMininmize').onkeydown = function (e) {
                if (e.which == 13)  // the enter key code
                {
                    TabChatWindowMinimize(this);
                    return false;
                }
            }
            document.getElementById('ChatBtnCall').onkeydown = function (e) {
                if (e.which == 13)  // the enter key code
                {
                    TabLoadWithChatbot(true);
                    return false;
                }
            }
            document.getElementById('TabBtnCall').onkeydown = function (e) {
                if (e.which == 13)  // the enter key code
                {
                    TabLoadWithChatbot(false);
                    return false;
                }
            }

            //var ChatBotSwitchHTML = '<span class="BackToHome" id="BackToHomeTab" style="background-color:' + data.TabColor + '" >&nbsp;</span><div class="TabChatSwitch" id="ChatSwitchBot"><span class="SwitchArrowUp"></span>Switch to ' + data.ProductName +' Tab</div>';
            var ChatBotSwitchHTML = '';
            if (data.SpanishChatbot) {
                ChatBotSwitchHTML = '<span class="BackToHome" id="BackToHomeTab" aria-label="Switch Menu" style="background-color:' + data.TabColor.toString() + ';" tabindex=0 role="button">&nbsp;</span><div aria-label="Switch to ' + data.ProductName + ' Tab" class="TabChatSwitch language" id="ChatSwitchBot"><span class="SwitchArrowUp"></span><div class="chatLangOptions" id="chatLangOptions"><div class="optEng"><input value="1" name="languageCombined" type="radio" id="chatLangEnglish" class="LTSGRadio" style="margin-left:0;display:none;" checked="checked" onchange="changeChatbotLanguage(1)" ><label class="LTSGRadioLable" for="chatLangEnglish" tabindex="0" aria-label="English" onkeypress="changeChatbotLanguage(1)">English</label></div><div class="optSpa"><input value="4" name="languageCombined" type="radio" id="chatLangSpanish" class="LTSGRadio" style="margin-left:0;display:none;" onchange="changeChatbotLanguage(4)" ><label class="LTSGRadioLable" for="chatLangSpanish" tabindex="0" aria-label="Español" onkeypress="changeChatbotLanguage(4)">Español</label></div><div class="switchToTab" onclick="MoveToTab(this)" onkeypress="MoveToTab(this)" onfocusout="hideLangMenu()" tabindex="0" aria-label="Switch to ' + data.ProductName +' Tab"><span class="chatLogo"></span><span class="ltAssistantTxt">Switch to ' + data.ProductName +' Tab</span></div></div></div>';
            }
            else {
                ChatBotSwitchHTML = '<span class="BackToHome" id="BackToHomeTab" aria-label="Switch Menu" style="background-color:' + data.TabColor.toString() + ';" tabindex=0 role="button">&nbsp;</span><div aria-label="Switch to ' + data.ProductName +' Tab" class="TabChatSwitch" id="ChatSwitchBot" tabindex="0"><span class="SwitchArrowUp"></span>Switch to ' + data.ProductName +' Tab</div>';
            }
            
            var ChatBotSwitchBack = document.createElement("div");
            ChatBotSwitchBack.setAttribute('id', 'ChatBotSwitchBack');
            if (data.SpanishChatbot) {
                ChatBotSwitchBack.setAttribute('class', 'ChatBotSwitchBack Language');
            }
            else {
                ChatBotSwitchBack.setAttribute('class', 'ChatBotSwitchBack');
            }
            mainDiv.appendChild(ChatBotSwitchBack);
            document.getElementById("ChatBotSwitchBack").innerHTML = ChatBotSwitchHTML;

            document.getElementById('BackToHomeTab').onkeydown = function (e) {
                if (e.which == 13)  // the enter key code
                {
                    BackToTab(this);
                    return false;
                }
            }
            document.getElementById('ChatSwitchBot').onkeydown = function (e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code == 9) {
                    document.getElementById("ChatSwitchBot").style.display = 'none';
                    document.getElementById("SwitchBackground").style.display = 'none';
                    document.getElementById("chatLangOptions").style.display = 'none';
                }
            }
            document.getElementById('ChatSwitchBot').onkeydown = function (e) {
                if (e.which == 13)  // the enter key code
                {
                    if (!data.SpanishChatbot) {
                        MoveToTab(this);
                        return false;
                    }
                }
            }

            //ChatBot Iframe
            var appIframeChat = document.createElement('iframe');
            appIframeChat.setAttribute('width', '420px');
            appIframeChat.setAttribute('height', '630px');
            appIframeChat.setAttribute('style', 'overflow:hidden;background-color:#ffffff;');
            appIframeChat.setAttribute('frameborder', '0');
            appIframeChat.setAttribute('id', 'iFrameLetsTalkChat');
            mainDiv.appendChild(appIframeChat);
            document.getElementById('iFrameLetsTalkChat').style.boxShadow = "0 2px 4px 0 rgba(0,0,0,0.5)";
            tabChatBot = document.getElementById('iFrameLetsTalkChat').parentNode;

            document.getElementById("iFrameLetsTalkChat").style.display = 'none';
            document.getElementById("TabChatHeaderMininmize").removeEventListener("onclick", documentClick);
            document.getElementById("TabChatHeaderMininmize").removeEventListener("onclick", animateTab);
            document.getElementById("TabChatHeaderMininmize").setAttribute('onclick', 'TabChatWindowMinimize(this)');
            if (data.SpanishChatbot) {
                document.getElementById("TabChatHeaderMininmize").setAttribute('onfocus', 'hideLanguage()');
            }

            BackToHome = '<span class="BackToHome" id="BackToHome" aria-label="Switch Menu" tabindex="0" role="button">&nbsp;</span><div aria-label="Switch to ' + data.ProductName +' Assistant" class="TabChatSwitch" id="TabChatSwitch" tabindex="0"><span class="SwitchArrowUp" id="SwitchArrowUp"></span>Switch to ' + data.ProductName +' Assistant</div>';
            //var SwitchBack = '<div class="SwitchBackground" id="SwitchBackground"></div>';
            var SwitchBack = document.createElement("div");
            SwitchBack.setAttribute('id', 'SwitchBackground');
            SwitchBack.setAttribute('class', 'SwitchBackground');
            mainDiv.appendChild(SwitchBack);
        }

        var appIframe = document.createElement('iframe');
        appIframe.setAttribute('width', '420px');
        //appIframe.setAttribute('scrolling', 'no');
        appIframe.setAttribute('style', 'overflow:hidden;background-color:#ffffff;');
        appIframe.setAttribute('frameborder', '0');
        appIframe.setAttribute('id', 'iFrameLetsTalkTab');
        //PRT-NO 79739--START--
        appIframe.setAttribute('title', LtTitle);
        // --END--

        //appIframe.setAttribute('src', pageURL);
        mainDiv.appendChild(appIframe);
        tab = document.getElementById('iFrameLetsTalkTab').parentNode;

        var node = document.createElement('div');
        if (data.TabIcon == "tabIcon1") {
            node.setAttribute('class', 'previewDiv ltNone ' + (data.TabPosition + 'LT') + ' ' + data.TabColor + '');
        }
        else if (data.TabIcon == "tabIcon2" || data.TabIcon == "tabIcon3") {
            node.setAttribute('class', 'previewDiv lt ' + (data.TabPosition + 'LT') + '');
        }
        else {
            node.setAttribute('class', 'previewDiv ' + (data.TabPosition + 'LT') + '');
        }



        if (data.TabPosition == "left" || data.TabPosition == "right") {
            var strGradientStyle = '';

            if (isDepartment) {
                document.getElementById('iFrameLetsTalkTab').style.height = '525px';
            }
            else {
                document.getElementById('iFrameLetsTalkTab').style.height = '595px';
            }

            strGradientStyle = "background: " + data.TabColor + ";";
            strGradientStyle += "background: -moz-linear-gradient(left, " + data.TabColor + " 0%, " + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -webkit-gradient(linear, left top, right top, color-stop(0%," + data.TabColor + "), color-stop(100%," + data.TabGradientColor + "));";
            strGradientStyle += "background: -webkit-linear-gradient(left, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -o-linear-gradient(left, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -ms-linear-gradient(left, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: linear-gradient(to right, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + data.TabColor + "', endColorstr='" + data.TabGradientColor + "',GradientType=1 );";

            if (data.IsRequestedLogo == 'True' && data.strLogofileName == 'LT_Springbranch') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.strLogofileName + 'Custom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText ' + data.strLogofileName + 'Custom "  style="color:' + data.TabTextColor + ';">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsRequestedLogo == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.strLogofileName + 'Custom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText"  style="color:' + data.TabTextColor + ';"><u>' + data.TabText + '</u></a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsLogochange == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + '<img src="' + window.url + 'Lets-Talk/img/zCustome/' + data.strLogofileName + '" style="height: 30px;">' + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsLogoArrowColor == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon blueCustom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/zCustome/white_arrow_New_blue.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if ((data.IsTabBlackColor) && (data.strTabCustomColor == '')) {
                node.innerHTML = '<div class="previewTab custom blackTabText" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_black.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsTabBlackColor && (data.strTabCustomColor != '') && (data.TabIcon == 'tabIcon6')) {
                node.innerHTML = '<div class="previewTab custom ' + data.strTabCustomColor + '" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.strTabCustomColor + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_bluepinellas.png?k=1" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else {
                if (data.TabColor == "#f6c63a" || data.TabColor == "#b8b8b9") {
                    node.innerHTML = '<div class="previewTab custom blackTabText" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_black.png" style="height: 15px;" alt="Maximize" /></div></div>';
                }
                else {
                    node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;height:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
                }
            }
        }
        else if (data.TabPosition == "bottomLeft" || data.TabPosition == "bottomRight") {
            var strGradientStyle = '';

            if (isDepartment) {
                document.getElementById('iFrameLetsTalkTab').style.height = '523px';
            }
            else {
                document.getElementById('iFrameLetsTalkTab').style.height = '595px';
            }

            strGradientStyle = "background: " + data.TabColor + ";";
            strGradientStyle += "background: -moz-linear-gradient(top, " + data.TabColor + " 0%, " + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -webkit-gradient(linear, left top, left bottom, color-stop(0%," + data.TabColor + "), color-stop(100%," + data.TabGradientColor + "));";
            strGradientStyle += "background: -webkit-linear-gradient(top, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -o-linear-gradient(top, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: -ms-linear-gradient(top, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "background: linear-gradient(to bottom, " + data.TabColor + " 0%," + data.TabGradientColor + " 100%);";
            strGradientStyle += "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='" + data.TabColor + "', endColorstr='" + data.TabGradientColor + "',GradientType=1 );";

            if (data.IsRequestedLogo == 'True' && data.strLogofileName == 'LT_Springbranch') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.strLogofileName + 'Custom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText ' + data.strLogofileName + 'Custom" style="color:' + data.TabTextColor + ';">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsRequestedLogo == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.strLogofileName + 'Custom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText" style="color:' + data.TabTextColor + ';"><u>' + data.TabText + '</u></a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsLogochange == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <div id="previewTabText" class="previewTabText">' + '<img src="' + window.url + 'Lets-Talk/img/zCustome/' + data.strLogofileName + '" style="height: 30px;">' + '</div><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsLogoArrowColor == 'True') {
                node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon blueCustom ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/zCustome/white_arrow_New_blue.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if ((data.IsTabBlackColor) && (data.strTabCustomColor == '')) {
                node.innerHTML = '<div class="previewTab custom blackTabText" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_black.png" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else if (data.IsTabBlackColor && (data.strTabCustomColor != '') && (data.TabIcon == 'tabIcon6')) {
                node.innerHTML = '<div class="previewTab custom ' + data.strTabCustomColor + '" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.strTabCustomColor + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_bluepinellas.png?k=1" style="height: 15px;" alt="Maximize" /></div></div>';
            }
            else {
                if (data.TabColor == "#f6c63a" || data.TabColor == "#b8b8b9") {
                    node.innerHTML = '<div class="previewTab custom blackTabText" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '">' + BackToHome + ' <div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New_black.png" style="height: 15px;" alt="Maximize" /></div></div>';
                }
                else {
                    node.innerHTML = '<div class="previewTab custom" id="previewTab" style="z-index:9999;width:' + data.TabWidth + 'px;' + strGradientStyle + '"> ' + BackToHome + '<div id="previewTabIcon" class="previewTabIcon ' + data.TabIcon + '"></div> <a href="javascript:void(0);" aria-expanded="false" id="previewTabText" class="previewTabText">' + data.TabText + '</a><div id="previewArr" class="previewArr"><img src="' + window.url + 'Lets-Talk/img/white_arrow_New.png" style="height: 15px;" alt="Maximize" /></div></div>';
                }
            }
        }

        var list = document.getElementById("wraperTab");
        list.insertBefore(node, list.childNodes[0]);


        document.getElementById('previewTab').setAttribute('ChatBotEnable', isChatbot)


        var iconEle = document.getElementById('previewTabIcon').className;

        if (data.TabPosition == 'left') {
            document.getElementById('wraperTab').style.right = "-420px";
            document.getElementById('wraperTab').style.height = (parseInt(tabWidth)) + "px";
            document.getElementById('wraperTab').style.width = "463px";
            document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";

            if (data.TabIcon == "tabIcon1") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 40) + "px";
                document.getElementById('previewTabText').style.bottom = "0px";
            }
            else if (data.TabIcon == "tabIcon2" || data.TabIcon == "tabIcon3") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 80) + "px";
            }
        }
        else if (data.TabPosition == 'right') {
            document.getElementById('wraperTab').style.left = "-420px";
            document.getElementById('wraperTab').style.height = (parseInt(tabWidth)) + "px";
            document.getElementById('wraperTab').style.width = "463px";
            document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";

            if (data.TabIcon == "tabIcon1") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 40) + "px";
                document.getElementById('previewTabText').style.bottom = "0px";
            }
            else if (data.TabIcon == "tabIcon2" || data.TabIcon == "tabIcon3") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 80) + "px";
            }
        }
        else if (data.TabPosition == 'bottomLeft') {
            document.getElementById('wraperTab').style.left = "40px";
            if (isDepartment) {
                document.getElementById('wraperTab').style.bottom = "-523px";
                document.getElementById('wraperTab').style.height = "566px";
            }
            else {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    document.getElementById('wraperTab').style.bottom = "-592px";
                    document.getElementById('wraperTab').style.height = "635px";
                }
                else {
                    document.getElementById('wraperTab').style.bottom = "-585px";
                    document.getElementById('wraperTab').style.height = "628px";
                }
            }

            document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
            if (data.TabIcon == "tabIcon1") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 40) + "px";
                document.getElementById('previewTabText').style.left = "10px";
            }
            else if (data.TabIcon == "tabIcon2" || data.TabIcon == "tabIcon3") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 80) + "px";
            }
        }
        else if (data.TabPosition == 'bottomRight') {
            document.getElementById('wraperTab').style.right = "40px";
            if (isDepartment) {
                document.getElementById('wraperTab').style.height = "566px";
                document.getElementById('wraperTab').style.bottom = "-523px";
            }
            else {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    document.getElementById('wraperTab').style.bottom = "-592px";
                    document.getElementById('wraperTab').style.height = "635px";
                }
                else {
                    document.getElementById('wraperTab').style.bottom = "-585px";
                    document.getElementById('wraperTab').style.height = "628px";
                }
            }
            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false)
            document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";

            if (data.TabIcon == "tabIcon1") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 40) + "px";
                document.getElementById('previewTabText').style.left = "10px";
            }
            else if (data.TabIcon == "tabIcon2" || data.TabIcon == "tabIcon3") {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 110) + "px";
            }
            else {
                document.getElementById('previewTabText').style.width = (data.TabWidth - 80) + "px";
            }

        }

        if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
            document.getElementById('previewTab').style.filter = 'none';
        }
        document.getElementById("iFrameLetsTalkTab").style.display = 'none';
        document.getElementById("previewTabText").setAttribute("aria-expanded", "false");
        document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false)
        document.getElementById("wraperTab").setAttribute('class', 'wraperTab ' + (tabPosition + 'LT'));
    }

}

//End to animate LT_Tab

function alignTabBubble() {
    setTimeout(function () {
        if (isMobile) {

            var isVisible = window.getComputedStyle(document.getElementById('previewDivMobile'));
            var isiPad = navigator.userAgent

            if ((isiPad.toString()).indexOf('iPad') != -1) {
                document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 50 - bubbleOffset - getBodyOffset()) + 'px'
            }
            else {
                //Commented for PRT 117429
                //document.getElementById('previewDivMobile').style.top = (window.innerHeight + window.pageYOffset - parseInt(document.getElementById('previewDivMobile').style.height) - 20 - bubbleOffset - getBodyOffset()) + 'px'
            }
            //PRT 110983 
            if (corpno == "56750") {
                document.getElementById('previewDivMobile').style.top = "50%";
                document.getElementById('previewDivMobile').style.position = "fixed";
            }
        }
    }, 500)
}

function BackToChatWindow(e) {
    //IE Specific Condition
    if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
        if (isHidden(TabChatSwitch, 'IsChatSwitch')) { //Removed ! from condition for IE
            document.getElementById("SwitchBackground").style.display = 'none';
            document.getElementById("TabChatSwitch").style.display = 'none';
            //document.getElementById("BackToHome").removeAttribute('class', 'BackToHomeActive')
            document.getElementById("BackToHome").setAttribute('class', 'BackToHome')
            document.getElementById("BackToHome").setAttribute('aria-label', 'Switch Menu');
            IsChatSwitchBtn = "false";
            setTimeout(function () {
                document.getElementById("wraperTab").setAttribute('IsChatSwitch', false);
            }, 3000);
        } else {
            document.getElementById("wraperTab").setAttribute('IsChatSwitch', true);
            document.getElementById("SwitchBackground").style.display = 'block';
            document.getElementById("TabChatSwitch").style.display = 'block';
            document.getElementById("BackToHome").setAttribute('class', document.getElementById("BackToHome").getAttribute('class') + ' BackToHomeActive')
            document.getElementById("BackToHome").setAttribute('aria-label', 'Switch Menu');
            document.getElementById("TabChatSwitch").setAttribute('onclick', 'MoveToChatbot(this)')
            IsChatSwitchBtn = "true";
        }
    }
    else {

        if (!isHidden(TabChatSwitch)) {
            document.getElementById("SwitchBackground").style.display = 'none';
            document.getElementById("TabChatSwitch").style.display = 'none';
            //document.getElementById("BackToHome").removeAttribute('class', 'BackToHomeActive')
            document.getElementById("BackToHome").setAttribute('class', 'BackToHome')
            document.getElementById("BackToHome").setAttribute('aria-label', 'Switch Menu');
            setTimeout(function () {
                document.getElementById("wraperTab").setAttribute('IsChatSwitch', false);
            }, 3000);
        } else {
            document.getElementById("wraperTab").setAttribute('IsChatSwitch', true);
            document.getElementById("SwitchBackground").style.display = 'block';
            if (tabPosition == "left") {
                document.getElementById("SwitchBackground").style.maxWidth = "465px";
            }
            document.getElementById("TabChatSwitch").style.display = 'block';
            document.getElementById("BackToHome").setAttribute('class', document.getElementById("BackToHome").getAttribute('class') + ' BackToHomeActive')
            document.getElementById("BackToHome").setAttribute('aria-label', 'Switch Menu');
            document.getElementById("TabChatSwitch").setAttribute('onclick', 'MoveToChatbot(this)')
        }
    }
}

function BackToTab(e) {
    //IE Specific Condition
    if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
        if (isHidden(ChatSwitchBot, 'IsChatSwitch')) { //Removed ! from condition for IE
            document.getElementById("SwitchBackground").style.display = 'none';
            document.getElementById("ChatSwitchBot").style.display = 'none';
            //document.getElementById("BackToHome").removeAttribute('class', 'BackToHomeActive')
            document.getElementById("BackToHomeTab").setAttribute('class', 'BackToHome')
            document.getElementById("BackToHomeTab").setAttribute('aria-label', 'Switch Menu');
            IsChatSwitchBtn = "false";
            setTimeout(function () {
                document.getElementById("wraperTab").setAttribute('IsChatSwitch', false);
            }, 3000);
        } else {
            document.getElementById("wraperTab").setAttribute('IsChatSwitch', true);
            document.getElementById("SwitchBackground").style.display = 'block';
            document.getElementById("ChatSwitchBot").style.display = 'block';
            document.getElementById("BackToHomeTab").setAttribute('class', document.getElementById("BackToHomeTab").getAttribute('class') + ' BackToHomeActive')
            document.getElementById("BackToHomeTab").setAttribute('aria-label', 'Switch Menu');
            if (document.getElementById('chatLangOptions')) {
                document.getElementById("ChatSwitchBot").setAttribute('onclick', '')
            }
            else {
                document.getElementById("ChatSwitchBot").setAttribute('onclick', 'MoveToTab(this)')
            }
            
            IsChatSwitchBtn = "true";
        }
    }
    else {
        if (!isHidden(ChatSwitchBot)) {
            document.getElementById("SwitchBackground").style.display = 'none';
            document.getElementById("ChatSwitchBot").style.display = 'none';
            //document.getElementById("BackToHome").removeAttribute('class', 'BackToHomeActive')
            document.getElementById("BackToHomeTab").setAttribute('class', 'BackToHome')
            document.getElementById("BackToHomeTab").setAttribute('aria-label', 'Switch Menu');
            setTimeout(function () {
                document.getElementById("wraperTab").setAttribute('IsChatSwitch', false);
            }, 3000);
        } else {
            document.getElementById("wraperTab").setAttribute('IsChatSwitch', true);
            document.getElementById("SwitchBackground").style.display = 'block';
            document.getElementById("ChatSwitchBot").style.display = 'block';
            document.getElementById("BackToHomeTab").setAttribute('class', document.getElementById("BackToHomeTab").getAttribute('class') + ' BackToHomeActive')
            document.getElementById("BackToHomeTab").setAttribute('aria-label', 'Switch Menu');
            if (document.getElementById('chatLangOptions')) {
                document.getElementById("ChatSwitchBot").setAttribute('onclick', '')
            }
            else {
                document.getElementById("ChatSwitchBot").setAttribute('onclick', 'MoveToTab(this)')
            }
        }
    }
}



function MoveToChatbot(e) {
    document.getElementById("SwitchBackground").style.display = 'none';
    document.getElementById("TabChatSwitch").style.display = 'none';
    document.getElementById('previewTab').style.display = 'none'
    document.getElementById('previewTab').style.display = 'none'
    document.getElementById('iFrameLetsTalkTab').style.display = 'none'
    document.getElementById('tabLoaderWrapper').style.display = 'block'
    TabLoadWithChatbot(true)
    // document.getElementById("BackToHomeTab").style.display = 'block';
    document.getElementById('tabLoaderWrapper').style.display = 'none'
    document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true);
    if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
        IsChatSwitchBtn = "false";
    }
}

function changeChatbotLanguage(langId) {
    var chatBotUrl = document.getElementById("iFrameLetsTalkChat").getAttribute('src');
    chatBotUrl = removeParamFromURL('lang', chatBotUrl);
    chatBotUrl = chatBotUrl + '&lang=' + langId;
    var myIframe = document.getElementById('iFrameLetsTalkChat');
    document.getElementById("iFrameLetsTalkChat").setAttribute('src', chatBotUrl);
    document.getElementById("iFrameLetsTalkChat").onload = function () {
        document.getElementById("SwitchBackground").style.display = 'none';
        document.getElementById("TabChatSwitch").style.display = 'none';
        document.getElementById('ChatSwitchBot').style.display = 'none'
        document.getElementById('previewTab').style.display = 'none'
        document.getElementById('previewTab').style.display = 'none'
        document.getElementById('iFrameLetsTalkTab').style.display = 'none'
        document.getElementById('tabLoaderWrapper').style.display = 'block'
        // document.getElementById("BackToHomeTab").style.display = 'block';
        document.getElementById('tabLoaderWrapper').style.display = 'none'
        document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true);
        if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
            IsChatSwitchBtn = "false";
        }

        if (langId == 1) {
            document.getElementById('chatLangEnglish').checked = true;
            changeCombinedChatbotLanguage(1);
        }
        else if (langId == 4) {
            document.getElementById('chatLangSpanish').checked = true;
            changeCombinedChatbotLanguage(4);
        }
    }
    
}

function hideLangMenu() {
    document.getElementById('ChatSwitchBot').style.display = 'none';
    document.getElementById('SwitchBackground').style.display = 'none';
}

function removeParamFromURL(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}

function MoveToTab(e) {
    document.getElementById("BackToHomeTab").style.display = 'none';
    document.getElementById("SwitchBackground").style.display = 'none';
    document.getElementById("ChatSwitchBot").style.display = 'none';
    document.getElementById('previewTab').style.display = 'none'
    document.getElementById('iFrameLetsTalkChat').style.display = 'none'
    //document.getElementById('tabLoaderWrapper').style.display = 'block'
    TabLoadWithChatbot(false)
    document.getElementById("BackToHome").setAttribute('class', ' BackToHome')
    if (tabPosition == 'left' || tabPosition == 'right') {
        document.getElementById('previewTab').style.height = document.getElementById("iFrameLetsTalkTab").style.height;
    }
    else {
        document.getElementById('previewTab').style.width = '420px'
    }
    document.getElementById('tabLoaderWrapper').style.display = 'none'
    document.getElementById('previewTabText').style.width = 'auto'
    document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true)
    if ((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1)) {
        IsChatSwitchBtn = "false";
    }
    document.getElementById('BackToHome').focus(); //for 508 compliance contact us tab
    document.getElementById('BackToHome').onkeydown = function (e) {
        if (e.which == 13)  // the enter key code
        {
            BackToChatWindow(this);
            return false;
        }
    }
    document.getElementById('TabChatSwitch').onkeydown = function (e) {
        if (e.which == 13)  // the enter key code
        {
            MoveToChatbot(this);
            return false;
        }
    }
}

function resetPreviewTab() {
    document.getElementById('BackToHome').style.display = 'none';
    document.getElementById('BackToHomeTab').style.display = 'none';


    //document.getElementById("previewTabText").style.left = '80px'
    document.getElementById("wraperTab").setAttribute('ischatswitch', false)
    if (isDepartment) {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            document.getElementById('iFrameLetsTalkTab').style.height = '540px';
        }
        else {
            document.getElementById('iFrameLetsTalkTab').style.height = '523px';
        }
        document.getElementById('iFrameLetsTalkTab').style.overflowY = 'auto'
        document.getElementById("wraperTab").style.bottom = '-523px'
        // document.getElementById('previewTab').style.height = "525px";
        document.getElementById('wraperTab').style.height = "566px";
    }
    else {
        if (tabPosition == 'left' || tabPosition == 'right') { }
        else {
            document.getElementById("wraperTab").style.bottom = '-585px'
            document.getElementById("wraperTab").style.height = '628px'
        }

    }

    //document.getElementById("wraperTab").style.width = '437px'
    var iconEle = document.getElementById('previewTabIcon').className;

    document.getElementById('previewArr').setAttribute('class', 'previewArr');
    document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Maximize');
    if (tabPosition == 'left' || tabPosition == 'right') { }
    else {
        document.getElementById('previewTab').style.width = tabWidth + "px";
    }

    if (iconEle.indexOf('tabIcon1') != -1) {

        document.getElementById('previewTabText').style.width = (tabWidth - 40) + "px";
        // document.getElementById('previewTabText').style.left = "10px";
        if (tabPosition == 'left' || tabPosition == 'right') {
            if (document.getElementById('previewTabIcon').style.width == '') {
                document.getElementById('previewTabText').style.left = "";
            }
            else {
                document.getElementById('previewTabText').style.left = "10px";
            }
        }

    }
    else if (iconEle.indexOf('tabIcon2') != -1 || iconEle.indexOf('tabIcon3') != -1) {
        document.getElementById('previewTabText').style.left = "";
        document.getElementById('previewTabText').style.width = (tabWidth - 110) + "px";
    }
    else {
        document.getElementById('previewTabText').style.left = "";
        document.getElementById('previewTabText').style.width = (tabWidth - 80) + "px";
    }

    if (tabPosition == 'left') {
        document.getElementById("wraperTab").style.width = '463px';
        document.getElementById("wraperTab").style.right = '-420px';
        //document.getElementById("previewTabIcon").style.left = ''
        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
        document.getElementById("wraperTab").style.bottom = ''
        var minimizedByChatbOT = document.getElementById("wraperTab").getAttribute('minimizedbychatbot');
        document.getElementById("wraperTab").style.height = tabWidth + 'px'
        document.getElementById("previewTab").style.height = tabWidth + 'px'
        document.getElementById("previewTab").style.display = 'block';
    }
    else if (tabPosition == 'right') {
        document.getElementById("wraperTab").style.width = '463px';
        document.getElementById("wraperTab").style.left = '-420px';
        //document.getElementById("previewTabIcon").style.left = ''
        document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
        document.getElementById("wraperTab").style.bottom = ''
        var minimizedByChatbOT = document.getElementById("wraperTab").getAttribute('minimizedbychatbot');
        document.getElementById("wraperTab").style.height = tabWidth + 'px'
        document.getElementById("previewTab").style.height = tabWidth + 'px'
        document.getElementById("previewTab").style.display = 'block';
    }
    else {
        document.getElementById('wraperTab').style.width = (parseInt(tabWidth)) + "px";
        document.getElementById("previewTabIcon").style.left = '5px'
    }

}

function TabLoadWithChatbot(isChatBot) {
    //document.getElementById("tabLoaderWrapper").style.display = 'block';
    document.getElementById("SwitchBackground").setAttribute('onclick', '');
    var dates = new Date()
    if (isChatBot) {
        if (!document.getElementById("iFrameLetsTalkChat").getAttribute('src')) {
            document.getElementById("ChatTabLoading").style.display = 'block';
            document.getElementById("BackToHomeTab").style.display = 'none';
            var isShowInSpanish = document.getElementById("ChatBtnCall").getAttribute('spanish');
            if (isShowInSpanish == 'true') {
                var chatBotUrl = ChatBotpageURL;
                chatBotUrl = removeParamFromURL('lang', chatBotUrl);
                ChatBotpageURL = chatBotUrl + '&lang=4';
                document.getElementById("chatLangSpanish").checked = true;
            }
            document.getElementById("SwitchBackground").style.minHeight = "595px";
            document.getElementById("SwitchBackground").style.maxHeight = "630px";

            document.getElementById("iFrameLetsTalkChat").setAttribute('src', ChatBotpageURL);
            document.getElementById("wraperTab").style.height = 'auto';
            document.getElementById("wraperTab").style.width = 'auto';
            document.getElementById("wraperTab").style.overflow = 'hidden';
            document.getElementById("wraperTab").style.bottom = 0;


            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true)

            document.getElementById("iFrameLetsTalkChat").onload = function () {
                document.getElementById("tabLoaderWrapper").style.display = 'none';
                document.getElementById("wraperTab").style.height = 'auto';
                document.getElementById("wraperTab").style.width = 'auto';
                document.getElementById("wraperTab").style.overflow = 'hidden';
                document.getElementById("wraperTab").style.bottom = 0;
                document.getElementById("BackToHomeTab").setAttribute('onclick', 'BackToTab(this)');
                document.getElementById("BackToHomeTab").style.display = 'block'
                document.getElementById("ChatTabHomeScreen").style.display = 'none'


                if (tabPosition == 'left' || tabPosition == 'right') {
                    document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight - document.getElementById('iFrameLetsTalkChat').offsetHeight) / 2 < 0 ? 0 : ((document.documentElement.clientHeight - 640) / 2) + "px";
                    document.getElementById("wraperTab").style.bottom = '';
                }


                // document.getElementById("tabLoaderWrapper").style.display = 'none'
                letsTalkIframeWindow = this.contentWindow;
                if (isLoadBind == false) {
                    function receiveMessage(event) {
                        if (event.data == 'thanks') {
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                }
                            }
                            else {
                                document.getElementById("iFrameLetsTalkTab").src = pageURL;
                            }
                        }
                        else if (event.data == 'ThanksMsg') {
                            //Issue No.  117984 : Triage : Tab isn't ReOpening on switching to chatbot after filing Tab dlg frm combined UI
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                    document.getElementById('wraperTab').setAttribute('thanksNextLoad', true);
                                }
                            }
                        }
                        else if (event.data == 'bottomRight' || event.data == 'bottomLeft' || event.data == 'right' || event.data == 'left') {
                            document.getElementById('wraperTab').scrollTop = 0;
                        }
                        else if (event.data == 'lostFocus') {
                            documentClick(event)
                        }
                    }
                }

                if (window.addEventListener)
                    window.addEventListener('message', receiveMessage, false);
                else
                    window.attachEvent('onmessage', receiveMessage);

                isLoadBind = true;
                document.getElementById("iFrameLetsTalkTab").style.display = 'none'
                document.getElementById("iFrameLetsTalkChat").style.display = 'block';
                document.getElementById("BackToHomeTab").style.display = 'block';
                //document.getElementById("tabLoaderWrapper").style.display = 'none';
                document.getElementById("ChatTabLoading").style.display = 'none';
            };
            //document.getElementById("ChatTabHomeScreen").style.display = 'none'

            document.getElementById("tabLoaderWrapper").style.display = 'none';
        }
        else {
            if (tabPosition == 'left') {
                document.getElementById("wraperTab").style.right = 0;
                document.getElementById("wraperTab").style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : ((document.documentElement.clientHeight - 628) / 2) / 2 + "px";
            }
            else if (tabPosition == 'right') {
                document.getElementById("wraperTab").style.left = 0;
                document.getElementById("wraperTab").style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : ((document.documentElement.clientHeight - 628) / 2) / 2 + "px";
            }
            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true);
            document.getElementById("wraperTab").style.height = 'auto';
            document.getElementById("wraperTab").style.width = 'auto';
            document.getElementById("wraperTab").style.overflow = 'hidden';
            document.getElementById("wraperTab").style.bottom = 0;
            document.getElementById("tabLoaderWrapper").style.display = 'none'
            document.getElementById("previewTab").style.display = 'none'
            document.getElementById("iFrameLetsTalkTab").style.display = 'none';
            var isShowInSpanish = document.getElementById("ChatBtnCall").getAttribute('spanish');
            var minimizedbychatbot = document.getElementById("wraperTab").getAttribute('minimizedbychatbot');
            var ischatswitch = document.getElementById("wraperTab").getAttribute('ischatswitch');
            if (minimizedbychatbot == '' || minimizedbychatbot == null) {
                minimizedbychatbot = 'false';
            }
            if (ischatswitch == '' || ischatswitch == null) {
                ischatswitch = 'false';
            }
            
            if (isShowInSpanish == 'true' && minimizedbychatbot == 'false' && ischatswitch == 'false') {
                var chatBotUrl = ChatBotpageURL;
                chatBotUrl = removeParamFromURL('lang', chatBotUrl);
                var ChatBotpageURLSpanish = chatBotUrl + '&lang=4';
                document.getElementById("chatLangSpanish").checked = true;
                document.getElementById("iFrameLetsTalkChat").setAttribute('src', ChatBotpageURLSpanish);
            }
            else if (isShowInSpanish == 'false' && minimizedbychatbot == 'false' && ischatswitch == 'false') {
                var chatBotUrl = ChatBotpageURL;
                chatBotUrl = removeParamFromURL('lang', chatBotUrl);
                var ChatBotpageURLEnglish = chatBotUrl + '&lang=1';
                document.getElementById("chatLangEnglish").checked = true;
                document.getElementById("iFrameLetsTalkChat").setAttribute('src', ChatBotpageURLEnglish);
            }
            document.getElementById("SwitchBackground").style.minHeight = "595px";
            document.getElementById("SwitchBackground").style.maxHeight = "630px";
            document.getElementById("iFrameLetsTalkChat").style.display = 'block';
            document.getElementById("BackToHomeTab").setAttribute('onclick', 'BackToTab(this)');
            document.getElementById("ChatTabHomeScreen").style.display = 'none'
            document.getElementById("BackToHomeTab").style.display = 'block'
        }
        document.getElementById("ChatTabHomeScreen").setAttribute('firsttimeloadchatscreen', false)
    }
    else {
        if (!document.getElementById("iFrameLetsTalkTab").getAttribute('src')) {

            document.getElementById("wraperTab").setAttribute('firstTimeLoadByChatBot', true);
            document.getElementById("tabLoaderWrapper").style.display = 'block';
            document.getElementById("ChatTabHomeScreen").style.display = 'none';
            pageURL = window.url + 'Lets-Talk/LetsTalkTab.aspx?k=' + window.key + '&rnd=' + dates.getTime();
            var isShowInSpanish = document.getElementById("TabBtnCall").getAttribute('spanish');
            if (isShowInSpanish == 'true') {
                var ltTabUrl = pageURL;
                ltTabUrl = removeParamFromURL('k', ltTabUrl);
                pageURL = ltTabUrl + '&k=' + window.key + '@LFLT';
            }
            document.getElementById("iFrameLetsTalkTab").setAttribute('src', pageURL);
            //document.getElementById('previewTab').style.display = 'block';
            document.getElementById("SwitchBackground").style.minHeight = "595px";
            document.getElementById("SwitchBackground").style.maxHeight = "630px";

            document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', true)
            if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
                document.getElementById('previewArr').setAttribute('class', 'previewArr open');
                document.getElementById('previewArr').childNodes[0].setAttribute('alt', 'Minimize');
            }
            isChatbot = false;
            //document.getElementById('previewTab').click();
            document.getElementById("iFrameLetsTalkTab").onload = function () {
                document.getElementById('previewTab').style.display = 'block';
                if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
                    document.getElementById("tabLoaderWrapper").style.display = 'block';
                    document.getElementById("wraperTab").style.height = '628px';
                    if (isDepartment) {
                        //document.getElementById("wraperTab").style.bottom = '-523px'
                        //document.getElementById('previewTab').style.height = "525px";
                        document.getElementById('wraperTab').style.height = "566px";
                    }
                    else {
                        //document.getElementById("wraperTab").style.bottom = '-585px'
                        document.getElementById('wraperTab').style.height = "628px";
                    }
                    //document.getElementById("LTTabVideo").style.display = 'block';
                    //document.getElementById("wraperTab").style.width = '420px';
                    //document.getElementById("previewTab").style.width = '420px';
                    //document.getElementById("wraperTab").style.overflow = 'hidden';
                    //document.getElementById("wraperTab").style.bottom = "0";

                    document.getElementById("tabLoaderWrapper").style.display = 'none'
                }

                document.getElementById("BackToHome").style.display = 'block'
                document.getElementById("previewTabIcon").style.left = '38px'
                document.getElementById("previewTabText").style.left = '115px'
                document.getElementById("BackToHome").setAttribute('onclick', 'BackToChatWindow(this)');
                document.getElementById('BackToHome').focus(); //for 508 compliance contact us tab
                document.getElementById('BackToHome').onkeydown = function (e) {
                    if (e.which == 13)  // the enter key code
                    {
                        BackToChatWindow(this);
                        return false;
                    }
                }
                document.getElementById('TabChatSwitch').onkeydown = function (e) {
                    if (e.which == 13)  // the enter key code
                    {
                        MoveToChatbot(this);
                        return false;
                    }
                }

                if (tabPosition == 'left') {
                    //document.getElementById("previewTab").style.width = '43px';
                    document.getElementById("TabChatSwitch").style.maxWidth = 'inherit';
                    document.getElementById("TabChatSwitch").style.width = '380px';
                    document.getElementById("TabChatSwitch").style.left = '5px';
                    document.getElementById("TabChatSwitch").style.top = '80px';
                    document.getElementById("BackToHome").style.top = '25px';
                    document.getElementById("previewTabIcon").style.left = 'auto'
                    document.getElementById("previewTabText").style.left = 'auto'
                    document.getElementById("wraperTab").style.width = '463px';
                    document.getElementById("previewTab").style.height = '595px';
                    document.getElementById("wraperTab").style.height = '595px';
                    document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                }
                else if (tabPosition == 'right') {
                    document.getElementById("TabChatSwitch").style.maxWidth = 'inherit';
                    document.getElementById("TabChatSwitch").style.width = '380px';
                    document.getElementById("TabChatSwitch").style.left = '-393px';
                    document.getElementById("SwitchArrowUp").style.left = 'auto';
                    document.getElementById("SwitchArrowUp").style.right = '14px';
                    document.getElementById("TabChatSwitch").style.top = '80px';
                    document.getElementById("BackToHome").style.top = '25px';
                    document.getElementById("previewTabIcon").style.left = 'auto'
                    document.getElementById("previewTabText").style.left = 'auto'
                    document.getElementById("wraperTab").style.width = '463px';
                    document.getElementById("previewTab").style.height = '595px';
                    document.getElementById("wraperTab").style.height = '595px';
                    document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('wraperTab').offsetHeight) / 2 + "px";
                }

                letsTalkIframeWindow = this.contentWindow;
                if (isLoadBind == false) {
                    function receiveMessage(event) {
                        if (event.data == 'thanks') {
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                }
                            }
                            else {
                                document.getElementById("iFrameLetsTalkTab").src = pageURL;
                            }
                        }
                        else if (event.data == 'ThanksMsg') {
                            var ChatBotActive = document.getElementById("wraperTab").getAttribute('ischatbotenable');
                            if (ChatBotActive == 'true') {
                                if (tabPosition == 'left' || tabPosition == 'bottomRight' || tabPosition == 'bottomLeft' || tabPosition == 'right') {
                                    document.getElementById('wraperTab').setAttribute('thanksViewShown', true);
                                    document.getElementById('wraperTab').setAttribute('thanksNextLoad', true);
                                }
                            }
                        }
                        else if (event.data == 'bottomRight' || event.data == 'bottomLeft' || event.data == 'right' || event.data == 'left') {
                            document.getElementById('wraperTab').scrollTop = 0;
                        }
                        else if (event.data == 'lostFocus') {
                            documentClick(event)
                        }
                    }
                }

                if (window.addEventListener)
                    window.addEventListener('message', receiveMessage, false);
                else
                    window.attachEvent('onmessage', receiveMessage);

                isLoadBind = true;



                //slideUp('iFrameLetsTalkTab');
                if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
                    document.getElementById('previewTab').style.display = 'block';
                }
                animate = setTimeout(animateTab, 10);
                if (((userAgent.indexOf('msie') != -1) || (userAgent.indexOf('trident') != -1))) {
                    document.getElementById("iFrameLetsTalkTab").style.display = 'block'
                }
                document.getElementById("iFrameLetsTalkChat").style.display = 'none';
                document.getElementById("tabLoaderWrapper").style.display = 'none';
            };
        }
        else {
            var isThanksViewShown = document.getElementById("wraperTab").getAttribute('thanksViewShown');
            if (isThanksViewShown == 'true') {
                document.getElementById("iFrameLetsTalkTab").src = pageURL;
                document.getElementById("wraperTab").setAttribute('thanksViewShown', false)
                document.getElementById('wraperTab').setAttribute('thanksNextLoad', false);
            }

            document.getElementById("iFrameLetsTalkTab").style.display = 'block'
            document.getElementById("iFrameLetsTalkChat").style.display = 'none';
            document.getElementById('tabLoaderWrapper').style.display = 'none';
            document.getElementById("ChatTabHomeScreen").style.display = 'none';
            //document.getElementById("wraperTab").style.height = '628px';
            if (isDepartment) {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    document.getElementById('iFrameLetsTalkTab').style.height = '540px';
                }
                else {
                    document.getElementById('iFrameLetsTalkTab').style.height = '523px';
                }
                //document.getElementById("wraperTab").style.bottom = '-523px'
                document.getElementById('wraperTab').style.maxHeight = "100%";
                document.getElementById('wraperTab').style.height = "566px";
            }
            else {
                //document.getElementById("wraperTab").style.bottom = '-585px'
                document.getElementById('wraperTab').style.height = "628px";
            }
            document.getElementById("LTTabVideo").style.display = 'block';
            document.getElementById("wraperTab").style.width = '420px';
            if (tabPosition == 'left' || tabPosition == 'right') { }
            else {
                document.getElementById("previewTab").style.width = '420px';
            }
            document.getElementById("wraperTab").style.overflow = 'hidden';
            document.getElementById("wraperTab").style.bottom = "0";
            document.getElementById("tabLoaderWrapper").style.display = 'none'
            document.getElementById("BackToHome").style.display = 'block'
            if (tabPosition == 'left' || tabPosition == 'right') {
                document.getElementById("previewTabIcon").style.left = 'auto'
                document.getElementById("previewTabText").style.left = 'auto'
                document.getElementById("wraperTab").style.width = '463px';
                //document.getElementById('wraperTab').style.top = (document.documentElement.clientHeight) / 2 < 0 ? 0 : (document.documentElement.clientHeight - document.getElementById('previewTab').offsetHeight) / 2 + "px";
            }
            else {
                document.getElementById("previewTabIcon").style.left = '38px'
                document.getElementById("previewTabText").style.left = '115px'
                document.getElementById("wraperTab").style.width = '420px';
            }

            document.getElementById("BackToHome").setAttribute('onclick', 'BackToChatWindow(this)');
            document.getElementById("iFrameLetsTalkTab").style.display = 'block'
            document.getElementById('previewTab').style.display = 'block';
            //clearTimeout(animate);
            //return false;
        }
        document.getElementById("ChatTabHomeScreen").setAttribute('firsttimeloadchatscreen', false)
    }

}

function TabChatWindowMinimize(e) {
    resetPreviewTab()
    document.getElementById('iFrameLetsTalkTab').style.display = "none";
    document.getElementById('iFrameLetsTalkChat').style.display = "none";
    document.getElementById('ChatTabHomeScreen').style.display = "none";
    // document.getElementById('BackToHome').style.display = "none";

    if (isDepartment) {
        document.getElementById("wraperTab").style.bottom = '-523px'
        //document.getElementById('previewTab').style.height = "525px";
        document.getElementById('wraperTab').style.height = "566px";
        document.getElementById('wraperTab').style.maxHeight = "100%";
    }
    else {
        if (tabPosition == 'left') {
            document.getElementById("wraperTab").style.right = '-420px'
            document.getElementById('wraperTab').style.width = "463px";
        }
        else if (tabPosition == 'right') {
            document.getElementById("wraperTab").style.left = '-420px'
            document.getElementById('wraperTab').style.width = "463px";
        }
        else {
            document.getElementById("wraperTab").style.bottom = '-585px'
            document.getElementById('wraperTab').style.height = "628px";
        }
    }
    document.getElementById('previewTab').style.display = "block";
    document.getElementById('previewTab').setAttribute('isClosedDown', true)
    document.getElementById("wraperTab").setAttribute('isTabOrChatOpen', false)
    document.getElementById("ChatTabHomeScreen").setAttribute('firsttimeloadchatscreen', true)
    if (tabPosition == 'left' || tabPosition == 'right') {
        resetPreviewTab()
        document.getElementById("previewTab").style.display = 'block'
    }
}

function changeLangCombined(e) {
    document.getElementById("SwitchBackground").style.display = 'block';
    document.getElementById("SwitchBackground").setAttribute('onclick', 'hideLanguage()');
    document.getElementById("chatLangCombinedOptions").style.display = 'block';
    if (tabPosition == 'left' || tabPosition == 'right') {
        document.getElementById("SwitchBackground").style.minHeight = "390px";
        document.getElementById("SwitchBackground").style.maxHeight = "390px";
    }
    event.stopPropagation();
}

function hideLanguage() {
    var target = event.target || event.srcElement;
    // filter event handling when the event bubbles
    if (event.currentTarget == target) {
        document.getElementById('SwitchBackground').style.display = "none";
        document.getElementById('chatLangCombinedOptions').style.display = "none";
    }
}

function changeCombinedChatbotLanguage(langId) {
    var languageId = langId;
    var weHereHelp = "";
    var selectOption = "";
    var askQue = "";
    var contactTeam = "";
    var startConv = "";
    var sendMsg = "";
    var miniMizeTab = "";
    var spanishTrue = false;
    if (languageId == 1) {
         weHereHelp = "We are here to help";
         selectOption = "Select an option below";
         askQue = "Ask a Question";
         contactTeam = "Contact our Team";
         startConv = "Start a conversation with our virtual assistant.";
         sendMsg = "Send us a message and we will get back to you within " + (passDues > 1 ? passDues + ' business days' : '1 business day');
         miniMizeTab = "Minimize the tab";
         document.getElementById("chatLangCombinedEnglish").checked = true;
         document.getElementById("chatLangCombinedLbl").innerHTML = 'English';
         document.getElementById("chatLangCombinedLbl").setAttribute('aria-label', 'Selected Language - English');
         document.getElementById("TabChatContainer").setAttribute('class', 'TabChatContainer');
         spanishTrue = false;
    }
    else if (languageId == 4) {
        weHereHelp = "Nosotras estamos aqui para ayudar";
        selectOption = "seleccione una opción a continuación";
        askQue = "Hacer una Pregunta";
        contactTeam = "Contacta con nuestro equipo";
        startConv = "Inicie una conversación con nuestro asistente virtual.";
        sendMsg = "Envíanos un mensaje y te responderemos en un plazo de " + (passDues > 1 ? passDues + ' días hábiles' : '1 día laboral');
        miniMizeTab = "Minimizar la pestaña";
        document.getElementById("chatLangCombinedSpanish").checked = true;
        document.getElementById("chatLangCombinedLbl").innerHTML = 'Español';
        document.getElementById("chatLangCombinedLbl").setAttribute('aria-label', 'Idioma seleccionado - Español');
        document.getElementById("TabChatContainer").setAttribute('class', 'TabChatContainer spanish');
        spanishTrue = true;
    }
    document.getElementById("SwitchBackground").style.display = 'none';
    document.getElementById("chatLangCombinedOptions").style.display = 'none';
    
    document.getElementById("TabChatHeadTxt").innerHTML = weHereHelp;
    document.getElementById("TabChatHeadTxt").setAttribute('aria-label', weHereHelp)
    document.getElementById("TabChatHeadDesc").innerHTML = selectOption;
    document.getElementById("TabChatHeadDesc").setAttribute('aria-label', selectOption)
    document.getElementById("ChatBtnHead").innerHTML = askQue;
    document.getElementById("ChatBtnHead").setAttribute('aria-label', askQue)
    document.getElementById("ChatBtnHeadDesc").innerHTML = startConv;
    document.getElementById("ChatBtnHeadDesc").setAttribute('aria-label', startConv)
    document.getElementById("TabBtnHeadTab").innerHTML = contactTeam;
    document.getElementById("TabBtnHeadTab").setAttribute('aria-label', contactTeam)
    document.getElementById("TabBtnHeadDescTab").innerHTML = sendMsg;
    document.getElementById("TabBtnHeadDescTab").setAttribute('aria-label', sendMsg);
    document.getElementById("TabChatHeaderMininmize").setAttribute('aria-label', miniMizeTab);
    document.getElementById("ChatBtnCall").setAttribute('spanish', spanishTrue);
    document.getElementById("TabBtnCall").setAttribute('spanish', spanishTrue);
}
