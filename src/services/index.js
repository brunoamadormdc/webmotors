import { webmotorsService } from "../axios";

export const getMake = () => {
    return webmotorsService.getAll(`api/OnlineChallenge/Make`)
}

export const getModel = (makeID) => {
    return webmotorsService.getAll(`api/OnlineChallenge/Model?MakeID=${makeID}`)
}

export const getVersion = (modelID) => {
    return webmotorsService.getAll(`api/OnlineChallenge/Version?ModelID=${modelID}`)
}

export const getVehicles = (page) => {
    return webmotorsService.getAll(`api/OnlineChallenge/Vehicles?Page=${page}`)
}