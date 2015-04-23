(function ( $ ) {
 
    $.fn.collect = function($prefix) {
		document._tmp_csv = [];
		
		// extracting data off the table
		var rows = $('tr.gridrow').length;
		var cols =  $('tr.gridrow:first td').length;
		var line = "";
		for (var r = 0; r < rows; r ++) {
			line = ($prefix !== undefined) ? $prefix + ",": "";
			for( var c = 0; c < cols; c++) {
				var el = '#list_holder > div.grid_holder > table > tbody > tr:nth-child(' + (r + 1) + ') > td:nth-child(' + (c +1) + ')';
				line += $(el).text() + ',';
			}
			// stripout the last comma
			if (line.length > 0) {
				line = line.substr(0, line.length - 1);
			}
			
			// push data to array collection
			document._tmp_csv.push( line );
		}
		
        return this;
    };
 
	$.fn.printCsvString = function() {
		for (var i = 0; i < document._tmp_csv.length; i++ ) {
			console.log( document._tmp_csv[i] );
		}
	}
 
}( jQuery ));
