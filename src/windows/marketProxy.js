module.exports = {

    open: function( successCallback, errorCallback, pfn ) {
        try {
            window.open("ms-windows-store://pdp/?PFN=" + pfn, "_system");
            successCallback( r );
        }
        catch ( ex ) {
            errorCallback( ex );
        }

        return true;
    }
};
require( "cordova/exec/proxy" ).add( "Market", module.exports );
