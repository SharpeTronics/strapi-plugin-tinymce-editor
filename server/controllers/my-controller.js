'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-tinymce-editor')
      .service('myService')
      .getWelcomeMessage();
  },
});
