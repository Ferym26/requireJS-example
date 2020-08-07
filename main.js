requirejs.config({
    paths:{
        'jquery': 'libs/jquery-3.4.1.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        }
    }
});

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

if (block1) {
	require(["libs/lib1"], function(lib1) {
		console.log('lib1 загружен');
	});
}

if (block2) {
	require([
		"libs/lib2",
		"jquery"
	], function(lib1, $) {
		$('.block2').text('lorem');
		console.log('lib2 загружен');
	});
}
