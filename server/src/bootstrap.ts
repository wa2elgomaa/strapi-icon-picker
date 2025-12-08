import type { Core } from '@strapi/strapi';

const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Access strapi-icon-picker menu',
      uid: 'read',
      pluginName: 'strapi-icon-picker',
    }
  ];

  await (strapi as any).admin?.services.permission.actionProvider.registerMany(actions);
};

export default bootstrap;
