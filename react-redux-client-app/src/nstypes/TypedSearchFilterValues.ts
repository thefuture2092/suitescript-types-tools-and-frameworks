
/** Account (account) Search Filter values so they can be loaded dynamically. */
export const accountSearchFilterValues = [
{id: 'accountingcontext', type: 'select', label: 'Accounting Context'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'cashflowratetype', type: 'select', label: 'Cash Flow Rate Type'},
  {id: 'category1099misc', type: 'select', label: '1099-MISC Category'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'generalratetype', type: 'select', label: 'General Rate Type'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'locale', type: 'select', label: 'Language'},
  {id: 'localizedlegalname', type: 'text', label: 'Localized Legal Name'},
  {id: 'localizedname', type: 'text', label: 'Localized Name'},
  {id: 'localizednumber', type: 'text', label: 'Localized Number'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'number', type: 'text', label: 'Number'},
  {id: 'parent', type: 'select', label: 'Sub-Account Of'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'select', label: 'Type'}
];

/** Accounting Book (accountingbook) Search Filter values so they can be loaded dynamically. */
export const accountingbookSearchFilterValues = [
{id: 'currency', type: 'select', label: 'Currency'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'includechildren', type: 'checkbox', label: 'Include Children'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isprimary', type: 'checkbox', label: 'Primary'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Accounting Context (accountingcontext) Search Filter values so they can be loaded dynamically. */
export const accountingcontextSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Accounting Period (accountingperiod) Search Filter values so they can be loaded dynamically. */
export const accountingperiodSearchFilterValues = [

];

/** Accounting Transaction (accountingtransaction) Search Filter values so they can be loaded dynamically. */
export const accountingtransactionSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accounttype', type: 'select', label: 'Account Type'},
  {id: 'altsalesamount', type: 'currency', label: 'Amount (Alt.Sales)'},
  {id: 'altsalesnetamount', type: 'currency', label: 'Amount (Alt.Sales Net)'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'bookspecifictransaction', type: 'checkbox', label: 'Book Specific Transaction'},
  {id: 'catchupperiod', type: 'select', label: 'Catch Up Period'},
  {id: 'creditamount', type: 'currency', label: 'Amount (Credit)'},
  {id: 'customgl', type: 'checkbox', label: 'Custom GL'},
  {id: 'customscript', type: 'select', label: 'Custom Script'},
  {id: 'debitamount', type: 'currency', label: 'Amount (Debit)'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Hold Revenue Recognition'},
  {id: 'exchangerate', type: 'currency', label: 'Exchange Rate'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'grossamount', type: 'currency', label: 'Amount (Gross)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'multisubsidiary', type: 'checkbox', label: 'Intercompany'},
  {id: 'netamount', type: 'currency', label: 'Amount (Net)'},
  {id: 'posting', type: 'checkbox', label: 'Posting'},
  {id: 'quantityrevcommitted', type: 'float', label: 'Quantity Rev. Committed'},
  {id: 'recognizedrevenue', type: 'currency', label: 'Amount (Recognized)'},
  {id: 'revcommitstatus', type: 'select', label: 'Rev. Commit. Status'},
  {id: 'revenuestatus', type: 'select', label: 'Revenue Status'},
  {id: 'revrecenddate', type: 'date', label: 'Rev. Rec. End Date'},
  {id: 'revreconrevcommitment', type: 'checkbox', label: 'Rev. Rec. On Rev. Committment'},
  {id: 'revrecstartdate', type: 'date', label: 'Rev. Rec. Start Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'tranisvsoebundle', type: 'checkbox', label: 'Transaction Is VSOE Bundle'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'vsoeallocation', type: 'currency', label: 'VSOE Allocation'}
];

/** Activity (activity) Search Filter values so they can be loaded dynamically. */
export const activitySearchFilterValues = [
{id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'date', type: 'date', label: 'Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'memo', type: 'textarea', label: 'Notes'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'type', type: 'select', label: 'Activity Type'}
];

/** Address (address) Search Filter values so they can be loaded dynamically. */
export const addressSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address Text'},
  {id: 'address1', type: 'text', label: 'Address 1'},
  {id: 'address2', type: 'text', label: 'Address 2'},
  {id: 'address3', type: 'text', label: 'Address 3'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'countrycode', type: 'text', label: 'Country Code'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'override', type: 'checkbox', label: 'Override'},
  {id: 'phone', type: 'text', label: 'Address Phone'},
  {id: 'state', type: 'text', label: 'State'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Advanced Intercompany Journal Entry (advintercompanyjournalentry) Search Filter values so they can be loaded dynamically. */
export const advintercompanyjournalentrySearchFilterValues = [

];

/** Allocation Schedule (allocationschedule) Search Filter values so they can be loaded dynamically. */
export const allocationscheduleSearchFilterValues = [

];

/** Amortization Schedule (amortizationschedule) Search Filter values so they can be loaded dynamically. */
export const amortizationscheduleSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'amorstatus', type: 'select', label: 'Status'},
  {id: 'amortizedamount', type: 'currency', label: 'Total Amortized'},
  {id: 'amortype', type: 'select', label: 'Type'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'currencyname', type: 'select', label: 'Schedule Currency'},
  {id: 'deferredamount', type: 'currency', label: 'Remaining Deferred Balance'},
  {id: 'destacct', type: 'select', label: 'Destination Account'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'initialamt', type: 'currency', label: 'Initial Amount'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isrecognized', type: 'checkbox', label: 'Is Recognized?'},
  {id: 'name', type: 'text', label: 'Schedule Name'},
  {id: 'pctcomplete', type: 'float', label: '% Complete'},
  {id: 'pctrecognition', type: 'float', label: '% Recog.'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'postperiod', type: 'select', label: 'Posting Period'},
  {id: 'residual', type: 'currency', label: 'Residual'},
  {id: 'scheddate', type: 'date', label: 'Date'},
  {id: 'schedulenumber', type: 'integer', label: 'Number'},
  {id: 'schedulenumbertext', type: 'text', label: 'Number/ID'},
  {id: 'sourceacct', type: 'select', label: 'Source Account'},
  {id: 'srctranpostperiod', type: 'select', label: 'Source Transaction Posting Period'},
  {id: 'srctrantype', type: 'select', label: 'Transaction Type'},
  {id: 'startoffset', type: 'integer', label: 'Start Offset'},
  {id: 'templatename', type: 'text', label: 'Template Name'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Amortization Template (amortizationtemplate) Search Filter values so they can be loaded dynamically. */
export const amortizationtemplateSearchFilterValues = [
{id: 'amormethod', type: 'select', label: 'Method'},
  {id: 'amorperiod', type: 'integer', label: 'Amortization Period'},
  {id: 'amorstartoffset', type: 'integer', label: 'Start Offset'},
  {id: 'amortermsrc', type: 'select', label: 'Term Source'},
  {id: 'amortype', type: 'select', label: 'Type'},
  {id: 'contraaccount', type: 'select', label: 'Contra Account'},
  {id: 'deferralaccount', type: 'select', label: 'Deferral Account'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'select', label: 'Name'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'targetaccount', type: 'select', label: 'Target Account'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Assembly Build (assemblybuild) Search Filter values so they can be loaded dynamically. */
export const assemblybuildSearchFilterValues = [

];

/** Build/Assembly Item (assemblyitem) Search Filter values so they can be loaded dynamically. */
export const assemblyitemSearchFilterValues = [

];

/** Assembly Item BOM (assemblyitembom) Search Filter values so they can be loaded dynamically. */
export const assemblyitembomSearchFilterValues = [
{id: 'assembly', type: 'select', label: 'Assembly'},
  {id: 'billofmaterials', type: 'select', label: 'Bill of Materials'},
  {id: 'default', type: 'checkbox', label: 'Default'},
  {id: 'locations', type: 'multiselect', label: 'Locations'}
];

/** Assembly Unbuild (assemblyunbuild) Search Filter values so they can be loaded dynamically. */
export const assemblyunbuildSearchFilterValues = [

];

/** Billing Account (billingaccount) Search Filter values so they can be loaded dynamically. */
export const billingaccountSearchFilterValues = [
{id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'cashsaleform', type: 'select', label: 'Cash Sale Form'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'customerdefault', type: 'checkbox', label: 'Customer Default'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'frequency', type: 'select', label: 'Frequency'},
  {id: 'idnumber', type: 'text', label: 'Account Number'},
  {id: 'idnumberexternal', type: 'text', label: 'External Id'},
  {id: 'inactive', type: 'checkbox', label: 'Inactive'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'invoiceform', type: 'select', label: 'Invoice Form'},
  {id: 'lastbillcycledate', type: 'date', label: 'Last Bill Cycle Date'},
  {id: 'lastbilldate', type: 'date', label: 'Last Bill Date'},
  {id: 'memo', type: 'text', label: 'Account Description'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextbillcycledate', type: 'date', label: 'Next Bill Cycle Date'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Billing Class (billingclass) Search Filter values so they can be loaded dynamically. */
export const billingclassSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Billing Rate Card (billingratecard) Search Filter values so they can be loaded dynamically. */
export const billingratecardSearchFilterValues = [
{id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'id', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'laborbasedprojectrevenuerule', type: 'select', label: 'Labor Based Project Revenue Rule'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'price', type: 'currency', label: 'Price'},
  {id: 'saleunit', type: 'select', label: 'Sale Unit'},
  {id: 'timebasedchargerule', type: 'select', label: 'Time-Based Charge Rule'},
  {id: 'unitstype', type: 'select', label: 'Units Type'}
];

/** Revenue Recognition Event (billingrevenueevent) Search Filter values so they can be loaded dynamically. */
export const billingrevenueeventSearchFilterValues = [
{id: 'amount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'cumulativepercentcomplete', type: 'percent', label: 'Cumulative Percent Complete'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'eventdate', type: 'date', label: 'Event Date'},
  {id: 'eventpurpose', type: 'select', label: 'Event Purpose'},
  {id: 'eventtype', type: 'select', label: 'Event Type'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'record', type: 'select', label: 'Custom Record'},
  {id: 'recordtype', type: 'select', label: 'Custom Record Type'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Billing Schedule (billingschedule) Search Filter values so they can be loaded dynamically. */
export const billingscheduleSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'frequency', type: 'select', label: 'Recurring Frequency'},
  {id: 'id', type: 'integer', label: 'Billing Schedule ID'},
  {id: 'inarrears', type: 'checkbox', label: 'In Arrears'},
  {id: 'initialamount', type: 'currency', label: 'Initial Amount'},
  {id: 'initialterms', type: 'select', label: 'Initial Payment Terms'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispublic', type: 'checkbox', label: 'Public'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'recurrencecount', type: 'integer', label: 'Recurrence Count'},
  {id: 'recurrenceterms', type: 'select', label: 'Recurrence Payment Terms'},
  {id: 'repeatevery', type: 'integer', label: 'Repeat Every'},
  {id: 'type', type: 'select', label: 'Type'}
];

/** Bin (bin) Search Filter values so they can be loaded dynamically. */
export const binSearchFilterValues = [
{id: 'binnumber', type: 'text', label: 'Bin Number'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'inactive', type: 'checkbox', label: 'Inactive'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'}
];

/** Bin Transfer (bintransfer) Search Filter values so they can be loaded dynamically. */
export const bintransferSearchFilterValues = [

];

/** Bin Worksheet (binworksheet) Search Filter values so they can be loaded dynamically. */
export const binworksheetSearchFilterValues = [

];

/** Blanket Purchase Order (blanketpurchaseorder) Search Filter values so they can be loaded dynamically. */
export const blanketpurchaseorderSearchFilterValues = [

];

/** Bill of Materials (bom) Search Filter values so they can be loaded dynamically. */
export const bomSearchFilterValues = [
{id: 'availableforallassemblies', type: 'checkbox', label: 'Available For All Assemblies'},
  {id: 'availableforalllocations', type: 'checkbox', label: 'Available For All Locations'},
  {id: 'createddate', type: 'date', label: 'Created Date'},
  {id: 'externalid', type: 'text', label: 'ExternalId'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'includechildren', type: 'checkbox', label: 'Include Children'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'restricttoassemblies', type: 'multiselect', label: 'Restrict To Assemblies'},
  {id: 'restricttolocations', type: 'multiselect', label: 'Restrict To Locations'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'},
  {id: 'usecomponentyield', type: 'checkbox', label: 'Use Component Yield'},
  {id: 'usedonassembly', type: 'checkbox', label: 'Used on Assembly'}
];

/** Bill of Materials Revision (bomrevision) Search Filter values so they can be loaded dynamically. */
export const bomrevisionSearchFilterValues = [
{id: 'billofmaterial', type: 'select', label: 'Bill of Materials'},
  {id: 'createddate', type: 'date', label: 'Created Date'},
  {id: 'effectivedate', type: 'date', label: 'Effective Start Date'},
  {id: 'externalid', type: 'text', label: 'External ID'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'obsoletedate', type: 'date', label: 'Effective End Date'}
];

/** Take Ownership (bulkownershiptransfer) Search Filter values so they can be loaded dynamically. */
export const bulkownershiptransferSearchFilterValues = [

];

/** Bundle Installation Script (bundleinstallationscript) Search Filter values so they can be loaded dynamically. */
export const bundleinstallationscriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Event (calendarevent) Search Filter values so they can be loaded dynamically. */
export const calendareventSearchFilterValues = [
{id: 'accesslevel', type: 'select', label: 'Event Access'},
  {id: 'attendee', type: 'select', label: 'Attendee'},
  {id: 'calendar', type: 'select', label: 'Calendar'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'instancestart', type: 'datetime', label: 'Instance Start'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isupcomingevent', type: 'checkbox', label: 'When'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'location', type: 'text', label: 'Location'},
  {id: 'message', type: 'textarea', label: 'Message'},
  {id: 'organizer', type: 'select', label: 'Organizer'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'response', type: 'select', label: 'Response'},
  {id: 'startdate', type: 'date', label: 'Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Campaign (campaign) Search Filter values so they can be loaded dynamically. */
export const campaignSearchFilterValues = [
{id: 'audience', type: 'select', label: 'Audience Description'},
  {id: 'basecost', type: 'currency', label: 'Cost'},
  {id: 'campaigneventtype', type: 'select', label: 'Campaign Event Type'},
  {id: 'campaignid', type: 'text', label: 'Campaign ID'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'channel', type: 'select', label: 'Channel'},
  {id: 'cost', type: 'currency', label: 'Total Cost'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'event', type: 'text', label: 'Campaign Event'},
  {id: 'expectedrevenue', type: 'currency', label: 'Expected Revenue'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'family', type: 'select', label: 'Family'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'group', type: 'select', label: 'Group'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'issalescampaign', type: 'checkbox', label: 'Is Sales Campaign'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'keyword', type: 'text', label: 'Keyword'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'manager', type: 'select', label: 'Campaign Manager'},
  {id: 'managerrole', type: 'select', label: 'Campaign Manager Role'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'offer', type: 'select', label: 'Offer'},
  {id: 'promocode', type: 'select', label: 'Promotion'},
  {id: 'recipient', type: 'select', label: 'Recipient'},
  {id: 'response', type: 'select', label: 'Response Detail'},
  {id: 'responsecategory', type: 'select', label: 'Response'},
  {id: 'responsecode', type: 'integer', label: 'Response Code'},
  {id: 'responsecomments', type: 'text', label: 'Response Comments'},
  {id: 'responsedate', type: 'date', label: 'Response Date'},
  {id: 'scheduledate', type: 'date', label: 'Schedule Date'},
  {id: 'searchengine', type: 'select', label: 'Search Engine'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'template', type: 'select', label: 'Campaign Templates'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'vertical', type: 'select', label: 'Vertical'}
];

/** Campaign Response (campaignresponse) Search Filter values so they can be loaded dynamically. */
export const campaignresponseSearchFilterValues = [

];

/** Campaign Template (campaigntemplate) Search Filter values so they can be loaded dynamically. */
export const campaigntemplateSearchFilterValues = [

];

/** Cash Refund (cashrefund) Search Filter values so they can be loaded dynamically. */
export const cashrefundSearchFilterValues = [

];

/** Cash Sale (cashsale) Search Filter values so they can be loaded dynamically. */
export const cashsaleSearchFilterValues = [

];

/** Charge (charge) Search Filter values so they can be loaded dynamically. */
export const chargeSearchFilterValues = [
{id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'billingitem', type: 'select', label: 'Billing Item'},
  {id: 'billto', type: 'select', label: 'Customer:Project'},
  {id: 'chargedate', type: 'date', label: 'Date'},
  {id: 'chargetype', type: 'select', label: 'Charge Type'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'createddate', type: 'date', label: 'Date Created'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'Charge ID'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'modifieddate', type: 'date', label: 'Date Modified'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'rate', type: 'currency', label: 'Rate'},
  {id: 'rule', type: 'select', label: 'Charge Rule'},
  {id: 'runid', type: 'text', label: 'Charge Run ID'},
  {id: 'salesorder', type: 'integer', label: 'Sales Order'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'subscriptionline', type: 'select', label: 'Subscription Line'},
  {id: 'use', type: 'select', label: 'Charge Use'}
];

/** Charge Rule (chargerule) Search Filter values so they can be loaded dynamically. */
export const chargeruleSearchFilterValues = [
{id: 'billingitem', type: 'select', label: 'Billing Item'},
  {id: 'chargedate', type: 'date', label: 'Charge Date'},
  {id: 'chargeruletype', type: 'select', label: 'Type'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'enddate', type: 'date', label: 'End By'},
  {id: 'expamtmultiplier', type: 'float', label: 'Expense Amount Multiplier'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'frequency', type: 'text', label: 'Frequency'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'select', label: 'Project'},
  {id: 'projecttask', type: 'text', label: 'Task / Milestone'},
  {id: 'projecttaskcompletiondate', type: 'date', label: 'Completion Date'},
  {id: 'projecttaskstatus', type: 'select', label: 'Status'},
  {id: 'ratemultiplier', type: 'float', label: 'Rate Multiplier'},
  {id: 'rateroundingtype', type: 'select', label: 'Rate Rounding'},
  {id: 'ratesourcetype', type: 'select', label: 'Rate Basis'},
  {id: 'ruleorder', type: 'integer', label: 'Rule Order'},
  {id: 'saleunit', type: 'select', label: 'Sale Units'},
  {id: 'stage', type: 'select', label: 'Initial Charge Stage'},
  {id: 'unitstype', type: 'select', label: 'Units Type'}
];

/** Check (check) Search Filter values so they can be loaded dynamically. */
export const checkSearchFilterValues = [

];

/** Class (classification) Search Filter values so they can be loaded dynamically. */
export const classificationSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'}
];

/** Client Script (clientscript) Search Filter values so they can be loaded dynamically. */
export const clientscriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** CMS Content (cmscontent) Search Filter values so they can be loaded dynamically. */
export const cmscontentSearchFilterValues = [

];

/** CMS Content Type (cmscontenttype) Search Filter values so they can be loaded dynamically. */
export const cmscontenttypeSearchFilterValues = [
{id: 'customrecordid', type: 'integer', label: 'Custom Record Id'},
  {id: 'customrecordscriptid', type: 'richtext', label: 'Custom Record Script Id'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'iconimagepath', type: 'richtext', label: 'Icon Image Path'},
  {id: 'id', type: 'integer', label: 'Internal ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'label', type: 'richtext', label: 'Label'},
  {id: 'name', type: 'richtext', label: 'Name'}
];

/** Commerce Category (commercecategory) Search Filter values so they can be loaded dynamically. */
export const commercecategorySearchFilterValues = [
{id: 'addtohead', type: 'text', label: 'Add to Head'},
  {id: 'catalog', type: 'select', label: 'Catalog'},
  {id: 'created', type: 'date', label: 'Creation Date/Time'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'displayinsite', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fullurl', type: 'text', label: 'Full URL'},
  {id: 'idpath', type: 'text', label: 'ID Path'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isprimaryurl', type: 'checkbox', label: 'Is Primary URL'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemcategory', type: 'select', label: 'Item Category ID'},
  {id: 'itemdescription', type: 'textarea', label: 'Item Description'},
  {id: 'lastmodified', type: 'date', label: 'Last Modified'},
  {id: 'lastmodifiedby', type: 'select', label: 'Modified By'},
  {id: 'metadescription', type: 'text', label: 'Meta Description'},
  {id: 'metakeywords', type: 'text', label: 'Meta Keywords'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nestlevel', type: 'integer', label: 'Nest Level'},
  {id: 'pageheading', type: 'text', label: 'Page Heading'},
  {id: 'pagetitle', type: 'text', label: 'Page Title'},
  {id: 'primarycategory', type: 'checkbox', label: 'Primary Category of Item'},
  {id: 'primaryparent', type: 'select', label: 'Primary Parent'},
  {id: 'sequencenumber', type: 'integer', label: 'Sequence Number'},
  {id: 'site', type: 'select', label: 'Site'},
  {id: 'sitemappriority', type: 'float', label: 'Sitemap Priority'},
  {id: 'subcatdisplayinsiteoverride', type: 'checkbox', label: 'Subcategory Display In Site Override'},
  {id: 'subcatid', type: 'select', label: 'Subcategory ID'},
  {id: 'subcatparent', type: 'select', label: 'Subcategory Parent ID'},
  {id: 'urlfragment', type: 'text', label: 'URL'},
  {id: 'version', type: 'integer', label: 'Version'}
];

/** Competitor (competitor) Search Filter values so they can be loaded dynamically. */
export const competitorSearchFilterValues = [
{id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'oppnotes', type: 'textarea', label: 'Opportunity Notes'},
  {id: 'productservices', type: 'textarea', label: 'Products/Services'},
  {id: 'strategy', type: 'textarea', label: 'Strategy'},
  {id: 'strengths', type: 'textarea', label: 'Strengths'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'weaknesses', type: 'textarea', label: 'Weaknesses'},
  {id: 'wonopportunity', type: 'checkbox', label: 'Won Opportunity'}
];

/** Consolidated Exchange Rate (consolidatedexchangerate) Search Filter values so they can be loaded dynamically. */
export const consolidatedexchangerateSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fromsubsidiary', type: 'select', label: 'From Subsidiary'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isderivedrate', type: 'checkbox', label: 'Is Derived Rate'},
  {id: 'period', type: 'select', label: 'Period'},
  {id: 'periodstartdate', type: 'date', label: 'Period Start Date'},
  {id: 'tosubsidiary', type: 'select', label: 'To Subsidiary'}
];

/** Contact (contact) Search Filter values so they can be loaded dynamically. */
export const contactSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'assistant', type: 'select', label: 'Assistant'},
  {id: 'assistantphone', type: 'phone', label: 'Assist. Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'contactrole', type: 'select', label: 'Role'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'employer', type: 'text', label: 'Employer'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isprivate', type: 'checkbox', label: 'Is Private'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Form Date'},
  {id: 'onlineformleadsource', type: 'select', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'select', label: 'Online Form History - Form Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'supervisor', type: 'select', label: 'Supervisor'},
  {id: 'supervisorphone', type: 'phone', label: 'Sup. Phone'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Contact Category (contactcategory) Search Filter values so they can be loaded dynamically. */
export const contactcategorySearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'private', type: 'checkbox', label: 'Private'},
  {id: 'sync', type: 'checkbox', label: 'Sync'}
];

/** Contact Role (contactrole) Search Filter values so they can be loaded dynamically. */
export const contactroleSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Cost Category (costcategory) Search Filter values so they can be loaded dynamically. */
export const costcategorySearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'itemcosttype', type: 'select', label: 'Cost Type'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Coupon Code (couponcode) Search Filter values so they can be loaded dynamically. */
export const couponcodeSearchFilterValues = [
{id: 'code', type: 'text', label: 'CODE'},
  {id: 'datesent', type: 'date', label: 'Date Sent'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'promotion', type: 'select', label: 'Promotion'},
  {id: 'recipient', type: 'select', label: 'Recipient'},
  {id: 'usecount', type: 'integer', label: 'Use Count'},
  {id: 'used', type: 'checkbox', label: 'Used'}
];

/** Credit Card Charge (creditcardcharge) Search Filter values so they can be loaded dynamically. */
export const creditcardchargeSearchFilterValues = [

];

/** Credit Card Refund (creditcardrefund) Search Filter values so they can be loaded dynamically. */
export const creditcardrefundSearchFilterValues = [

];

/** Credit Memo (creditmemo) Search Filter values so they can be loaded dynamically. */
export const creditmemoSearchFilterValues = [

];

/** Currency (currency) Search Filter values so they can be loaded dynamically. */
export const currencySearchFilterValues = [
{id: 'exchangerate', type: 'float', label: 'Exchange Rate'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'symbol', type: 'text', label: 'Symbol'}
];

/** Customer (customer) Search Filter values so they can be loaded dynamically. */
export const customerSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'boughtamount', type: 'currency', label: 'Total Amount Purchased'},
  {id: 'boughtdate', type: 'date', label: 'Purchase Dates'},
  {id: 'buyingreason', type: 'select', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'select', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'date', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'classbought', type: 'multiselect', label: 'Class'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'custstage', type: 'select', label: 'Parent Stage'},
  {id: 'custstatus', type: 'select', label: 'Parent Status'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'defaultorderpriority', type: 'text', label: 'Default Order Priority'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'deptbought', type: 'multiselect', label: 'Department'},
  {id: 'draccount', type: 'select', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'select', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'grouppricinglevel', type: 'select', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjob', type: 'checkbox', label: 'Is Job'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isreportedlead', type: 'checkbox', label: 'Included in Lead Reports'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'select', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'itemsbought', type: 'multiselect', label: 'Items Purchased'},
  {id: 'itemsordered', type: 'multiselect', label: 'Items Ordered'},
  {id: 'jobenddate', type: 'date', label: 'Actual End Date'},
  {id: 'jobestcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'jobestenddate', type: 'date', label: 'Projected End Date'},
  {id: 'jobestrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'jobpctcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'jobstartdate', type: 'date', label: 'Start Date'},
  {id: 'jobstatus', type: 'select', label: 'Job Status'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'locationbought', type: 'multiselect', label: 'Location'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'merchantaccount', type: 'select', label: 'Credit Card Processor'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Form Date'},
  {id: 'onlineformleadsource', type: 'select', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'select', label: 'Online Form History - Form Name'},
  {id: 'orderedamount', type: 'currency', label: 'Total Amount Ordered'},
  {id: 'ordereddate', type: 'date', label: 'Order Dates'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'parentitemsbought', type: 'multiselect', label: 'Items or Sub-Items Purchased'},
  {id: 'parentitemsordered', type: 'multiselect', label: 'Items or Sub-Items Ordered'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'select', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'pstexempt', type: 'checkbox', label: 'PST Exempt'},
  {id: 'receivablesaccount', type: 'select', label: 'Default Receivables Account'},
  {id: 'reminderdate', type: 'date', label: 'Renewal Reminder Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'salesreadiness', type: 'select', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidbought', type: 'multiselect', label: 'Subsidiaries Bought'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Customer Category (customercategory) Search Filter values so they can be loaded dynamically. */
export const customercategorySearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Customer Deposit (customerdeposit) Search Filter values so they can be loaded dynamically. */
export const customerdepositSearchFilterValues = [

];

/** Customer Message (customermessage) Search Filter values so they can be loaded dynamically. */
export const customermessageSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'preferred', type: 'checkbox', label: 'Preferred'}
];

/** Customer Payment (customerpayment) Search Filter values so they can be loaded dynamically. */
export const customerpaymentSearchFilterValues = [

];

/** Customer Payment Authorization (customerpaymentauthorization) Search Filter values so they can be loaded dynamically. */
export const customerpaymentauthorizationSearchFilterValues = [

];

/** Customer Refund (customerrefund) Search Filter values so they can be loaded dynamically. */
export const customerrefundSearchFilterValues = [

];

/** Customer Status (customerstatus) Search Filter values so they can be loaded dynamically. */
export const customerstatusSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'includeinleadreports', type: 'checkbox', label: 'Include in Lead Reports'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'probability', type: 'percent', label: 'Probability'}
];

/** Customer-Subsidiary Relationship (customersubsidiaryrelationship) Search Filter values so they can be loaded dynamically. */
export const customersubsidiaryrelationshipSearchFilterValues = [

];

/** Custom Record (customrecord) Search Filter values so they can be loaded dynamically. */
export const customrecordSearchFilterValues = [
{id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lastmodified', type: 'datetime', label: 'Last Modified'},
  {id: 'lastmodifiedby', type: 'select', label: 'Last Modified By'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Deleted Record (deletedrecord) Search Filter values so they can be loaded dynamically. */
export const deletedrecordSearchFilterValues = [
{id: 'context', type: 'select', label: 'Context'},
  {id: 'deletedby', type: 'select', label: 'Deleted by'},
  {id: 'deleteddate', type: 'datetime', label: 'Date Deleted'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'recordtype', type: 'select', label: 'Record Type'}
];

/** Department (department) Search Filter values so they can be loaded dynamically. */
export const departmentSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'}
];

/** Deposit (deposit) Search Filter values so they can be loaded dynamically. */
export const depositSearchFilterValues = [

];

/** Deposit Application (depositapplication) Search Filter values so they can be loaded dynamically. */
export const depositapplicationSearchFilterValues = [

];

/** Description Item (descriptionitem) Search Filter values so they can be loaded dynamically. */
export const descriptionitemSearchFilterValues = [

];

/** Discount Item (discountitem) Search Filter values so they can be loaded dynamically. */
export const discountitemSearchFilterValues = [

];

/** Download Item (downloaditem) Search Filter values so they can be loaded dynamically. */
export const downloaditemSearchFilterValues = [

];

/** Email Template (emailtemplate) Search Filter values so they can be loaded dynamically. */
export const emailtemplateSearchFilterValues = [

];

/** Employee (employee) Search Filter values so they can be loaded dynamically. */
export const employeeSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'aliennumber', type: 'text', label: 'Alien Number'},
  {id: 'allocation', type: 'percent', label: 'Allocation'},
  {id: 'anniversary', type: 'date', label: 'Anniversary'},
  {id: 'approvallimit', type: 'currency', label: 'Expense Approval Limit'},
  {id: 'approver', type: 'select', label: 'Expense Approver'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'authworkdate', type: 'date', label: 'Authorized to work until date'},
  {id: 'basewage', type: 'currency', label: 'Base Wage'},
  {id: 'basewagetype', type: 'select', label: 'Base Wage Type'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'birthdate', type: 'date', label: 'Birth Date'},
  {id: 'birthday', type: 'date', label: 'Birthday'},
  {id: 'ccontribution', type: 'select', label: 'Company Contribution'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'commissionplan', type: 'select', label: 'Commission Plan'},
  {id: 'compensationcurrency', type: 'select', label: 'Currency'},
  {id: 'concurrentwebservicesuser', type: 'checkbox', label: 'Concurrent Web Services User'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'deduction', type: 'select', label: 'Deduction'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'earning', type: 'select', label: 'Earning'},
  {id: 'education', type: 'select', label: 'Education'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible For Commission'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'employeestatus', type: 'select', label: 'Employee Status'},
  {id: 'employeetype', type: 'select', label: 'Type'},
  {id: 'employeetypekpi', type: 'checkbox', label: 'Include in KPI'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'ethnicity', type: 'select', label: 'Ethnicity'},
  {id: 'expenselimit', type: 'currency', label: 'Expense Limit'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'gender', type: 'checkbox', label: 'Gender'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'hiredate', type: 'date', label: 'Hire Date'},
  {id: 'i9verified', type: 'checkbox', label: 'I9 Verified'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjobresource', type: 'checkbox', label: 'Is Job Resource'},
  {id: 'istemplate', type: 'checkbox', label: 'Is Template'},
  {id: 'job', type: 'select', label: 'Job'},
  {id: 'jobdescription', type: 'text', label: 'Job Description'},
  {id: 'laborcost', type: 'currency', label: 'Labor Cost'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastpaiddate', type: 'date', label: 'Last Paid Date'},
  {id: 'lastreviewdate', type: 'date', label: 'Last Review Date'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'maritalstatus', type: 'select', label: 'Marital Status'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'nextreviewdate', type: 'date', label: 'Next Review Date'},
  {id: 'offlineaccess', type: 'checkbox', label: 'Offline Access'},
  {id: 'payfrequency', type: 'select', label: 'Pay Frequency'},
  {id: 'permchangedate', type: 'datetime', label: 'Permission Change Date'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'permissionchange', type: 'select', label: 'Permission Change'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'positiontitle', type: 'select', label: 'Position Title'},
  {id: 'primaryearningamount', type: 'currency', label: 'Primary Earning Amount'},
  {id: 'primaryearningitem', type: 'text', label: 'Primary Earning Item'},
  {id: 'primaryearningtype', type: 'text', label: 'Primary Earning Type'},
  {id: 'purchaseorderapprovallimit', type: 'currency', label: 'Purchase Approval Limit'},
  {id: 'purchaseorderapprover', type: 'select', label: 'Purchase Approver'},
  {id: 'purchaseorderlimit', type: 'currency', label: 'Purchase Limit'},
  {id: 'releasedate', type: 'date', label: 'Release Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'residentstatus', type: 'select', label: 'Resident Status'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'rolechange', type: 'select', label: 'Role Change'},
  {id: 'rolechangedate', type: 'datetime', label: 'Role Change Date'},
  {id: 'salesrep', type: 'checkbox', label: 'Is Sales Rep'},
  {id: 'salesrole', type: 'select', label: 'Sales Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'socialsecuritynumber', type: 'ssnumber', label: 'Social Security Number'},
  {id: 'startdatetimeoffcalc', type: 'date', label: 'Start Date for Time-Off Calculations'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'supervisor', type: 'select', label: 'Supervisor'},
  {id: 'supportrep', type: 'checkbox', label: 'Is Support Rep'},
  {id: 'terminationcategory', type: 'select', label: 'Termination Category'},
  {id: 'terminationdetails', type: 'text', label: 'Termination Details'},
  {id: 'terminationreason', type: 'select', label: 'Termination Reason'},
  {id: 'terminationregretted', type: 'select', label: 'Termination Regretted'},
  {id: 'timeapprover', type: 'select', label: 'Time Approver'},
  {id: 'timeoffplan', type: 'select', label: 'Time-Off Plan'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'useperquest', type: 'checkbox', label: 'Include In US Payroll'},
  {id: 'usetimedata', type: 'checkbox', label: 'Use Time Data'},
  {id: 'visaexpdate', type: 'date', label: 'Visa Expiration Date'},
  {id: 'visatype', type: 'select', label: 'Visa Type'},
  {id: 'withholding', type: 'select', label: 'Withholding'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'},
  {id: 'workplace', type: 'select', label: 'Workplace'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Entity (entity) Search Filter values so they can be loaded dynamically. */
export const entitySearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Entity Account Mapping (entityaccountmapping) Search Filter values so they can be loaded dynamically. */
export const entityaccountmappingSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityaccount', type: 'select', label: 'Entity Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Entity Group (entitygroup) Search Filter values so they can be loaded dynamically. */
export const entitygroupSearchFilterValues = [
{id: 'email', type: 'text', label: 'Email'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'groupname', type: 'text', label: 'Name'},
  {id: 'groupowner', type: 'select', label: 'Owner'},
  {id: 'grouptype', type: 'select', label: 'Type'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdynamic', type: 'checkbox', label: 'Dynamic'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ismanufacturingworkcenter', type: 'checkbox', label: 'Manufacturing Work Center'},
  {id: 'isprivate', type: 'checkbox', label: 'Private'},
  {id: 'laborresources', type: 'integer', label: 'Labor Resources'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'machineresources', type: 'integer', label: 'Machine Resources'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'}
];

/** Estimate (estimate) Search Filter values so they can be loaded dynamically. */
export const estimateSearchFilterValues = [

];

/** Expense Category (expensecategory) Search Filter values so they can be loaded dynamically. */
export const expensecategorySearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Expense Report (expensereport) Search Filter values so they can be loaded dynamically. */
export const expensereportSearchFilterValues = [

];

/** Fair Value Price (fairvalueprice) Search Filter values so they can be loaded dynamically. */
export const fairvaluepriceSearchFilterValues = [
{id: 'currency', type: 'select', label: 'Currency'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fairvalue', type: 'float', label: 'Base Fair Value'},
  {id: 'fairvalueformula', type: 'select', label: 'Fair Value Formula'},
  {id: 'fairvaluerangepolicy', type: 'select', label: 'Fair Value Range Checking Policy'},
  {id: 'highvalue', type: 'float', label: 'High Value'},
  {id: 'highvaluepercent', type: 'percent', label: 'High Value Percent'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isvsoeprice', type: 'checkbox', label: 'Is VSOE?'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemrevenuecategory', type: 'select', label: 'Item Revenue Category'},
  {id: 'lowvalue', type: 'float', label: 'Low Value'},
  {id: 'lowvaluepercent', type: 'percent', label: 'Low Value Percent'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'unitstype', type: 'select', label: 'Units Type'}
];

/** File (file) Search Filter values so they can be loaded dynamically. */
export const fileSearchFilterValues = [
{id: 'addtimestamptourl', type: 'checkbox', label: 'Generate URL Timestamp'},
  {id: 'availablewithoutlogin', type: 'checkbox', label: 'Available Without Login'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'dateviewed', type: 'datetime', label: 'Date Viewed'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'documentsize', type: 'integer', label: 'Size (KB)'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'filetype', type: 'select', label: 'File Type'},
  {id: 'folder', type: 'select', label: 'Folder'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isavailable', type: 'checkbox', label: 'Available'},
  {id: 'islink', type: 'checkbox', label: 'External URL'},
  {id: 'modified', type: 'datetime', label: 'Last Modified'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'url', type: 'text', label: 'URL'}
];

/** Fixed Amount Project Revenue Rule (fixedamountprojectrevenuerule) Search Filter values so they can be loaded dynamically. */
export const fixedamountprojectrevenueruleSearchFilterValues = [
{id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fixedamounttype', type: 'select', label: 'Recognize'},
  {id: 'fixedscheduletype', type: 'select', label: 'Recognize Based On'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'select', label: 'Project'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'select', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'}
];

/** Folder (folder) Search Filter values so they can be loaded dynamically. */
export const folderSearchFilterValues = [
{id: 'class', type: 'select', label: 'Class'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'group', type: 'select', label: 'Group'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'istoplevel', type: 'checkbox', label: 'Is Top Level'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'numfiles', type: 'integer', label: '# of Files'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'predecessor', type: 'select', label: 'Predecessor'},
  {id: 'private', type: 'checkbox', label: 'Is Private'},
  {id: 'size', type: 'integer', label: 'Size (KB)'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Fulfillment Request (fulfillmentrequest) Search Filter values so they can be loaded dynamically. */
export const fulfillmentrequestSearchFilterValues = [

];

/** Generic Resource (genericresource) Search Filter values so they can be loaded dynamically. */
export const genericresourceSearchFilterValues = [
{id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'entityid', type: 'text', label: 'Name'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'laborcost', type: 'currency', label: 'Cost'},
  {id: 'laborprice', type: 'currency', label: 'Price'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'}
];

/** Gift Certificate (giftcertificate) Search Filter values so they can be loaded dynamically. */
export const giftcertificateSearchFilterValues = [
{id: 'amountavailablebilled', type: 'currency', label: 'Amount Remaining (Billed)'},
  {id: 'amountremaining', type: 'currency', label: 'Amount Remaining'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'To (Email)'},
  {id: 'expirationdate', type: 'date', label: 'Expiration Date'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giftcertcode', type: 'text', label: 'Gift Certificate Code'},
  {id: 'incomeaccount', type: 'select', label: 'Income Account'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isactive', type: 'checkbox', label: 'Active'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'liabilityaccount', type: 'select', label: 'Liability Account'},
  {id: 'message', type: 'text', label: 'Gift Message'},
  {id: 'name', type: 'text', label: 'To (Name)'},
  {id: 'originalamount', type: 'currency', label: 'Gift Certificate Amount'},
  {id: 'purchasedate', type: 'date', label: 'Purchase Date'},
  {id: 'sender', type: 'text', label: 'From (Name)'}
];

/** Gift Certificate Item (giftcertificateitem) Search Filter values so they can be loaded dynamically. */
export const giftcertificateitemSearchFilterValues = [

];

/** Global Account Mapping (globalaccountmapping) Search Filter values so they can be loaded dynamically. */
export const globalaccountmappingSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Global Inventory Relationship (globalinventoryrelationship) Search Filter values so they can be loaded dynamically. */
export const globalinventoryrelationshipSearchFilterValues = [
{id: 'alllocationscustomerreturn', type: 'checkbox', label: 'All Customer Return Locations'},
  {id: 'alllocationsfulfillment', type: 'checkbox', label: 'All Fulfillment Locations'},
  {id: 'allowcrosssubcustomerreturn', type: 'checkbox', label: 'Allow Cross-Subsidiary Customer Return'},
  {id: 'allowcrosssubfulfillment', type: 'checkbox', label: 'Allow Cross-Subsidiary Fulfillment'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'intercompanyactivitytype', type: 'select', label: 'Intercompany Activity Type'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Is Inactive'},
  {id: 'location', type: 'select', label: 'Inventory Location'},
  {id: 'subsidiary', type: 'select', label: 'Inventory Subsidiary'}
];

/** Inbound Shipment (inboundshipment) Search Filter values so they can be loaded dynamically. */
export const inboundshipmentSearchFilterValues = [
{id: 'actualdeliverydate', type: 'date', label: 'Actual Delivery Date'},
  {id: 'actualshippingdate', type: 'date', label: 'Actual Shipping Date'},
  {id: 'billoflading', type: 'text', label: 'Bill Of Lading'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'expecteddeliverydate', type: 'date', label: 'Expected Delivery Date'},
  {id: 'expectedrate', type: 'currency', label: 'Expected Rate'},
  {id: 'expectedshippingdate', type: 'date', label: 'Expected Shipping Date'},
  {id: 'externaldocumentnumber', type: 'select', label: 'External Document Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'incoterm', type: 'select', label: 'Incoterm'},
  {id: 'internalid', type: 'select', label: 'Internal Id'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal Id Number'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'poamount', type: 'currency', label: 'Amount'},
  {id: 'porate', type: 'currency', label: 'PO Rate'},
  {id: 'purchaseorder', type: 'select', label: 'PO'},
  {id: 'quantityexpected', type: 'float', label: 'Quantity Expected'},
  {id: 'quantityreceived', type: 'float', label: 'Quantity Received'},
  {id: 'quantityremaining', type: 'float', label: 'Quantity Remaining'},
  {id: 'receivinglocation', type: 'select', label: 'Receiving Location'},
  {id: 'shipmentnumber', type: 'select', label: 'Shipment Number'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'unit', type: 'select', label: 'Unit'},
  {id: 'vendor', type: 'select', label: 'Vendor'},
  {id: 'vesselnumber', type: 'text', label: 'Vessel Number'}
];

/** Intercompany Allocation Schedule (intercompallocationschedule) Search Filter values so they can be loaded dynamically. */
export const intercompallocationscheduleSearchFilterValues = [

];

/** Intercompany Journal Entry (intercompanyjournalentry) Search Filter values so they can be loaded dynamically. */
export const intercompanyjournalentrySearchFilterValues = [

];

/** Intercompany Transfer Order (intercompanytransferorder) Search Filter values so they can be loaded dynamically. */
export const intercompanytransferorderSearchFilterValues = [

];

/** Inventory Adjustment (inventoryadjustment) Search Filter values so they can be loaded dynamically. */
export const inventoryadjustmentSearchFilterValues = [

];

/** Inventory Cost Revaluation (inventorycostrevaluation) Search Filter values so they can be loaded dynamically. */
export const inventorycostrevaluationSearchFilterValues = [

];

/** Inventory Count (inventorycount) Search Filter values so they can be loaded dynamically. */
export const inventorycountSearchFilterValues = [

];

/** Inventory Detail (inventorydetail) Search Filter values so they can be loaded dynamically. */
export const inventorydetailSearchFilterValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'inventorynumber', type: 'select', label: 'Number'},
  {id: 'quantity', type: 'float', label: 'Quantity'}
];

/** Inventory Part (inventoryitem) Search Filter values so they can be loaded dynamically. */
export const inventoryitemSearchFilterValues = [

];

/** Inventory Number (inventorynumber) Search Filter values so they can be loaded dynamically. */
export const inventorynumberSearchFilterValues = [
{id: 'expirationdate', type: 'date', label: 'Expiration Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'inventorynumber', type: 'text', label: 'Number'},
  {id: 'isonhand', type: 'checkbox', label: 'Is On Hand'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'quantityavailable', type: 'float', label: 'Availabile'},
  {id: 'quantityintransit', type: 'float', label: 'In Transit'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'},
  {id: 'quantityonorder', type: 'float', label: 'On Order'}
];

/** Inventory Number Bin (inventorynumberbin) Search Filter values so they can be loaded dynamically. */
export const inventorynumberbinSearchFilterValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'inventorynumber', type: 'text', label: 'Inventory Number'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'quantityavailable', type: 'float', label: 'Availabile'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'}
];

/** Inventory Status (inventorystatus) Search Filter values so they can be loaded dynamically. */
export const inventorystatusSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal Id'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal Id (Number)'},
  {id: 'inventoryavailable', type: 'checkbox', label: 'Make Inventory Available'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'state', type: 'select', label: 'State'}
];

/** Inventory Status Change (inventorystatuschange) Search Filter values so they can be loaded dynamically. */
export const inventorystatuschangeSearchFilterValues = [

];

/** Inventory Transfer (inventorytransfer) Search Filter values so they can be loaded dynamically. */
export const inventorytransferSearchFilterValues = [

];

/** Invoice (invoice) Search Filter values so they can be loaded dynamically. */
export const invoiceSearchFilterValues = [

];

/** Issue (issue) Search Filter values so they can be loaded dynamically. */
export const issueSearchFilterValues = [
{id: 'ageinmonths', type: 'integer', label: 'Age in Months'},
  {id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'buildbroken', type: 'select', label: 'Broken In Build'},
  {id: 'buildbrokenname', type: 'text', label: 'Broken In Build (Name)'},
  {id: 'buildfixed', type: 'select', label: 'Fixed In Build'},
  {id: 'buildfixedname', type: 'text', label: 'Fixed In Build (Name)'},
  {id: 'buildtarget', type: 'select', label: 'Target Build'},
  {id: 'buildtargetname', type: 'text', label: 'Target Build (Name)'},
  {id: 'casecount', type: 'integer', label: 'Case Count'},
  {id: 'casenumber', type: 'text', label: 'Case Number'},
  {id: 'closeddate', type: 'datetime', label: 'Date Closed'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'datereleased', type: 'date', label: 'Date Released'},
  {id: 'details', type: 'text', label: 'Details'},
  {id: 'duplicateof', type: 'select', label: 'Duplicate Of'},
  {id: 'efix', type: 'checkbox', label: 'E-Fix'},
  {id: 'employeeorteam', type: 'select', label: 'Employee/Team'},
  {id: 'eventstatus', type: 'select', label: 'Base Status'},
  {id: 'externalabstract', type: 'text', label: 'External Abstract'},
  {id: 'externaldetails', type: 'text', label: 'External Details'},
  {id: 'externalfixedin', type: 'select', label: 'Fixed In Version (External)'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'externalstatus', type: 'select', label: 'External Status'},
  {id: 'fixed', type: 'datetime', label: 'Date Fixed'},
  {id: 'fixedby', type: 'select', label: 'Fixed By'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isowner', type: 'checkbox', label: 'I Own This Issue'},
  {id: 'isreviewed', type: 'checkbox', label: 'Reviewed'},
  {id: 'isshowstopper', type: 'checkbox', label: 'Showstopper'},
  {id: 'issueabstract', type: 'text', label: 'Abstract'},
  {id: 'issuenumber', type: 'text', label: 'Number/ID'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'module', type: 'select', label: 'Module'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'originalfixedin', type: 'text', label: 'Last Version Fixed (pre-11)'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'product', type: 'select', label: 'Product'},
  {id: 'productteam', type: 'select', label: 'Product Team'},
  {id: 'reportedby', type: 'select', label: 'Reported By'},
  {id: 'reproduce', type: 'select', label: 'Reproduced'},
  {id: 'resolved', type: 'datetime', label: 'Date Resolved'},
  {id: 'resolvedby', type: 'select', label: 'Resolved By'},
  {id: 'reviewer', type: 'select', label: 'Reviewer'},
  {id: 'severity', type: 'select', label: 'Severity'},
  {id: 'source', type: 'select', label: 'Source'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'tags', type: 'multiselect', label: 'Tags'},
  {id: 'tracking', type: 'checkbox', label: 'Tracking'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'usertype', type: 'select', label: 'User Type'},
  {id: 'versionbroken', type: 'select', label: 'Broken In Version'},
  {id: 'versionfixed', type: 'select', label: 'Fixed In Version'},
  {id: 'versiontarget', type: 'select', label: 'Target Version'}
];

/** Product (issueproduct) Search Filter values so they can be loaded dynamically. */
export const issueproductSearchFilterValues = [

];

/** Version (issueproductversion) Search Filter values so they can be loaded dynamically. */
export const issueproductversionSearchFilterValues = [

];

/** Item (item) Search Filter values so they can be loaded dynamically. */
export const itemSearchFilterValues = [
{id: 'accbookrevrecforecastrule', type: 'select', label: 'Accounting Book Rev Rec Forecast Rule'},
  {id: 'account', type: 'select', label: 'Account'},
  {id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookamortization', type: 'select', label: 'Accounting Book Amortization Schedule'},
  {id: 'accountingbookcreateplanson', type: 'select', label: 'Accounting Book Create Revenue Plans On'},
  {id: 'accountingbookrevrecrule', type: 'select', label: 'Accounting Book Revenue Recognition Rule'},
  {id: 'accountingbookrevrecschedule', type: 'select', label: 'Accounting Book Rev. Rec. Schedule'},
  {id: 'alternatedemandsourceitem', type: 'select', label: 'Alternate Source Item'},
  {id: 'atpleadtime', type: 'float', label: 'ATP Lead Time'},
  {id: 'atpmethod', type: 'select', label: 'Default ATP Method'},
  {id: 'autoleadtime', type: 'checkbox', label: 'Auto-Calculate Lead Time'},
  {id: 'autopreferredstocklevel', type: 'checkbox', label: 'Auto-Calculate Preferred Stock Level'},
  {id: 'autoreorderpoint', type: 'checkbox', label: 'Auto-Calculate Reorder Point'},
  {id: 'availabletopartners', type: 'checkbox', label: 'Available to Partners'},
  {id: 'averagecost', type: 'currency', label: 'Average Cost'},
  {id: 'backwardconsumptiondays', type: 'integer', label: 'Backward Consumption Days'},
  {id: 'binnumber', type: 'text', label: 'Bin Number'},
  {id: 'binonhandavail', type: 'float', label: 'Bin On Hand Available'},
  {id: 'binonhandcount', type: 'float', label: 'Bin On Hand Count'},
  {id: 'bomquantity', type: 'float', label: 'BOM Quantity'},
  {id: 'buildentireassembly', type: 'checkbox', label: 'Build Sub-Assemblies'},
  {id: 'buildtime', type: 'float', label: 'Work Order Lead Time'},
  {id: 'buyitnowprice', type: 'currency', label: 'eBay Buy It Now Price'},
  {id: 'caption', type: 'text', label: 'Store Display Name'},
  {id: 'category', type: 'multiselect', label: 'Category'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'component', type: 'select', label: 'Component Item'},
  {id: 'componentof', type: 'select', label: 'Component Of'},
  {id: 'componentyield', type: 'float', label: 'Component Yield'},
  {id: 'contingentrevenuehandling', type: 'checkbox', label: 'Eligible For Contingent Revenue Handling'},
  {id: 'copydescription', type: 'checkbox', label: 'Copy SO Descr.'},
  {id: 'correlateditem', type: 'select', label: 'Correlated Item'},
  {id: 'correlateditemcorrelation', type: 'float', label: 'Correlated Item Correlation'},
  {id: 'correlateditemcount', type: 'integer', label: 'Correlated Item Count'},
  {id: 'correlateditemlift', type: 'float', label: 'Correlated Item Lift'},
  {id: 'correlateditempurchaserate', type: 'float', label: 'Correlated Item PurchaseRate'},
  {id: 'cost', type: 'currency', label: 'Purchase Price'},
  {id: 'costaccountingstatus', type: 'select', label: 'Cost Accounting Status'},
  {id: 'costcategory', type: 'select', label: 'Cost Category'},
  {id: 'costestimate', type: 'float', label: 'Item Defined Cost'},
  {id: 'costestimatetype', type: 'select', label: 'Cost Estimate Type'},
  {id: 'costingmethod', type: 'select', label: 'Costing Method'},
  {id: 'countryofmanufacture', type: 'select', label: 'Manufacturer Country'},
  {id: 'created', type: 'datetime', label: 'Date Created'},
  {id: 'createjob', type: 'checkbox', label: 'Create Job'},
  {id: 'createrevenueplanson', type: 'select', label: 'Create Revenue Plans On'},
  {id: 'currentstandardcost', type: 'currency', label: 'Current Standard Cost'},
  {id: 'currentstdcosteffectivedate', type: 'date', label: 'Current Standard Cost Effective Date'},
  {id: 'dateviewed', type: 'datetime', label: 'Date Viewed'},
  {id: 'daysbeforeexpiration', type: 'float', label: 'Days Before Expiration'},
  {id: 'defaultreturncost', type: 'currency', label: 'Default Return Cost'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Hold Revenue Recognition'},
  {id: 'demandmodifier', type: 'percent', label: 'Estimated Demand Change'},
  {id: 'demandsource', type: 'select', label: 'Demand Source'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'directrevenueposting', type: 'checkbox', label: 'Direct Revenue Posting'},
  {id: 'displayinebaystore', type: 'checkbox', label: 'eBay Store'},
  {id: 'displayname', type: 'text', label: 'Display Name'},
  {id: 'distributioncategory', type: 'select', label: 'Distribution Category'},
  {id: 'distributionnetwork', type: 'select', label: 'Distribution Network'},
  {id: 'dontshowprice', type: 'checkbox', label: 'Don\'t Show Price'},
  {id: 'ebayitemdescription', type: 'clobtext', label: 'eBay Description'},
  {id: 'ebayitemsubtitle', type: 'text', label: 'eBay Subtitle'},
  {id: 'ebayitemtitle', type: 'text', label: 'eBay Title'},
  {id: 'ebayrelistingoption', type: 'select', label: 'eBay Relisting Option'},
  {id: 'effectivebomcontrol', type: 'select', label: 'Effective BOM Control'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'effectiverevision', type: 'select', label: 'Effective Revision'},
  {id: 'endauctionswhenoutofstock', type: 'checkbox', label: 'eBay End Auctions When Out of Stock'},
  {id: 'excludefromsitemap', type: 'checkbox', label: 'Exclude From Sitemap'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'featureddescription', type: 'clobtext', label: 'Featured Description'},
  {id: 'feeddescription', type: 'clobtext', label: 'Feed Description'},
  {id: 'feedname', type: 'text', label: 'Feed Name'},
  {id: 'fixedlotsize', type: 'float', label: 'Fixed Lot Size'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'forwardconsumptiondays', type: 'integer', label: 'Forward Consumption Days'},
  {id: 'fraudrisk', type: 'select', label: 'Fraud Risk'},
  {id: 'froogleproductfeed', type: 'checkbox', label: 'Google Base Product Feed'},
  {id: 'fxcost', type: 'currency', label: 'Purchase Price (Foreign Currency)'},
  {id: 'generateaccruals', type: 'checkbox', label: 'Generate Accruals'},
  {id: 'giftcertauthcode', type: 'text', label: 'Gift Certificate Code'},
  {id: 'giftcertemail', type: 'text', label: 'Gift Certificate To (Email)'},
  {id: 'giftcertexpdate', type: 'date', label: 'Gift Certificate Expiration Date'},
  {id: 'giftcertfrom', type: 'text', label: 'Gift Certificate From (Name)'},
  {id: 'giftcertmsg', type: 'text', label: 'Gift Certificate Message'},
  {id: 'giftcertorigamt', type: 'text', label: 'Gift Certificate Original Amount'},
  {id: 'giftcertrecipient', type: 'text', label: 'Gift Certificate To (Name)'},
  {id: 'imageurl', type: 'text', label: 'Image URL'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'inventorylocation', type: 'select', label: 'Inventory Location'},
  {id: 'invtclassification', type: 'select', label: 'Inventory Classification'},
  {id: 'invtcountinterval', type: 'integer', label: 'Inventory Count Interval'},
  {id: 'isavailable', type: 'checkbox', label: 'Is Available?'},
  {id: 'isdropshipitem', type: 'checkbox', label: 'Drop Ship Item'},
  {id: 'isfulfillable', type: 'checkbox', label: 'Can be Fulfilled'},
  {id: 'isgcocompliant', type: 'checkbox', label: 'Google Checkout Compliant'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'islotitem', type: 'checkbox', label: 'Is Lot Numbered Item'},
  {id: 'isonline', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'ispreferredvendor', type: 'checkbox', label: 'Vendor is Preferred'},
  {id: 'isserialitem', type: 'checkbox', label: 'Is Serialized Item'},
  {id: 'isspecialorderitem', type: 'checkbox', label: 'Special Order Item'},
  {id: 'isspecialworkorderitem', type: 'checkbox', label: 'Special Work Order Item'},
  {id: 'isstorepickupallowed', type: 'checkbox', label: 'Store Pickup Allowed'},
  {id: 'issueproduct', type: 'select', label: 'Product'},
  {id: 'istaxable', type: 'checkbox', label: 'Taxable'},
  {id: 'isvsoebundle', type: 'checkbox', label: 'Is VSOE Bundle?'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'itemid', type: 'text', label: 'Name (Internal)'},
  {id: 'itemurl', type: 'text', label: 'Item URL'},
  {id: 'lastinvtcountdate', type: 'date', label: 'Last Inventory Count Date'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastpurchaseprice', type: 'currency', label: 'Last Purchase Price'},
  {id: 'lastquantityavailablechange', type: 'datetime', label: 'Last Quantity Available Change'},
  {id: 'leadtime', type: 'integer', label: 'Lead Time'},
  {id: 'listingduration', type: 'select', label: 'eBay Duration'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationallowstorepickup', type: 'checkbox', label: 'Location Allow Store Pickup'},
  {id: 'locationatpleadtime', type: 'float', label: 'Location ATP Lead Time'},
  {id: 'locationaveragecost', type: 'currency', label: 'Location Average Cost'},
  {id: 'locationbuildtime', type: 'float', label: 'Location Work Order Lead Time'},
  {id: 'locationcost', type: 'currency', label: 'Location Standard Cost'},
  {id: 'locationcostaccountingstatus', type: 'select', label: 'Location Cost Accounting Status'},
  {id: 'locationdefaultreturncost', type: 'currency', label: 'Location Default Return Cost'},
  {id: 'locationdemandsource', type: 'select', label: 'Location Demand Source'},
  {id: 'locationfixedlotsize', type: 'float', label: 'Location Fixed Lot Size'},
  {id: 'locationinvtclassification', type: 'select', label: 'Location Inventory Classification'},
  {id: 'locationinvtcountinterval', type: 'integer', label: 'Location Inventory Count Interval'},
  {id: 'locationlastinvtcountdate', type: 'date', label: 'Location Last Inventory Count Date'},
  {id: 'locationleadtime', type: 'integer', label: 'Location Lead Time'},
  {id: 'locationnextinvtcountdate', type: 'date', label: 'Location Next Inventory Count Date'},
  {id: 'locationpreferredstocklevel', type: 'float', label: 'Location Preferred Stock Level'},
  {id: 'locationqtyavailforstorepickup', type: 'float', label: 'Location Available for Store Pickup'},
  {id: 'locationquantityavailable', type: 'float', label: 'Location Available'},
  {id: 'locationquantitybackordered', type: 'float', label: 'Location Back Ordered'},
  {id: 'locationquantitycommitted', type: 'float', label: 'Location Committed'},
  {id: 'locationquantityintransit', type: 'float', label: 'Location In Transit'},
  {id: 'locationquantityonhand', type: 'float', label: 'Location On Hand'},
  {id: 'locationquantityonorder', type: 'float', label: 'Location On Order'},
  {id: 'locationreorderpoint', type: 'float', label: 'Location Reorder Point'},
  {id: 'locationsafetystocklevel', type: 'float', label: 'Location Safety Stock Level'},
  {id: 'locationstorepickupbufferstock', type: 'float', label: 'Location Store Pickup Buffer Stock'},
  {id: 'locationsupplylotsizingmethod', type: 'select', label: 'Location Supply Lot Sizing Method'},
  {id: 'locationsupplytype', type: 'select', label: 'Location Supply Type'},
  {id: 'locationtotalvalue', type: 'currency', label: 'Location Total Value'},
  {id: 'manufacturer', type: 'text', label: 'Manufacturer'},
  {id: 'manufactureraddr1', type: 'text', label: 'Manufacturer Address'},
  {id: 'manufacturercity', type: 'text', label: 'Manufacturer City'},
  {id: 'manufacturerstate', type: 'text', label: 'Manufacturer State'},
  {id: 'manufacturertariff', type: 'text', label: 'Manufacturer Tariff'},
  {id: 'manufacturertaxid', type: 'text', label: 'Manufacturer Tax Id'},
  {id: 'manufacturerzip', type: 'text', label: 'Manufacturer Zip'},
  {id: 'matchbilltoreceipt', type: 'checkbox', label: 'Match Bill To Receipt'},
  {id: 'matrix', type: 'checkbox', label: 'Matrix Item'},
  {id: 'matrixchild', type: 'checkbox', label: 'Matrix Child Item'},
  {id: 'maximumquantity', type: 'integer', label: 'Maximum Quantity'},
  {id: 'metataghtml', type: 'clobtext', label: 'Meta Tag Html'},
  {id: 'minimumquantity', type: 'integer', label: 'Minimum Quantity'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'mpn', type: 'text', label: 'MPN'},
  {id: 'multmanufactureaddr', type: 'checkbox', label: 'Multiple Manufacture Addresses'},
  {id: 'nextagcategory', type: 'text', label: 'NexTag Category'},
  {id: 'nextagproductfeed', type: 'checkbox', label: 'NexTag Product Feed'},
  {id: 'nextinvtcountdate', type: 'date', label: 'Next Inventory Count Date'},
  {id: 'numactivelistings', type: 'integer', label: 'eBay Active Listings'},
  {id: 'numberalloweddownloads', type: 'float', label: 'Number of Allowed Downloads'},
  {id: 'numcurrentlylisted', type: 'integer', label: 'eBay Quantity Currently Listed'},
  {id: 'obsoletedate', type: 'date', label: 'Obsolete Date'},
  {id: 'obsoleterevision', type: 'select', label: 'Obsolete Revision'},
  {id: 'offersupport', type: 'checkbox', label: 'Offer Support'},
  {id: 'onlinecustomerprice', type: 'currency', label: 'Online Customer Price'},
  {id: 'onspecial', type: 'checkbox', label: 'On Special'},
  {id: 'othervendor', type: 'select', label: 'Vendor'},
  {id: 'outofstockbehavior', type: 'select', label: 'Out Of Stock Behavior'},
  {id: 'overallquantitypricingtype', type: 'select', label: 'Overall Qty. Pricing Type'},
  {id: 'pagetitle', type: 'text', label: 'Page Title'},
  {id: 'parent', type: 'select', label: 'Sub-Item Of'},
  {id: 'preferencecriterion', type: 'text', label: 'Preference Criterion'},
  {id: 'preferredbin', type: 'checkbox', label: 'Preferred Bin'},
  {id: 'preferredlocation', type: 'select', label: 'Preferred Location'},
  {id: 'preferredstocklevel', type: 'float', label: 'Preferred Stock Level'},
  {id: 'preferredstockleveldays', type: 'integer', label: 'Preferred Stock Level Days'},
  {id: 'price', type: 'currency', label: 'Sales Price'},
  {id: 'pricesincludetax', type: 'checkbox', label: 'Prices Include Tax'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'primarycategory', type: 'integer', label: 'eBay Category Id'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'purchaseunit', type: 'select', label: 'Purchase Unit'},
  {id: 'quantityavailable', type: 'float', label: 'Available'},
  {id: 'quantitybackordered', type: 'float', label: 'Back Ordered'},
  {id: 'quantitycommitted', type: 'float', label: 'Committed'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'},
  {id: 'quantityonorder', type: 'float', label: 'On Order'},
  {id: 'quantitypricingschedule', type: 'select', label: 'Qty. Pricing Schedule'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'reordermultiple', type: 'integer', label: 'Reorder Multiple'},
  {id: 'reorderpoint', type: 'float', label: 'Reorder Point'},
  {id: 'reserveprice', type: 'currency', label: 'eBay Reserve Price'},
  {id: 'revrecforecastrule', type: 'select', label: 'Rev Rec Forecast Rule'},
  {id: 'revrecschedule', type: 'select', label: 'Rev. Rec. Schedule'},
  {id: 'safetystocklevel', type: 'float', label: 'Safety Stock Level'},
  {id: 'safetystockleveldays', type: 'integer', label: 'Safety Stock Level Days'},
  {id: 'salesdescription', type: 'text', label: 'Description'},
  {id: 'saleunit', type: 'select', label: 'Sale Unit'},
  {id: 'sameasprimarybookamortization', type: 'checkbox', label: 'Same as Primary Book Amortization'},
  {id: 'sameasprimarybookrevrec', type: 'checkbox', label: 'Same as Primary Book Rev. Rec.'},
  {id: 'schedulebcode', type: 'select', label: 'Schedule B Code'},
  {id: 'schedulebnumber', type: 'text', label: 'Schedule B Number'},
  {id: 'schedulebquantity', type: 'text', label: 'Schedule B Quantity'},
  {id: 'searchkeywords', type: 'text', label: 'Search Keywords'},
  {id: 'seasonaldemand', type: 'checkbox', label: 'Seasonal Demand'},
  {id: 'sellonebay', type: 'checkbox', label: 'eBay Auction'},
  {id: 'serialnumber', type: 'text', label: 'Serial/Lot Number'},
  {id: 'serialnumberlocation', type: 'select', label: 'Serial/Lot Number Location'},
  {id: 'shipindividually', type: 'checkbox', label: 'Ships Individually'},
  {id: 'shippackage', type: 'select', label: 'Shipping Package'},
  {id: 'shippingrate', type: 'currency', label: 'Shipping Rate'},
  {id: 'shoppingdotcomcategory', type: 'text', label: 'Shopping Category'},
  {id: 'shoppingproductfeed', type: 'checkbox', label: 'Shopping Product Feed'},
  {id: 'shopzillacategoryid', type: 'integer', label: 'Shopzilla Category Id'},
  {id: 'shopzillaproductfeed', type: 'checkbox', label: 'Shopzilla Product Feed'},
  {id: 'sitemappriority', type: 'float', label: 'Sitemap Priority'},
  {id: 'softdescriptor', type: 'select', label: 'Soft Descriptor'},
  {id: 'startingprice', type: 'currency', label: 'eBay Starting Price'},
  {id: 'stockdescription', type: 'text', label: 'Stock Description'},
  {id: 'stockunit', type: 'select', label: 'Stock Unit'},
  {id: 'storedescription', type: 'clobtext', label: 'Store Description'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'subtype', type: 'select', label: 'Sub Type'},
  {id: 'supplylotsizingmethod', type: 'select', label: 'Supply Lot Sizing Method'},
  {id: 'supplyreplenishmentmethod', type: 'select', label: 'Replenishment Method'},
  {id: 'supplytype', type: 'select', label: 'Supply Type'},
  {id: 'taxcode', type: 'select', label: 'Tax Code'},
  {id: 'taxschedule', type: 'select', label: 'Tax Schedule'},
  {id: 'thumbnailurl', type: 'text', label: 'Thumbnail URL'},
  {id: 'totalvalue', type: 'currency', label: 'Total Value'},
  {id: 'tracklandedcost', type: 'checkbox', label: 'Track Landed Cost'},
  {id: 'transferprice', type: 'float', label: 'Transfer Price'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unitstype', type: 'select', label: 'Units Type'},
  {id: 'upccode', type: 'text', label: 'UPC Code'},
  {id: 'urlcomponent', type: 'text', label: 'URL Component'},
  {id: 'usebins', type: 'checkbox', label: 'Use Bins'},
  {id: 'usecomponentyield', type: 'checkbox', label: 'Use Component Yield'},
  {id: 'usemarginalrates', type: 'checkbox', label: 'Use Marginal Rates'},
  {id: 'vendor', type: 'select', label: 'Preferred Vendor'},
  {id: 'vendorcode', type: 'text', label: 'Vendor Code'},
  {id: 'vendorcost', type: 'currency', label: 'Vendor Price'},
  {id: 'vendorcostentered', type: 'currency', label: 'Vendor Price (Entered)'},
  {id: 'vendorname', type: 'text', label: 'Vendor Name'},
  {id: 'vendorpricecurrency', type: 'select', label: 'Vendor Price Currency'},
  {id: 'vsoedeferral', type: 'select', label: 'Deferral'},
  {id: 'vsoedelivered', type: 'checkbox', label: 'Default as Delivered'},
  {id: 'vsoepermitdiscount', type: 'select', label: 'Permit Discount'},
  {id: 'vsoeprice', type: 'float', label: 'VSOE Price'},
  {id: 'vsoesopgroup', type: 'select', label: 'Allocation Type'},
  {id: 'website', type: 'select', label: 'Web Site'},
  {id: 'weight', type: 'float', label: 'Weight'},
  {id: 'yahooproductfeed', type: 'checkbox', label: 'Yahoo Shopping Product Feed'}
];

/** Item Account Mapping (itemaccountmapping) Search Filter values so they can be loaded dynamically. */
export const itemaccountmappingSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customdimension', type: 'select', label: 'Custom Dimension'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'destinationaccount', type: 'select', label: 'Destination Account'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'itemaccount', type: 'select', label: 'Item Account'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'sourceaccount', type: 'select', label: 'Source Account'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Item Bin Number (itembinnumber) Search Filter values so they can be loaded dynamically. */
export const itembinnumberSearchFilterValues = [
{id: 'binnumber', type: 'select', label: 'Bin Number'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'quantityavailable', type: 'float', label: 'Availabile'},
  {id: 'quantityonhand', type: 'float', label: 'On Hand'}
];

/** Item Demand Plan (itemdemandplan) Search Filter values so they can be loaded dynamically. */
export const itemdemandplanSearchFilterValues = [
{id: 'alternatesourceitem', type: 'select', label: 'Last Alternate Source Item'},
  {id: 'analysisduration', type: 'integer', label: 'Last Historical Analysis Duration'},
  {id: 'demanddate', type: 'date', label: 'Demand Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Plan Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'projectionduration', type: 'integer', label: 'Last Projection Duration'},
  {id: 'projectioninterval', type: 'select', label: 'Last Projection Interval'},
  {id: 'projectionmethod', type: 'select', label: 'Last Projection Method'},
  {id: 'projectionstartdate', type: 'date', label: 'Last Projection Start Date'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'units', type: 'select', label: 'Units'}
];

/** Item Fulfillment (itemfulfillment) Search Filter values so they can be loaded dynamically. */
export const itemfulfillmentSearchFilterValues = [

];

/** Item Group (itemgroup) Search Filter values so they can be loaded dynamically. */
export const itemgroupSearchFilterValues = [

];

/** Item Location Configuration (itemlocationconfiguration) Search Filter values so they can be loaded dynamically. */
export const itemlocationconfigurationSearchFilterValues = [
{id: 'atpleadtime', type: 'integer', label: 'ATP Lead Time'},
  {id: 'backwardconsumptiondays', type: 'integer', label: 'Backward Consumption Days'},
  {id: 'buildtime', type: 'float', label: 'Work Order Lead Time'},
  {id: 'cost', type: 'currency2', label: 'Standard Cost'},
  {id: 'costinglotsize', type: 'float', label: 'Costing Lot Size'},
  {id: 'defaultreturncost', type: 'currency2', label: 'Default Return Cost'},
  {id: 'demandsource', type: 'select', label: 'Demand Source'},
  {id: 'demandtimefence', type: 'integer', label: 'Demand Time Fence'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fixedlotsize', type: 'float', label: 'Fixed Lot Size'},
  {id: 'forwardconsumptiondays', type: 'integer', label: 'Forward Consumption Days'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'inventorycosttemplate', type: 'select', label: 'Inventory Cost Template'},
  {id: 'invtclassification', type: 'select', label: 'Inventory Classification'},
  {id: 'invtcountinterval', type: 'integer', label: 'Count Interval'},
  {id: 'isautolocassignmentallowed', type: 'checkbox', label: 'Auto Loc. Assignment Allowed'},
  {id: 'isautolocassignmentsuspended', type: 'checkbox', label: 'Auto Loc. Assignment Suspended'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'leadtime', type: 'integer', label: 'Lead Time'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'locationallowstorepickup', type: 'checkbox', label: 'Allow Store Pickup'},
  {id: 'locationstorepickupbufferstock', type: 'integer', label: 'Buffer Stock'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextinvtcountdate', type: 'date', label: 'Next Count Date'},
  {id: 'periodiclotsizedays', type: 'integer', label: 'Periods of Supply Increment'},
  {id: 'periodiclotsizetype', type: 'select', label: 'Periods of Supply Type'},
  {id: 'poreceiptcost', type: 'currency2', label: 'PO Receipt Cost'},
  {id: 'preferredstocklevel', type: 'float', label: 'Preferred Stock Level'},
  {id: 'reorderpoint', type: 'float', label: 'Reorder Point'},
  {id: 'rescheduleindays', type: 'integer', label: 'Reschedule In Days'},
  {id: 'rescheduleoutdays', type: 'integer', label: 'Reschedule Out Days'},
  {id: 'safetystocklevel', type: 'float', label: 'Safety Stock Level'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'supplylotsizingmethod', type: 'select', label: 'Lot Sizing Method'},
  {id: 'supplytimefence', type: 'integer', label: 'Planning Time Fence'},
  {id: 'supplytype', type: 'select', label: 'Supply Type'}
];

/** Item Receipt (itemreceipt) Search Filter values so they can be loaded dynamically. */
export const itemreceiptSearchFilterValues = [

];

/** Item Revision (itemrevision) Search Filter values so they can be loaded dynamically. */
export const itemrevisionSearchFilterValues = [
{id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'obsoletedate', type: 'date', label: 'Obsolete Date'}
];

/** Item Supply Plan (itemsupplyplan) Search Filter values so they can be loaded dynamically. */
export const itemsupplyplanSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Plan Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'ordercreated', type: 'checkbox', label: 'Order Created'},
  {id: 'orderdate', type: 'date', label: 'Order Date'},
  {id: 'ordertype', type: 'select', label: 'Order Type'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'receiptdate', type: 'date', label: 'Receipt Date'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'units', type: 'select', label: 'Units'}
];

/** Project (job) Search Filter values so they can be loaded dynamically. */
export const jobSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'actualtime', type: 'float', label: 'Actual Work'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'allocatepayrollexpenses', type: 'checkbox', label: 'Allocate Payroll Expenses'},
  {id: 'allowallresourcesfortasks', type: 'checkbox', label: 'Display All Resources for ProjectTask Assignment'},
  {id: 'allowexpenses', type: 'checkbox', label: 'Allow Expenses'},
  {id: 'allowtime', type: 'checkbox', label: 'Allow Time Entry'},
  {id: 'applyprojectexpensetypetoall', type: 'checkbox', label: 'Apply to all time entries'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'calculatedenddate', type: 'date', label: 'Calculated End Date'},
  {id: 'calculatedenddatebaseline', type: 'date', label: 'Calculated End Date Baseline'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'enddate', type: 'date', label: 'Actual End Date'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'estcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'estenddate', type: 'date', label: 'Projected End Date'},
  {id: 'estimatedgrossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'estimatedgrossprofitpercent', type: 'percent', label: 'Estimated Gross Profit %'},
  {id: 'estimatedlaborcost', type: 'currency', label: 'Estimated Labor Cost'},
  {id: 'estimatedlaborcostbaseline', type: 'currency', label: 'Estimated Labor Cost Baseline'},
  {id: 'estimatedlaborrevenue', type: 'currency', label: 'Estimated Labor Revenue'},
  {id: 'estimatedtime', type: 'float', label: 'Initial Time Budget'},
  {id: 'estimatedtimeoverride', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedtimeoverridebaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'estrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'includecrmtasksintotals', type: 'checkbox', label: 'Include CRM Tasks in Job Totals'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isexempttime', type: 'checkbox', label: 'Classify Time as Exempt'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isproductivetime', type: 'checkbox', label: 'Classify Time as Productive'},
  {id: 'isutilizedtime', type: 'checkbox', label: 'Classify Time as Utilized'},
  {id: 'jobbillingtype', type: 'select', label: 'Billing Type'},
  {id: 'jobitem', type: 'select', label: 'Billing Item'},
  {id: 'jobprice', type: 'currency', label: 'Job Price'},
  {id: 'jobresource', type: 'select', label: 'Job Resource'},
  {id: 'jobresourcerole', type: 'select', label: 'Job Resource Role'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastbaselinedate', type: 'date', label: 'Last Baseline Date'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'limittimetoassignees', type: 'checkbox', label: 'Limit Time and Expenses To Resources'},
  {id: 'materializetime', type: 'checkbox', label: 'Create Planned Time Entries'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'pctcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'percenttimecomplete', type: 'integer', label: 'Percent Time Complete'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'projectedenddatebaseline', type: 'date', label: 'Projected End Date Baseline'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'startdatebaseline', type: 'date', label: 'Start Date Baseline'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'timeapproval', type: 'select', label: 'Time Approval'},
  {id: 'timeremaining', type: 'float', label: 'Remaining Work'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Job Status (jobstatus) Search Filter values so they can be loaded dynamically. */
export const jobstatusSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Job Type (jobtype) Search Filter values so they can be loaded dynamically. */
export const jobtypeSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Journal Entry (journalentry) Search Filter values so they can be loaded dynamically. */
export const journalentrySearchFilterValues = [

];

/** Kit Item (kititem) Search Filter values so they can be loaded dynamically. */
export const kititemSearchFilterValues = [

];

/** Labor Based Project Revenue Rule (laborbasedprojectrevenuerule) Search Filter values so they can be loaded dynamically. */
export const laborbasedprojectrevenueruleSearchFilterValues = [
{id: 'billingratecard', type: 'select', label: 'Billing Rate Card'},
  {id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'select', label: 'Project'},
  {id: 'ratemultiplier', type: 'posfloat', label: 'Rule Multiplier'},
  {id: 'rateroundingtype', type: 'select', label: 'Time Rounding'},
  {id: 'ratesourcetype', type: 'select', label: 'Rate Source'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'select', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'}
];

/** Landed Cost (landedcost) Search Filter values so they can be loaded dynamically. */
export const landedcostSearchFilterValues = [

];

/** Lead (lead) Search Filter values so they can be loaded dynamically. */
export const leadSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'boughtamount', type: 'currency', label: 'Total Amount Purchased'},
  {id: 'boughtdate', type: 'date', label: 'Purchase Dates'},
  {id: 'buyingreason', type: 'select', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'select', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'date', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'classbought', type: 'multiselect', label: 'Class'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'custstage', type: 'select', label: 'Parent Stage'},
  {id: 'custstatus', type: 'select', label: 'Parent Status'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'deptbought', type: 'multiselect', label: 'Department'},
  {id: 'draccount', type: 'select', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'select', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'grouppricinglevel', type: 'select', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjob', type: 'checkbox', label: 'Is Job'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isreportedlead', type: 'checkbox', label: 'Included in Lead Reports'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'select', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'itemsbought', type: 'multiselect', label: 'Items Purchased'},
  {id: 'itemsordered', type: 'multiselect', label: 'Items Ordered'},
  {id: 'jobenddate', type: 'date', label: 'Actual End Date'},
  {id: 'jobestcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'jobestenddate', type: 'date', label: 'Projected End Date'},
  {id: 'jobestrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'jobpctcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'jobstartdate', type: 'date', label: 'Start Date'},
  {id: 'jobstatus', type: 'select', label: 'Job Status'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'locationbought', type: 'multiselect', label: 'Location'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'merchantaccount', type: 'select', label: 'Credit Card Processor'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Form Date'},
  {id: 'onlineformleadsource', type: 'select', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'select', label: 'Online Form History - Form Name'},
  {id: 'orderedamount', type: 'currency', label: 'Total Amount Ordered'},
  {id: 'ordereddate', type: 'date', label: 'Order Dates'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'parentitemsbought', type: 'multiselect', label: 'Items or Sub-Items Purchased'},
  {id: 'parentitemsordered', type: 'multiselect', label: 'Items or Sub-Items Ordered'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'select', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'pstexempt', type: 'checkbox', label: 'PST Exempt'},
  {id: 'receivablesaccount', type: 'select', label: 'Default Receivables Account'},
  {id: 'reminderdate', type: 'date', label: 'Renewal Reminder Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'salesreadiness', type: 'select', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidbought', type: 'multiselect', label: 'Subsidiaries Bought'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Location (location) Search Filter values so they can be loaded dynamically. */
export const locationSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'allowstorepickup', type: 'checkbox', label: 'Allow Store Pickup'},
  {id: 'autoassignmentregionsetting', type: 'select', label: 'Auto-Assigning This Location'},
  {id: 'bufferstock', type: 'integer', label: 'Buffer Stock'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'dailyshippingcapacity', type: 'integer', label: 'Daily Shipping Capacity'},
  {id: 'endtime', type: 'timeofday', label: 'End Time'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'geolocationmethod', type: 'select', label: 'Geolocation Method'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isfriday', type: 'checkbox', label: 'Friday'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ismonday', type: 'checkbox', label: 'Monday'},
  {id: 'isoffice', type: 'checkbox', label: 'Staffed Location'},
  {id: 'issaturday', type: 'checkbox', label: 'Saturday'},
  {id: 'issunday', type: 'checkbox', label: 'Sunday'},
  {id: 'isthursday', type: 'checkbox', label: 'Thursday'},
  {id: 'istuesday', type: 'checkbox', label: 'Tuesday'},
  {id: 'iswednesday', type: 'checkbox', label: 'Wednesday'},
  {id: 'locationtype', type: 'select', label: 'Location Type'},
  {id: 'makeinventoryavailable', type: 'checkbox', label: 'Make Inventory Available'},
  {id: 'makeinventoryavailablestore', type: 'checkbox', label: 'Make Inventory Available in Web Store'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextpickupcutofftime', type: 'datetime', label: 'Next Pickup Cut-Off Time'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'samedaypickupcutofftime', type: 'timeofday', label: 'Same Day Pickup Cut-Off Time'},
  {id: 'starttime', type: 'timeofday', label: 'Start Time'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'storepickupbufferstock', type: 'float', label: 'Store Pickup Buffer Stock'},
  {id: 'subsidiary', type: 'multiselect', label: 'Subsidiary'},
  {id: 'totalshippingcapacity', type: 'integer', label: 'Total Shipping Capacity'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'usesbins', type: 'checkbox', label: 'Uses Bins'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Lot Numbered Build/Assembly Item (lotnumberedassemblyitem) Search Filter values so they can be loaded dynamically. */
export const lotnumberedassemblyitemSearchFilterValues = [

];

/** Lot Numbered Inventory Item (lotnumberedinventoryitem) Search Filter values so they can be loaded dynamically. */
export const lotnumberedinventoryitemSearchFilterValues = [

];

/** Manufacturing Cost Template (manufacturingcosttemplate) Search Filter values so they can be loaded dynamically. */
export const manufacturingcosttemplateSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Manufacturing Operation Task (manufacturingoperationtask) Search Filter values so they can be loaded dynamically. */
export const manufacturingoperationtaskSearchFilterValues = [
{id: 'actualruntime', type: 'float', label: 'Actual Run Time'},
  {id: 'actualsetuptime', type: 'float', label: 'Actual Setup Time'},
  {id: 'completedquantity', type: 'float', label: 'Completed Quantity'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'inputquantity', type: 'float', label: 'Input Quantity'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'laborresources', type: 'integer', label: 'Labor Resources'},
  {id: 'lagamount', type: 'float', label: 'Lag Amount'},
  {id: 'lagtype', type: 'select', label: 'Lag Type'},
  {id: 'lagunits', type: 'text', label: 'Lag Units'},
  {id: 'machineresources', type: 'integer', label: 'Machine Resources'},
  {id: 'manufacturingcosttemplate', type: 'select', label: 'Manufacturing Cost Template'},
  {id: 'manufacturingworkcenter', type: 'select', label: 'Manufacturing Work Center'},
  {id: 'name', type: 'text', label: 'Operation Name'},
  {id: 'order', type: 'float', label: 'Order'},
  {id: 'predecessor', type: 'select', label: 'Predecessor'},
  {id: 'remainingquantity', type: 'float', label: 'Remaining Quantity'},
  {id: 'runrate', type: 'float', label: 'Run Rate (Min/Unit)'},
  {id: 'runtime', type: 'float', label: 'Run Time (Min)'},
  {id: 'sequence', type: 'integer', label: 'Operation Sequence'},
  {id: 'setuptime', type: 'float', label: 'Setup Time (Min)'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'workorder', type: 'select', label: 'Work Order'}
];

/** Manufacturing Routing (manufacturingrouting) Search Filter values so they can be loaded dynamically. */
export const manufacturingroutingSearchFilterValues = [
{id: 'autocalculatelag', type: 'checkbox', label: 'Auto-calculate Lag'},
  {id: 'billofmaterials', type: 'select', label: 'Bill of Materials'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefault', type: 'checkbox', label: 'Default'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lagamount', type: 'float', label: 'Lag Amount'},
  {id: 'lagtype', type: 'select', label: 'Lag Type'},
  {id: 'lagunits', type: 'text', label: 'Lag Units'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'manufacturingcosttemplate', type: 'select', label: 'Manufacturing Cost Template'},
  {id: 'manufacturingworkcenter', type: 'select', label: 'Manufacturing Work Center'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'operationname', type: 'text', label: 'Operation Name'},
  {id: 'operationyield', type: 'percent', label: 'Operation Yield'},
  {id: 'runrate', type: 'float', label: 'Run Rate'},
  {id: 'sequence', type: 'integer', label: 'Operation Sequence'},
  {id: 'setuptime', type: 'float', label: 'Setup Time'}
];

/** Map/Reduce Script (mapreducescript) Search Filter values so they can be loaded dynamically. */
export const mapreducescriptSearchFilterValues = [
{id: 'apiversion', type: 'select', label: 'API Version'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'}
];

/** Markup Item (markupitem) Search Filter values so they can be loaded dynamically. */
export const markupitemSearchFilterValues = [

];

/** Massupdate Script (massupdatescript) Search Filter values so they can be loaded dynamically. */
export const massupdatescriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Merchandise Hierarchy Level (merchandisehierarchylevel) Search Filter values so they can be loaded dynamically. */
export const merchandisehierarchylevelSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'rank', type: 'integer', label: 'Rank'}
];

/** Merchandise Hierarchy Node (merchandisehierarchynode) Search Filter values so they can be loaded dynamically. */
export const merchandisehierarchynodeSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'hierarchylevel', type: 'select', label: 'Hierarchy Level'},
  {id: 'hierarchyversion', type: 'select', label: 'Hierarchy Version'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parentnode', type: 'select', label: 'Hierarchy Parent Node'}
];

/** Merchandise Hierarchy Version (merchandisehierarchyversion) Search Filter values so they can be loaded dynamically. */
export const merchandisehierarchyversionSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'hierarchylevel', type: 'select', label: 'Hierarchy Level'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Message (message) Search Filter values so they can be loaded dynamically. */
export const messageSearchFilterValues = [
{id: 'author', type: 'select', label: 'Author'},
  {id: 'authoremail', type: 'email', label: 'From Email'},
  {id: 'bcc', type: 'email', label: 'Bcc'},
  {id: 'cc', type: 'email', label: 'Cc'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'hasattachment', type: 'checkbox', label: 'Has Attachment'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'internalonly', type: 'checkbox', label: 'Internal Only'},
  {id: 'isincoming', type: 'checkbox', label: 'Is Incoming'},
  {id: 'message', type: 'clobtext', label: 'Message'},
  {id: 'messagedate', type: 'datetime', label: 'Date'},
  {id: 'messagetype', type: 'select', label: 'Type'},
  {id: 'recipient', type: 'select', label: 'Recipient'},
  {id: 'recipientemail', type: 'email', label: 'Recipient Email'},
  {id: 'subject', type: 'text', label: 'Subject'}
];

/** Manufacturing Planned Time (mfgplannedtime) Search Filter values so they can be loaded dynamically. */
export const mfgplannedtimeSearchFilterValues = [
{id: 'date', type: 'date', label: 'Date'},
  {id: 'duration', type: 'float', label: 'Duration'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'manufacturingworkcenter', type: 'select', label: 'Manufacturing Work Center'},
  {id: 'workorder', type: 'select', label: 'Work Order'}
];

/** MSE Subsidiary (msesubsidiary) Search Filter values so they can be loaded dynamically. */
export const msesubsidiarySearchFilterValues = [
{id: 'account', type: 'select', label: 'Default Payable Account for Expense Reports'},
  {id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookcurrency', type: 'select', label: 'Accounting Book Currency'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'effectivefrom', type: 'date', label: 'Effective From'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'fiscalcalendar', type: 'select', label: 'Fiscal Calendar'},
  {id: 'glimpactlocking', type: 'checkbox', label: 'Gl Impact Locking'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'iselimination', type: 'checkbox', label: 'Elimination'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'mossnexus', type: 'select', label: 'MOSS Nexus'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'parent', type: 'integer', label: 'Parent Subsidiary'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'primary', type: 'checkbox', label: 'Primary (Y/N)'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'serviceitemforforecastreports', type: 'select', label: 'Service Item for Forecast Reports'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Name (select)'},
  {id: 'taxengine', type: 'select', label: 'Tax Engine'},
  {id: 'taxfiscalcalendar', type: 'select', label: 'Tax Fiscal Calendar'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'taxregistrationnumber', type: 'text', label: 'Tax Reg. Number'},
  {id: 'traninternalprefix', type: 'text', label: 'Internal Transaction Prefix'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'url', type: 'url', label: 'Web Site'},
  {id: 'validuntil', type: 'date', label: 'Valid Until'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Nexus (nexus) Search Filter values so they can be loaded dynamically. */
export const nexusSearchFilterValues = [
{id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'parentnexus', type: 'select', label: 'Parent Nexus'},
  {id: 'state', type: 'select', label: 'State'},
  {id: 'taxagency', type: 'select', label: 'Tax Agency'}
];

/** Non-Inventory Part (noninventoryitem) Search Filter values so they can be loaded dynamically. */
export const noninventoryitemSearchFilterValues = [

];

/** Note (note) Search Filter values so they can be loaded dynamically. */
export const noteSearchFilterValues = [
{id: 'author', type: 'select', label: 'Author'},
  {id: 'direction', type: 'checkbox', label: 'Direction'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'note', type: 'text', label: 'Memo'},
  {id: 'notedate', type: 'datetime', label: 'Date'},
  {id: 'notetype', type: 'select', label: 'Type'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Note Type (notetype) Search Filter values so they can be loaded dynamically. */
export const notetypeSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Opportunity (opportunity) Search Filter values so they can be loaded dynamically. */
export const opportunitySearchFilterValues = [
{id: 'amount', type: 'currency', label: 'Item Amount'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'buyingreason', type: 'select', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'select', label: 'Buying Time Frame'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'closedate', type: 'date', label: 'Actual Close'},
  {id: 'competitor', type: 'select', label: 'Competitor'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'custtype', type: 'select', label: 'Customer Category'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysopen', type: 'integer', label: 'Days Open'},
  {id: 'daystoclose', type: 'integer', label: 'Days To Close'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'entity', type: 'select', label: 'Prospect/Customer'},
  {id: 'entitystatus', type: 'select', label: 'Opportunity Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'expectedclosedate', type: 'date', label: 'Expected Close Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'forecasttype', type: 'select', label: 'Forecast Type'},
  {id: 'foreignprojectedamount', type: 'currency', label: 'Projected Total (Foreign Currency)'},
  {id: 'foreignrangehigh', type: 'currency', label: 'Range - High (Foreign Currency)'},
  {id: 'foreignrangelow', type: 'currency', label: 'Range - Low (Foreign Currency)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxtrancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction) (Foreign Currency)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'item', type: 'multiselect', label: 'Item'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'postingperiod', type: 'period', label: 'Period'},
  {id: 'probability', type: 'integer', label: 'Probability'},
  {id: 'projaltsalesamt', type: 'currency', label: 'Projected Alt.Sales Amount'},
  {id: 'projectedtotal', type: 'currency', label: 'Projected Amount'},
  {id: 'rangehigh', type: 'currency', label: 'Range - High'},
  {id: 'rangehighalt', type: 'currency', label: 'Alt.Sales Range - High'},
  {id: 'rangelow', type: 'currency', label: 'Range - Low'},
  {id: 'rangelowalt', type: 'currency', label: 'Alt.Sales Range - Low'},
  {id: 'salesreadiness', type: 'select', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'status', type: 'select', label: 'Document Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxperiod', type: 'period', label: 'Tax Period'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'trancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction)'},
  {id: 'trandate', type: 'date', label: 'Date'},
  {id: 'tranestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction)'},
  {id: 'tranestgrossprofitpct', type: 'percent', label: 'Est. Gross Profit Percent (Transaction)'},
  {id: 'tranfxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction) (Foreign Currency)'},
  {id: 'tranid', type: 'text', label: 'Number/ID'},
  {id: 'winlossreason', type: 'select', label: 'Win/Loss Reason'},
  {id: 'wonby', type: 'select', label: 'Won By'}
];

/** Order Schedule (orderschedule) Search Filter values so they can be loaded dynamically. */
export const orderscheduleSearchFilterValues = [

];

/** Originating Lead (originatinglead) Search Filter values so they can be loaded dynamically. */
export const originatingleadSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'billaddress', type: 'textarea', label: 'Billing Address'},
  {id: 'billingratecard', type: 'select', label: 'Billing Rate Card'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billingtransactionform', type: 'select', label: 'Billing Transaction Form'},
  {id: 'billingtransactiontype', type: 'select', label: 'Billing Transaction Type'},
  {id: 'boughtamount', type: 'currency', label: 'Total Amount Purchased'},
  {id: 'boughtdate', type: 'date', label: 'Purchase Dates'},
  {id: 'bounced', type: 'checkbox', label: 'Hard Bounced'},
  {id: 'buyingreason', type: 'select', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'select', label: 'Buying Time Frame'},
  {id: 'campaignevent', type: 'select', label: 'Campaign Event'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'date', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'checkbox', label: 'Credit Card Number'},
  {id: 'ccstate', type: 'select', label: 'Credit Card State'},
  {id: 'ccstatefrom', type: 'date', label: 'Credit Card State From'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Primary Currency'},
  {id: 'custstage', type: 'select', label: 'Parent Stage'},
  {id: 'custstatus', type: 'select', label: 'Parent Status'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'defaultorderpriority', type: 'float', label: 'Default Order Priority'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'draccount', type: 'select', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'fxaccount', type: 'select', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'grouppricinglevel', type: 'select', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isitemcorrelated', type: 'checkbox', label: 'Is Upsell Item Correlated'},
  {id: 'isjob', type: 'checkbox', label: 'Is Job'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isreportedlead', type: 'checkbox', label: 'Included in Lead Reports'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itemcorrelation', type: 'percent', label: 'Upsell Item Correlation'},
  {id: 'itempricinglevel', type: 'select', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'itemsbought', type: 'multiselect', label: 'Items Purchased'},
  {id: 'itemsordered', type: 'multiselect', label: 'Items Ordered'},
  {id: 'jobenddate', type: 'date', label: 'Actual End Date'},
  {id: 'jobestcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'jobestenddate', type: 'date', label: 'Projected End Date'},
  {id: 'jobestrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'jobpctcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'jobstartdate', type: 'date', label: 'Start Date'},
  {id: 'jobstatus', type: 'select', label: 'Job Status'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'merchantaccount', type: 'select', label: 'Credit Card Processor'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'negativenumberformat', type: 'select', label: 'Negative Number Format'},
  {id: 'numberformat', type: 'select', label: 'Number Format'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformcampaignevent', type: 'select', label: 'Online Form History - Campaign Event'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Form Date'},
  {id: 'onlineformleadsource', type: 'select', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'select', label: 'Online Form History - Form Name'},
  {id: 'orderedamount', type: 'currency', label: 'Total Amount Ordered'},
  {id: 'ordereddate', type: 'date', label: 'Order Dates'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'parentitemsbought', type: 'multiselect', label: 'Items or Sub-Items Purchased'},
  {id: 'parentitemsordered', type: 'multiselect', label: 'Items or Sub-Items Ordered'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'select', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'pstexempt', type: 'checkbox', label: 'PST Exempt'},
  {id: 'receivablesaccount', type: 'select', label: 'Default Receivables Account'},
  {id: 'reminderdate', type: 'date', label: 'Renewal Reminder Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'salesreadiness', type: 'select', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipaddress', type: 'textarea', label: 'Shipping Address'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province (Deprecated)'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'date', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Primary Type (Deprecated)'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Other Charge Item (otherchargeitem) Search Filter values so they can be loaded dynamically. */
export const otherchargeitemSearchFilterValues = [

];

/** Other Name (othername) Search Filter values so they can be loaded dynamically. */
export const othernameSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Other Name Category (othernamecategory) Search Filter values so they can be loaded dynamically. */
export const othernamecategorySearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Partner (partner) Search Filter values so they can be loaded dynamically. */
export const partnerSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'assigntasks', type: 'checkbox', label: 'Assign Tasks'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'commissionplan', type: 'select', label: 'Commission Plan'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible For Commission'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'partnercode', type: 'text', label: 'Code'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'promocode', type: 'select', label: 'Promotion'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Partner Category (partnercategory) Search Filter values so they can be loaded dynamically. */
export const partnercategorySearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'}
];

/** Paycheck (paycheck) Search Filter values so they can be loaded dynamically. */
export const paycheckSearchFilterValues = [

];

/** Paycheck Journal (paycheckjournal) Search Filter values so they can be loaded dynamically. */
export const paycheckjournalSearchFilterValues = [

];

/** Payment Item (paymentitem) Search Filter values so they can be loaded dynamically. */
export const paymentitemSearchFilterValues = [

];

/** Payment Method (paymentmethod) Search Filter values so they can be loaded dynamically. */
export const paymentmethodSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'creditcard', type: 'checkbox', label: 'Credit Card'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdebitcard', type: 'checkbox', label: 'Is Debit Card'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Payroll Batch (payrollbatch) Search Filter values so they can be loaded dynamically. */
export const payrollbatchSearchFilterValues = [
{id: 'batchnumber', type: 'integer', label: 'Batch Number'},
  {id: 'checkdate', type: 'date', label: 'Check Date'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'payfrequency', type: 'text', label: 'Pay Frequency'},
  {id: 'periodending', type: 'date', label: 'Period Ending Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'text', label: 'Type'}
];

/** Payroll Item (payrollitem) Search Filter values so they can be loaded dynamically. */
export const payrollitemSearchFilterValues = [
{id: 'expenseaccount', type: 'select', label: 'Expense Account'},
  {id: 'itemtypenohierarchy', type: 'select', label: 'Item Type (no hierarchy)'},
  {id: 'liabilityaccount', type: 'select', label: 'Liability Account'},
  {id: 'masterpaycode', type: 'select', label: 'Master Pay Code'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'vendor', type: 'select', label: 'Vendor'}
];

/** Percent Complete Project Revenue Rule (pctcompleteprojectrevenuerule) Search Filter values so they can be loaded dynamically. */
export const pctcompleteprojectrevenueruleSearchFilterValues = [
{id: 'chargerule', type: 'select', label: 'Charge Rule'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'project', type: 'select', label: 'Project'},
  {id: 'revenuereconciled', type: 'checkbox', label: 'Revenue Reconciled'},
  {id: 'ruletype', type: 'select', label: 'Rule Type'},
  {id: 'serviceitem', type: 'select', label: 'Service Item'}
];

/** Period End Journal (periodendjournal) Search Filter values so they can be loaded dynamically. */
export const periodendjournalSearchFilterValues = [

];

/** Phone Call (phonecall) Search Filter values so they can be loaded dynamically. */
export const phonecallSearchFilterValues = [
{id: 'assigned', type: 'select', label: 'Organizer'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createdby', type: 'select', label: 'Created By'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isprivate', type: 'checkbox', label: 'Is Private'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified Date'},
  {id: 'owner', type: 'checkbox', label: 'Owner'},
  {id: 'phone', type: 'phone', label: 'Phone Number'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'startdate', type: 'date', label: 'Phone Call Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Subject'}
];

/** Portlet (portlet) Search Filter values so they can be loaded dynamically. */
export const portletSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Price Book (pricebook) Search Filter values so they can be loaded dynamically. */
export const pricebookSearchFilterValues = [

];

/** Price Level (pricelevel) Search Filter values so they can be loaded dynamically. */
export const pricelevelSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'}
];

/** Price Plan (priceplan) Search Filter values so they can be loaded dynamically. */
export const priceplanSearchFilterValues = [

];

/** Pricing (pricing) Search Filter values so they can be loaded dynamically. */
export const pricingSearchFilterValues = [
{id: 'assignedpricelevel', type: 'checkbox', label: 'Assigned Price Level'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'maximumquantity', type: 'float', label: 'Maximum Quantity'},
  {id: 'minimumquantity', type: 'float', label: 'Minimum Quantity'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'rate', type: 'currency', label: 'Rate'}
];

/** Pricing Group (pricinggroup) Search Filter values so they can be loaded dynamically. */
export const pricinggroupSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Project Expense Type (projectexpensetype) Search Filter values so they can be loaded dynamically. */
export const projectexpensetypeSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Project Task (projecttask) Search Filter values so they can be loaded dynamically. */
export const projecttaskSearchFilterValues = [
{id: 'actualwork', type: 'float', label: 'Actual Work'},
  {id: 'assignee', type: 'select', label: 'Assignee'},
  {id: 'company', type: 'select', label: 'Project/Project Template'},
  {id: 'constrainttype', type: 'select', label: 'Constraint Type'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'cost', type: 'currency', label: 'Estimated Cost'},
  {id: 'costbase', type: 'currency', label: 'Estimated Cost (Base Currency)'},
  {id: 'costbasebaseline', type: 'currency', label: 'Estimated Cost Baseline (Base Currency)'},
  {id: 'costbaseline', type: 'currency', label: 'Estimated Cost Baseline'},
  {id: 'costbasevariance', type: 'currency', label: 'Estimated Cost Variance (Base Currency)'},
  {id: 'costvariance', type: 'currency', label: 'Estimated Cost Variance'},
  {id: 'costvariancepercent', type: 'float', label: 'Estimated Cost Variance Percent'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'enddatebaseline', type: 'date', label: 'End Date Baseline'},
  {id: 'enddatevariance', type: 'float', label: 'End Date Variance'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedworkbaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'estimatedworkvariance', type: 'float', label: 'Estimated Work Variance'},
  {id: 'estimatedworkvariancepercent', type: 'float', label: 'Estimated Work Variance Percent'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'finishbydate', type: 'date', label: 'Finish No Later Than Date'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'ismilestone', type: 'checkbox', label: 'Milestone'},
  {id: 'issummarytask', type: 'checkbox', label: 'Is Job Summary Task'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'nonbillabletask', type: 'checkbox', label: 'Non-billable'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'parent', type: 'select', label: 'Parent Task'},
  {id: 'percentworkcomplete', type: 'percent', label: 'Percent Work Complete'},
  {id: 'predecessor', type: 'select', label: 'Predecessor'},
  {id: 'predecessors', type: 'text', label: 'Predecessors'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'remainingwork', type: 'float', label: 'Remaining Work'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'startdatebaseline', type: 'date', label: 'Start Date Baseline'},
  {id: 'startdatevariance', type: 'float', label: 'Start Date Variance'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'successor', type: 'select', label: 'Successor'},
  {id: 'title', type: 'text', label: 'Task Name'}
];

/** Project Task Assignment (projecttaskassignment) Search Filter values so they can be loaded dynamically. */
export const projecttaskassignmentSearchFilterValues = [
{id: 'actualwork', type: 'float', label: 'Actual Work'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'cost', type: 'currency', label: 'Cost'},
  {id: 'costbase', type: 'currency', label: 'Cost (Base Currency)'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedwork', type: 'float', label: 'Estimated Work'},
  {id: 'estimatedworkbaseline', type: 'float', label: 'Estimated Work Baseline'},
  {id: 'grossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'grossprofitbase', type: 'currency', label: 'Estimated Gross Profit (Base Currency)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'price', type: 'currency', label: 'Estimated Revenue'},
  {id: 'pricebase', type: 'currency', label: 'Estimated Revenue (Base Currency)'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'resourcename', type: 'text', label: 'Resource Name'},
  {id: 'serviceitem', type: 'text', label: 'Service Item'},
  {id: 'serviceitemdesc', type: 'text', label: 'Description'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'unitcost', type: 'currency', label: 'Unit Cost'},
  {id: 'unitcostbase', type: 'currency', label: 'Unit Cost (Base Currency)'},
  {id: 'unitprice', type: 'currency', label: 'Unit Price'},
  {id: 'unitpricebase', type: 'currency', label: 'Unit Price (Base Currency)'},
  {id: 'units', type: 'percent', label: 'Units (%)'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'}
];

/** Project Template (projecttemplate) Search Filter values so they can be loaded dynamically. */
export const projecttemplateSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'allowallresourcesfortasks', type: 'checkbox', label: 'Display All Resources for ProjectTask Assignment'},
  {id: 'allowexpenses', type: 'checkbox', label: 'Allow Expenses'},
  {id: 'allowtasktimeforrsrcalloc', type: 'checkbox', label: 'Allow Allocated Resources to Enter Time to All Tasks'},
  {id: 'allowtime', type: 'checkbox', label: 'Allow Time Entry'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'bounced', type: 'checkbox', label: 'Hard Bounced'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'estcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'estenddate', type: 'date', label: 'Projected End Date'},
  {id: 'estimatedgrossprofit', type: 'currency', label: 'Estimated Gross Profit'},
  {id: 'estimatedgrossprofitpercent', type: 'percent', label: 'Estimated Gross Profit %'},
  {id: 'estimatedlaborcost', type: 'currency', label: 'Estimated Labor Cost'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isexempttime', type: 'checkbox', label: 'Classify Time as Exempt'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isproductivetime', type: 'checkbox', label: 'Classify Time as Productive'},
  {id: 'isutilizedtime', type: 'checkbox', label: 'Classify Time as Utilized'},
  {id: 'jobbillingtype', type: 'select', label: 'Billing Type'},
  {id: 'jobitem', type: 'select', label: 'Billing Item'},
  {id: 'laborbudgetfromallocations', type: 'checkbox', label: 'Calculate Labor Budgets from Resource Allocations'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'limittimetoassignees', type: 'checkbox', label: 'Limit Time and Expenses To Resources'},
  {id: 'materializetime', type: 'checkbox', label: 'Create Planned Time Entries'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province (Deprecated)'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptiondate', type: 'date', label: 'Subscription Date'},
  {id: 'subscriptionstatus', type: 'checkbox', label: 'Subscription Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'useallocatedtimeforforecast', type: 'checkbox', label: 'Use Allocated Time for Forecast'},
  {id: 'usecalculatedbillingbudget', type: 'checkbox', label: 'Use Calculated Values for all Billing Budgets'},
  {id: 'usecalculatedcostbudget', type: 'checkbox', label: 'Use Calculated Values for all Cost Budgets'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Promotion (promotioncode) Search Filter values so they can be loaded dynamically. */
export const promotioncodeSearchFilterValues = [
{id: 'applydiscountto', type: 'select', label: 'Apply Discount To'},
  {id: 'code', type: 'text', label: 'Code'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'discount', type: 'select', label: 'Discount'},
  {id: 'discountamount', type: 'currency', label: 'Discount Amount'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'freeshipitem', type: 'select', label: 'Free Shipping Method'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispublic', type: 'checkbox', label: 'Public'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'name', type: 'text', label: 'Promotion Name'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Prospect (prospect) Search Filter values so they can be loaded dynamically. */
export const prospectSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'assignedsite', type: 'select', label: 'Assigned Web Site'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'availableoffline', type: 'checkbox', label: 'Always Available Offline'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'boughtamount', type: 'currency', label: 'Total Amount Purchased'},
  {id: 'boughtdate', type: 'date', label: 'Purchase Dates'},
  {id: 'buyingreason', type: 'select', label: 'Buying Reason'},
  {id: 'buyingtimeframe', type: 'select', label: 'Buying Time Frame'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccdefault', type: 'checkbox', label: 'Default Credit Card'},
  {id: 'ccexpdate', type: 'date', label: 'CC Expire Date'},
  {id: 'ccholdername', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'cctype', type: 'select', label: 'Credit Card Type'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'classbought', type: 'multiselect', label: 'Class'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'companyname', type: 'text', label: 'Company Name'},
  {id: 'consolbalance', type: 'currency', label: 'Consolidated Balance'},
  {id: 'consoldaysoverdue', type: 'integer', label: 'Consolidated Days Overdue'},
  {id: 'consoldepositbalance', type: 'currency', label: 'Consolidated Deposit Balance'},
  {id: 'consoloverduebalance', type: 'currency', label: 'Consolidated Overdue Balance'},
  {id: 'consolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'conversiondate', type: 'date', label: 'Conversion Date'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'credithold', type: 'select', label: 'Credit Hold'},
  {id: 'creditholdoverride', type: 'checkbox', label: 'Override Credit Hold Off'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'custstage', type: 'select', label: 'Parent Stage'},
  {id: 'custstatus', type: 'select', label: 'Parent Status'},
  {id: 'dateclosed', type: 'datetime', label: 'Date Closed'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'depositbalance', type: 'currency', label: 'Deposit Balance'},
  {id: 'deptbought', type: 'multiselect', label: 'Department'},
  {id: 'draccount', type: 'select', label: 'Deferred Revenue Reclassification Account'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'entitystatus', type: 'select', label: 'Status'},
  {id: 'estimatedbudget', type: 'currency', label: 'Estimated Budget'},
  {id: 'explicitconversion', type: 'checkbox', label: 'Explicit Conversion'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'firstorderdate', type: 'date', label: 'Date of First Order'},
  {id: 'firstsaledate', type: 'date', label: 'Date of First Sale'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxaccount', type: 'select', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxconsolbalance', type: 'currency', label: 'Consolidated Balance (Foreign Currency)'},
  {id: 'fxconsolunbilledorders', type: 'currency', label: 'Consolidated Unbilled Orders (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'grouppricinglevel', type: 'select', label: 'Group Pricing Level'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isbudgetapproved', type: 'checkbox', label: 'Budget Approved'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjob', type: 'checkbox', label: 'Is Job'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'isreportedlead', type: 'checkbox', label: 'Included in Lead Reports'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'itempricinglevel', type: 'select', label: 'Item Pricing Level'},
  {id: 'itempricingunitprice', type: 'currency', label: 'Item Pricing Unit Price'},
  {id: 'itemsbought', type: 'multiselect', label: 'Items Purchased'},
  {id: 'itemsordered', type: 'multiselect', label: 'Items Ordered'},
  {id: 'jobenddate', type: 'date', label: 'Actual End Date'},
  {id: 'jobestcost', type: 'currency', label: 'Estimated Cost'},
  {id: 'jobestenddate', type: 'date', label: 'Projected End Date'},
  {id: 'jobestrevenue', type: 'currency', label: 'Estimated Revenue'},
  {id: 'jobpctcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'jobstartdate', type: 'date', label: 'Start Date'},
  {id: 'jobstatus', type: 'select', label: 'Job Status'},
  {id: 'jobtype', type: 'select', label: 'Job Type'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'lastorderdate', type: 'date', label: 'Date of Last Order'},
  {id: 'lastsaledate', type: 'date', label: 'Date of Last Sale'},
  {id: 'leaddate', type: 'datetime', label: 'Lead Date'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'locationbought', type: 'multiselect', label: 'Location'},
  {id: 'manualcredithold', type: 'checkbox', label: 'Override Credit Hold On'},
  {id: 'merchantaccount', type: 'select', label: 'Credit Card Processor'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'monthlyclosing', type: 'select', label: 'Monthly Closing Date'},
  {id: 'oncredithold', type: 'checkbox', label: 'On Credit Hold'},
  {id: 'onlineformdate', type: 'date', label: 'Online Form History - Form Date'},
  {id: 'onlineformleadsource', type: 'select', label: 'Online Form History - Lead Source'},
  {id: 'onlineformname', type: 'select', label: 'Online Form History - Form Name'},
  {id: 'orderedamount', type: 'currency', label: 'Total Amount Ordered'},
  {id: 'ordereddate', type: 'date', label: 'Order Dates'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'overduebalance', type: 'currency', label: 'Overdue Balance'},
  {id: 'parent', type: 'select', label: 'Sub of'},
  {id: 'parentitemsbought', type: 'multiselect', label: 'Items or Sub-Items Purchased'},
  {id: 'parentitemsordered', type: 'multiselect', label: 'Items or Sub-Items Ordered'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'pricinggroup', type: 'select', label: 'Pricing Group'},
  {id: 'pricingitem', type: 'select', label: 'Pricing Item'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'prospectdate', type: 'datetime', label: 'Prospect Date'},
  {id: 'pstexempt', type: 'checkbox', label: 'PST Exempt'},
  {id: 'receivablesaccount', type: 'select', label: 'Default Receivables Account'},
  {id: 'reminderdate', type: 'date', label: 'Renewal Reminder Date'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'resalenumber', type: 'text', label: 'Resale Number'},
  {id: 'role', type: 'select', label: 'Role'},
  {id: 'salesreadiness', type: 'select', label: 'Sales Readiness'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shippingcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shippingitem', type: 'select', label: 'Shipping Item'},
  {id: 'sourcesite', type: 'select', label: 'Source Website'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidbought', type: 'multiselect', label: 'Subsidiaries Bought'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxable', type: 'checkbox', label: 'Taxable'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'territory', type: 'select', label: 'Territory'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'weblead', type: 'checkbox', label: 'Web Lead'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Purchase Contract (purchasecontract) Search Filter values so they can be loaded dynamically. */
export const purchasecontractSearchFilterValues = [

];

/** Purchase Order (purchaseorder) Search Filter values so they can be loaded dynamically. */
export const purchaseorderSearchFilterValues = [

];

/** Requisition (purchaserequisition) Search Filter values so they can be loaded dynamically. */
export const purchaserequisitionSearchFilterValues = [

];

/** Reallocate Items (reallocateitem) Search Filter values so they can be loaded dynamically. */
export const reallocateitemSearchFilterValues = [

];

/** Receive Inbound Shipment (receiveinboundshipment) Search Filter values so they can be loaded dynamically. */
export const receiveinboundshipmentSearchFilterValues = [

];

/** Resource Allocation (resourceallocation) Search Filter values so they can be loaded dynamically. */
export const resourceallocationSearchFilterValues = [
{id: 'allocationtype', type: 'select', label: 'Allocation Type'},
  {id: 'allocationunit', type: 'select', label: 'Allocate By'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'notes', type: 'text', label: 'Notes'},
  {id: 'numberhours', type: 'float', label: 'Number of Hours'},
  {id: 'percentoftime', type: 'percent', label: 'Percentage of Time'},
  {id: 'project', type: 'select', label: 'Project'},
  {id: 'requestedby', type: 'select', label: 'Requested by'},
  {id: 'resource', type: 'select', label: 'Resource'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Restlet (restlet) Search Filter values so they can be loaded dynamically. */
export const restletSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Return Authorization (returnauthorization) Search Filter values so they can be loaded dynamically. */
export const returnauthorizationSearchFilterValues = [

];

/** Revenue Arrangement (revenuearrangement) Search Filter values so they can be loaded dynamically. */
export const revenuearrangementSearchFilterValues = [

];

/** Revenue Commitment (revenuecommitment) Search Filter values so they can be loaded dynamically. */
export const revenuecommitmentSearchFilterValues = [

];

/** Revenue Commitment Reversal (revenuecommitmentreversal) Search Filter values so they can be loaded dynamically. */
export const revenuecommitmentreversalSearchFilterValues = [

];

/** Revenue Recognition Plan (revenueplan) Search Filter values so they can be loaded dynamically. */
export const revenueplanSearchFilterValues = [

];

/** Revenue Recognition Schedule (revrecschedule) Search Filter values so they can be loaded dynamically. */
export const revrecscheduleSearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'amorstatus', type: 'select', label: 'Status'},
  {id: 'amortizedamount', type: 'currency', label: 'Total Recognized'},
  {id: 'amortype', type: 'select', label: 'Type'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'currency', type: 'select', label: 'Schedule Currency'},
  {id: 'deferredamount', type: 'currency', label: 'Remaining Deferred Balance'},
  {id: 'destacct', type: 'select', label: 'Destination Account'},
  {id: 'initialamt', type: 'currency', label: 'Initial Amount'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isrecognized', type: 'checkbox', label: 'Is Recognized?'},
  {id: 'jedoc', type: 'select', label: 'Journal'},
  {id: 'name', type: 'text', label: 'Schedule Name'},
  {id: 'pctcomplete', type: 'float', label: '% Complete'},
  {id: 'pctrecognition', type: 'float', label: '% Recog.'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'postperiod', type: 'select', label: 'Posting Period'},
  {id: 'scheddate', type: 'date', label: 'Date'},
  {id: 'schedulenumber', type: 'integer', label: 'Number'},
  {id: 'schedulenumbertext', type: 'text', label: 'Number/ID'},
  {id: 'sourceacct', type: 'select', label: 'Source Account'},
  {id: 'srctranpostperiod', type: 'select', label: 'Source Transaction Posting Period'},
  {id: 'srctrantype', type: 'select', label: 'Transaction Type'},
  {id: 'startoffset', type: 'integer', label: 'Start Offset'},
  {id: 'templatename', type: 'text', label: 'Template Name'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Revenue Recognition Template (revrectemplate) Search Filter values so they can be loaded dynamically. */
export const revrectemplateSearchFilterValues = [
{id: 'amormethod', type: 'select', label: 'Method'},
  {id: 'amorperiod', type: 'integer', label: 'Amortization Period'},
  {id: 'amorstartoffset', type: 'integer', label: 'Start Offset'},
  {id: 'amortermsrc', type: 'select', label: 'Term Source'},
  {id: 'amortype', type: 'select', label: 'Type'},
  {id: 'contraaccount', type: 'select', label: 'Contra Account'},
  {id: 'deferralaccount', type: 'select', label: 'Deferral Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'periodoffset', type: 'integer', label: 'Period Offset'},
  {id: 'targetaccount', type: 'select', label: 'Target Account'},
  {id: 'useforeignamounts', type: 'checkbox', label: 'Use Transaction Currency'}
];

/** Role (role) Search Filter values so they can be loaded dynamically. */
export const roleSearchFilterValues = [
{id: 'centertype', type: 'select', label: 'Center Type'},
  {id: 'classallowview', type: 'checkbox', label: 'Class Allow Viewing'},
  {id: 'classrestriction', type: 'select', label: 'Class Restrictions'},
  {id: 'departmentrestriction', type: 'select', label: 'Department Restrictions'},
  {id: 'deptallowview', type: 'checkbox', label: 'Department Allow Viewing'},
  {id: 'empallowview', type: 'checkbox', label: 'Employee Allow Viewing'},
  {id: 'employeerestriction', type: 'select', label: 'Employee Restrictions'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'iscustom', type: 'checkbox', label: 'Custom'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'ispartnerrole', type: 'checkbox', label: 'Is Partner Role'},
  {id: 'issalesrole', type: 'checkbox', label: 'Is Sales Role'},
  {id: 'isssoonly', type: 'checkbox', label: 'Is Single Sign On Only'},
  {id: 'issupportrole', type: 'checkbox', label: 'Is Support Role'},
  {id: 'iswsonly', type: 'checkbox', label: 'Is Web Services Only'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'locallowview', type: 'checkbox', label: 'Location Allow Viewing'},
  {id: 'locationrestriction', type: 'select', label: 'Location Restrictions'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'permchangedate', type: 'datetime', label: 'Permission Change Date'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'permissionchange', type: 'select', label: 'Permission Change'},
  {id: 'restrictitembyclass', type: 'checkbox', label: 'Restrict Item By Class'},
  {id: 'restrictitembydepartment', type: 'checkbox', label: 'Restrict Item By Department'},
  {id: 'restrictitembylocation', type: 'checkbox', label: 'Restrict Item By Location'},
  {id: 'subsidallowview', type: 'checkbox', label: 'Subsidiary Allow Viewing'},
  {id: 'subsidiaries', type: 'select', label: 'Subsidiaries'}
];

/** Sales Order (salesorder) Search Filter values so they can be loaded dynamically. */
export const salesorderSearchFilterValues = [

];

/** Sales Role (salesrole) Search Filter values so they can be loaded dynamically. */
export const salesroleSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Sales Tax Item (salestaxitem) Search Filter values so they can be loaded dynamically. */
export const salestaxitemSearchFilterValues = [
{id: 'appliestoservice', type: 'checkbox', label: 'Applies To Service'},
  {id: 'availableon', type: 'select', label: 'Available On'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'iseccode', type: 'checkbox', label: 'EC Code'},
  {id: 'isexcludetaxreports', type: 'checkbox', label: 'Excluded From Tax Reports'},
  {id: 'isexport', type: 'checkbox', label: 'Export'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isreversecharge', type: 'checkbox', label: 'Reverse Charge'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'parent', type: 'select', label: 'Parent'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'}
];

/** Scheduled Script (scheduledscript) Search Filter values so they can be loaded dynamically. */
export const scheduledscriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Scheduled Script Instance (scheduledscriptinstance) Search Filter values so they can be loaded dynamically. */
export const scheduledscriptinstanceSearchFilterValues = [
{id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'datetime', label: 'End Date'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'percentcomplete', type: 'percent', label: 'Percent Complete'},
  {id: 'queue', type: 'text', label: 'Queue'},
  {id: 'startdate', type: 'datetime', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'}
];

/** Script Deployment (scriptdeployment) Search Filter values so they can be loaded dynamically. */
export const scriptdeploymentSearchFilterValues = [
{id: 'eventtype', type: 'select', label: 'Event Type'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isdeployed', type: 'checkbox', label: 'Is Deployed'},
  {id: 'loglevel', type: 'select', label: 'Log Level'},
  {id: 'queueid', type: 'integer', label: 'Queue'},
  {id: 'recordtype', type: 'select', label: 'Record Type'},
  {id: 'script', type: 'select', label: 'Script ID'},
  {id: 'scriptid', type: 'text', label: 'Custom ID'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Name'}
];

/** Serialized Build/Assembly Item (serializedassemblyitem) Search Filter values so they can be loaded dynamically. */
export const serializedassemblyitemSearchFilterValues = [

];

/** Serialized Inventory Item (serializedinventoryitem) Search Filter values so they can be loaded dynamically. */
export const serializedinventoryitemSearchFilterValues = [

];

/** Service (serviceitem) Search Filter values so they can be loaded dynamically. */
export const serviceitemSearchFilterValues = [

];

/** Shipping Item (shipitem) Search Filter values so they can be loaded dynamically. */
export const shipitemSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'accounthandling', type: 'select', label: 'Account (Handling)'},
  {id: 'carrier', type: 'text', label: 'Carrier'},
  {id: 'description', type: 'text', label: 'Description'},
  {id: 'displayname', type: 'text', label: 'Dipslay Name'},
  {id: 'excludedforcountries', type: 'checkbox', label: 'Excluded For Countries'},
  {id: 'excludedforsites', type: 'checkbox', label: 'Excluded For Sites'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'freeiftotaloveramount', type: 'float', label: 'Free If Total Over Amount'},
  {id: 'handlingflatrate', type: 'float', label: 'Handling Flat Rate'},
  {id: 'handlingfunctiontype', type: 'select', label: 'Handling Rate Type'},
  {id: 'handlingrateaspercentoftotal', type: 'float', label: 'Handling Rate As Percent of Total'},
  {id: 'handlingratebyitem', type: 'float', label: 'Handling Rate By Item'},
  {id: 'handlingratebyweight', type: 'float', label: 'Handling Rate By Weight'},
  {id: 'handlingratebyweightbracketed', type: 'checkbox', label: 'Handling Rate By Weight Bracketed'},
  {id: 'handlingratebyweightper', type: 'float', label: 'Handling Rate By Weight Per'},
  {id: 'handlingratebyweightunit', type: 'select', label: 'Handling Rate By Weight Unit'},
  {id: 'handlingratetabletype', type: 'select', label: 'Handling Rate Table Type'},
  {id: 'hasmaxshippingcost', type: 'checkbox', label: 'Has Maximum Shipping Cost'},
  {id: 'hasminshippingcost', type: 'checkbox', label: 'Has Minimum Shipping Cost'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isfreeiftotalover', type: 'checkbox', label: 'Is Free If Total Over'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isonline', type: 'checkbox', label: 'Display in Web Site'},
  {id: 'isreturnsintegrated', type: 'checkbox', label: 'Is Return Service Integrated'},
  {id: 'isshipperintegrated', type: 'checkbox', label: 'Is Integrated Shipping Item'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'labelpluginid', type: 'select', label: 'Label Plugin Id'},
  {id: 'labelregistration', type: 'select', label: 'Label Registration'},
  {id: 'labelservicegroupid', type: 'select', label: 'Label Service Group Id'},
  {id: 'labelserviceid', type: 'select', label: 'Label Service Id'},
  {id: 'limitedtocountries', type: 'multiselect', label: 'Limited To Countries'},
  {id: 'limitedtosites', type: 'multiselect', label: 'Limited To Sites'},
  {id: 'limitedtostates', type: 'multiselect', label: 'Limited To States'},
  {id: 'limitwebsitevisibilitybytotal', type: 'checkbox', label: 'Web Site Visibility Limited by Total'},
  {id: 'limitwebsitevisibilitybyweight', type: 'checkbox', label: 'Web Site Visibility Limited by Weight'},
  {id: 'maxshippingcost', type: 'float', label: 'Maximum Shipping Cost'},
  {id: 'minshippingcost', type: 'float', label: 'Minimum Shipping Cost'},
  {id: 'ratingpluginid', type: 'select', label: 'Rating Plugin Id'},
  {id: 'ratingregistration', type: 'select', label: 'Rating Registration'},
  {id: 'ratingservicegroupid', type: 'select', label: 'Rating Service Group Id'},
  {id: 'ratingserviceid', type: 'select', label: 'Rating Service Id'},
  {id: 'realtimerateservice', type: 'select', label: 'Real-Time Rate Service'},
  {id: 'returnlabelregistration', type: 'select', label: 'Return Label Registration'},
  {id: 'returnlabelserviceid', type: 'select', label: 'Return Label Service Id'},
  {id: 'returnshippingservice', type: 'select', label: 'Return Shipping Service'},
  {id: 'shippingdiscountrate', type: 'float', label: 'Shipping Rate Discount'},
  {id: 'shippingflatrate', type: 'float', label: 'Shipping Flat Rate'},
  {id: 'shippingfunctiontype', type: 'select', label: 'Shipping Rate Type'},
  {id: 'shippingrateaspercentoftotal', type: 'float', label: 'Shipping Rate As Percent of Total'},
  {id: 'shippingratebyitem', type: 'float', label: 'Shipping Rate By Item'},
  {id: 'shippingratebyweight', type: 'float', label: 'Shipping Rate By Weight'},
  {id: 'shippingratebyweightbracketed', type: 'checkbox', label: 'Shipping Rate By Weight Bracketed'},
  {id: 'shippingratebyweightper', type: 'float', label: 'Shipping Rate By Weight Per'},
  {id: 'shippingratebyweightunit', type: 'select', label: 'Shipping Rate By Weight Unit'},
  {id: 'shippingratetabletype', type: 'select', label: 'Shipping Rate Table Type'},
  {id: 'shippingservice', type: 'select', label: 'Shipping Service'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'websitevisibilitybytotaltype', type: 'select', label: 'Web Site Visibility By Total Type'},
  {id: 'websitevisibilitybyweighttype', type: 'select', label: 'Web Site Visibility By Weight Type'},
  {id: 'websitevisibilitytotallimit', type: 'float', label: 'Web Site Visibility By Total Limit'},
  {id: 'websitevisibilityweightlimit', type: 'float', label: 'Web Site Visibility By Weight Limit'},
  {id: 'websitevisibilityweightunit', type: 'select', label: 'Web Site Visibility By Weight Unit'}
];

/** Shopping Cart (shoppingcart) Search Filter values so they can be loaded dynamically. */
export const shoppingcartSearchFilterValues = [
{id: 'cartid', type: 'select', label: 'Cart ID'},
  {id: 'cartidnumber', type: 'integer', label: 'Cart ID (Number)'},
  {id: 'customerid', type: 'select', label: 'Customer ID'},
  {id: 'customeridnumber', type: 'integer', label: 'Customer ID (Number)'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'datemodified', type: 'datetime', label: 'Date Last Item Added'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemid', type: 'select', label: 'Item ID'},
  {id: 'itemidnumber', type: 'integer', label: 'Item ID (Number)'},
  {id: 'itemprice', type: 'currency', label: 'Item Price'},
  {id: 'subtotal', type: 'currency', label: 'SubTotal'},
  {id: 'website', type: 'select', label: 'Website'},
  {id: 'websiteid', type: 'select', label: 'Website ID'}
];

/** Solution (solution) Search Filter values so they can be loaded dynamically. */
export const solutionSearchFilterValues = [
{id: 'abstract', type: 'textarea', label: 'Abstract'},
  {id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'casecount', type: 'integer', label: 'Case Count'},
  {id: 'code', type: 'text', label: 'Code'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'description', type: 'textarea', label: 'Detail'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'find', type: 'text', label: 'Keyword'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isonline', type: 'checkbox', label: 'Display Online'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'topic', type: 'select', label: 'Topic'}
];

/** Statistical Journal Entry (statisticaljournalentry) Search Filter values so they can be loaded dynamically. */
export const statisticaljournalentrySearchFilterValues = [

];

/** Store Pickup Fulfillment (storepickupfulfillment) Search Filter values so they can be loaded dynamically. */
export const storepickupfulfillmentSearchFilterValues = [

];

/** Subscription (subscription) Search Filter values so they can be loaded dynamically. */
export const subscriptionSearchFilterValues = [
{id: 'advancerenewalperiodnumber', type: 'integer', label: 'Advance Renewal Period'},
  {id: 'advancerenewalperiodunit', type: 'select', label: 'Advance Renewal Period Unit'},
  {id: 'autorenewal', type: 'checkbox', label: 'Automatically Initiate Renewal Process'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'defaultrenewalmethod', type: 'select', label: 'Default Renewal Method'},
  {id: 'defaultrenewalterm', type: 'select', label: 'Default Renewal Term'},
  {id: 'defaultrenewaltrantype', type: 'select', label: 'Default Transaction Type'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedrevrecenddate', type: 'date', label: 'Estimated Revenue Recognition End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'initialterm', type: 'select', label: 'Initial Term'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nextrenewalstartdate', type: 'date', label: 'Next Renewal Start Date'},
  {id: 'originalsalestransaction', type: 'select', label: 'Original Sales Transaction'},
  {id: 'parentsubscriptionid', type: 'integer', label: 'Parent Subscription ID'},
  {id: 'renewalsubscriptionname', type: 'select', label: 'Renewal Subscription Name'},
  {id: 'renewaltransaction', type: 'select', label: 'Renewal Transaction'},
  {id: 'rootsubscriptionid', type: 'integer', label: 'Root Subscription ID'},
  {id: 'salesorder', type: 'select', label: 'Sales Order'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'}
];

/** Subscription Change Order (subscriptionchangeorder) Search Filter values so they can be loaded dynamically. */
export const subscriptionchangeorderSearchFilterValues = [
{id: 'action', type: 'select', label: 'Action'},
  {id: 'approvaldate', type: 'datetime', label: 'Date Approved'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'billingaccount', type: 'select', label: 'Billing Account'},
  {id: 'customer', type: 'select', label: 'Customer'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'effectivedate', type: 'date', label: 'Effective Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'idnumber', type: 'text', label: 'Number'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'newenddate', type: 'date', label: 'New End Date'},
  {id: 'orderedeffectivedate', type: 'date', label: 'Ordered Effective Date'},
  {id: 'renewalenddate', type: 'date', label: 'Renewal End Date'},
  {id: 'renewalmethod', type: 'select', label: 'Renewal Method'},
  {id: 'renewalstartdate', type: 'date', label: 'Renewal Start Date'},
  {id: 'renewalterm', type: 'select', label: 'Renewal Term'},
  {id: 'renewaltrantype', type: 'select', label: 'Renewal Transaction Type'},
  {id: 'requestoffcycleinvoice', type: 'checkbox', label: 'Request Off-Cycle Invoice for Advance Charges'},
  {id: 'requestor', type: 'select', label: 'Requestor'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'}
];

/** Subscription Line (subscriptionline) Search Filter values so they can be loaded dynamically. */
export const subscriptionlineSearchFilterValues = [
{id: 'billingmode', type: 'select', label: 'Billing Mode'},
  {id: 'discount', type: 'percent', label: 'Discount'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'estimatedrevrecenddate', type: 'date', label: 'Estimated Revenue Recognition End Date'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'includeinrenewal', type: 'checkbox', label: 'Include In Renewal Subscription'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'linenumber', type: 'integer', label: 'Line Number'},
  {id: 'prorateenddate', type: 'checkbox', label: 'Prorate End Date'},
  {id: 'proratestartdate', type: 'checkbox', label: 'Prorate Start Date'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'recurrencestartdate', type: 'date', label: 'Recurrence Start Date'},
  {id: 'revrecoption', type: 'select', label: 'Revenue Recognition Option'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subscription', type: 'select', label: 'Subscription'},
  {id: 'subscriptionlinetype', type: 'select', label: 'Subscription Line Type'},
  {id: 'subscriptionplan', type: 'select', label: 'Subscription Plan'},
  {id: 'subscriptionplanline', type: 'select', label: 'Subscription Plan Line'},
  {id: 'terminationdate', type: 'date', label: 'Termination Date'},
  {id: 'total', type: 'currency', label: 'Total'},
  {id: 'usagemultiplierline', type: 'select', label: 'Included Quantity Multiplier Line'}
];

/** Subscription Plan (subscriptionplan) Search Filter values so they can be loaded dynamically. */
export const subscriptionplanSearchFilterValues = [

];

/** Subsidiary (subsidiary) Search Filter values so they can be loaded dynamically. */
export const subsidiarySearchFilterValues = [
{id: 'accountingbook', type: 'select', label: 'Accounting Book'},
  {id: 'accountingbookcurrency', type: 'select', label: 'Accounting Book Currency'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'effectivefrom', type: 'date', label: 'Effective From'},
  {id: 'email', type: 'email', label: 'Email'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'iselimination', type: 'checkbox', label: 'Elimination'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'legalname', type: 'text', label: 'Legal Name'},
  {id: 'mossapplies', type: 'checkbox', label: 'MOSS Applies'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'taxengine', type: 'select', label: 'Tax Engine'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'taxregistrationnumber', type: 'text', label: 'Tax Reg. Number'},
  {id: 'tranprefix', type: 'text', label: 'Transaction Prefix'},
  {id: 'url', type: 'url', label: 'Web Site'},
  {id: 'validuntil', type: 'date', label: 'Valid Until'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Subtotal Item (subtotalitem) Search Filter values so they can be loaded dynamically. */
export const subtotalitemSearchFilterValues = [

];

/** Suitelet (suitelet) Search Filter values so they can be loaded dynamically. */
export const suiteletSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Supply Chain Snapshot (supplychainsnapshot) Search Filter values so they can be loaded dynamically. */
export const supplychainsnapshotSearchFilterValues = [
{id: 'daterun', type: 'datetime', label: 'Date Run'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'futurehorizon', type: 'integer', label: 'Future Horizon'},
  {id: 'futurehorizondate', type: 'date', label: 'Future Horizon Date'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'pasthorizon', type: 'integer', label: 'Past Horizon'},
  {id: 'pasthorizondate', type: 'date', label: 'Past Horizon Date'},
  {id: 'replenishmentmethod', type: 'select', label: 'Replenishment Method'},
  {id: 'stockunit', type: 'select', label: 'Stock Unit'}
];

/** Case (supportcase) Search Filter values so they can be loaded dynamically. */
export const supportcaseSearchFilterValues = [
{id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'awaitingreply', type: 'checkbox', label: 'Awaiting Support Reply'},
  {id: 'casenumber', type: 'text', label: 'Number/ID'},
  {id: 'category', type: 'select', label: 'Type'},
  {id: 'closeddate', type: 'date', label: 'Date Closed'},
  {id: 'company', type: 'text', label: 'Company'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'escalateto', type: 'select', label: 'Escalated To'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'helpdesk', type: 'checkbox', label: 'Help Desk'},
  {id: 'inboundemail', type: 'text', label: 'Inbound Email'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'issue', type: 'select', label: 'Issue'},
  {id: 'issuefixedin', type: 'select', label: 'Issue Fixed In'},
  {id: 'issuenumber', type: 'text', label: 'Issue Number'},
  {id: 'issuestatus', type: 'select', label: 'Issue Status'},
  {id: 'issuetype', type: 'select', label: 'Issue Type'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmessage', type: 'checkbox', label: 'Most Recent Message'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'lastreopeneddate', type: 'datetime', label: 'Date Last Reopened'},
  {id: 'locked', type: 'checkbox', label: 'Locked'},
  {id: 'message', type: 'clobtext', label: 'Message Text'},
  {id: 'messageauthor', type: 'select', label: 'Message Author'},
  {id: 'messagedate', type: 'date', label: 'Message Date'},
  {id: 'messagetype', type: 'checkbox', label: 'Message Type'},
  {id: 'module', type: 'select', label: 'Module'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'origin', type: 'select', label: 'Origin'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'product', type: 'select', label: 'Product'},
  {id: 'profile', type: 'select', label: 'Profile'},
  {id: 'serialnumber', type: 'text', label: 'Serial/Lot #'},
  {id: 'stage', type: 'select', label: 'Stage'},
  {id: 'startdate', type: 'datetime', label: 'Incident Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'title', type: 'text', label: 'Subject'}
];

/** Task (task) Search Filter values so they can be loaded dynamically. */
export const taskSearchFilterValues = [
{id: 'actualtime', type: 'float', label: 'Actual Work'},
  {id: 'assigned', type: 'select', label: 'Assigned To'},
  {id: 'company', type: 'select', label: 'Company'},
  {id: 'completeddate', type: 'date', label: 'Date Completed'},
  {id: 'contact', type: 'select', label: 'Contact'},
  {id: 'createddate', type: 'datetime', label: 'Date Created'},
  {id: 'enddate', type: 'date', label: 'Due date'},
  {id: 'estimatedtime', type: 'float', label: 'Initial Time Budget'},
  {id: 'estimatedtimeoverride', type: 'float', label: 'Current Time Budget'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isjobsummarytask', type: 'checkbox', label: 'Is Job Summary Task'},
  {id: 'isjobtask', type: 'checkbox', label: 'Is Job Task'},
  {id: 'isprivate', type: 'checkbox', label: 'Is Private'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified Date'},
  {id: 'milestone', type: 'integer', label: 'Milestone'},
  {id: 'owner', type: 'select', label: 'Created By'},
  {id: 'percentcomplete', type: 'integer', label: 'Percent Complete'},
  {id: 'percenttimecomplete', type: 'integer', label: 'Percent Time Complete'},
  {id: 'priority', type: 'select', label: 'Priority'},
  {id: 'startdate', type: 'date', label: 'Start date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'timeremaining', type: 'float', label: 'Remaining Work'},
  {id: 'title', type: 'text', label: 'Title'}
];

/** Tax Account (taxacct) Search Filter values so they can be loaded dynamically. */
export const taxacctSearchFilterValues = [

];

/** Tax Detail (taxdetail) Search Filter values so they can be loaded dynamically. */
export const taxdetailSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'linenumber', type: 'integer', label: 'Line Number'},
  {id: 'taxamount', type: 'currency', label: 'Tax Amount'},
  {id: 'taxbasis', type: 'currency', label: 'Tax Basis (Foreign Currency)'},
  {id: 'taxcode', type: 'select', label: 'Tax Code'},
  {id: 'taxrate', type: 'percent', label: 'Tax Rate'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'}
];

/** Tax Group (taxgroup) Search Filter values so they can be loaded dynamically. */
export const taxgroupSearchFilterValues = [
{id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'itemid', type: 'text', label: 'Name'},
  {id: 'piggyback', type: 'checkbox', label: 'Piggy Back'},
  {id: 'rate', type: 'percent', label: 'Rate'},
  {id: 'state', type: 'select', label: 'State'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxitem1', type: 'select', label: 'GST/HST'},
  {id: 'taxitem2', type: 'select', label: 'PST'},
  {id: 'taxtype', type: 'select', label: 'Tax Type'},
  {id: 'unitprice1', type: 'percent', label: 'GST/HST Rate'},
  {id: 'unitprice2', type: 'percent', label: 'PST Rate'},
  {id: 'zip', type: 'textarea', label: 'Zip'}
];

/** Tax Period (taxperiod) Search Filter values so they can be loaded dynamically. */
export const taxperiodSearchFilterValues = [
{id: 'allclosed', type: 'checkbox', label: 'All Closed'},
  {id: 'alllocked', type: 'checkbox', label: 'All Locked'},
  {id: 'aplocked', type: 'checkbox', label: 'AP Locked'},
  {id: 'arlocked', type: 'checkbox', label: 'AR Locked'},
  {id: 'closed', type: 'checkbox', label: 'Closed'},
  {id: 'closedondate', type: 'date', label: 'Date Closed On'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isadjust', type: 'checkbox', label: 'Adjust'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isquarter', type: 'checkbox', label: 'Quarter'},
  {id: 'isyear', type: 'checkbox', label: 'Year'},
  {id: 'parent', type: 'select', label: 'Sub-Period Of'},
  {id: 'payrolllocked', type: 'checkbox', label: 'Payroll Locked'},
  {id: 'periodname', type: 'text', label: 'Period Name'},
  {id: 'startdate', type: 'date', label: 'Start Date'}
];

/** Tax Type (taxtype) Search Filter values so they can be loaded dynamically. */
export const taxtypeSearchFilterValues = [
{id: 'country', type: 'select', label: 'Country'},
  {id: 'description', type: 'textarea', label: 'Description'},
  {id: 'doesnotaddtototal', type: 'checkbox', label: 'Does Not Add to Transaction Total'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'nexus', type: 'select', label: 'Nexus'},
  {id: 'payablesaccount', type: 'select', label: 'Payables Account'},
  {id: 'posttoitemcost', type: 'checkbox', label: 'Post to Item Cost'},
  {id: 'receivablesaccount', type: 'select', label: 'Receivables Account'},
  {id: 'reversecharge', type: 'checkbox', label: 'Reverse Charge'},
  {id: 'taxinnetamount', type: 'checkbox', label: 'Tax Included in Net Amount'}
];

/** Term (term) Search Filter values so they can be loaded dynamically. */
export const termSearchFilterValues = [
{id: 'datedriven', type: 'checkbox', label: 'Date Driven'},
  {id: 'daydiscountexpires', type: 'integer', label: 'Day Discount Expires'},
  {id: 'dayofmonthnetdue', type: 'integer', label: 'Day of Month Net Due'},
  {id: 'daysuntilexpiry', type: 'integer', label: 'Days Till Discount Expires'},
  {id: 'daysuntilnetdue', type: 'integer', label: 'Days Till Net Due'},
  {id: 'discountpercent', type: 'float', label: '% Discount'},
  {id: 'discountpercentdatedriven', type: 'float', label: 'Date Driven % Discount'},
  {id: 'duenextmonthifwithindays', type: 'integer', label: 'Due Next Month if Within Days'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'preferred', type: 'checkbox', label: 'Preferred'}
];

/** Time (timebill) Search Filter values so they can be loaded dynamically. */
export const timebillSearchFilterValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'approved', type: 'checkbox', label: 'Approved'},
  {id: 'billable', type: 'checkbox', label: 'Billable'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customer', type: 'select', label: 'Customer:Job'},
  {id: 'date', type: 'date', label: 'Date'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'duration', type: 'float', label: 'Duration'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'exempt', type: 'checkbox', label: 'Exempt'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodified', type: 'datetime', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'paidbypayroll', type: 'checkbox', label: 'Paid by Payroll'},
  {id: 'paidexternally', type: 'checkbox', label: 'Paid Externally'},
  {id: 'payitem', type: 'select', label: 'Payroll Item'},
  {id: 'productive', type: 'checkbox', label: 'Productive'},
  {id: 'rejectionnote', type: 'text', label: 'Rejection Note'},
  {id: 'status', type: 'checkbox', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'temporarylocaljurisdiction', type: 'select', label: 'Temporary Local Jurisdiction'},
  {id: 'temporarystatejurisdiction', type: 'select', label: 'Temporary State Jurisdiction'},
  {id: 'timesheet', type: 'select', label: 'Weekly Timesheet'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'utilized', type: 'checkbox', label: 'Utilized'}
];

/** Time Entry (timeentry) Search Filter values so they can be loaded dynamically. */
export const timeentrySearchFilterValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'billable', type: 'checkbox', label: 'Billable'},
  {id: 'billingclass', type: 'select', label: 'Billing Class'},
  {id: 'billingstatus', type: 'checkbox', label: 'Billing Status'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'customer', type: 'select', label: 'Customer:Job'},
  {id: 'date', type: 'date', label: 'Date'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'duration', type: 'float', label: 'Duration'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'exempt', type: 'checkbox', label: 'Exempt'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'ischarged', type: 'checkbox', label: 'Charged'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'lastmodified', type: 'datetime', label: 'Last Modified'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'paidbypayroll', type: 'checkbox', label: 'Paid by Payroll'},
  {id: 'paidexternally', type: 'checkbox', label: 'Paid Externally'},
  {id: 'payitem', type: 'select', label: 'Payroll Item'},
  {id: 'productive', type: 'checkbox', label: 'Productive'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'utilized', type: 'checkbox', label: 'Utilized'}
];

/** Timesheet (timesheet) Search Filter values so they can be loaded dynamically. */
export const timesheetSearchFilterValues = [
{id: 'approvalstatus', type: 'select', label: 'Approval Status (Text)'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'id', type: 'integer', label: 'ID'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'timesheetdate', type: 'date', label: 'Timesheet Date'},
  {id: 'totalhours', type: 'float', label: 'Total Hours'}
];

/** Topic (topic) Search Filter values so they can be loaded dynamically. */
export const topicSearchFilterValues = [
{id: 'description', type: 'text', label: 'Description'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Title'}
];

/** Transaction (transaction) Search Filter values so they can be loaded dynamically. */
export const transactionSearchFilterValues = [
{id: 'account', type: 'select', label: 'Account'},
  {id: 'accounttype', type: 'select', label: 'Account Type'},
  {id: 'actualshipdate', type: 'date', label: 'Actual Ship/Receipt Date'},
  {id: 'altsalesamount', type: 'currency', label: 'Amount (Alt.Sales)'},
  {id: 'altsalesnetamount', type: 'currency', label: 'Amount (Alt.Sales Net)'},
  {id: 'amount', type: 'currency', label: 'Amount'},
  {id: 'amountpaid', type: 'currency', label: 'Amount Paid'},
  {id: 'amountremaining', type: 'currency', label: 'Amount Remaining'},
  {id: 'amountunbilled', type: 'currency', label: 'Amount Unbilled'},
  {id: 'anylineitem', type: 'multiselect', label: 'Item On Any Line'},
  {id: 'appliedtoforeignamount', type: 'currency', label: 'Applied To Link Amount (Foreign Currency)'},
  {id: 'appliedtoisfxvariance', type: 'checkbox', label: 'Applied To Is FxVariance'},
  {id: 'appliedtolinkamount', type: 'currency', label: 'Applied To Link Amount'},
  {id: 'appliedtolinktype', type: 'select', label: 'Applied To Link Type'},
  {id: 'appliedtotransaction', type: 'select', label: 'Applied To Transaction'},
  {id: 'applyingforeignamount', type: 'currency', label: 'Applying Link Amount (Foreign Currency)'},
  {id: 'applyingisfxvariance', type: 'checkbox', label: 'Applying Is FxVariance'},
  {id: 'applyinglinkamount', type: 'currency', label: 'Applying Link Amount'},
  {id: 'applyinglinktype', type: 'select', label: 'Applying Link Type'},
  {id: 'applyingtransaction', type: 'select', label: 'Applying Transaction'},
  {id: 'approvalstatus', type: 'select', label: 'Approval Status'},
  {id: 'authcode', type: 'text', label: 'Auth. Code'},
  {id: 'autocalculatelag', type: 'checkbox', label: 'Auto-calculate Lag'},
  {id: 'avsstreetmatch', type: 'select', label: 'AVS Street Match'},
  {id: 'avszipmatch', type: 'select', label: 'AVS Zip Match'},
  {id: 'billable', type: 'checkbox', label: 'Billable'},
  {id: 'billcounty', type: 'text', label: 'Billing County/State'},
  {id: 'billeddate', type: 'date', label: 'Date Billed'},
  {id: 'billingschedule', type: 'select', label: 'Billing Schedule'},
  {id: 'billingstatus', type: 'checkbox', label: 'Billing Status'},
  {id: 'billingtransaction', type: 'select', label: 'Billing Transaction'},
  {id: 'billvariancestatus', type: 'select', label: 'Bill Variance Status'},
  {id: 'binnumber', type: 'text', label: 'Transaction Bin Number'},
  {id: 'binnumberquantity', type: 'float', label: 'Transaction Bin Quantity'},
  {id: 'bookspecifictransaction', type: 'checkbox', label: 'Book Specific Transaction'},
  {id: 'buildentireassembly', type: 'checkbox', label: 'Build Sub-Assemblies'},
  {id: 'buildvariance', type: 'float', label: 'Build Variance'},
  {id: 'built', type: 'float', label: 'Built'},
  {id: 'canhavestackablepromotions', type: 'checkbox', label: 'Can have stackable promotions'},
  {id: 'catchupperiod', type: 'select', label: 'Catch Up Period'},
  {id: 'cccustomercode', type: 'text', label: 'CC Customer Code'},
  {id: 'ccexpiredate', type: 'date', label: 'CC Expire Date'},
  {id: 'ccname', type: 'text', label: 'Credit Cardholder Name'},
  {id: 'ccnumber', type: 'ccnumber', label: 'Credit Card Number'},
  {id: 'chargetype', type: 'select', label: 'Charge Type'},
  {id: 'class', type: 'select', label: 'Class'},
  {id: 'cleared', type: 'checkbox', label: 'Cleared'},
  {id: 'closed', type: 'checkbox', label: 'Closed'},
  {id: 'closedate', type: 'date', label: 'Date Closed'},
  {id: 'cogs', type: 'checkbox', label: 'COGS Line'},
  {id: 'commissioneffectivedate', type: 'date', label: 'Commission Effective Date'},
  {id: 'commit', type: 'select', label: 'Commit'},
  {id: 'confirmationnumber', type: 'text', label: 'Confirmation Number'},
  {id: 'contribution', type: 'integer', label: 'Contribution %'},
  {id: 'costcomponentamount', type: 'currency', label: 'Cost Component Amount'},
  {id: 'costcomponentcategory', type: 'select', label: 'Cost Component Category'},
  {id: 'costcomponentitem', type: 'select', label: 'Cost Component Item'},
  {id: 'costcomponentquantity', type: 'float', label: 'Cost Component Quantity'},
  {id: 'costcomponentstandardcost', type: 'float', label: 'Cost Component Standard Cost'},
  {id: 'costestimate', type: 'currency', label: 'Est. Extended Cost (Line)'},
  {id: 'costestimaterate', type: 'currency', label: 'Est. Unit Cost'},
  {id: 'costestimatetype', type: 'select', label: 'Cost Estimate Type'},
  {id: 'createdby', type: 'select', label: 'Created By'},
  {id: 'createdfrom', type: 'select', label: 'Created From'},
  {id: 'creditamount', type: 'currency', label: 'Amount (Credit)'},
  {id: 'cscmatch', type: 'select', label: 'CSC Match'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'customersubof', type: 'select', label: 'Customer Sub of'},
  {id: 'customform', type: 'select', label: 'Custom Form'},
  {id: 'customgl', type: 'checkbox', label: 'Custom GL'},
  {id: 'custtype', type: 'select', label: 'Customer Category'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'daysopen', type: 'integer', label: 'Days Open'},
  {id: 'daysoverdue', type: 'integer', label: 'Days Overdue'},
  {id: 'debitamount', type: 'currency', label: 'Amount (Debit)'},
  {id: 'deferredrevenue', type: 'currency', label: 'Amount (Deferred)'},
  {id: 'deferrevrec', type: 'checkbox', label: 'Delay Rev. Rec.'},
  {id: 'department', type: 'select', label: 'Department'},
  {id: 'depositdate', type: 'date', label: 'Date Deposited/Refunded'},
  {id: 'deposittransaction', type: 'select', label: 'Deposit/Refund Transaction'},
  {id: 'draccount', type: 'select', label: 'Deferred Revenue Reclassification Account'},
  {id: 'duedate', type: 'date', label: 'Due Date/Receive By'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'employee', type: 'select', label: 'Employee'},
  {id: 'enddate', type: 'date', label: 'End Date'},
  {id: 'entity', type: 'select', label: 'Name'},
  {id: 'entitystatus', type: 'select', label: 'Estimate/Opportunity Status'},
  {id: 'estgrossprofit', type: 'currency', label: 'Est. Gross Profit (Line)'},
  {id: 'estgrossprofitpct', type: 'percent', label: 'Est. Gross Profit Percent (Line)'},
  {id: 'exchangerate', type: 'currency', label: 'Exchange Rate'},
  {id: 'excludecommission', type: 'checkbox', label: 'Exclude Commissions'},
  {id: 'excludefromraterequest', type: 'checkbox', label: 'Exclude Item from Rate Request'},
  {id: 'expectedclosedate', type: 'date', label: 'Expected Close Date'},
  {id: 'expectedreceiptdate', type: 'date', label: 'Expected Receipt Date'},
  {id: 'expensedate', type: 'date', label: 'Expense Date'},
  {id: 'expreports', type: 'select', label: 'Expense Category'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'finchrg', type: 'checkbox', label: 'Finance Charge'},
  {id: 'firmed', type: 'checkbox', label: 'Firmed'},
  {id: 'forecasttype', type: 'select', label: 'Forecast Type'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fulfillingtransaction', type: 'select', label: 'Fulfilling/Receiving Transaction'},
  {id: 'fxaccount', type: 'select', label: 'Foreign Currency Adjustment Revenue Account'},
  {id: 'fxamount', type: 'currency', label: 'Amount (Foreign Currency)'},
  {id: 'fxcostestimate', type: 'currency', label: 'Est. Extended Cost (Line) (Foreign Currency)'},
  {id: 'fxcostestimaterate', type: 'currency', label: 'Est. Unit Cost (Foreign Currency)'},
  {id: 'fxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Line) (Foreign Currency)'},
  {id: 'fxtrancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction) (Foreign Currency)'},
  {id: 'fxvsoeallocation', type: 'currency', label: 'VSOE Allocation (Foreign Currency)'},
  {id: 'fxvsoeamount', type: 'currency', label: 'VSOE Amount (Foreign Currency)'},
  {id: 'fxvsoeprice', type: 'currency', label: 'VSOE Price (Foreign Currency)'},
  {id: 'gcoavailabeltocharge', type: 'checkbox', label: 'Available to Charge'},
  {id: 'gcoavailabletorefund', type: 'currency', label: 'Funds Available to Refund'},
  {id: 'gcoavsstreetmatch', type: 'text', label: 'AVS Street Match (Google)'},
  {id: 'gcoavszipmatch', type: 'text', label: 'AVS Zip Match (Google)'},
  {id: 'gcobuyeraccountage', type: 'integer', label: 'Buyer Account Age'},
  {id: 'gcobuyerip', type: 'text', label: 'Buyer IP Address'},
  {id: 'gcochargeamount', type: 'currency', label: 'Requested Charge Amount'},
  {id: 'gcochargebackamount', type: 'currency', label: 'Chargeback Amount'},
  {id: 'gcoconfirmedchargedtotal', type: 'currency', label: 'Charge Amount Confirmed'},
  {id: 'gcoconfirmedrefundedtotal', type: 'currency', label: 'Confirmed Refund Amount'},
  {id: 'gcocreditcardnumber', type: 'text', label: 'Credit Card (Google)'},
  {id: 'gcocscmatch', type: 'text', label: 'CSC Match (Google)'},
  {id: 'gcofinancialstate', type: 'text', label: 'Google Order Financial State'},
  {id: 'gcofulfillmentstate', type: 'text', label: 'Google Order Fulfillment State'},
  {id: 'gcoorderid', type: 'text', label: 'Google Order ID'},
  {id: 'gcoordertotal', type: 'currency', label: 'Google Order Total'},
  {id: 'gcopromotionamount', type: 'currency', label: 'Google Checkout Promotion Amount'},
  {id: 'gcopromotionname', type: 'text', label: 'Google Checkout Promotion'},
  {id: 'gcorefundamount', type: 'currency', label: 'Requested Refund Amount'},
  {id: 'gcoshippingtotal', type: 'currency', label: 'Google Shipping Total'},
  {id: 'gcostatechangeddetail', type: 'text', label: 'Reason for Cancellation'},
  {id: 'giftcertificate', type: 'text', label: 'Gift Certificate'},
  {id: 'grossamount', type: 'currency', label: 'Amount (Gross)'},
  {id: 'includeinforecast', type: 'checkbox', label: 'Include in Forecast'},
  {id: 'incoterm', type: 'select', label: 'Incoterm'},
  {id: 'intercostatus', type: 'select', label: 'Intercompany Status'},
  {id: 'intercotransaction', type: 'select', label: 'Paired Intercompany Transaction'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'invsoebundle', type: 'checkbox', label: 'In VSOE Bundle'},
  {id: 'isallocation', type: 'checkbox', label: 'Is Allocation'},
  {id: 'isbackflush', type: 'checkbox', label: 'Backflush'},
  {id: 'iscustomapproval', type: 'checkbox', label: 'Custom Approval'},
  {id: 'isgcochargeback', type: 'checkbox', label: 'Chargeback'},
  {id: 'isgcochargeconfirmed', type: 'checkbox', label: 'Charge Confirmed'},
  {id: 'isgcopaymentguaranteed', type: 'checkbox', label: 'Payment Guaranteed by Google'},
  {id: 'isgcorefundconfirmed', type: 'checkbox', label: 'Refund Confirmed'},
  {id: 'isinsidedelivery', type: 'checkbox', label: 'Is Inside Delivery'},
  {id: 'isinsidepickup', type: 'checkbox', label: 'Is Inside Pickup'},
  {id: 'isintercompanyadjustment', type: 'checkbox', label: 'Is Intercompany Adjustment'},
  {id: 'ispaypalmeth', type: 'checkbox', label: 'Is PayPal Payment Method'},
  {id: 'isreversal', type: 'checkbox', label: 'Is Reversal'},
  {id: 'isrevrectransaction', type: 'checkbox', label: 'Is Amortization/Revenue Recognition'},
  {id: 'isscrap', type: 'checkbox', label: 'Is Scrap'},
  {id: 'isshipaddress', type: 'checkbox', label: 'Residential Address'},
  {id: 'istransferpricecosting', type: 'checkbox', label: 'Use Item Cost as Transfer Cost'},
  {id: 'isvsoealloc', type: 'checkbox', label: 'VSOE Allocation Line'},
  {id: 'iswip', type: 'checkbox', label: 'WIP'},
  {id: 'item', type: 'select', label: 'Item'},
  {id: 'itemfulfillmentchoice', type: 'select', label: 'Fulfillment Choice (Line Level)'},
  {id: 'itemrevision', type: 'select', label: 'Item Revision'},
  {id: 'itemsubof', type: 'select', label: 'Item Sub of'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Date Last Modified'},
  {id: 'leadsource', type: 'select', label: 'Lead Source'},
  {id: 'line', type: 'integer', label: 'Line'},
  {id: 'lineuniquekey', type: 'integer', label: 'Line Unique Key'},
  {id: 'location', type: 'select', label: 'Location'},
  {id: 'mainline', type: 'checkbox', label: 'Main Line'},
  {id: 'mainname', type: 'select', label: 'Main Line Name'},
  {id: 'matchbilltoreceipt', type: 'checkbox', label: 'Match Bill To Receipt'},
  {id: 'memo', type: 'text', label: 'Memo'},
  {id: 'memomain', type: 'text', label: 'Memo (Main)'},
  {id: 'memorized', type: 'checkbox', label: 'Memorized'},
  {id: 'merchantaccount', type: 'text', label: 'Credit Card Processor'},
  {id: 'message', type: 'text', label: 'Message'},
  {id: 'multisubsidiary', type: 'checkbox', label: 'Intercompany'},
  {id: 'netamount', type: 'currency', label: 'Amount (Net)'},
  {id: 'nextapprover', type: 'select', label: 'Next Approver'},
  {id: 'nextbilldate', type: 'date', label: 'Next Bill Date'},
  {id: 'nonreimbursable', type: 'checkbox', label: 'Non-reimbursable'},
  {id: 'number', type: 'integer', label: 'Number'},
  {id: 'opportunity', type: 'select', label: 'Opportunity'},
  {id: 'otherrefnum', type: 'text', label: 'PO/Check Number'},
  {id: 'packagecount', type: 'integer', label: 'Package Count'},
  {id: 'paidtransaction', type: 'select', label: 'Paid Transaction'},
  {id: 'partner', type: 'select', label: 'Partner'},
  {id: 'partnercontribution', type: 'integer', label: 'Partner Contribution %'},
  {id: 'partnerrole', type: 'select', label: 'Partner Role'},
  {id: 'partnerteammember', type: 'select', label: 'Partner Team Member'},
  {id: 'payingtransaction', type: 'select', label: 'Paying Transaction'},
  {id: 'paymenteventdate', type: 'datetime', label: 'Payment Event Date'},
  {id: 'paymenteventholdreason', type: 'select', label: 'Payment Event Hold Reason'},
  {id: 'paymenteventpurchasecardused', type: 'checkbox', label: 'Payment Event Purchase Card Used'},
  {id: 'paymenteventpurchasedatasent', type: 'checkbox', label: 'Payment Event Purchase Data Sent'},
  {id: 'paymenteventresult', type: 'select', label: 'Payment Event Result'},
  {id: 'paymenteventtype', type: 'select', label: 'Payment Event Type'},
  {id: 'paymenthold', type: 'checkbox', label: 'Payment Hold'},
  {id: 'paymentmethod', type: 'select', label: 'Payment Method'},
  {id: 'paypalpending', type: 'checkbox', label: 'Pending PayPal Authorization'},
  {id: 'paypalstatus', type: 'text', label: 'PayPal Payment Status'},
  {id: 'paypaltranid', type: 'text', label: 'PayPal Transaction ID'},
  {id: 'pnrefnum', type: 'text', label: 'P/N Ref'},
  {id: 'poastext', type: 'text', label: 'PO/Check ID'},
  {id: 'posting', type: 'checkbox', label: 'Posting'},
  {id: 'postingperiod', type: 'period', label: 'Period'},
  {id: 'pricelevel', type: 'select', label: 'Price Level'},
  {id: 'printedpickingticket', type: 'checkbox', label: 'Printed Picking Ticket'},
  {id: 'probability', type: 'integer', label: 'Probability'},
  {id: 'projectedamount', type: 'currency', label: 'Projected Total'},
  {id: 'projecttask', type: 'select', label: 'Project Task'},
  {id: 'promocode', type: 'select', label: 'Promotion'},
  {id: 'purchaseorder', type: 'select', label: 'Purchase Order'},
  {id: 'quantity', type: 'float', label: 'Quantity'},
  {id: 'quantitybilled', type: 'float', label: 'Quantity Billed'},
  {id: 'quantitycommitted', type: 'float', label: 'Quantity Committed'},
  {id: 'quantitypacked', type: 'float', label: 'Quantity Packed'},
  {id: 'quantitypicked', type: 'float', label: 'Quantity Picked'},
  {id: 'quantityrevcommitted', type: 'float', label: 'Quantity Rev. Committed'},
  {id: 'quantityshiprecv', type: 'float', label: 'Quantity Shipped/Received'},
  {id: 'recognizedrevenue', type: 'currency', label: 'Amount (Recognized)'},
  {id: 'recordtype', type: 'text', label: 'Record Type'},
  {id: 'revcommitstatus', type: 'select', label: 'Rev. Commit. Status'},
  {id: 'revcommittingstatus', type: 'checkbox', label: 'Revenue Committing Status'},
  {id: 'revcommittingtransaction', type: 'select', label: 'Revenue Committing Transaction'},
  {id: 'revenuestatus', type: 'select', label: 'Revenue Status'},
  {id: 'reversaldate', type: 'date', label: 'Reversal Date'},
  {id: 'reversalnumber', type: 'text', label: 'Reversal Number'},
  {id: 'revrecenddate', type: 'date', label: 'Rev. Rec. End Date'},
  {id: 'revreconrevcommitment', type: 'checkbox', label: 'Rev. Rec. On Rev. Committment'},
  {id: 'revrecstartdate', type: 'date', label: 'Rev. Rec. Start Date'},
  {id: 'revrecterminmonths', type: 'integer', label: 'Rev. Rec. Term in Months'},
  {id: 'saleseffectivedate', type: 'date', label: 'Sales Effective Date'},
  {id: 'salesorder', type: 'select', label: 'Sales Order'},
  {id: 'salesrep', type: 'select', label: 'Sales Rep'},
  {id: 'salesteammember', type: 'select', label: 'Sales Team Member'},
  {id: 'salesteamrole', type: 'select', label: 'Sales Team Role'},
  {id: 'schedulingmethod', type: 'select', label: 'Scheduling Method'},
  {id: 'serialnumber', type: 'text', label: 'Transaction Serial/Lot Number'},
  {id: 'serialnumbercost', type: 'currency', label: 'Transaction Serial/Lot Amount'},
  {id: 'serialnumbercostadjustment', type: 'currency', label: 'Transaction Serial/Lot Cost Adjustment'},
  {id: 'serialnumberquantity', type: 'float', label: 'Transaction Serial/Lot Number Quantity'},
  {id: 'shipcarrier', type: 'select', label: 'Shipping Carrier'},
  {id: 'shipcomplete', type: 'checkbox', label: 'Ship Complete'},
  {id: 'shipcounty', type: 'text', label: 'Shipping County/State'},
  {id: 'shipdate', type: 'date', label: 'Ship Date'},
  {id: 'shipgroup', type: 'integer', label: 'Ship Group'},
  {id: 'shipmethod', type: 'select', label: 'Ship Via'},
  {id: 'shipping', type: 'checkbox', label: 'Shipping Line'},
  {id: 'shiprecvstatus', type: 'checkbox', label: 'Fulfillment/Receipt Status'},
  {id: 'shiprecvstatusline', type: 'checkbox', label: 'Fulfillment/Receipt Status (Line Level)'},
  {id: 'shipto', type: 'select', label: 'Ship To'},
  {id: 'source', type: 'select', label: 'Source'},
  {id: 'startdate', type: 'date', label: 'Start Date'},
  {id: 'status', type: 'select', label: 'Status'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxitem', type: 'select', label: 'Tax Item'},
  {id: 'taxline', type: 'checkbox', label: 'Tax Line'},
  {id: 'taxperiod', type: 'period', label: 'Tax Period'},
  {id: 'taxrate', type: 'currency', label: 'Rate'},
  {id: 'terms', type: 'select', label: 'Terms'},
  {id: 'termsofsale', type: 'select', label: 'Terms Of Sale'},
  {id: 'title', type: 'text', label: 'Title'},
  {id: 'tobeemailed', type: 'checkbox', label: 'To Be Emailed'},
  {id: 'tobeprinted', type: 'checkbox', label: 'To Be Printed'},
  {id: 'tosubsidiary', type: 'select', label: 'To Subsidiary'},
  {id: 'totalamount', type: 'currency', label: 'Amount (Transaction Total)'},
  {id: 'trackingnumbers', type: 'text', label: 'Tracking Number'},
  {id: 'trancostestimate', type: 'currency', label: 'Est. Extended Cost (Transaction)'},
  {id: 'trandate', type: 'date', label: 'Date'},
  {id: 'tranestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction)'},
  {id: 'tranestgrossprofitpct', type: 'percent', label: 'Est. Gross Profit Percent (Transaction)'},
  {id: 'tranfxestgrossprofit', type: 'currency', label: 'Est. Gross Profit (Transaction) (Foreign Currency)'},
  {id: 'tranid', type: 'text', label: 'Number/ID'},
  {id: 'tranisvsoebundle', type: 'checkbox', label: 'Transaction Is VSOE Bundle'},
  {id: 'transactiondiscount', type: 'checkbox', label: 'Transaction discount'},
  {id: 'transactionlinetype', type: 'select', label: 'Transaction Line Type'},
  {id: 'transactionnumber', type: 'text', label: 'Transaction Number'},
  {id: 'transferlocation', type: 'select', label: 'To Location'},
  {id: 'transferorderquantitycommitted', type: 'float', label: 'Transfer Order Quantity Committed'},
  {id: 'transferorderquantitypacked', type: 'float', label: 'Transfer Order Quantity Packed'},
  {id: 'transferorderquantitypicked', type: 'float', label: 'Transfer Order Quantity Picked'},
  {id: 'transferorderquantityreceived', type: 'float', label: 'Transfer Order Quantity Received'},
  {id: 'transferorderquantityshipped', type: 'float', label: 'Transfer Order Quantity Fulfilled'},
  {id: 'type', type: 'select', label: 'Type'},
  {id: 'unit', type: 'select', label: 'Units'},
  {id: 'unitcostoverride', type: 'currency', label: 'Unit Cost Override'},
  {id: 'vendtype', type: 'select', label: 'Vendor Category'},
  {id: 'visibletocustomer', type: 'checkbox', label: 'Available In Customer Center'},
  {id: 'voided', type: 'checkbox', label: 'Voided'},
  {id: 'vsoeallocation', type: 'currency', label: 'VSOE Allocation'},
  {id: 'vsoeamount', type: 'currency', label: 'VSOE Amount'},
  {id: 'vsoedeferral', type: 'select', label: 'Deferral'},
  {id: 'vsoedelivered', type: 'checkbox', label: 'Delivered'},
  {id: 'vsoepermitdiscount', type: 'select', label: 'Permit Discount'},
  {id: 'vsoeprice', type: 'currency', label: 'VSOE Price'},
  {id: 'website', type: 'select', label: 'Web Site'}
];

/** Transfer Order (transferorder) Search Filter values so they can be loaded dynamically. */
export const transferorderSearchFilterValues = [

];

/** Units Type (unitstype) Search Filter values so they can be loaded dynamically. */
export const unitstypeSearchFilterValues = [
{id: 'abbreviation', type: 'text', label: 'Abbreviation Name'},
  {id: 'baseunit', type: 'checkbox', label: 'Is Base Unit'},
  {id: 'conversionrate', type: 'text', label: 'Rate'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'pluralabbreviation', type: 'text', label: 'Abbreviation Name(Plural)'},
  {id: 'pluralname', type: 'text', label: 'Unit Name(Plural)'},
  {id: 'unitname', type: 'text', label: 'Unit Name'}
];

/** Userevent Script (usereventscript) Search Filter values so they can be loaded dynamically. */
export const usereventscriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Vendor (vendor) Search Filter values so they can be loaded dynamically. */
export const vendorSearchFilterValues = [
{id: 'accountnumber', type: 'text', label: 'Account'},
  {id: 'address', type: 'textarea', label: 'Address'},
  {id: 'addressee', type: 'text', label: 'Addressee'},
  {id: 'addresslabel', type: 'text', label: 'Address Label'},
  {id: 'addressphone', type: 'phone', label: 'Address Phone'},
  {id: 'attention', type: 'text', label: 'Attention'},
  {id: 'balance', type: 'currency', label: 'Balance'},
  {id: 'category', type: 'select', label: 'Category'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'comments', type: 'textarea', label: 'Comments'},
  {id: 'contact', type: 'text', label: 'Contact'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'creditlimit', type: 'currency', label: 'Credit Limit'},
  {id: 'currency', type: 'select', label: 'Currency'},
  {id: 'currentexchangerate', type: 'currency', label: 'Current Currency Exchange Rate'},
  {id: 'datecreated', type: 'datetime', label: 'Date Created'},
  {id: 'eligibleforcommission', type: 'checkbox', label: 'Eligible For Commission'},
  {id: 'email', type: 'text', label: 'Email'},
  {id: 'emailpreference', type: 'select', label: 'Email Preference'},
  {id: 'emailtransactions', type: 'checkbox', label: 'Email Transactions'},
  {id: 'entityid', type: 'text', label: 'Name/ID'},
  {id: 'expenseaccount', type: 'select', label: 'Default Expense Account'},
  {id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'fax', type: 'phone', label: 'Fax'},
  {id: 'faxtransactions', type: 'checkbox', label: 'Fax Transactions'},
  {id: 'firstname', type: 'text', label: 'First Name'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'fxbalance', type: 'currency', label: 'Balance (Foreign Currency)'},
  {id: 'fxunbilledorders', type: 'currency', label: 'Unbilled Orders (Foreign Currency)'},
  {id: 'giveaccess', type: 'checkbox', label: 'Login Access'},
  {id: 'globalsubscriptionstatus', type: 'select', label: 'Global Subscription Status'},
  {id: 'group', type: 'multiselect', label: 'Group'},
  {id: 'hasduplicates', type: 'checkbox', label: 'Duplicate'},
  {id: 'image', type: 'image', label: 'Image'},
  {id: 'incoterm', type: 'select', label: 'Incoterm'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'is1099eligible', type: 'checkbox', label: '1099 Eligible'},
  {id: 'isdefaultbilling', type: 'checkbox', label: 'Default Billing Address'},
  {id: 'isdefaultshipping', type: 'checkbox', label: 'Default Shipping Address'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'isjobresourcevend', type: 'checkbox', label: 'Is Job Resource'},
  {id: 'isperson', type: 'checkbox', label: 'Is Individual'},
  {id: 'laborcost', type: 'currency', label: 'Labor Cost'},
  {id: 'language', type: 'select', label: 'Language'},
  {id: 'lastmodifieddate', type: 'datetime', label: 'Last Modified'},
  {id: 'lastname', type: 'text', label: 'Last Name'},
  {id: 'level', type: 'select', label: 'Level'},
  {id: 'middlename', type: 'text', label: 'Middle Name'},
  {id: 'otherrelationships', type: 'multiselect', label: 'Other Relationships'},
  {id: 'payablesaccount', type: 'select', label: 'Default Payables Account'},
  {id: 'pec', type: 'text', label: 'PEC'},
  {id: 'permission', type: 'select', label: 'Permission'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'phoneticname', type: 'text', label: 'Phonetic Name'},
  {id: 'printtransactions', type: 'checkbox', label: 'Print Transactions'},
  {id: 'purchaseorderamount', type: 'float', label: 'Vendor Bill - Purchase Order Amount Tolerance'},
  {id: 'purchaseorderquantity', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Tolerance'},
  {id: 'purchaseorderquantitydiff', type: 'float', label: 'Vendor Bill - Purchase Order Quantity Difference'},
  {id: 'receiptamount', type: 'float', label: 'Vendor Bill - Item Receipt Amount Tolerance'},
  {id: 'receiptquantity', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Tolerance'},
  {id: 'receiptquantitydiff', type: 'float', label: 'Vendor Bill - Item Receipt Quantity Difference'},
  {id: 'representingsubsidiary', type: 'select', label: 'Represents Subsidiary'},
  {id: 'salutation', type: 'text', label: 'Mr./Mrs...'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'subsidiary', type: 'select', label: 'Subsidiary'},
  {id: 'taxidnum', type: 'text', label: 'Tax ID'},
  {id: 'title', type: 'text', label: 'Job Title'},
  {id: 'type', type: 'select', label: 'Entity Type'},
  {id: 'unbilledorders', type: 'currency', label: 'Unbilled Orders'},
  {id: 'url', type: 'url', label: 'Web Address'},
  {id: 'vatregnumber', type: 'text', label: 'Tax Number'},
  {id: 'workcalendar', type: 'select', label: 'Work Calendar'},
  {id: 'zipcode', type: 'text', label: 'Zip'}
];

/** Vendor Bill (vendorbill) Search Filter values so they can be loaded dynamically. */
export const vendorbillSearchFilterValues = [

];

/** Vendor Category (vendorcategory) Search Filter values so they can be loaded dynamically. */
export const vendorcategorySearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'}
];

/** Vendor Credit (vendorcredit) Search Filter values so they can be loaded dynamically. */
export const vendorcreditSearchFilterValues = [

];

/** Vendor Payment (vendorpayment) Search Filter values so they can be loaded dynamically. */
export const vendorpaymentSearchFilterValues = [

];

/** Vendor Return Authorization (vendorreturnauthorization) Search Filter values so they can be loaded dynamically. */
export const vendorreturnauthorizationSearchFilterValues = [

];

/** Vendor-Subsidiary Relationship (vendorsubsidiaryrelationship) Search Filter values so they can be loaded dynamically. */
export const vendorsubsidiaryrelationshipSearchFilterValues = [

];

/** Website (website) Search Filter values so they can be loaded dynamically. */
export const websiteSearchFilterValues = [

];

/** Win-Loss Reason (winlossreason) Search Filter values so they can be loaded dynamically. */
export const winlossreasonSearchFilterValues = [
{id: 'externalid', type: 'select', label: 'External ID'},
  {id: 'externalidstring', type: 'text', label: 'External ID (Text)'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'}
];

/** Workflow Action Script (workflowactionscript) Search Filter values so they can be loaded dynamically. */
export const workflowactionscriptSearchFilterValues = [
{id: 'afterinstallfunction', type: 'text', label: 'After Install Function'},
  {id: 'aftersubmitfunction', type: 'text', label: 'After Submit Function'},
  {id: 'afterupdatefunction', type: 'text', label: 'After Update Function'},
  {id: 'beforeinstallfunction', type: 'text', label: 'Before Install Function'},
  {id: 'beforeloadfunction', type: 'text', label: 'Before Load Function'},
  {id: 'beforesubmitfunction', type: 'text', label: 'Before Submit Function'},
  {id: 'beforeuninstallfunction', type: 'text', label: 'Before Uninstall Function'},
  {id: 'beforeupdatefunction', type: 'text', label: 'Before Update Function'},
  {id: 'defaultfunction', type: 'text', label: 'Default Function'},
  {id: 'deletefunction', type: 'text', label: 'Delete Function'},
  {id: 'description', type: 'textarea', label: 'Details'},
  {id: 'fieldchangedfunction', type: 'text', label: 'Field Changed Function'},
  {id: 'formuladate', type: 'date', label: 'Formula (Date)'},
  {id: 'formulanumeric', type: 'float', label: 'Formula (Numeric)'},
  {id: 'formulatext', type: 'text', label: 'Formula (Text)'},
  {id: 'getfunction', type: 'text', label: 'Get Function'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'lineinitfunction', type: 'text', label: 'Line Init Function'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'owner', type: 'select', label: 'Owner'},
  {id: 'pageinitfunction', type: 'text', label: 'Page Init Function'},
  {id: 'portlettype', type: 'select', label: 'Portlet Type'},
  {id: 'postfunction', type: 'text', label: 'Post Function'},
  {id: 'postsourcingfunction', type: 'text', label: 'Post Sourcing Function'},
  {id: 'putfunction', type: 'text', label: 'Put Function'},
  {id: 'recalcfunction', type: 'text', label: 'Recalc Function'},
  {id: 'saverecordfunction', type: 'text', label: 'Save Record Function'},
  {id: 'scriptfile', type: 'select', label: 'Script File'},
  {id: 'scriptid', type: 'text', label: 'Script ID'},
  {id: 'scripttype', type: 'select', label: 'Script Type'},
  {id: 'validatedeletefunction', type: 'text', label: 'Validate Delete Function'},
  {id: 'validatefieldfunction', type: 'text', label: 'Validate Field Function'},
  {id: 'validateinsertfunction', type: 'text', label: 'Validate Insert Function'},
  {id: 'validatelinefunction', type: 'text', label: 'Validate Line Function'}
];

/** Work Order (workorder) Search Filter values so they can be loaded dynamically. */
export const workorderSearchFilterValues = [

];

/** Work Order Close (workorderclose) Search Filter values so they can be loaded dynamically. */
export const workordercloseSearchFilterValues = [

];

/** Work Order Completion (workordercompletion) Search Filter values so they can be loaded dynamically. */
export const workordercompletionSearchFilterValues = [

];

/** Work Order Issue (workorderissue) Search Filter values so they can be loaded dynamically. */
export const workorderissueSearchFilterValues = [

];

/** Workplace (workplace) Search Filter values so they can be loaded dynamically. */
export const workplaceSearchFilterValues = [
{id: 'address', type: 'textarea', label: 'Address'},
  {id: 'city', type: 'text', label: 'City'},
  {id: 'country', type: 'select', label: 'Country'},
  {id: 'county', type: 'text', label: 'County/State'},
  {id: 'internalid', type: 'select', label: 'Internal ID'},
  {id: 'internalidnumber', type: 'integer', label: 'Internal ID (Number)'},
  {id: 'isinactive', type: 'checkbox', label: 'Inactive'},
  {id: 'name', type: 'text', label: 'Name'},
  {id: 'phone', type: 'phone', label: 'Phone'},
  {id: 'state', type: 'select', label: 'State/Province'},
  {id: 'zip', type: 'text', label: 'Zip'}
];

/** Field Search Filter values definitions so they can be consumed dynamically not only as types. */
export const typedSearchFilterValues:  {[name: string]:{id: string, type: string ,label: string}[]} = {
account: accountSearchFilterValues,
  accountingbook: accountingbookSearchFilterValues,
  accountingcontext: accountingcontextSearchFilterValues,
  accountingperiod: accountingperiodSearchFilterValues,
  accountingtransaction: accountingtransactionSearchFilterValues,
  activity: activitySearchFilterValues,
  address: addressSearchFilterValues,
  advintercompanyjournalentry: advintercompanyjournalentrySearchFilterValues,
  allocationschedule: allocationscheduleSearchFilterValues,
  amortizationschedule: amortizationscheduleSearchFilterValues,
  amortizationtemplate: amortizationtemplateSearchFilterValues,
  assemblybuild: assemblybuildSearchFilterValues,
  assemblyitem: assemblyitemSearchFilterValues,
  assemblyitembom: assemblyitembomSearchFilterValues,
  assemblyunbuild: assemblyunbuildSearchFilterValues,
  billingaccount: billingaccountSearchFilterValues,
  billingclass: billingclassSearchFilterValues,
  billingratecard: billingratecardSearchFilterValues,
  billingrevenueevent: billingrevenueeventSearchFilterValues,
  billingschedule: billingscheduleSearchFilterValues,
  bin: binSearchFilterValues,
  bintransfer: bintransferSearchFilterValues,
  binworksheet: binworksheetSearchFilterValues,
  blanketpurchaseorder: blanketpurchaseorderSearchFilterValues,
  bom: bomSearchFilterValues,
  bomrevision: bomrevisionSearchFilterValues,
  bulkownershiptransfer: bulkownershiptransferSearchFilterValues,
  bundleinstallationscript: bundleinstallationscriptSearchFilterValues,
  calendarevent: calendareventSearchFilterValues,
  campaign: campaignSearchFilterValues,
  campaignresponse: campaignresponseSearchFilterValues,
  campaigntemplate: campaigntemplateSearchFilterValues,
  cashrefund: cashrefundSearchFilterValues,
  cashsale: cashsaleSearchFilterValues,
  charge: chargeSearchFilterValues,
  chargerule: chargeruleSearchFilterValues,
  check: checkSearchFilterValues,
  classification: classificationSearchFilterValues,
  clientscript: clientscriptSearchFilterValues,
  cmscontent: cmscontentSearchFilterValues,
  cmscontenttype: cmscontenttypeSearchFilterValues,
  commercecategory: commercecategorySearchFilterValues,
  competitor: competitorSearchFilterValues,
  consolidatedexchangerate: consolidatedexchangerateSearchFilterValues,
  contact: contactSearchFilterValues,
  contactcategory: contactcategorySearchFilterValues,
  contactrole: contactroleSearchFilterValues,
  costcategory: costcategorySearchFilterValues,
  couponcode: couponcodeSearchFilterValues,
  creditcardcharge: creditcardchargeSearchFilterValues,
  creditcardrefund: creditcardrefundSearchFilterValues,
  creditmemo: creditmemoSearchFilterValues,
  currency: currencySearchFilterValues,
  customer: customerSearchFilterValues,
  customercategory: customercategorySearchFilterValues,
  customerdeposit: customerdepositSearchFilterValues,
  customermessage: customermessageSearchFilterValues,
  customerpayment: customerpaymentSearchFilterValues,
  customerpaymentauthorization: customerpaymentauthorizationSearchFilterValues,
  customerrefund: customerrefundSearchFilterValues,
  customerstatus: customerstatusSearchFilterValues,
  customersubsidiaryrelationship: customersubsidiaryrelationshipSearchFilterValues,
  customrecord: customrecordSearchFilterValues,
  deletedrecord: deletedrecordSearchFilterValues,
  department: departmentSearchFilterValues,
  deposit: depositSearchFilterValues,
  depositapplication: depositapplicationSearchFilterValues,
  descriptionitem: descriptionitemSearchFilterValues,
  discountitem: discountitemSearchFilterValues,
  downloaditem: downloaditemSearchFilterValues,
  emailtemplate: emailtemplateSearchFilterValues,
  employee: employeeSearchFilterValues,
  entity: entitySearchFilterValues,
  entityaccountmapping: entityaccountmappingSearchFilterValues,
  entitygroup: entitygroupSearchFilterValues,
  estimate: estimateSearchFilterValues,
  expensecategory: expensecategorySearchFilterValues,
  expensereport: expensereportSearchFilterValues,
  fairvalueprice: fairvaluepriceSearchFilterValues,
  file: fileSearchFilterValues,
  fixedamountprojectrevenuerule: fixedamountprojectrevenueruleSearchFilterValues,
  folder: folderSearchFilterValues,
  fulfillmentrequest: fulfillmentrequestSearchFilterValues,
  genericresource: genericresourceSearchFilterValues,
  giftcertificate: giftcertificateSearchFilterValues,
  giftcertificateitem: giftcertificateitemSearchFilterValues,
  globalaccountmapping: globalaccountmappingSearchFilterValues,
  globalinventoryrelationship: globalinventoryrelationshipSearchFilterValues,
  inboundshipment: inboundshipmentSearchFilterValues,
  intercompallocationschedule: intercompallocationscheduleSearchFilterValues,
  intercompanyjournalentry: intercompanyjournalentrySearchFilterValues,
  intercompanytransferorder: intercompanytransferorderSearchFilterValues,
  inventoryadjustment: inventoryadjustmentSearchFilterValues,
  inventorycostrevaluation: inventorycostrevaluationSearchFilterValues,
  inventorycount: inventorycountSearchFilterValues,
  inventorydetail: inventorydetailSearchFilterValues,
  inventoryitem: inventoryitemSearchFilterValues,
  inventorynumber: inventorynumberSearchFilterValues,
  inventorynumberbin: inventorynumberbinSearchFilterValues,
  inventorystatus: inventorystatusSearchFilterValues,
  inventorystatuschange: inventorystatuschangeSearchFilterValues,
  inventorytransfer: inventorytransferSearchFilterValues,
  invoice: invoiceSearchFilterValues,
  issue: issueSearchFilterValues,
  issueproduct: issueproductSearchFilterValues,
  issueproductversion: issueproductversionSearchFilterValues,
  item: itemSearchFilterValues,
  itemaccountmapping: itemaccountmappingSearchFilterValues,
  itembinnumber: itembinnumberSearchFilterValues,
  itemdemandplan: itemdemandplanSearchFilterValues,
  itemfulfillment: itemfulfillmentSearchFilterValues,
  itemgroup: itemgroupSearchFilterValues,
  itemlocationconfiguration: itemlocationconfigurationSearchFilterValues,
  itemreceipt: itemreceiptSearchFilterValues,
  itemrevision: itemrevisionSearchFilterValues,
  itemsupplyplan: itemsupplyplanSearchFilterValues,
  job: jobSearchFilterValues,
  jobstatus: jobstatusSearchFilterValues,
  jobtype: jobtypeSearchFilterValues,
  journalentry: journalentrySearchFilterValues,
  kititem: kititemSearchFilterValues,
  laborbasedprojectrevenuerule: laborbasedprojectrevenueruleSearchFilterValues,
  landedcost: landedcostSearchFilterValues,
  lead: leadSearchFilterValues,
  location: locationSearchFilterValues,
  lotnumberedassemblyitem: lotnumberedassemblyitemSearchFilterValues,
  lotnumberedinventoryitem: lotnumberedinventoryitemSearchFilterValues,
  manufacturingcosttemplate: manufacturingcosttemplateSearchFilterValues,
  manufacturingoperationtask: manufacturingoperationtaskSearchFilterValues,
  manufacturingrouting: manufacturingroutingSearchFilterValues,
  mapreducescript: mapreducescriptSearchFilterValues,
  markupitem: markupitemSearchFilterValues,
  massupdatescript: massupdatescriptSearchFilterValues,
  merchandisehierarchylevel: merchandisehierarchylevelSearchFilterValues,
  merchandisehierarchynode: merchandisehierarchynodeSearchFilterValues,
  merchandisehierarchyversion: merchandisehierarchyversionSearchFilterValues,
  message: messageSearchFilterValues,
  mfgplannedtime: mfgplannedtimeSearchFilterValues,
  msesubsidiary: msesubsidiarySearchFilterValues,
  nexus: nexusSearchFilterValues,
  noninventoryitem: noninventoryitemSearchFilterValues,
  note: noteSearchFilterValues,
  notetype: notetypeSearchFilterValues,
  opportunity: opportunitySearchFilterValues,
  orderschedule: orderscheduleSearchFilterValues,
  originatinglead: originatingleadSearchFilterValues,
  otherchargeitem: otherchargeitemSearchFilterValues,
  othername: othernameSearchFilterValues,
  othernamecategory: othernamecategorySearchFilterValues,
  partner: partnerSearchFilterValues,
  partnercategory: partnercategorySearchFilterValues,
  paycheck: paycheckSearchFilterValues,
  paycheckjournal: paycheckjournalSearchFilterValues,
  paymentitem: paymentitemSearchFilterValues,
  paymentmethod: paymentmethodSearchFilterValues,
  payrollbatch: payrollbatchSearchFilterValues,
  payrollitem: payrollitemSearchFilterValues,
  pctcompleteprojectrevenuerule: pctcompleteprojectrevenueruleSearchFilterValues,
  periodendjournal: periodendjournalSearchFilterValues,
  phonecall: phonecallSearchFilterValues,
  portlet: portletSearchFilterValues,
  pricebook: pricebookSearchFilterValues,
  pricelevel: pricelevelSearchFilterValues,
  priceplan: priceplanSearchFilterValues,
  pricing: pricingSearchFilterValues,
  pricinggroup: pricinggroupSearchFilterValues,
  projectexpensetype: projectexpensetypeSearchFilterValues,
  projecttask: projecttaskSearchFilterValues,
  projecttaskassignment: projecttaskassignmentSearchFilterValues,
  projecttemplate: projecttemplateSearchFilterValues,
  promotioncode: promotioncodeSearchFilterValues,
  prospect: prospectSearchFilterValues,
  purchasecontract: purchasecontractSearchFilterValues,
  purchaseorder: purchaseorderSearchFilterValues,
  purchaserequisition: purchaserequisitionSearchFilterValues,
  reallocateitem: reallocateitemSearchFilterValues,
  receiveinboundshipment: receiveinboundshipmentSearchFilterValues,
  resourceallocation: resourceallocationSearchFilterValues,
  restlet: restletSearchFilterValues,
  returnauthorization: returnauthorizationSearchFilterValues,
  revenuearrangement: revenuearrangementSearchFilterValues,
  revenuecommitment: revenuecommitmentSearchFilterValues,
  revenuecommitmentreversal: revenuecommitmentreversalSearchFilterValues,
  revenueplan: revenueplanSearchFilterValues,
  revrecschedule: revrecscheduleSearchFilterValues,
  revrectemplate: revrectemplateSearchFilterValues,
  role: roleSearchFilterValues,
  salesorder: salesorderSearchFilterValues,
  salesrole: salesroleSearchFilterValues,
  salestaxitem: salestaxitemSearchFilterValues,
  scheduledscript: scheduledscriptSearchFilterValues,
  scheduledscriptinstance: scheduledscriptinstanceSearchFilterValues,
  scriptdeployment: scriptdeploymentSearchFilterValues,
  serializedassemblyitem: serializedassemblyitemSearchFilterValues,
  serializedinventoryitem: serializedinventoryitemSearchFilterValues,
  serviceitem: serviceitemSearchFilterValues,
  shipitem: shipitemSearchFilterValues,
  shoppingcart: shoppingcartSearchFilterValues,
  solution: solutionSearchFilterValues,
  statisticaljournalentry: statisticaljournalentrySearchFilterValues,
  storepickupfulfillment: storepickupfulfillmentSearchFilterValues,
  subscription: subscriptionSearchFilterValues,
  subscriptionchangeorder: subscriptionchangeorderSearchFilterValues,
  subscriptionline: subscriptionlineSearchFilterValues,
  subscriptionplan: subscriptionplanSearchFilterValues,
  subsidiary: subsidiarySearchFilterValues,
  subtotalitem: subtotalitemSearchFilterValues,
  suitelet: suiteletSearchFilterValues,
  supplychainsnapshot: supplychainsnapshotSearchFilterValues,
  supportcase: supportcaseSearchFilterValues,
  task: taskSearchFilterValues,
  taxacct: taxacctSearchFilterValues,
  taxdetail: taxdetailSearchFilterValues,
  taxgroup: taxgroupSearchFilterValues,
  taxperiod: taxperiodSearchFilterValues,
  taxtype: taxtypeSearchFilterValues,
  term: termSearchFilterValues,
  timebill: timebillSearchFilterValues,
  timeentry: timeentrySearchFilterValues,
  timesheet: timesheetSearchFilterValues,
  topic: topicSearchFilterValues,
  transaction: transactionSearchFilterValues,
  transferorder: transferorderSearchFilterValues,
  unitstype: unitstypeSearchFilterValues,
  usereventscript: usereventscriptSearchFilterValues,
  vendor: vendorSearchFilterValues,
  vendorbill: vendorbillSearchFilterValues,
  vendorcategory: vendorcategorySearchFilterValues,
  vendorcredit: vendorcreditSearchFilterValues,
  vendorpayment: vendorpaymentSearchFilterValues,
  vendorreturnauthorization: vendorreturnauthorizationSearchFilterValues,
  vendorsubsidiaryrelationship: vendorsubsidiaryrelationshipSearchFilterValues,
  website: websiteSearchFilterValues,
  winlossreason: winlossreasonSearchFilterValues,
  workflowactionscript: workflowactionscriptSearchFilterValues,
  workorder: workorderSearchFilterValues,
  workorderclose: workordercloseSearchFilterValues,
  workordercompletion: workordercompletionSearchFilterValues,
  workorderissue: workorderissueSearchFilterValues,
  workplace: workplaceSearchFilterValues
};
