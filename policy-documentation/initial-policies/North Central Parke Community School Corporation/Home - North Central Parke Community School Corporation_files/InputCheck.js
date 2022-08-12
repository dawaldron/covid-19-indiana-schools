/************************************************
*                   InputCheck.js               *
*************************************************/

function InputCheck_AddErrorFlagControlToInputCheckControls()
{
    var oAllInputControls = ControlCollectionToArray(document.getElementsByTagName('Input'), document.getElementsByTagName('textarea'), document.getElementsByTagName('Select'));
      
    for (var i=0; i<oAllInputControls.length; i++)
    {
        if (oAllInputControls[i].attributes.getNamedItem('RequiredInputControl') != null)
            oAllInputControls[i] = AppendHtmlToParent(oAllInputControls[i], '<span id="' + oAllInputControls[i].id + '_ErrFlag" style="color: Black">*</span>');
        else if (oAllInputControls[i].attributes.getNamedItem('NumericRangeCheck') != null || oAllInputControls[i].attributes.getNamedItem('DateTimeRangeCheck') != null || 
            oAllInputControls[i].attributes.getNamedItem('NumericCompareCheck') != null || oAllInputControls[i].attributes.getNamedItem('DateTimeCompareCheck') != null || 
            oAllInputControls[i].attributes.getNamedItem('FormatCheck') != null)
                oAllInputControls[i] = AppendHtmlToParent(oAllInputControls[i], '<span id="' + oAllInputControls[i].id + '_ErrFlag" style="color: Red;display: none">*</span>');
        if (oAllInputControls[i].attributes.getNamedItem('NumericCompareCheck') != null || oAllInputControls[i].attributes.getNamedItem('DateTimeCompareCheck') != null)
        {
            var UpperControl = document.getElementById(oAllInputControls[i].attributes.getNamedItem('CompareControl').value);
            UpperControl = AppendHtmlToParent(UpperControl, '<span id="' + UpperControl.id + '_ErrFlag" style="color: Red;display: none">*</span>');
        }
    }            
}    


function InputCheck_DisplayRangeAndCompareControlError(oControl1, oControl2, isRight, errorMessageTableRowId, errorMessageControlId, errorMessage)
{
    var oErrorFlag1 = document.getElementById(oControl1.id + '_ErrFlag');
    var oErrorFlag2 = oControl2 == null ? oErrorFlag1 : document.getElementById(oControl2.id + '_ErrFlag');   
    if (oErrorFlag2 == null)
        oErrorFlag2 = oErrorFlag1;
    if (isRight)
    {
        if (oControl1.attributes.getNamedItem('RequiredInputControl') == null)
            oErrorFlag1.style.display = oErrorFlag2.style.display = 'none';
        else 
            oErrorFlag1.style.color = 'Black';
    }
    else
    {
        oErrorFlag1.style.display = oErrorFlag2.style.display = '';         oErrorFlag1.style.color = oErrorFlag2.style.color = 'Red';
        DisplayError(errorMessageTableRowId, errorMessageControlId, errorMessage, 'Check error on field marked *.');
    }    
    return !isRight;
}

// Checks if Check Condition exists and Condition result
function InputCheck_ConditionCheck(oInputControl)
{
    var InputCheckCondition = true;
    if (oInputControl.attributes.getNamedItem('InputCheckCondition') != null && oInputControl.attributes.getNamedItem('InputCheckCondition').value != "")
        InputCheckCondition =  eval(oInputControl.attributes.getNamedItem('InputCheckCondition').value);
    return InputCheckCondition;
}

