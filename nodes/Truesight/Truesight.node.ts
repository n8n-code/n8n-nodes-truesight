import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { actionsDescription } from './resources/actions';
import { applicationsDescription } from './resources/applications';
import { devicesDescription } from './resources/devices';
import { groupsDescription } from './resources/groups';
import { historicalDataDescription } from './resources/historical-data';
import { servicesDescription } from './resources/services';

export class Truesight implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'truesight',
		name: 'N8nDevTruesight',
		icon: { light: 'file:./truesight.svg', dark: 'file:./truesight.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Hardware Sentry TrueSight Presentation Server REST API',
		defaults: { name: 'truesight' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTruesightApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Actions",
					"value": "Actions",
					"description": "API operations to interact with the PATROL Agent."
				},
				{
					"name": "Applications",
					"value": "Applications",
					"description": "API operations to interact with the monitored Applications."
				},
				{
					"name": "Devices",
					"value": "Devices",
					"description": "API operations to interact with the monitored Devices."
				},
				{
					"name": "Groups",
					"value": "Groups",
					"description": "API operations to interact with the monitored Groups."
				},
				{
					"name": "Historical Data",
					"value": "Historical Data",
					"description": "API operations to get historical data."
				},
				{
					"name": "Services",
					"value": "Services",
					"description": "API operations to interact with the monitored Services."
				}
			],
			"default": ""
		},
		...actionsDescription,
		...applicationsDescription,
		...devicesDescription,
		...groupsDescription,
		...historicalDataDescription,
		...servicesDescription
		],
	};
}
