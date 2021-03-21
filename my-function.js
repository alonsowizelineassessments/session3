'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const fake_task = `${Faker.random.word()}`;
  // add variables to virtual user's context:
  userContext.vars.fake_task = fake_task;
  // continue with executing the scenario:
  return done();
}