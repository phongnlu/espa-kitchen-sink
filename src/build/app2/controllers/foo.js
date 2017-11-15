import { loadTemplate } from '../../common/load-tpl.js';

ESPA.route('/foo', function(name) {
  loadTemplate('views/foo.html')
  	.then(function(data) {
  		$('#container').html(data);
  		bind();
  	});
});
ESPA.route.exec();

function bind() {
	var data = ESPA.Bind({
	  foo: "Hello App2"
	}, {
	  foo: '.foo',
	});
}