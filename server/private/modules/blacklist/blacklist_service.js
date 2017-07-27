/**
 * Created by rajithk on 7/26/17.
 */
'use strict';
const logger=require('../../config/logger');

logger.debugLevel = 'warn';

function blacklistService() {

    let _getApiList = function (request, callback) {

        logger.log('INFO', "hit at blacklist service end point");

        request.server.log('info', 'GET API LIST : ' + request.payload && JSON.stringify(request.payload));

        let onSuccess = function (getResponse) {
            logger.log('INFO', 'success');
            console.log('here');
            callback(Object.assign({}, getResponse, {success: true, message:"get api lists successfully"}));
        };

        let onFailture = function (getResponseError) {
            logger.log('ERROR', 'faliture');
            callback(getResponseError);
        };
    };

    return {
        getApiList: _getApiList
    }
}

module.exports = blacklistService();