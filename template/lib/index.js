"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function percent(part, total) {
    if (total === 0)
        return 0;
    return parseInt((part / total * 100).toFixed(0));
}
exports.percent = percent;
