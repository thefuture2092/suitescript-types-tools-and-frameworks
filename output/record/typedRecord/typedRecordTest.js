define(["require", "exports", "./generatedFactory"], function (require, exports, generatedFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { load, loadOrThrow } from './typedRecord';
    function typedRecordTest() {
        // const ref = {id: 33, type: 'commercecategory'}
        // const r = load({id: 33, type: 'commercecategory'})
        // const c = new commercecategoryRecordImpl(ref)
        var c = generatedFactory_1.loadOrThrow({ id: 33, type: 'commercecategory' });
        // c.fields.addtohead = 'hi'
        console.log(c.fields.created);
    }
    exports.typedRecordTest = typedRecordTest;
});