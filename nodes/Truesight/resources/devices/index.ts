import type { INodeProperties } from 'n8n-workflow';

export const devicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					]
				}
			},
			"options": [
				{
					"name": "Get Device Monitors",
					"value": "Get Device Monitors",
					"action": "Gets the Monitors for a specific device.",
					"description": "You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/device-monitors/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Devices",
					"value": "Get Devices",
					"action": "Gets summarized information about all monitored devices.",
					"description": "Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices"
						}
					}
				},
				{
					"name": "Get Devices Summary",
					"value": "Get Devices Summary",
					"action": "Gets overall information for all devices.",
					"description": "Lists the GlobalSummary instance for all the monitored devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices-summary"
						}
					}
				},
				{
					"name": "Get Device",
					"value": "Get Device",
					"action": "Gets detailed information about a specific device.",
					"description": "You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Device Agent",
					"value": "Get Device Agent",
					"action": "Gets detailed information about an Agent.",
					"description": "You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices/{{$parameter[\"deviceId\"]}}/agent"
						}
					}
				},
				{
					"name": "Get Agent Devices",
					"value": "Get Agent Devices",
					"action": "Gets a list of all the devices monitored by an Agent.",
					"description": "You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices/{{$parameter[\"deviceId\"]}}/agent-devices"
						}
					}
				},
				{
					"name": "Get Device Parameter History",
					"value": "Get Device Parameter History",
					"action": "Gets data history for a parameter of a specific device over a given period.",
					"description": "You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/devices/{{$parameter[\"deviceId\"]}}/parameter-history"
						}
					}
				},
				{
					"name": "Get Device Energy Usage",
					"value": "Get Device Energy Usage",
					"action": "Gets the energy usage for a specific device and a given period.",
					"description": "You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/energy-usage/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Heating Margin Coverage",
					"value": "Get Heating Margin Coverage",
					"action": "Gets the heating margin values for each monitored device, when available.",
					"description": "If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/heating-margin-devices"
						}
					}
				},
				{
					"name": "Search Devices",
					"value": "Search Devices",
					"action": "Searches devices by name, model, manufacturer or serial number.",
					"description": "Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hardware/search-devices"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /hardware/device-monitors/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Monitors"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Monitors"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
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
						"Devices"
					],
					"operation": [
						"Get Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices-summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Devices Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices/{deviceId}/agent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Agent"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Agent"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices/{deviceId}/agent-devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Agent Devices"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Agent Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/devices/{deviceId}/parameter-history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
					]
				}
			}
		},
		{
			"displayName": "Parameter Name",
			"name": "parameterName",
			"required": true,
			"description": "The name of the parameter.",
			"default": "Power Consumption",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parameterName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
					]
				}
			}
		},
		{
			"displayName": "Monitor Type",
			"name": "monitorType",
			"required": true,
			"description": "The unique name of the Monitor type.",
			"default": "_PATROL__MS_HW_REPORT",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "monitorType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
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
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
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
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
					]
				}
			}
		},
		{
			"displayName": "Monitor Sid",
			"name": "monitorSid",
			"description": "The Monitor SID (to filter the list of Monitors).",
			"default": "cisco-c240-imc",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "monitorSid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Parameter History"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/energy-usage/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Energy Usage"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "deviceId",
			"required": true,
			"description": "The ID of the device.",
			"default": 42,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Energy Usage"
					]
				}
			}
		},
		{
			"displayName": "Roll Period",
			"name": "rollPeriod",
			"description": "The period for which you wish to retrieve energy usage data.",
			"default": "ONE_DAY",
			"type": "options",
			"options": [
				{
					"name": "ONE DAY",
					"value": "ONE_DAY"
				},
				{
					"name": "ONE WEEK",
					"value": "ONE_WEEK"
				},
				{
					"name": "ONE MONTH",
					"value": "ONE_MONTH"
				},
				{
					"name": "SIX MONTHS",
					"value": "SIX_MONTHS"
				},
				{
					"name": "ONE YEAR",
					"value": "ONE_YEAR"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "rollPeriod",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Energy Usage"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"description": "Subdivision of the period for which you wish to retrieve energy usage data.",
			"default": "HOURLY",
			"type": "options",
			"options": [
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "basis",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Device Energy Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/heating-margin-devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
					]
				}
			}
		},
		{
			"displayName": "Covered",
			"name": "covered",
			"description": "If set to <em>true</em>, only gets devices whose heating margin information is available.<br>Otherwise, gets any other devices.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "covered",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
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
						"Devices"
					],
					"operation": [
						"Get Heating Margin Coverage"
					]
				}
			}
		},
		{
			"displayName": "GET /hardware/search-devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
		{
			"displayName": "Search Terms",
			"name": "searchTerms",
			"required": true,
			"description": "Space-separated search criteria.",
			"default": "EMC Unity",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "searchTerms",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Devices"
					],
					"operation": [
						"Search Devices"
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
						"Devices"
					],
					"operation": [
						"Search Devices"
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
						"Devices"
					],
					"operation": [
						"Search Devices"
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
						"Devices"
					],
					"operation": [
						"Search Devices"
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
						"Devices"
					],
					"operation": [
						"Search Devices"
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
						"Devices"
					],
					"operation": [
						"Search Devices"
					]
				}
			}
		},
];
