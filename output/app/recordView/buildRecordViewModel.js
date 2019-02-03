var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../introspection/recordMetadata"], function (require, exports, recordMetadata_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function buildRecordViewModel(r, seeValues, showAllFields) {
        if (seeValues === void 0) { seeValues = false; }
        if (showAllFields === void 0) { showAllFields = false; }
        var record = recordMetadata_1.getRecordTypeMetadata({
            record: r,
            fieldPredicate: showAllFields ? function (f) { return true; } : internalFilterPredicate,
            debug: false,
            callGetSublistField: true
        });
        if (!record) {
            throw 'record not found';
        }
        record.fields = record.fields
            .filter(function (f) { return f.id; })
            .map(function (f) {
            if (!seeValues) {
                return f;
            }
            var value, text;
            try {
                //@ts-i gnore     
                value = r.getValue(f.id);
                text = r.getText(f.id);
            }
            catch (error) {
                value = "ERROR " + f.id;
            }
            return __assign({}, f, { value: value, text: text });
        })
            .sort(function (a, b) { return a.id.localeCompare(b.id); });
        record.sublists = record.sublists
            .sort(function (a, b) { return a.id.localeCompare(b.id); })
            .map(function (s) {
            s.fields = s.fields.sort(function (a, b) { return a.id.localeCompare(b.id); });
            s.lineCount = r.getLineCount({ sublistId: s.id });
            s.lines = [];
            var _loop_1 = function (line) {
                s.lines[line] = { rows: [] };
                s.fields.forEach(function (f) {
                    var text = r.getSublistText({ sublistId: s.id, fieldId: f.id, line: line });
                    var value = r.getSublistValue({ sublistId: s.id, fieldId: f.id, line: line });
                    s.lines[line].rows.push({ text: text, value: value, field: f });
                });
            };
            for (var line = 0; line < s.lineCount; line++) {
                _loop_1(line);
            }
            return s;
        });
        return record;
    }
    exports.buildRecordViewModel = buildRecordViewModel;
    function internalFilterPredicate(f) {
        return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0;
    }
});