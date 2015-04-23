(function ( $ ) {
 
    $.fn.collect = function(prefix) {
		if (document._tmp_csv === undefined) {
			document._tmp_csv = [];
		}
		// extracting data off the table
		var rows = $('tr.gridrow').length + $('tr.gridrow_alternate').length;
		var cols =  $('tr.gridrow:first td').length;
		var line = "";
		for (var r = 0; r < rows; r ++) {
			line = (prefix !== undefined) ? prefix + ",": "";
			for( var c = 0; c < cols; c++) {
				var el = 'table#results_list > tbody > tr:nth-child(' + (r + 1) + ') > td:nth-child(' + (c +1) + ')';
				line += $(el).text() + ',';
			}
			// stripout the last comma
			if (line.length > 0) {
				line = line.substr(0, line.length - 1);
			}
			
			// push data to array collection
			document._tmp_csv.push( line );
		}
    };
 
	$.fn.downloadCsv = function(filename) {
		var lines = "";
		for (var i = 0; i < document._tmp_csv.length; i++ ) {
			lines += document._tmp_csv[i]  + '\r\n';
		}

	var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(lines));
		pom.setAttribute('download', filename);

		pom.style.display = 'none';
		document.body.appendChild(pom);

		pom.click();

		document.body.removeChild(pom);
	}
 
}( jQuery ));
/*  staff */
/*
$(document).ajaxSuccess(function() {
	$.fn.collect($("#Discipline option:selected").text());
	console.log('collected');
});
*/


/* staff roles */
/*
$(document).ajaxSuccess(function() {
	$.fn.collect($('#menu_page_content > fieldset > h2').text());
	console.log('collected');
});
*/
