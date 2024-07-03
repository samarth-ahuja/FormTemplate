export const formJson = {
    "heading": "CRUT Bus Inspection Form",
    "page": [
        {
            "heading": "First block",
            "type": "BLOCK",
            "elements": [
                {
                    "type": "TEXT_BOX",
                    "label": "Driver Name",
                    "name": "driverName",
                    "optional": false,
                    "values": [],
                    "trigger_child": null,
                    "children": []
                },
                {
                    "type": "TEXT_BOX",
                    "label": "Bus No.",
                    "name": "vehicleNumber",
                    "optional": false,
                    "values": [],
                    "trigger_child": null,
                    "children": []
                }

            ]
        },
        {
            "heading": "Bus Condition",
            "type": "BLOCK",
            "elements": [
                {
                    "type": "TEXT_BOX",
                    "label": "Is bus clean?",
                    "name": "busClean",
                    "optional": false,
                    "values": [],
                    "trigger_child": null,
                    "children": []
                },
                {
                    "type": "RADIO_BUTTON",
                    "label": "Ae seats cleaned?",
                    "name": "seatsCleaned",
                    "optional": false,
                    "values": ["YES","NO","Don't Know"],
                    "trigger_child": null,
                    "children": []
                }
            ]
        },
        {
            "heading": "Equipment",
            "type": "BLOCK",
            "elements": [
                {
                    "type": "TEXT_BOX",
                    "label": "Which item is missing?",
                    "name": "missingItem",
                    "optional": false,
                    "values": [],
                    "trigger_child": null,
                    "children": []
                },
                {
                    "type": "TEXT_BOX",
                    "label": "Which item is damaged?",
                    "name": "damagedItem",
                    "optional": false,
                    "values": [],
                    "trigger_child": null,
                    "children": []
                }
            ]
        }
    ]
}