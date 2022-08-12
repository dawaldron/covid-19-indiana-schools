// GOOGLE SITE SPECIFIC SEARCH
// AUTHOR: BRENTON KELLY - CREATIVE DEVELOPMENT MANAGER - BLACKBOARD, INC.
// VERSION: 08.22.18

!function(i){i.csSiteSpecificSearch=function(e){var t={siteID:0,districtSiteID:4,filterDistrictResults:!1};e&&i.extend(t,e),-1<window.location.href.indexOf("PageType=6")&&(t.filterDistrictResults&&t.districtSiteID==t.siteID||t.districtSiteID!=t.siteID)&&(i("#sw-content-layout-wrapper").children().last().remove(),i("#sw-content-layout-wrapper").append('<gcse:search queryparametername="SearchString" webSearchQueryAddition="more:pagemap:document-siteid:'+t.siteID+'"></gcse:search>'))}}(jQuery);