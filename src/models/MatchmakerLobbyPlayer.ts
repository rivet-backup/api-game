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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MatchmakerLobbyPlayer
 */
export interface MatchmakerLobbyPlayer {
    /**
     * 
     * @type {string}
     * @memberof MatchmakerLobbyPlayer
     */
    token: string;
}

export function MatchmakerLobbyPlayerFromJSON(json: any): MatchmakerLobbyPlayer {
    return MatchmakerLobbyPlayerFromJSONTyped(json, false);
}

export function MatchmakerLobbyPlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchmakerLobbyPlayer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function MatchmakerLobbyPlayerToJSON(value?: MatchmakerLobbyPlayer | null): any {
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


