export function loadTemplate(tpl) {
	return new Promise(function (resolve, reject) {
		fetch(tpl)
			.then((resp) => resp.text())
		  .then(function(data) {;
		    resolve(data);		    
		  })
		  .catch(function(err) {
		    reject(err);
		  });
	});
}