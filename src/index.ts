/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

async function extendedFeatures() {
    try {
        await bootstrapExtra()
        console.log('Scripting API Extra loaded successfully');
    } catch (error) {
        console.error('Scripting API Extra ERROR',error);
    }
}
extendedFeatures();

WA.room.onEnterZone("interviewRoom1", () => {
    WA.room.hideLayer("door1Open")
    WA.room.hideLayer("hideDoor1Closed")
})
WA.room.onLeaveZone("interviewRoom1", () => {
    WA.room.showLayer("door1Open")
    WA.room.showLayer("hideDoor1Closed")
})

WA.room.onEnterZone("interviewRoom2", () => {
    WA.room.hideLayer("door2Open")
    WA.room.hideLayer("hideDoor2Closed")
})
WA.room.onLeaveZone("interviewRoom2", () => {
    WA.room.showLayer("door2Open")
    WA.room.showLayer("hideDoor2Closed")
})

WA.room.onEnterZone("interviewRoom3", () => {
    WA.room.hideLayer("door3Open")
    WA.room.hideLayer("hideDoor3Closed")
})
WA.room.onLeaveZone("interviewRoom3", () => {
    WA.room.showLayer("door3Open")
    WA.room.showLayer("hideDoor3Closed")
})

WA.room.onEnterZone("interviewRoom4", () => {
    WA.room.hideLayer("door4Open")
    WA.room.hideLayer("hideDoor4Closed")
})
WA.room.onLeaveZone("interviewRoom4", () => {
    WA.room.showLayer("door4Open")
    WA.room.showLayer("hideDoor4Closed")
})

WA.room.onEnterZone("interviewRoom5", () => {
    WA.room.hideLayer("door5Open")
    WA.room.hideLayer("hideDoor5Closed")
})
WA.room.onLeaveZone("interviewRoom5", () => {
    WA.room.showLayer("door5Open")
    WA.room.showLayer("hideDoor5Closed")
})

WA.room.onEnterZone("interviewRoom6", () => {
    WA.room.hideLayer("door6Open")
    WA.room.hideLayer("hideDoor6Closed")
})
WA.room.onLeaveZone("interviewRoom6", () => {
    WA.room.showLayer("door6Open")
    WA.room.showLayer("hideDoor6Closed")
})