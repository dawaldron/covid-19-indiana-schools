// JScript File
Type.registerNamespace('Intrafinity.Web.Controls');
///Common funcitons
Intrafinity.Web.Controls._Common = function(){}
Intrafinity.Web.Controls._Common.prototype = {
    createHyperLink : function(text){
        var retVal = document.createElement("a");
        retVal.style.cursor = "pointer";
        retVal.appendChild(document.createTextNode(text));
        return retVal;
    },
   
    createImage : function(id, src, setTabIndexToZero){
        var retVal = document.createElement("img");
        retVal.src = src;
        retVal.id = id;
        if(setTabIndexToZero === true) retVal.tabIndex = 0;
        return retVal;
    },
    
    createDiv : function(id, parent){
        var retVal = document.createElement("div");
        retVal.id = id;
        if(parent)
            parent.appendChild(retVal);
        return retVal;
    }, 
   
    createRow : function(tbl){
        if(tbl){
            var rowIndex = tbl.rows.length;
            tbl.insertRow(rowIndex);
            return tbl.rows[rowIndex];
        }
        else
            return null;  
    },
   
    createCell : function(row){
        if(row){
            var cellIndex = row.cells.length;
            row.insertCell(cellIndex);
            return row.cells[cellIndex];
        }
        else
            return null;  
    }, 
   
    createTHCell: function (row) {
        if (row) {
            var th = document.createElement("th");
            row.appendChild(th);
            return th;
        }
        else
            return null;
    },


    createTable: function (parent) {
        if(parent){
            var retVal = document.createElement("table");
            parent.appendChild(retVal);
            return retVal;
        }
        else 
            return null;  
    },
   
    createBR : function(parent){
        if(parent){
            var br = document.createElement("br");
            parent.appendChild(br);
        }
    },
   
    getMouseXY: function(e){
        var tempX = 0;
        var tempY = 0;
        if (document.all){
            // grab the x-y pos.s if browser is IE
            tempX = event.clientX + document.body.scrollLeft
            tempY = event.clientY + document.body.scrollTop
        }
        else {  // grab the x-y pos.s if browser is NS
            tempX = e.pageX
            tempY = e.pageY
        } 
        // catch possible negative values in NS4
        if (tempX < 0){tempX = 0}
        if (tempY < 0){tempY = 0}  
        return [tempX, tempY];
    },
    
    htmlEncode: function(htmlCode) {
        var div = document.createElement("div");    
        div.appendChild(document.createTextNode(htmlCode));
        return div.innerHTML;
    }, 

    htmlEncode2: function(htmlCode) {
        var text = this.htmlEncode(htmlCode);    
        text = text.replace(/&lt;/g, "&#60;");
        text = text.replace(/&gt;/g, "&#62;");
        return text
    },
    
    addAccessibleClickHander: function (elementId, eventName, delegate) {
        //Add mouse click handler and keydown click handler.
        $addHandler(elementId, eventName, delegate);
        $addHandler(elementId, 'keydown', delegate);
    }

}

if(Type && typeof(Intrafinity.Web.Controls._Common) == "undefined") {
    Intrafinity.Web.Controls._Common.registerClass("Intrafinity.Web.Controls._Common");
}    

$Utility = new Intrafinity.Web.Controls._Common();

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();