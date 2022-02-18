require('dotenv').config();
let fs = require('fs');
let Bluebird = require('bluebird');
let inquirer = require('inquirer');
let _ = require('lodash');
//let Api = null;
const { IgApiClient } = require('instagram-private-api');
let { GraphQLSubscriptions } = require('instagram_mqtt/dist/realtime/subscriptions/graphql.subscription');
let { SkywalkerSubscriptions } = require('instagram_mqtt/dist/realtime/subscriptions/skywalker.subscription');
let ig = null;
let colors = require('colors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const regenerateSession = require('./regenerateSession');

const create = () => {
    
};

module.exports = create;