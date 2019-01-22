
import * as record from 'N/record';
import { log } from './responseLogger';

export function copyFields(config: CloneRecordConfig): record.Record {
    let { fromRecord, toRecord= record.create({ type: fromRecord.type }), ignoreFields = [], customFieldValues = {} } = config;
    log(`target id: ${fromRecord && fromRecord.id}`);
    const fields = fromRecord.getFields().filter(f => [...(ignoreFields || []), 'id'].indexOf(f) === -1);
    log(`cloned fields: ${fields.join(', ')}`);
    customFieldValues = customFieldValues || {};
    fields.forEach(field => toRecord.setValue({ fieldId: field, value: (typeof customFieldValues[field] === 'undefined') ? fromRecord.getValue(field) : customFieldValues[field] }));
    const id = toRecord.save();
    log(`new record id : ${id}`);
    return toRecord;
}

export interface CloneRecordConfig {
    fromRecord: record.Record;
    customFieldValues?: {
        [id: string]: any;
    };
    /** if not provided a new record will be created */
    toRecord?: record.Record
    ignoreFields?: string[];
}
