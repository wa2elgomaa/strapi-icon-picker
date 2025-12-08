import { Core } from '@strapi/strapi';

const USER_MODEL_UID = 'plugin::strapi-icon-picker.iconlibrary'
const iconLibraryService: any = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query) {
    return await strapi.documents(USER_MODEL_UID).findMany(query);
  },
  async create(data) {
    return await strapi.documents(USER_MODEL_UID).create(data);
  },
  async update(id, data) {
    return await strapi.documents(USER_MODEL_UID).update({
      documentId: id,
      data
    });
  },
  async delete(id) {
    return await strapi.documents(USER_MODEL_UID).delete(id);
  },
});

export default iconLibraryService