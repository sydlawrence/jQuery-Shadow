$(document).ready(function() {
	$('.box.standard').shadow();
	$('.box.lifted').shadow('lifted');
	$('.box.perspective').shadow('perspective');
	$('.box.raised').shadow('raised');
	$('.box.sides-vt-1').shadow({type:'sides',sides:'vt-1'});
	$('.box.sides-vt-2').shadow({type:'sides',sides:'vt-2'});
	$('.box.sides-hz-1').shadow({type:'sides',sides:'hz-1'});
	$('.box.sides-hz-2').shadow({type:'sides',sides:'hz-2'});
	$('.box.rotated').shadow({type:'rotated',rotate:'-5deg'});
});