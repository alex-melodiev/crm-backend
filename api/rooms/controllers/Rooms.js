'use strict';

/**
 * Rooms.js controller
 *
 * @description: A set of functions called "actions" for managing `Rooms`.
 */

module.exports = {

  /**
   * Retrieve rooms records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.rooms.search(ctx.query);
    } else {
      return strapi.services.rooms.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a rooms record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.rooms.fetch(ctx.params);
  },

  /**
   * Count rooms records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rooms.count(ctx.query);
  },

  /**
   * Create a/an rooms record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rooms.add(ctx.request.body);
  },

  /**
   * Update a/an rooms record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rooms.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rooms record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rooms.remove(ctx.params);
  },

  /**
   * Add relation to a/an rooms record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.rooms.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an rooms record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.rooms.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an rooms record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.rooms.removeRelation(ctx.params, ctx.request.body);
  }
};
