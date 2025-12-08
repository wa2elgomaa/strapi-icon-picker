import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'icon',
    plugin: 'strapi-icon-picker',
    type: 'string',
  });
};

export default register;
