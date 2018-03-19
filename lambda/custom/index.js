'use strict';

// External imports
const Alexa = require('alexa-sdk');

// Local imports
const Handlers = require('./Handlers');

// Constants
const APP_ID = "amzn1.ask.skill.c44b6793-0b57-448d-bd27-f0794bb27cab"; // This value would be your Skill ID. You can find this on https://developer.amazon.com/

exports.handler = function (event, context, callback) {
    let alexa = Alexa.handler(event, context);

    alexa.appId = APP_ID;
    alexa.registerHandlers(Handlers);

    console.log(`Beginning execution for skill with APP_ID=${alexa.appId}`);
    alexa.execute();
    console.log(`Ending execution  for skill with APP_ID=${alexa.appId}`);
};