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
import { MatchmakerLobby } from './';
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     *
     * @type {MatchmakerLobby}
     * @memberof InlineResponse200
     */
    lobby?: MatchmakerLobby;
}
export declare function InlineResponse200FromJSON(json: any): InlineResponse200;
export declare function InlineResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse200;
export declare function InlineResponse200ToJSON(value?: InlineResponse200 | null): any;