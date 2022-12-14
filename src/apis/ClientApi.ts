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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineObject1,
    InlineObject1FromJSON,
    InlineObject1ToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    ResponseError,
    ResponseErrorFromJSON,
    ResponseErrorToJSON,
} from '../models';

export interface FindLobbyRequest {
    inlineObject1: InlineObject1;
}

export interface JoinLobbyRequest {
    inlineObject: InlineObject;
}

/**
 * 
 */
export class ClientApi extends runtime.BaseAPI {

    /**
     */
    async findLobbyRaw(requestParameters: FindLobbyRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.inlineObject1 === null || requestParameters.inlineObject1 === undefined) {
            throw new runtime.RequiredError('inlineObject1','Required parameter requestParameters.inlineObject1 was null or undefined when calling findLobby.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespaceDevelopment", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespacePublic", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/lobbies/find`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject1ToJSON(requestParameters.inlineObject1),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async findLobby(inlineObject1: InlineObject1): Promise<InlineResponse200> {
        const response = await this.findLobbyRaw({ inlineObject1: inlineObject1 });
        return await response.value();
    }

    /**
     */
    async joinLobbyRaw(requestParameters: JoinLobbyRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.inlineObject === null || requestParameters.inlineObject === undefined) {
            throw new runtime.RequiredError('inlineObject','Required parameter requestParameters.inlineObject was null or undefined when calling joinLobby.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespaceDevelopment", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespacePublic", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/lobbies/join`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async joinLobby(inlineObject: InlineObject): Promise<InlineResponse200> {
        const response = await this.joinLobbyRaw({ inlineObject: inlineObject });
        return await response.value();
    }

    /**
     */
    async recommendRegionsRaw(): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespaceDevelopment", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("GameNamespacePublic", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/regions/recommend`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     */
    async recommendRegions(): Promise<InlineResponse2001> {
        const response = await this.recommendRegionsRaw();
        return await response.value();
    }

}
