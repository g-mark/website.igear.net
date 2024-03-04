

function getCookieValue( cookieName ) {
	var theCookie = "" + document.cookie;
	var ind = theCookie.indexOf( cookieName );
	if ( ind == -1 || cookieName == "" )
		return "";
	var ind1 = theCookie.indexOf( ';', ind );
	if ( ind1 == -1 )
		ind1 = theCookie.length;
	return unescape( theCookie.substring(ind + cookieName.length + 1, ind1) );
}

function testForCookies() {
	var v = "" + Math.floor( 1000 * Math.random() );
	document.cookie = "cooktest=" + v + ";PATH=/";
	return ( getCookieValue("cooktest") == v )
}