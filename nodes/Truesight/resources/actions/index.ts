import type { INodeProperties } from 'n8n-workflow';

export const actionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					]
				}
			},
			"options": [
				{
					"name": "Collect Now",
					"value": "Collect Now",
					"action": "Triggers a new collect on a specific device.",
					"description": "You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hardware/actions/{{$parameter[\"deviceId\"]}}/collect-now"
						}
					}
				},
				{
					"name": "Rediscover",
					"value": "Rediscover",
					"action": "Triggers a new discovery on a specific device.",
					"description": "You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hardware/actions/{{$parameter[\"deviceId\"]}}/rediscover"
						}
					}
				},
				{
					"name": "Reinitialize",
					"value": "Reinitialize",
					"action": "Sends a 'Reinitialize KM' command.",
					"description": "Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hardware/actions/{{$parameter[\"deviceId\"]}}/reinitialize"
						}
					}
				},
				{
					"name": "Remove",
					"value": "Remove",
					"action": "Removes a specific instance from the monitoring environment.",
					"description": "You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:\"path\":\"/MS_HW_MAIN/10025150\" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hardware/actions/{{$parameter[\"deviceId\"]}}/remove"
						}
					}
				},
				{
					"name": "Reset",
					"value": "Reset",
					"action": "Resets the Error Count parameter.",
					"description": "Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:\"path\":\"/MS_HW_MAIN/10025150\" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hardware/actions/{{$parameter[\"deviceId\"]}}/reset-error-count"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /hardware/actions/{deviceId}/collect-now",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Collect Now"
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
						"Actions"
					],
					"operation": [
						"Collect Now"
					]
				}
			}
		},
		{
			"displayName": "Monitor Class",
			"name": "monitorClass",
			"required": true,
			"description": "The Monitor Class of the device.",
			"default": "MS_HW_FAN",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "monitorClass",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Collect Now"
					]
				}
			}
		},
		{
			"displayName": "POST /hardware/actions/{deviceId}/rediscover",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Rediscover"
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
						"Actions"
					],
					"operation": [
						"Rediscover"
					]
				}
			}
		},
		{
			"displayName": "POST /hardware/actions/{deviceId}/reinitialize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
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
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Alert Actions",
			"name": "resetAlertActions",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetAlertActions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Alert After N Times",
			"name": "resetAlertAfterNTimes",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetAlertAfterNTimes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Debug Mode",
			"name": "resetDebugMode",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, deactivates the debug mode when it was manually enabled.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetDebugMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Discovery And Polling Intervals",
			"name": "resetDiscoveryAndPollingIntervals",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetDiscoveryAndPollingIntervals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Java Settings",
			"name": "resetJavaSettings",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetJavaSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Other Alert Settings",
			"name": "resetOtherAlertSettings",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetOtherAlertSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Removed Paused Object List",
			"name": "resetRemovedPausedObjectList",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetRemovedPausedObjectList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Report Settings",
			"name": "resetReportSettings",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, clears the report schedule.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetReportSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "Reset Thresholds",
			"name": "resetThresholds",
			"type": "options",
			"default": 1,
			"description": "When set to <em>1</em>, resets all thresholds.",
			"options": [
				{
					"name": "0",
					"value": 0
				},
				{
					"name": "1",
					"value": 1
				}
			],
			"routing": {
				"send": {
					"property": "resetThresholds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reinitialize"
					]
				}
			}
		},
		{
			"displayName": "POST /hardware/actions/{deviceId}/remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Remove"
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
						"Actions"
					],
					"operation": [
						"Remove"
					]
				}
			}
		},
		{
			"displayName": "Monitor Class",
			"name": "monitorClass",
			"required": true,
			"description": "The Monitor Class of the device.",
			"default": "MS_HW_FAN",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "monitorClass",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Remove"
					]
				}
			}
		},
		{
			"displayName": "Monitor Sid",
			"name": "monitorSid",
			"required": true,
			"description": "The Monitor SID of the device.",
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
						"Actions"
					],
					"operation": [
						"Remove"
					]
				}
			}
		},
		{
			"displayName": "POST /hardware/actions/{deviceId}/reset-error-count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reset"
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
						"Actions"
					],
					"operation": [
						"Reset"
					]
				}
			}
		},
		{
			"displayName": "Monitor Class",
			"name": "monitorClass",
			"required": true,
			"description": "The Monitor Class of the device.",
			"default": "MS_HW_FAN",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "monitorClass",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Actions"
					],
					"operation": [
						"Reset"
					]
				}
			}
		},
		{
			"displayName": "Monitor Sid",
			"name": "monitorSid",
			"required": true,
			"description": "The Monitor SID of the device.",
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
						"Actions"
					],
					"operation": [
						"Reset"
					]
				}
			}
		},
];
