// these types should be shared between the two projects (the generator and the typings)
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchFieldOperatorTextValues = ["contains", "doesNotContain", "doesNotStartWith", "empty", "hasKeywords", "is", "isNot", "notEmpty", "startsWith"];
    exports.SearchFieldOperatorNumberValues = ["between", "empty", "equalTo", "greaterThan", "greaterThanOrEqualTo", "lessThan", "lessThanOrEqualTo", "notBetween", "notEmpty", "notEqualTo", "notGreaterThan", "notGreaterThanOrEqualTo", "notLessThan", "notLessThanOrEqualTo"];
    exports.SearchFieldOperatorDateValues = ['after', 'before', 'isEmpty', 'isNotEmpty', 'notAfter', 'notBefore', 'notOnOrAfter', 'notOnOrBefore', 'notWithin', 'on', 'onOrAfter', 'onOrBefore', 'within'];
    exports.fieldTypeOperatorMetadata = [
        { fieldType: 'text', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'integer', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'checkbox', jsType: 'boolean', operators: ['equalTo', 'is'] },
        { fieldType: 'date', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'textarea', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'select', jsType: 'string', operators: ["anyOf", "noneOf"] },
        { fieldType: 'float', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'richtext', jsType: 'string', operators: exports.SearchFieldOperatorTextValues },
        { fieldType: 'image', jsType: 'string', operators: ["anyOf", "noneOf"] },
        { fieldType: 'currency', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'datetime', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'period', jsType: 'Date', operators: exports.SearchFieldOperatorDateValues },
        { fieldType: 'percent', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'currency2', jsType: 'number', operators: exports.SearchFieldOperatorNumberValues },
        { fieldType: 'multiselect', jsType: 'number', operators: ['allOf', 'anyOf', 'noneOf', 'notAllOf'] },
    ];
});