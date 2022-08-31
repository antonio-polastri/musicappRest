"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
const musicObject_1 = require("../musicObject");
class Events extends musicObject_1.EventAbstractClass {
    initial(json) {
        this.origin = 'predicthq';
        this.title = json.title;
        this.category = json.category;
        this.start = json.start;
        this.end = json.end;
        this.location = json.location;
        this.country = json.country;
        this.id = json.id;
        this.entities = json.entities;
        this.timezone = json.timezone;
    }
}
exports.Events = Events;
