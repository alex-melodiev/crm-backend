'use strict';

/**
 * Currency.js controller
 *
 * @description: A set of functions called "actions" for managing `Currency`.
 */

module.exports = {

  /**
   * Retrieve currency records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.currency.search(ctx.query);
    } else {
      return strapi.services.currency.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a currency record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.currency.fetch(ctx.params);
  },

  /**
   * Count currency records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.currency.count(ctx.query);
  },

  /**
   * Create a/an currency record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.currency.add(ctx.request.body);
  },

  /**
   * Update a/an currency record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.currency.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an currency record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.currency.remove(ctx.params);
  },

  /**
   * Add relation to a/an currency record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.currency.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an currency record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.currency.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an currency record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.currency.removeRelation(ctx.params, ctx.request.body);
  }
};
