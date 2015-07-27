// jQuery snippet for selecting InPlace - Unit Offering
// e.g autoPick ('NewUnitOfferingId', '2015');
function autoPick(domSelectId, searchStr) {
  $('#' + domSelectId + ' option').each(function(value, item){ 
  	if ($(item).text().indexOf(searchStr) !== -1 )
  	{ 
  		$(item).prop('selected', true);
  	}
  });
}
