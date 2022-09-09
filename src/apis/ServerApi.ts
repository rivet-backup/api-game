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
    InlineObject2,
    InlineObject2FromJSON,
    InlineObject2ToJSON,
    InlineObject3,
    InlineObject3FromJSON,
    InlineObject3ToJSON,
    ResponseError,
    ResponseErrorFromJSON,
    ResponseErrorToJSON,
} from '../models';

export interface LobbyReadyRequest {
    body: object;
}

export interface PlayerConnectedRequest {
    inlineObject2: InlineObject2;
}

export interface PlayerDisconnectedRequest {
    inlineObject3: InlineObject3;
}

/**
 * 
 */
export class ServerApi extends runtime.BaseAPI {

    /**
     */
    async lobbyReadyRaw(requestParameters: LobbyReadyRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling lobbyReady.');
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
            const tokenString = await token("MatchmakerLobby", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/lobbies/ready`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async lobbyReady(body: object): Promise<object> {
        const response = await this.lobbyReadyRaw({ body: body });
        return await response.value();
    }

    /**
     */
    async playerConnectedRaw(requestParameters: PlayerConnectedRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.inlineObject2 === null || requestParameters.inlineObject2 === undefined) {
            throw new runtime.RequiredError('inlineObject2','Required parameter requestParameters.inlineObject2 was null or undefined when calling playerConnected.');
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
            const tokenString = await token("MatchmakerLobby", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/players/connected`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject2ToJSON(requestParameters.inlineObject2),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async playerConnected(inlineObject2: InlineObject2): Promise<object> {
        const response = await this.playerConnectedRaw({ inlineObject2: inlineObject2 });
        return await response.value();
    }

    /**
     */
    async playerDisconnectedRaw(requestParameters: PlayerDisconnectedRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.inlineObject3 === null || requestParameters.inlineObject3 === undefined) {
            throw new runtime.RequiredError('inlineObject3','Required parameter requestParameters.inlineObject3 was null or undefined when calling playerDisconnected.');
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
            const tokenString = await token("MatchmakerLobby", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/matchmaker/players/disconnected`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObject3ToJSON(requestParameters.inlineObject3),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async playerDisconnected(inlineObject3: InlineObject3): Promise<object> {
        const response = await this.playerDisconnectedRaw({ inlineObject3: inlineObject3 });
        return await response.value();
    }

}