
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

var onLoadFunctions = new Array();

function onLoaded() {
	MM_preloadImages(
			'/wtalliance/images/useradmin_over.jpg',
			'/wtalliance/images/reports_over.jpg',
			'/wtalliance/images/profile_over.jpg',
			'/wtalliance/images/edit_over.jpg',
			'/wtalliance/images/logout_over.jpg',
			'/wtalliance/images/go_over.jpg',
			'/wtalliance/images/Lmainmenu_over.jpg',
			'/wtalliance/images/Lmembers_over.jpg',
			'/wtalliance/images/Ldocument_over.jpg',
			'/wtalliance/images/Lnews_over.jpg',
			'/wtalliance/images/Lthemat_over.jpg',
			'/wtalliance/images/Lcalend_over.jpg',
			'/wtalliance/images/Lfund_over.jpg',
			'/wtalliance/images/Ltraining_over.jpg',
			'/wtalliance/images/Llinks_over.jpg',
			'/wtalliance/images/Lmemlist_over.jpg',
			'/wtalliance/images/Lpublist_over.jpg',
			'/wtalliance/images/Lprocedfl_over.jpg',
			'/wtalliance/images/Lpresent_over.jpg',
			'/wtalliance/images/Llogotag_over.jpg',
			'/wtalliance/images/Lother_over.jpg',
			'/wtalliance/images/Ldonor_over.jpg',
			'/wtalliance/images/Ltips_over.jpg',
			'/wtalliance/images/Llinks_over.jpg',
			'/wtalliance/images/Cmemlist_over.jpg',
			'/wtalliance/images/Cpublist_over.jpg',
			'/wtalliance/images/Cadmin_over.jpg',
			'/wtalliance/images/Cpresent_over.jpg',
			'/wtalliance/images/Clogotag_over.jpg',
			'/wtalliance/images/Cother_over.jpg',
			'/wtalliance/images/Cnews_over.jpg',
			'/wtalliance/images/Cthemat_over.jpg',
			'/wtalliance/images/Ccalendar_over.jpg',
			'/wtalliance/images/Cdonor_over.jpg',
			'/wtalliance/images/Ctips_over.jpg',
			'/wtalliance/images/Ctraining_over.jpg',
			'/wtalliance/images/Clinks_over.jpg'
		);
	for ( var n = 0; n < onLoadFunctions.length; n++ )
		onLoadFunctions[n].call();
}

function doSearch() {
	document.forms["searchnav"].submit();
}

function getFlashMovieObject(movieName) {
	// Safari: Mac OS X
	if ( navigator.userAgent.indexOf("Safari") != -1 )
		return document[movieName];
	else {
		// Firefox, Netscape: mac, win
		if ( document.embeds[movieName] )
			return document.embeds[movieName];
		
		// MSIE: Win
		else		
			return document[movieName];
	}
}

var DHTML = (document.getElementById || document.all || document.layers);

function getObj( name ) {
	if ( document.getElementById ) {
		this.obj = document.getElementById(name);
		this.style = document.getElementById(name).style;
	}
	else if ( document.all ) {
		this.obj = document.all[name];
		this.style = document.all[name].style;
	}
	else if ( document.layers ) {
		this.obj = document.layers[name];
		this.style = document.layers[name];
	}
}


function doOverEditable( which ) {
	if (!DHTML) return;
	which.className="editable_hi";
}
function doOutEditable( which ) {
	if (!DHTML) return;
	which.className="editable";
}
function doEdit( which ) {
	document.location = "?a=edit&item=" + which + "&return=" + document.location.pathname;
}
function doDelete( which, t, ex, n ) {
	var msg = "Are you sure you want to delete the "+t+" \"" + n + "\"?" + ex;
	if ( confirm(msg) ) {
		document.location = "?a=delete&item=" + which + "&return=" + document.location.pathname;
	}
}
function doNew( which ) {
	document.location = "?a=new&item=" + which + "&return=" + document.location.pathname;
}
