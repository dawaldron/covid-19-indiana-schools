jQuery(document).ready(function(){
    var updated = 0;
    var subscriptions_looped = 0;
    /*jQuery(document).on('click', '.apitest', function() {

            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddUser',
                data: {"email": "bmclennan@microsite.com", "firstname": "Benny", "lastname": "McLennan"},
                success: function(response){
                    $.each(response, function(i, item) {
                        console.log(response[i]);
                    });​
                }
            });

        });*/
    jQuery("form :input").change(function(e) {
        updated = 0;
    });

    // TESTING THE RESPONSE OF THE FORMS - RETRIEVE USER DATA
    jQuery(document).on('click', '.apitest', function() {
        var testuser = jQuery('.testusercuid').val();
        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/GetUserDetails',
            data: {"cuid": testuser},
            success: function(response){
                jQuery('.apiresult').html('CUID: ' + testuser + '<br>Email: ' + response.email + '<br>First Name: ' + response.firstname + '<br>Last Name: ' + response.lastname + '<br>Job Title: ' + response.jobtitle + '<br>Institution: ' + response.institution + '<br>Address 1: ' + response.address1 + '<br>Address 2: ' + response.address2 + '<br>City: ' + response.city + '<br>State: ' + response.state + '<br>Zip Code: ' + response.zip + '<br>fax: ' + response.fax + '<br>phone: ' + response.phone + '<br>statusmsg: ' + response.statusmsg);

            }
        });
        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/GetMagazineSubscriptionForUser',
            data: {"cuid": testuser},
            success: function(response){
                jQuery('.apiresult2').html('magazinetype: ' + response.magazinetype + '<br>statusmsg: ' + response.statusmsg);

            }
        });
        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/GetMailingListsForUser',
            data: {"cuid": testuser},
            success: function(response){
                jQuery('.apiresult3').html('mailingListIDs: ' + response.mailinglistid + '<br>statusmsg: ' + response.statusmsg + '<br><br><br>');

            }
        });

    });
    // TESTING THE RESPONSE OF THE FORMS - RETRIEVE USER DATA
    jQuery(document).on('click', '.apitest2', function() {

        var testuser = jQuery('#mailing_cuid').val();
        if (testuser != '') {
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/GetUserDetails',
                data: {"cuid": testuser},
                success: function(response){
                    jQuery('.apiresult').html('CUID: ' + testuser + '<br>Email: ' + response.email + '<br>First Name: ' + response.firstname + '<br>Last Name: ' + response.lastname + '<br>Job Title: ' + response.jobtitle + '<br>Institution: ' + response.institution + '<br>Address 1: ' + response.address1 + '<br>Address 2: ' + response.address2 + '<br>City: ' + response.city + '<br>State: ' + response.state + '<br>Zip Code: ' + response.zip + '<br>fax: ' + response.fax + '<br>phone: ' + response.phone + '<br>statusmsg: ' + response.statusmsg + '<br><br><br>');
                }
            });
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/GetMagazineSubscriptionForUser',
                data: {"cuid": testuser},
                success: function(response){
                    jQuery('.apiresult2').html('magazinetype: ' + response.magazinetype + '<br>statusmsg: ' + response.statusmsg + '<br><br><br>');

                }
            });
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/GetMailingListsForUser',
                data: {"cuid": testuser},
                success: function(response){
                    jQuery('.apiresult3').html('mailingListIDs: ' + response.mailinglistid + '<br>statusmsg: ' + response.statusmsg + '<br><br><br>');

                }
            });
        }
    });



    if (jQuery('#wppb-edit-user-edit-profile').length || jQuery('#wppb-edit-user-additional-information').length) {
        var mailing_cuid = jQuery('#mailing_cuid').val();
        var email = jQuery('#email').val();
        if (mailing_cuid != '') {
            var data = {"cuid": mailing_cuid};
        } else {
            var data = {"email": email};
        }

        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/GetUserDetails',
            data: data,
            success: function(response){
                console.log(response);
                jQuery('#email').val(response.email);
                jQuery('#first_name').val(response.firstname);
                jQuery('#last_name').val(response.lastname);
                jQuery('#job_title').val(response.jobtitle);
                jQuery('#district_organization').val(response.email);
                jQuery('#address_line_1').val(response.address1);
                jQuery('#address_line_2').val(response.address2);
                jQuery('#city').val(response.city);
                jQuery('#state').val(response.state);
                jQuery('#zip_code').val(response.zip);
                jQuery('#phone').val(response.phone);
                jQuery('#fax').val(response.fax);
                jQuery('#mailing_cuid').val(response.cuid);
                mailing_cuid = response.cuid;
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://www4.districtadministration.com/wordpressapi/GetMailingListsForUser',
                    data: {"cuid": mailing_cuid},
                    success: function(response){
                        var mailinglistid = response.mailinglistid;
                        var IDs = mailinglistid.split(",");
                        console.log(IDs);
                        jQuery("input[type=checkbox][name='newsletters_options[]']").each(function () {
                            var checkval = jQuery(this).val();
                            if(jQuery.inArray(checkval, IDs) != -1) {
                                jQuery("input[type=checkbox][value='" + checkval + "']").prop('checked', true);
                            } else {
                                jQuery(this).prop('checked', false);
                            }
                        });


                    }
                });
                jQuery.ajax({
                    type: 'POST',
                    url: 'https://www4.districtadministration.com/wordpressapi/GetMagazineSubscriptionForUser',
                    data: {"cuid": mailing_cuid},
                    success: function(response){
                        var magazinetype = response.magazinetype;
                        var IDs = magazinetype.split(",");
                        jQuery("input[type=checkbox][name='magazine_options[]']").each(function () {
                            var checkval = jQuery(this).val();
                            if(jQuery.inArray(checkval, IDs) != -1) {
                                jQuery("input[type=checkbox][value='" + checkval + "']").prop('checked', true);
                            } else {
                                jQuery(this).prop('checked', false);
                            }
                        });

                    }
                });
            }
        });

    }

    function signUpNewsletters(cuid) {

        var sList = "";
        var unList = "";
        jQuery("input[type=checkbox][name='newsletters_options[]']").each(function () {
            if (this.checked) {
                sList += jQuery(this).val() + ',';
            } else {
                unList += jQuery(this).val() + ',';
            }
        });
        sList = sList.substring(0,sList.length - 1);
        unList = unList.substring(0,unList.length - 1);

        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/AddUserToMailingList',
            data: {"cuid": cuid, "mailingListID": sList},
            success: function(response){

            }
        });
        jQuery.ajax({
            type: 'POST',
            url: 'https://www4.districtadministration.com/wordpressapi/RemoveUserFromMailingList',
            data: {"cuid": cuid, "mailingListID": unList},
            success: function(response){

            }
        });



    }
    function signUpMagazine(cuid) {

        var sList = "";
        var unList = "";

        var magazineprint = jQuery('input[type=checkbox][value=PRN]').attr("checked");
        var magazinedigital = jQuery('input[type=checkbox][value=DGT]').attr("checked");

        if (magazineprint == 'checked' && magazinedigital == 'checked') {
            sList = 'PRN,DGT';
            unList = '';
        } else if (magazineprint == 'checked') {
            sList = 'PRN';
            unList = 'DGT';
        } else if (magazinedigital == 'checked') {
            sList = 'DGT';
            unList = 'PRN';
        } else {
            sList = '';
            unList = 'PRN,DGT';
        }

        if (sList != '') {
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddMagazineSub',
                data: {"cuid": cuid, "magazineType": sList},
                success: function(response){

                }
            });
        }
        if (unList != '') {
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/CancelMagazineSub',
                data: {"cuid": cuid, "magazineType": unList},
                success: function(response){

                }
            });
        }
    }

    // REGISTRATION STEP 1 FORM
    jQuery('form#wppb-register-user-subscription-step-1').submit(function(e){

        var email = jQuery('#email').val();
        var form =  jQuery(this);
        var mailing_cuid = jQuery('#mailing_cuid').val();

        var magazineprint = jQuery('input[type=checkbox][value=PRN]').attr("checked");
        var magazinedigital = jQuery('input[type=checkbox][value=DGT]').attr("checked");
        var data = {"email": email, "firstname": "", "lastname": ""};

        var sList = "";
        jQuery("input[type=checkbox][name='newsletters_options[]']").each(function () {
            if (this.checked) {
                sList += jQuery(this).val() + ',';
            }
        });
        sList = sList.substring(0,sList.length - 1);

        // if the user has not yet submitted the form and already got their CUID from the server
        if (mailing_cuid == '') {
            e.preventDefault();

            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddUser',
                data: data,
                success: function(response){
                    jQuery('#mailing_cuid').val(response.cuid);
                    var cuid = response.cuid;
                    signUpMagazine(cuid);
                    signUpNewsletters(cuid);
                    setTimeout(function() {
                        form.submit();
                    }, 1000);
                }
            });
            return false; //for old browsers

        } else {
            signUpMagazine(mailing_cuid);
            signUpNewsletters(mailing_cuid);
            return true; //for old browsers
        }

    });


    // PR REGISTRATION FORM
    jQuery('form#wppb-register-user-pr-agency-registration-form').submit(function(e){

        var email = jQuery('#email').val();
        var form =  jQuery(this);
        var mailing_cuid = jQuery('#mailing_cuid').val();
        var data = {"email": email, "firstname": "", "lastname": ""};

        // if the user has not yet submitted the form and already got their CUID from the server
        if (mailing_cuid == '') {
            e.preventDefault();
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddUser',
                data: data,
                success: function(response){
                    jQuery('#mailing_cuid').val(response.cuid);
                    setTimeout(function() {
                        form.submit();
                    }, 1000);
                }
            });
            return false; //for old browsers

        } else {
            return true; //for old browsers
        }

    });

    // REGISTRATION STEP 2 FORM
    jQuery('form#wppb-edit-user-additional-information').submit(function(e){
        var email = jQuery('#email').val();
        var first_name = jQuery('#first_name').val();
        var last_name = jQuery('#last_name').val();
        var job_title = jQuery('#job_title').val();
        var organization = jQuery('#district_organization').val();
        var address_line_1 = jQuery('#address_line_1').val();
        var address_line_2 = jQuery('#address_line_2').val();
        var city = jQuery('#city').val();
        var state = jQuery('#state').val();
        var zip_code = jQuery('#zip_code').val();
        var phone = jQuery('#phone').val();
        var fax = jQuery('#fax').val();
        var mailing_cuid = jQuery('#mailing_cuid').val();
        var form =  jQuery(this);
        if (mailing_cuid == '') {
            e.preventDefault();
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddUser',
                data: {"email": email, "firstname": "", "lastname": ""},
                success: function(response){
                    jQuery('#mailing_cuid').val(response.cuid);
                    form.submit();
                }
            });
            return false; //for old browsers
        }
        if (updated === 0 && mailing_cuid != '') {

            e.preventDefault();
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/UpdateUser',
                data: {"cuid": mailing_cuid, "email": email, "firstname": first_name, "lastname": last_name, "jobtitle": job_title, "institution": organization, "address1": address_line_1, "address2": address_line_2, "city": city, "state": state, "zip": zip_code, "phone": phone, "fax": fax},
                success: function(response){
                    updated = 1;
                    form.submit();
                }
            });
            return false; //for old browsers
        } else {
            return true; //for old browsers
            //console.log('submit');
        }
    });

    // EDIT PROFILE FORM
    jQuery('form#wppb-edit-user-edit-profile').submit(function(e){
        var email = jQuery('#email').val();
        var first_name = jQuery('#first_name').val();
        var last_name = jQuery('#last_name').val();
        var job_title = jQuery('#job_title').val();
        var organization = jQuery('#district_organization').val();
        var address_line_1 = jQuery('#address_line_1').val();
        var address_line_2 = jQuery('#address_line_2').val();
        var city = jQuery('#city').val();
        var state = jQuery('#state').val();
        var zip_code = jQuery('#zip_code').val();
        var phone = jQuery('#phone').val();
        var fax = jQuery('#fax').val();
        var mailing_cuid = jQuery('#mailing_cuid').val();
        var form =  jQuery(this);

        if (mailing_cuid == '') {
            e.preventDefault();
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/AddUser',
                data: {"email": email, "firstname": "", "lastname": ""},
                success: function(response){
                    jQuery('#mailing_cuid').val(response.cuid);
                    form.submit();
                }
            });
            return false; //for old browsers
        }
        if (updated === 0 && mailing_cuid != '') {
            signUpNewsletters(mailing_cuid);
            signUpMagazine(mailing_cuid);

            e.preventDefault();
            jQuery.ajax({
                type: 'POST',
                url: 'https://www4.districtadministration.com/wordpressapi/UpdateUser',
                data: {"cuid": mailing_cuid, "email": email, "firstname": first_name, "lastname": last_name, "jobtitle": job_title, "institution": organization, "address1": address_line_1, "address2": address_line_2, "city": city, "state": state, "zip": zip_code, "phone": phone, "fax": fax},
                success: function(response){
                    updated = 1;
                    form.submit();
                }
            });
            return false; //for old browsers
        } else {
            return true; //for old browsers
        }
    });


});