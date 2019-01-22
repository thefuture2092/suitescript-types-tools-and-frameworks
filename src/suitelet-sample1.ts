/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 
import { EntryPoints } from 'N/types';
import { copyCategory } from './catalog/copyCategory';
import { initialize as initializeLogger, log } from './log/responseLogger';
import { removeCategory } from './catalog/removeCategory';
import { load } from 'N/record';
import { getLines } from './record/sublistUtil';
import { moveCategory } from './catalog/moveCategory';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {
    try {
        initializeLogger({ response: context.response, enabled: true })
        // const newCategory = copyCategory({
        //     categoryId: 18,
        //     newPrimaryParent: null
        // })
 
        const newCategory = moveCategory({
            categoryId: 18,
            newPrimaryParent: null
        })

        // log(`New category copied: ${newCategory.id}`)
        // removeCategory({categoryId: 32})
        // const record = load({id: 32, type: 'commercecategory'})
        // getLines({record, sublistId: 'items'}).forEach(line=>{
        //     log(`Removing items item ${record.getSublistValue({sublistId: 'items', fieldId: 'item', line: 0})}`)
        //     record.removeLine({sublistId: 'items', line: 0})
        // })
        // record.save()
        // record.removeSublistSubrecord({sublistId: 'items', line: 0, fieldId: 'item'})
        // record.removeSublistSubrecord({sublistId: 'items', line})
    } catch (error) {
        log(`General error: 

${error.type} ${error.name} ${error.code} ${error.message} 

${(error.stack||[]).map((s:string)=>`${s}`).join('\n')}
        Message: ${error.message}

${error}
 
${Object.keys(error)}
`);
    } 
}
 
  