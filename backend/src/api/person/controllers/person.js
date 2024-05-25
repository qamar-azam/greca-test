'use strict';

/**
 * person controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::person.person', ({strapi}) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const entity = await strapi.db.query("api::person.person").findOne({
          where: {slug: id}
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return {
        data: sanitizedEntity
      };
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}));
