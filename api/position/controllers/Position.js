'use strict';

/**
 * Position.js controller
 *
 * @description: A set of functions called "actions" for managing `Position`.
 */

module.exports = {

  /**
   * Retrieve position records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {

    console.log(ctx)
    if (ctx.query._q) {
      return strapi.services.position.search(ctx.query);
    } else {
      return strapi.services.position.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a position record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.position.fetch(ctx.params);
  },

  /**
   * Count position records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.position.count(ctx.query);
  },

  /**
   * Create a/an position record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.position.add(ctx.request.body);
  },

  /**
   * Update a/an position record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.position.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an position record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.position.remove(ctx.params);
  },

  /**
   * Add relation to a/an position record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.position.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an position record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.position.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an position record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.position.removeRelation(ctx.params, ctx.request.body);
  }
};
