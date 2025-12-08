const bootstrap = async ({ strapi }) => {
  const actions = [
    {
      section: "plugins",
      displayName: "Access strapi-icon-picker menu",
      uid: "read",
      pluginName: "strapi-icon-picker"
    }
  ];
  await strapi.admin?.services.permission.actionProvider.registerMany(actions);
};
const destroy = ({ strapi }) => {
};
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "icon",
    plugin: "strapi-icon-picker",
    type: "string"
  });
};
const config = {
  default: {},
  validator() {
  }
};
const kind = "collectionType";
const collectionName = "iconlibrary";
const info = {
  singularName: "iconlibrary",
  pluralName: "iconlibraries",
  displayName: "IconLibrary"
};
const options = {
  draftAndPublish: false,
  comment: ""
};
const pluginOptions = {
  "content-manager": {
    visible: false
  },
  "content-type-builder": {
    visible: false
  }
};
const attributes = {
  name: {
    type: "string",
    required: true
  },
  abbreviation: {
    type: "string",
    required: true,
    unique: true,
    maxLength: 3
  },
  isEnabled: {
    type: "boolean",
    "default": true
  }
};
const schema = {
  kind,
  collectionName,
  info,
  options,
  pluginOptions,
  attributes
};
const iconlibrary = {
  schema
};
const contentTypes = {
  iconlibrary
};
const getService = (strapi) => strapi.plugin("strapi-icon-picker").service("iconLibraryService");
const iconLibraryController = ({ strapi }) => ({
  async find(ctx) {
    try {
      ctx.body = await getService(strapi).find(ctx.query);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async create(ctx) {
    try {
      await getService(strapi).create(ctx.request.body);
      ctx.body = await getService(strapi).find();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async update(ctx) {
    try {
      await getService(strapi).update(ctx.params.id, ctx.request.body);
      ctx.body = await getService(strapi).find();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async delete(ctx) {
    try {
      ctx.body = await getService(strapi).delete(ctx.params.id);
    } catch (error) {
      ctx.throw(500, error);
    }
  }
});
const controllers = {
  iconLibraryController
};
const middlewares = {};
const policies = {};
const routes = [
  {
    method: "GET",
    path: "/iconlibrary/find",
    handler: "iconLibraryController.find",
    config: { policies: [] }
  },
  {
    method: "POST",
    path: "/iconlibrary/post",
    handler: "iconLibraryController.create",
    config: { policies: [] }
  },
  {
    method: "PUT",
    path: "/iconlibrary/update/:id",
    handler: "iconLibraryController.update",
    config: { policies: [] }
  },
  {
    method: "DELETE",
    path: "/iconlibrary/delete/:id",
    handler: "iconLibraryController.delete",
    config: { policies: [] }
  }
];
const USER_MODEL_UID = "plugin::strapi-icon-picker.iconlibrary";
const iconLibraryService = ({ strapi }) => ({
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
  }
});
const services = {
  iconLibraryService
};
const methods = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares
};
export {
  methods as default
};
