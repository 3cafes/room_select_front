var path = require('path');
module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
			@import "@/styles/_variables.scss";
		  `,
			},
		},
	},
};
