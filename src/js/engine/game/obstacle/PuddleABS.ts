import ObstacleABS from "./ObstacleABS.ts";
import WorldChunk from "../world/WorldChunk.ts";

export default class PuddleABS extends ObstacleABS {

    constructor(parentChunk: WorldChunk) {
        super(parentChunk);
    }
}