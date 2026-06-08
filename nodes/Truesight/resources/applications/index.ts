import type { INodeProperties } from 'n8n-workflow';

export const applicationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					]
				}
			},
			"options": [
				{
					"name": "Get Applications",
					"value": "Get Applications",
					"action": "Gets summarized information about all monitored applications.",
					"description": "Lists all the available ApplicationSummary instances.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/applications"
						}
					}
				},
				{
					"name": "Get One Application",
					"value": "Get One Application",
					"action": "Gets detailed information for a specific application.",
					"description": "You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/applications/{{$parameter[\"applicationId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hardware/applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get Applications"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page number to retrieve (first page is 0).",
			"default": "0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get Applications"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of entries per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get Applications"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"description": "The sorting order (case insensitive).",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get Applications"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "The column to sort by (case insensitive).",
			"default": "name",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get Applications"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/applications/{applicationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get One Application"
					]
				}
			}
		},
		{
			"displayName": "Application Id",
			"name": "applicationId",
			"required": true,
			"description": "The ID of the application.",
			"default": "0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications"
					],
					"operation": [
						"Get One Application"
					]
				}
			}
		},
];
