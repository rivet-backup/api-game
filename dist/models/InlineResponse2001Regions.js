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
exports.InlineResponse2001RegionsToJSON = exports.InlineResponse2001RegionsFromJSONTyped = exports.InlineResponse2001RegionsFromJSON = void 0;
function InlineResponse2001RegionsFromJSON(json) {
    return InlineResponse2001RegionsFromJSONTyped(json, false);
}
exports.InlineResponse2001RegionsFromJSON = InlineResponse2001RegionsFromJSON;
function InlineResponse2001RegionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'regionId': json['region_id'],
    };
}
exports.InlineResponse2001RegionsFromJSONTyped = InlineResponse2001RegionsFromJSONTyped;
function InlineResponse2001RegionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'region_id': value.regionId,
    };
}
exports.InlineResponse2001RegionsToJSON = InlineResponse2001RegionsToJSON;
