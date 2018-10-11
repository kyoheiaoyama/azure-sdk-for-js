/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workItemConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a WorkItemConfigurations. */
export class WorkItemConfigurations {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a WorkItemConfigurations.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): Promise<Models.WorkItemConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsListResponse>;
  }

  /**
   * Create a work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsCreateResponse>
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigurationProperties,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsCreateResponse>;
  }

  /**
   * Gets default work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsGetDefaultResponse>
   */
  getDefault(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsGetDefaultResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  getDefault(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDefault(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  getDefault(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsGetDefaultResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getDefaultOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsGetDefaultResponse>;
  }

  /**
   * Delete an workitem configuration of an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsDeleteMethodResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<any>): Promise<Models.WorkItemConfigurationsDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsDeleteMethodResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfigurationsListResult
    },
    default: {
      bodyMapper: Mappers.WorkItemConfigurationError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workItemConfigurationProperties",
    mapper: {
      ...Mappers.WorkItemCreateConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getDefaultOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/DefaultWorkItemConfig",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.workItemConfigId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
