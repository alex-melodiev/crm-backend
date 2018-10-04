'use strict';

/**
 * Buildingtype.js controller
 *
 * @description: A set of functions called "actions" for managing `Buildingtype`.
 */

module.exports = {

  /**
   * Retrieve buildingtype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.buildingtype.search(ctx.query);
    } else {
      return strapi.services.buildingtype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a buildingtype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.buildingtype.fetch(ctx.params);
  },

  /**
   * Count buildingtype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.buildingtype.count(ctx.query);
  },

  /**
   * Create a/an buildingtype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.buildingtype.add(ctx.request.body);
  },

  /**
   * Update a/an buildingtype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.buildingtype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an buildingtype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.buildingtype.remove(ctx.params);
  },

  /**
   * Add relation to a/an buildingtype record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.buildingtype.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an buildingtype record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.buildingtype.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an buildingtype record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.buildingtype.removeRelation(ctx.params, ctx.request.body);
  }
};
