import { loadTemplate } from '../../common/load-tpl.js';

ESPA.route('/bar', function(name) {
  Promise.all([
    loadTemplate('views/bar.html'),
    fetchData()
  ])
  .then(data => {
    console.log(data);
    $('#container').html(data[0]);
    bind(data[1]);
  });  
});
ESPA.route.exec();

function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch('https://api.github.com/users/phongnlu')
      .then((resp) => resp.json())
      .then(function(data) {;
          resolve(data);        
        })
        .catch(function(err) {
          reject(err);
        });
  });
}

function bind(data) {
	var data = ESPA.Bind({
	  id: data.id,
    avatar: data.avatar_url,
    homepage: data.html_url
	}, {
	  id: '[data-id]',
    avatar: {
      dom: '[data-avatar]',
      transform: function (val) {
        return '<img src="' + val + '" style="width:40px;" />';
      }
    },
    homepage: '[data-homepage]'
	});
}