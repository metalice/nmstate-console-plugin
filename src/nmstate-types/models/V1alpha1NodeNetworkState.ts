/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1alpha1NodeNetworkStateStatus } from './V1alpha1NodeNetworkStateStatus';
import {
    V1alpha1NodeNetworkStateStatusFromJSON,
    V1alpha1NodeNetworkStateStatusFromJSONTyped,
    V1alpha1NodeNetworkStateStatusToJSON,
} from './V1alpha1NodeNetworkStateStatus';

/**
 * NodeNetworkState is the Schema for the nodenetworkstates API
 * @export
 * @interface V1alpha1NodeNetworkState
 */
export interface V1alpha1NodeNetworkState {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {any}
     * @memberof V1alpha1NodeNetworkState
     */
    apiVersion?: any | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {any}
     * @memberof V1alpha1NodeNetworkState
     */
    kind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof V1alpha1NodeNetworkState
     */
    metadata?: any | null;
    /**
     * 
     * @type {V1alpha1NodeNetworkStateStatus}
     * @memberof V1alpha1NodeNetworkState
     */
    status?: V1alpha1NodeNetworkStateStatus;
}

/**
 * Check if a given object implements the V1alpha1NodeNetworkState interface.
 */
export function instanceOfV1alpha1NodeNetworkState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1NodeNetworkStateFromJSON(json: any): V1alpha1NodeNetworkState {
    return V1alpha1NodeNetworkStateFromJSONTyped(json, false);
}

export function V1alpha1NodeNetworkStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1NodeNetworkState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'status': !exists(json, 'status') ? undefined : V1alpha1NodeNetworkStateStatusFromJSON(json['status']),
    };
}

export function V1alpha1NodeNetworkStateToJSON(value?: V1alpha1NodeNetworkState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': value.metadata,
        'status': V1alpha1NodeNetworkStateStatusToJSON(value.status),
    };
}

