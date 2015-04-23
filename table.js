(function ( $ ) {
 
    $.fn.collect = function() {
		var tmp_csv = $('#tmp_csv');
		if (!tmp_csv) {
			$("body").append($("<div id='tmp_csv' />"));
			tmp_csv = $('#tmp_csv');
		}
		
		// extracting data off the table
		var rows = $('tr.gridrow').length;
		var cols =  $('tr:first td').length;
		
		
		for (var r = 0; r < rows; r ++) {
			var line = "";
			for( var c = 0; c < cols; c++) {
				line = $('#list_holder > div.grid_holder > table > tbody > tr:nth-child(" + (r + 1) + ") > td:nth-child(" + (c +1) + ")").text() + ",";
			}
			tmp_csv.attr('value', tmp_csv.attr('value')  + "\r\n"  + line);
		}
		
        return this;
    };
 
	$.fn.getCSV = function() {
		return $('#tmp_csv').attr('value');
	}
 
}( jQuery ));