function InputCheck_CheckAllRequiredControls(checkGroupName, errorMessageTableRowId, errorMessageControlId, notInputErrorMessage, formatErrorMessage) {
    //ROGER 2013/04/18: From now on, this function supports multiple group validation:
    //if "RequiredInputControl" == "*", it will be checked whenever
    //if "RequiredInputControl" is empty, it will only be checked when checkGroupName is empty
    //if "RequiredInputControl" == "group1, group2" (COMMA DELIMITED!), and checkGroupName == "group1" or "group2", it will be checked.
    var oAllInputControls = ControlCollectionToArray(document.getElementsByTagName('Input'), document.getElementsByTagName('textarea'), document.getElementsByTagName('Select'));

    // Non empty        
    var AllRequiredControlsInputted = true;
    for (var i=0; i<oAllInputControls.length; i++)
    {
        if (!InputCheck_ConditionCheck(oAllInputControls[i]))
            continue;

        if (oAllInputControls[i].attributes.getNamedItem('RequiredInputControl') != null && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('RequiredInputControl').value, checkGroupName)) {
            var IsEmpty = false;
            if (oAllInputControls[i].tagName == 'SELECT') {
                if (oAllInputControls[i].size > 0)
                    IsEmpty = oAllInputControls[i].length == 0;
                else
                    IsEmpty = oAllInputControls[i].value.Trim() == '';
            }
            else
                IsEmpty = oAllInputControls[i].value.Trim() == '';

            var oErrorFlag = document.getElementById(oAllInputControls[i].id + '_ErrFlag');
            if (IsEmpty) {
                oErrorFlag.style.display = ''; oErrorFlag.style.color = 'Red';
                AllRequiredControlsInputted = false;
            }
            else {
                //oErrorFlag.style.display = 'none';
                oErrorFlag.style.display = '', oErrorFlag.style.color = 'Black';
            }
        }  
    }    
    if (!AllRequiredControlsInputted)
        return DisplayError(errorMessageTableRowId, errorMessageControlId, notInputErrorMessage, 'Field marked * can not be empty.');
   
    for (var i=0; i<oAllInputControls.length; i++)
    {
        if (!InputCheck_ConditionCheck(oAllInputControls[i]))
            continue;
        
        if (oAllInputControls[i].attributes.getNamedItem('NumericRangeCheck') != null 
         && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('NumericRangeCheck').value, checkGroupName)
         && oAllInputControls[i].value.Trim() != '')
        {
            var RangeString = oAllInputControls[i].attributes.getNamedItem('RangeValue').value;
            var ErrorMessage = oAllInputControls[i].attributes.getNamedItem('RangeMessage').value;
            if (ErrorMessage.Trim() == '')
                ErrorMessage = 'Numeric data range check error';
            var MinMaxValue = RangeString.split(',');
            var MinValue = MinMaxValue[0].Trim() == '' ? -Number.MAX_VALUE : Number(MinMaxValue[0]);
            var MaxValue = MinMaxValue[1].Trim() == '' ? Number.MAX_VALUE : Number(MinMaxValue[1]);
            var CurrentValue = Number(oAllInputControls[i].value);
//            alert('MinValue|MaxValue|CurrentValue = ' + MinValue + ' || ' + MaxValue + ' || ' + CurrentValue + '  CheckResult = ' +  (CurrentValue >= MinValue && CurrentValue <= MaxValue));           
            if (InputCheck_DisplayRangeAndCompareControlError(oAllInputControls[i], null, CurrentValue >= MinValue && CurrentValue <= MaxValue, errorMessageTableRowId, errorMessageControlId, ErrorMessage))
                return false;
        }
        else if (oAllInputControls[i].attributes.getNamedItem('DateTimeRangeCheck') != null 
         && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('DateTimeRangeCheck').value, checkGroupName)
         && oAllInputControls[i].value.Trim() != '')
        {
            var RangeString = oAllInputControls[i].attributes.getNamedItem('RangeValue').value;
            var ErrorMessage = oAllInputControls[i].attributes.getNamedItem('RangeMessage').value;
            if (ErrorMessage.Trim() == '')
                ErrorMessage = 'DateTime data range check error';
            var MinMaxValue = RangeString.split(',');
            var MinValue = MinMaxValue[0].Trim() == '' ? CommonFunction_DateTime_MinDateTime() : new Date(MinMaxValue[0]);
            var MaxValue = MinMaxValue[1].Trim() == '' ? new Date('12/31/3888 14:23:45') : new Date(MinMaxValue[1]);
            var CurrentValue = CommonFunction_DateTime_ToDateTime(oAllInputControls[i].value);
//            alert('MinValue|MaxValue|CurrentValue = ' + MinValue + ' || ' + MaxValue + ' || ' + CurrentValue + '  CheckResult = ' +  (CurrentValue >= MinValue && CurrentValue <= MaxValue));           
            if (InputCheck_DisplayRangeAndCompareControlError(oAllInputControls[i], null, CurrentValue >= MinValue && CurrentValue <= MaxValue, errorMessageTableRowId, errorMessageControlId, ErrorMessage))
                return false;
        }
        else if (oAllInputControls[i].attributes.getNamedItem('NumericCompareCheck') != null         
          && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('NumericCompareCheck').value, checkGroupName))
        {
            var UpperControl = document.getElementById(oAllInputControls[i].attributes.getNamedItem('CompareControl').value);
            var ErrorMessage = oAllInputControls[i].attributes.getNamedItem('CompareMessage').value;
            if (ErrorMessage.Trim() == '')
                ErrorMessage = 'Numeric data comparison check error';
            if (UpperControl != null && oAllInputControls[i].value.Trim() != '' && UpperControl.value.Trim() != '')
            {
                var LowerValue = Number(oAllInputControls[i].value);
                var UpperValue = Number(UpperControl.value);
//                alert('LowerValue|UpperValue = ' + LowerValue + ' || ' + UpperValue + '  CheckResult = ' +  (LowerValue <= UpperValue));
                if (InputCheck_DisplayRangeAndCompareControlError(oAllInputControls[i], UpperControl, LowerValue <= UpperValue, errorMessageTableRowId, errorMessageControlId, ErrorMessage))
                    return false;
            }
        }
        else if (oAllInputControls[i].attributes.getNamedItem('DateTimeCompareCheck') != null 
          && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('DateTimeCompareCheck').value, checkGroupName))
        {
            var UpperControl = document.getElementById(oAllInputControls[i].attributes.getNamedItem('CompareControl').value);
            var ErrorMessage = oAllInputControls[i].attributes.getNamedItem('CompareMessage').value;
            if (ErrorMessage.Trim() == '')
                ErrorMessage = 'DateTime data comparison check error';
            if (UpperControl != null && oAllInputControls[i].value.Trim() != '' && UpperControl.value.Trim() != '')
            {
                var LowerValue = CommonFunction_DateTime_ToDateTime(oAllInputControls[i].value);
                var UpperValue = CommonFunction_DateTime_ToDateTime(UpperControl.value);
//                alert('LowerValue|UpperValue = ' + LowerValue + ' || ' + UpperValue + '  CheckResult = ' +  (LowerValue <= UpperValue));
                if (InputCheck_DisplayRangeAndCompareControlError(oAllInputControls[i], UpperControl, LowerValue <= UpperValue, errorMessageTableRowId, errorMessageControlId, ErrorMessage))
                    return false;
            }
        }
        else if (oAllInputControls[i].attributes.getNamedItem('FormatCheck') != null 
          && NeedToValidate(oAllInputControls[i].attributes.getNamedItem('FormatCheck').value, checkGroupName)
          && oAllInputControls[i].value.Trim() != '')
        {
            var RegExpression = new RegExp(oAllInputControls[i].attributes.getNamedItem('FormatRegularExp').value, 'g');
            var ErrorMessage = ''
            if (oAllInputControls[i].attributes.getNamedItem('CustomErrorMessage') != null) {
                ErrorMessage = oAllInputControls[i].attributes.getNamedItem('CustomErrorMessage').value;
            }
            if (ErrorMessage == '') {
                ErrorMessage = (formatErrorMessage.Trim() != '') ? formatErrorMessage : 'Format of field marked * is error';
                if (oAllInputControls[i].attributes.getNamedItem('FormatMessage').value.Trim() != '')
                    ErrorMessage += ': ' + oAllInputControls[i].attributes.getNamedItem('FormatMessage').value; 
            }
            
            var CurrentInput = oAllInputControls[i].value.Trim();
            var MatchString = CurrentInput.match(RegExpression);
            var FormatMatch = (MatchString == null) ? false : (MatchString[0]==CurrentInput);
//            alert(RegExpression + ' || ' + CurrentInput + ' || ' + (CurrentInput.match(RegExpression)==null ? ' ' : CurrentInput.match(RegExpression)[0]) + ' || ' + FormatMatch);  
            if (InputCheck_DisplayRangeAndCompareControlError(oAllInputControls[i], null, FormatMatch, errorMessageTableRowId, errorMessageControlId, ErrorMessage))
                return false;
        }
    }    
    return true;
}

function NeedToValidate(groupNameString, validationGroup) {
    //if "RequiredInputControl" == "*", it will be checked whenever
    //if "RequiredInputControl" is empty, it will only be checked when checkGroupName is empty
    //if "RequiredInputControl" == "group1, group2" (COMMA DELIMITED!), and checkGroupName == "group1" or "group2", it will be checked.
    if ((groupNameString == null && validationGroup == null)
       || (groupNameString.length == 0 && validationGroup.length == 0))
        return true;

    if (groupNameString == "*")
        return true;

    var groupNames = groupNameString.split(',');
    //check for IE7
    if (navigator.appVersion.indexOf("MSIE 7.") != -1 || navigator.appVersion.indexOf("MSIE 8.") != -1) {
        for (var i = 0, j = groupNames.length; i < j; i++) {
             if (groupNames[i] === validationGroup) {
                return true; 
             }
         }
    }
    else if (groupNames.indexOf(validationGroup) > -1)
        return true;

    return false;
}