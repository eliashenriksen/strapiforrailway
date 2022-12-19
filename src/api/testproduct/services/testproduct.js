'use strict';

/**
 * testproduct service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testproduct.testproduct');
