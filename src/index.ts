/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

WA.room.onEnterZone("interviewRoom1", () => {
    WA.room.hideLayer("InterviewRoom1Open")
})
WA.room.onLeaveZone("interviewRoom1", () => {
    WA.room.showLayer("InterviewRoom1Open")
})

WA.room.onEnterZone("interviewRoom2", () => {
    WA.room.hideLayer("InterviewRoom2Open")
})
WA.room.onLeaveZone("interviewRoom2", () => {
    WA.room.showLayer("InterviewRoom2Open")
})

WA.room.onEnterZone("interviewRoom3", () => {
    WA.room.hideLayer("InterviewRoom3Open")
})
WA.room.onLeaveZone("interviewRoom3", () => {
    WA.room.showLayer("InterviewRoom3Open")
})

WA.room.onEnterZone("interviewRoom4", () => {
    WA.room.hideLayer("InterviewRoom4Open")
})
WA.room.onLeaveZone("interviewRoom4", () => {
    WA.room.showLayer("InterviewRoom4Open")
})

WA.room.onEnterZone("interviewRoom5", () => {
    WA.room.hideLayer("InterviewRoom5Open")
})
WA.room.onLeaveZone("interviewRoom5", () => {
    WA.room.showLayer("InterviewRoom5Open")
})

WA.room.onEnterZone("interviewRoom6", () => {
    WA.room.hideLayer("InterviewRoom6Open")
})
WA.room.onLeaveZone("interviewRoom6", () => {
    WA.room.showLayer("InterviewRoom6Open")
})