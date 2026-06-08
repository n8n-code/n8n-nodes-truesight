import type { INodeProperties } from 'n8n-workflow';

export const servicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					]
				}
			},
			"options": [
				{
					"name": "Get Services",
					"value": "Get Services",
					"action": "Gets summarized information about all monitored services.",
					"description": "Lists the available ServiceSummary instances.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/services"
						}
					}
				},
				{
					"name": "Get One Service",
					"value": "Get One Service",
					"action": "Gets detailed information about a specific service.",
					"description": "You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/services/{{$parameter[\"serviceId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hardware/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"Get Services"
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
						"Services"
					],
					"operation": [
						"Get Services"
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
						"Services"
					],
					"operation": [
						"Get Services"
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
						"Services"
					],
					"operation": [
						"Get Services"
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
						"Services"
					],
					"operation": [
						"Get Services"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/services/{serviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"Get One Service"
					]
				}
			}
		},
		{
			"displayName": "Service Id",
			"name": "serviceId",
			"required": true,
			"description": "The ID of the service.",
			"default": "0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Services"
					],
					"operation": [
						"Get One Service"
					]
				}
			}
		},
];
