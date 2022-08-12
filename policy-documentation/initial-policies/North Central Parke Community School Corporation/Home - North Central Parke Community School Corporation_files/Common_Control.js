/************************************************
*           Common_Control.js                   *
*************************************************/


// Gets control object by control or controlId
function Control_GetControl(controlOrControlId)
{
    return (controlOrControlId == null || typeof(controlOrControlId) == 'object') ? controlOrControlId : document.getElementById(controlOrControlId); 
}

// Gets function character parameter, uses default value if it's null
function Common_GetFunctionParameter_Character(fuctionParameter, defaultCharacter)
{
    return (fuctionParameter == null || fuctionParameter == '') ? defaultCharacter : fuctionParameter.charAt(0);
}


// Gets the value of Attribute(attributeName) in control which may be control or control ID
function Attribute_GetAttribute(control, attributeName)
{
    var oControl = (typeof control == 'string') ? document.getElementById(control) : control;
    if (typeof oControl != 'object' || oControl == null)
        return null;
    else if (oControl.attributes == null || oControl.attributes.getNamedItem(attributeName) == null)
        return null;
    else
        return oControl.attributes.getNamedItem(attributeName).value;
}

// Sets the value of Attribute(attributeName) in control which may be control or control ID, add Attribute if it doesn't exist
function Attribute_SetAttribute(control, attributeName, attributeValue)
{
    var oControl = (typeof control == 'string') ? document.getElementById(control) : control;
    if (typeof oControl != 'object' || oControl == null || oControl.attributes == null)
        return;
    else if (oControl.attributes.getNamedItem(attributeName) != null)
    {
        oControl.attributes.getNamedItem(attributeName).value = attributeValue;
    }
    else
    {
        var Attr = document.createAttribute(attributeName);   Attr.value = attributeValue;   oControl.attributes.setNamedItem(Attr);
    }    
}



// Reset the control specialized by controlId to empty or given resetValue
function ResetControlValue(controlId, resetValue)
{
    if (resetValue == null)
        resetValue = '';
    var Control = document.getElementById(controlId);
    if (Control != null)
    {
        if ((Control.nodeName == 'INPUT' && (Control.type == 'text' || Control.type == 'hidden' || Control.type == 'password')) || Control.nodeName == 'TEXTAREA')
            Control.value = resetValue != null ? resetValue : '';
        else if (Control.nodeName == 'INPUT' && (Control.type == 'checkbox' || Control.type == 'radio'))
            Control.checked = resetValue != null ? resetValue : false;
        else if (Control.nodeName == 'SELECT')  
            Control.selectedIndex = resetValue != null ? resetValue : 0;
    }
}
// Clears the control value('' or unselected) for all given control IDs
function Control_ClearValue(controlIds)
{
    for (var i = 0; i < arguments.length; i++)
    { 
        var ControlId = arguments[i]; 
        if (typeof ControlId == 'string')               // Each parameter must be String
        {
            var Control = document.getElementById(ControlId);
            if (Control != null)
            {
                if (Control.nodeName == 'SELECT')
                {
                    if (Control.type == 'select-one' && Control.selectedIndex != -1)
                        Control.options[Control.selectedIndex].selected = false;
                    else if (Control.type == 'select-multiple')  
                    {
                        for (var Index = 0; Index < Control.length; Index++)
                            if (Control.options[Index].selected)
                                Control.options[Index].selected = false;
                    }    
                }
                else if (Control.nodeName == 'INPUT')
                {
                    if (Control.value != null)
                        Control.value = '';
                }
            }
        } 
    }
}


// Display message in given control
function DisplayMessage(messageControlId, message)
{
    var DisplayControl = Control_GetControl(messageControlId)
    var Message = message == null ? '' : message.toString().Trim();

    if (DisplayControl != null && Message != '')
    {
        if (DisplayControl.nodeName == 'LABEL' || DisplayControl.nodeName == 'SPAN')
            DisplayControl.innerHTML = message;
        else 
            DisplayControl.value = message;
    }
}






// Get Text list From ItemListString (Should be move to other file in future)
function List_GetTextListFromItemList(itemList, seperator)
{
    if (itemList == null || itemList == '')
        return '';
    var ItemList = (typeof itemList == 'string') ? itemList : (typeof(itemList) == 'object' && itemList.value != null ? itemList.value : '');
    var TextArray = ItemList.SplitAndTrim(';');
    
    var Seperator = Common_GetFunctionParameter_Character(seperator, ',') + ' ';
    var TextList = '';
    for (var i = 0; i < TextArray.length; i++)
        TextList += Seperator + TextArray[i].substring(0, TextArray[i].lastIndexOf('/'));
    if (TextList != '')
        TextList = TextList.substr(2); 
    return TextList;
}
// Get Value list From ItemListString (Should be move to other file in future)
function List_GetValueListFromItemList(itemList, seperator)
{
    if (itemList == null || itemList == '')
        return '';
    var ItemList = (typeof itemList == 'string') ? itemList : (typeof(itemList) == 'object' && itemList.value != null ? itemList.value : '');
    var TextArray = ItemList.SplitAndTrim(';');
    
    var Seperator = Common_GetFunctionParameter_Character(seperator, ',') + ' ';
    var List = '';
    for (var i = 0; i < TextArray.length; i++)
        List += Seperator + TextArray[i].substr(TextArray[i].lastIndexOf('/') + 1);
    if (List != '')
        List = List.substr(2); 
    return List;
}


// Get Int Array From Int ListString (Should be move to other file in future)
function List_GetIntArrayFromIntListString(intValueList, seperator)
{
    var IntArray = new Array();
    var StartPos = 0; 
    for (i=0; i<=intValueList.length; i++)
        if (i>=intValueList.length || intValueList.charAt(i) == seperator)
        {   
           var IntValue = intValueList.substr(StartPos, i-StartPos).trim(); 
           IntArray.push(IntValue);   alert(IntValue);
           StartPos = i + 1;
        }
    return IntArray;
}

function OpenModalDialog(url, name, width, height) {
    width = width || 640;
    height = height || 480;
    var result = false;
    
    var feature;            
    if (window.showModalDialog) {
        feature = 'dialogWidth:' + width + 'px;dialogHeight:' + height + 'px';
        result = window.showModalDialog(url, name, feature);
    } else {
        feature = 'width=' + width + ',height=' + height + ',toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0';
        window.open(url, name, feature);
    }
    return result;
}