"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Rivet Game API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchmakerLobbyPlayerToJSON = exports.MatchmakerLobbyPlayerFromJSONTyped = exports.MatchmakerLobbyPlayerFromJSON = void 0;
function MatchmakerLobbyPlayerFromJSON(json) {
    return MatchmakerLobbyPlayerFromJSONTyped(json, false);
}
exports.MatchmakerLobbyPlayerFromJSON = MatchmakerLobbyPlayerFromJSON;
function MatchmakerLobbyPlayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'token': json['token'],
    };
}
exports.MatchmakerLobbyPlayerFromJSONTyped = MatchmakerLobbyPlayerFromJSONTyped;
function MatchmakerLobbyPlayerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token': value.token,
    };
}
exports.MatchmakerLobbyPlayerToJSON = MatchmakerLobbyPlayerToJSON;
