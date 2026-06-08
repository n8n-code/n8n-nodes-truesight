import type { INodeProperties } from 'n8n-workflow';

export const groupsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					]
				}
			},
			"options": [
				{
					"name": "Get Groups",
					"value": "Get Groups",
					"action": "Gets all group summaries.",
					"description": "Lists the available GroupSummary instances.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/groups"
						}
					}
				},
				{
					"name": "Get One Group",
					"value": "Get One Group",
					"action": "Gets detailed information about a specific group.",
					"description": "You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Update Energy Cost",
					"value": "Update Energy Cost",
					"action": "Updates the values of the energy footprint parameter for a specific group.",
					"description": "You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>\"global\"</em>, then the group being updated is the GlobalSummary.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/hardware/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hardware/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get Groups"
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
						"Groups"
					],
					"operation": [
						"Get Groups"
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
						"Groups"
					],
					"operation": [
						"Get Groups"
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
						"Groups"
					],
					"operation": [
						"Get Groups"
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
						"Groups"
					],
					"operation": [
						"Get Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get One Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "The ID of the group.",
			"default": "0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Get One Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /hardware/groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Energy Cost"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "The ID of the group.",
			"default": "0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Energy Cost"
					]
				}
			}
		},
		{
			"displayName": "Co 2 Emission",
			"name": "co2Emission",
			"type": "number",
			"default": 0.3,
			"description": "Updates the CO<sub>2</sub> emission (unit: kg/kWh).",
			"routing": {
				"send": {
					"property": "co2Emission",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Energy Cost"
					]
				}
			}
		},
		{
			"displayName": "Energy Cost",
			"name": "energyCost",
			"type": "number",
			"default": 0.3,
			"description": "Updates the electricity rate (unit: $/kWh).",
			"routing": {
				"send": {
					"property": "energyCost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Energy Cost"
					]
				}
			}
		},
		{
			"displayName": "Group Name Filter",
			"name": "groupNameFilter",
			"type": "string",
			"default": "Group [0-9]+",
			"description": "Updates the regular expression used to filter the groups for which the power consumption should be reported.",
			"routing": {
				"send": {
					"property": "groupNameFilter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups"
					],
					"operation": [
						"Update Energy Cost"
					]
				}
			}
		},
];
