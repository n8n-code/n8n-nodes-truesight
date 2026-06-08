import type { INodeProperties } from 'n8n-workflow';

export const historicalDataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					]
				}
			},
			"options": [
				{
					"name": "Get History",
					"value": "Get History",
					"action": "Gets historical data for a specific group, application or service.",
					"description": "Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/history"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hardware/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"description": "The ID of the group.",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
		{
			"displayName": "Application Id",
			"name": "applicationId",
			"description": "The ID of the application.",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "applicationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
		{
			"displayName": "Service Id",
			"name": "serviceId",
			"description": "The ID of the service.",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "serviceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "Beginning of the period (Epoch time, in seconds).",
			"default": 1608850800,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"description": "End of the period (Epoch time, in seconds).",
			"default": 1608850800,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Historical Data"
					],
					"operation": [
						"Get History"
					]
				}
			}
		},
];
