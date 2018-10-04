'use strict';

/**
 * Repairs.js controller
 *
 * @description: A set of functions called "actions" for managing `Repairs`.
 */

module.exports = {

  /**
   * Retrieve repairs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.repairs.search(ctx.query);
    } else {
      return strapi.services.repairs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a repairs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.repairs.fetch(ctx.params);
  },

  /**
   * Count repairs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.repairs.count(ctx.query);
  },

  /**
   * Create a/an repairs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.repairs.add(ctx.request.body);
  },

  /**
   * Update a/an repairs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.repairs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an repairs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.repairs.remove(ctx.params);
  },

  /**
   * Add relation to a/an repairs record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.repairs.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an repairs record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.repairs.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an repairs record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.repairs.removeRelation(ctx.params, ctx.request.body);
  }
};
