var path = require('path');
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
			@import "@/styles/_variables.scss";
		  `,
			},
			less: {
				lessOptions: {
					modifyVars: {
						'primary-color': '#ff00ae',
						'link-color': '#ff00ae',
						'border-radius-base': '0px',
					},
					javascriptEnabled: true,
				},
			},
		},
	},
};
