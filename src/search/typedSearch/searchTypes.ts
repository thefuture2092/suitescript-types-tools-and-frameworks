export type GetSelectValueFilterOperator = ("contains" | "is" | "startsWith");

export type SearchDateFieldOperator = ("after" | "before" | "empty" | "notAfter" | "notBefore" | "notEmpty" | "notOn" | "notOnOrAfter" | "notOnOrBefore" | "notWithin" | "on" | "onOrAfter" | "onOrBefore" | "within");

export type SearchDoubleFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");

export type SearchEnumMultiSelectFieldOperator = ("anyOf" | "noneOf");

export type SearchLongFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");

export type SearchMultiSelectFieldOperator = ("anyOf" | "noneOf");

export type SearchStringFieldOperator = ("contains" | "doesNotContain" | "doesNotStartWith" | "empty" | "hasKeywords" | "is" | "isNot" | "notEmpty" | "startsWith");

export type SearchTextNumberFieldOperator = ("between" | "empty" | "equalTo" | "greaterThan" | "greaterThanOrEqualTo" | "lessThan" | "lessThanOrEqualTo" | "notBetween" | "notEmpty" | "notEqualTo" | "notGreaterThan" | "notGreaterThanOrEqualTo" | "notLessThan" | "notLessThanOrEqualTo");



export type SearchDate = ("fiscalHalfBeforeLast" | "fiscalHalfBeforeLastToDate" | "fiscalQuarterBeforeLast" | "fiscalQuarterBeforeLastToDate" | "fiscalYearBeforeLast" | "fiscalYearBeforeLastToDate" | "fiveDaysAgo" | "fiveDaysFromNow" | "fourDaysAgo" | "fourDaysFromNow" | "fourWeeksStartingThisWeek" | "lastBusinessWeek" | "lastFiscalHalf" | "lastFiscalHalfOneFiscalYearAgo" | "lastFiscalHalfToDate" | "lastFiscalQuarter" | "lastFiscalQuarterOneFiscalYearAgo" | "lastFiscalQuarterToDate" | "lastFiscalQuarterTwoFiscalYearsAgo" | "lastFiscalYear" | "lastFiscalYearToDate" | "lastMonth" | "lastMonthOneFiscalQuarterAgo" | "lastMonthOneFiscalYearAgo" | "lastMonthToDate" | "lastMonthTwoFiscalQuartersAgo" | "lastMonthTwoFiscalYearsAgo" | "lastRollingHalf" | "lastRollingQuarter" | "lastRollingYear" | "lastWeek" | "lastWeekToDate" | "monthAfterNext" | "monthAfterNextToDate" | "monthBeforeLast" | "monthBeforeLastToDate" | "nextBusinessWeek" | "nextFiscalHalf" | "nextFiscalQuarter" | "nextFiscalYear" | "nextFourWeeks" | "nextMonth" | "nextOneHalf" | "nextOneMonth" | "nextOneQuarter" | "nextOneWeek" | "nextOneYear" | "nextWeek" | "ninetyDaysAgo" | "ninetyDaysFromNow" | "oneYearBeforeLast" | "previousFiscalQuartersLastFiscalYear" | "previousFiscalQuartersThisFiscalYear" | "previousMonthsLastFiscalHalf" | "previousMonthsLastFiscalQuarter" | "previousMonthsLastFiscalYear" | "previousMonthsSameFiscalHalfLastFiscalYear" | "previousMonthsSameFiscalQuarterLastFiscalYear" | "previousMonthsThisFiscalHalf" | "previousMonthsThisFiscalQuarter" | "previousMonthsThisFiscalYear" | "previousOneDay" | "previousOneHalf" | "previousOneMonth" | "previousOneQuarter" | "previousOneWeek" | "previousOneYear" | "previousRollingHalf" | "previousRollingQuarter" | "previousRollingYear" | "sameDayFiscalQuarterBeforeLast" | "sameDayFiscalYearBeforeLast" | "sameDayLastFiscalQuarter" | "sameDayLastFiscalYear" | "sameDayLastMonth" | "sameDayLastWeek" | "sameDayMonthBeforeLast" | "sameDayWeekBeforeLast" | "sameFiscalHalfLastFiscalYear" | "sameFiscalHalfLastFiscalYearToDate" | "sameFiscalQuarterFiscalYearBeforeLast" | "sameFiscalQuarterLastFiscalYear" | "sameFiscalQuarterLastFiscalYearToDate" | "sameMonthFiscalQuarterBeforeLast" | "sameMonthFiscalYearBeforeLast" | "sameMonthLastFiscalQuarter" | "sameMonthLastFiscalQuarterToDate" | "sameMonthLastFiscalYear" | "sameMonthLastFiscalYearToDate" | "sameWeekFiscalYearBeforeLast" | "sameWeekLastFiscalYear" | "sixtyDaysAgo" | "sixtyDaysFromNow" | "startOfFiscalHalfBeforeLast" | "startOfFiscalQuarterBeforeLast" | "startOfFiscalYearBeforeLast" | "startOfLastBusinessWeek" | "startOfLastFiscalHalf" | "startOfLastFiscalHalfOneFiscalYearAgo" | "startOfLastFiscalQuarter" | "startOfLastFiscalQuarterOneFiscalYearAgo" | "startOfLastFiscalYear" | "startOfLastMonth" | "startOfLastMonthOneFiscalQuarterAgo" | "startOfLastMonthOneFiscalYearAgo" | "startOfLastRollingHalf" | "startOfLastRollingQuarter" | "startOfLastRollingYear" | "startOfLastWeek" | "startOfMonthBeforeLast" | "startOfNextBusinessWeek" | "startOfNextFiscalHalf" | "startOfNextFiscalQuarter" | "startOfNextFiscalYear" | "startOfNextMonth" | "startOfNextWeek" | "startOfPreviousRollingHalf" | "startOfPreviousRollingQuarter" | "startOfPreviousRollingYear" | "startOfSameFiscalHalfLastFiscalYear" | "startOfSameFiscalQuarterLastFiscalYear" | "startOfSameMonthLastFiscalQuarter" | "startOfSameMonthLastFiscalYear" | "startOfThisBusinessWeek" | "startOfThisFiscalHalf" | "startOfThisFiscalQuarter" | "startOfThisFiscalYear" | "startOfThisMonth" | "startOfThisWeek" | "startOfThisYear" | "startOfWeekBeforeLast" | "tenDaysAgo" | "tenDaysFromNow" | "thirtyDaysAgo" | "thirtyDaysFromNow" | "thisBusinessWeek" | "thisFiscalHalf" | "thisFiscalHalfToDate" | "thisFiscalQuarter" | "thisFiscalQuarterToDate" | "thisFiscalYear" | "thisFiscalYearToDate" | "thisMonth" | "thisMonthToDate" | "thisRollingHalf" | "thisRollingQuarter" | "thisRollingYear" | "thisWeek" | "thisWeekToDate" | "thisYear" | "threeDaysAgo" | "threeDaysFromNow" | "threeFiscalQuartersAgo" | "threeFiscalQuartersAgoToDate" | "threeFiscalYearsAgo" | "threeFiscalYearsAgoToDate" | "threeMonthsAgo" | "threeMonthsAgoToDate" | "today" | "tomorrow" | "twoDaysAgo" | "twoDaysFromNow" | "weekAfterNext" | "weekAfterNextToDate" | "weekBeforeLast" | "weekBeforeLastToDate" | "yesterday");


export type SearchRecordType = ("account" | "accountingPeriod" | "accountingTransaction" | "billingAccount" | "billingSchedule" | "bin" | "budget" | "calendarEvent" | "campaign" | "charge" | "classification" | "contact" | "contactCategory" | "contactRole" | "costCategory" | "consolidatedExchangeRate" | "couponCode" | "currencyRate" | "customer" | "customerCategory" | "customerMessage" | "customerStatus" | "customList" | "customRecord" | "department" | "employee" | "entityGroup" | "expenseCategory" | "fairValuePrice" | "file" | "folder" | "giftCertificate" | "globalAccountMapping" | "hcmJob" | "inboundShipment" | "inventoryNumber" | "item" | "itemAccountMapping" | "itemDemandPlan" | "itemRevision" | "itemSupplyPlan" | "issue" | "job" | "jobStatus" | "jobType" | "location" | "manufacturingCostTemplate" | "manufacturingOperationTask" | "manufacturingRouting" | "message" | "nexus" | "note" | "noteType" | "opportunity" | "otherNameCategory" | "partner" | "partnerCategory" | "paycheck" | "paymentMethod" | "payrollItem" | "phoneCall" | "priceLevel" | "pricingGroup" | "projectTask" | "promotionCode" | "resourceAllocation" | "revRecSchedule" | "revRecTemplate" | "salesRole" | "salesTaxItem" | "solution" | "siteCategory" | "subsidiary" | "supportCase" | "task" | "taxGroup" | "taxType" | "term" | "timeBill" | "timeSheet" | "topic" | "transaction" | "unitsType" | "usage" | "vendor" | "vendorCategory" | "winLossReason");





// export type InitializeAuxRefType = ("shippingGroup" | "arAccount" | "apAccount" | "itemFulfillment");

// export type InitializeRefType = ("assemblyItem" | "assemblyBuild" | "cashSale" | "creditMemo" | "customer" | "customerDeposit" | "employee" | "estimate" | "interCompanyTransferOrder" | "invoice" | "location" | "lotNumberedAssemblyItem" | "opportunity" | "purchaseOrder" | "purchaseRequisition" | "returnAuthorization" | "salesOrder" | "serializedAssemblyItem" | "transferOrder" | "vendor" | "vendorBill" | "vendorReturnAuthorization" | "workOrder");

// export type InitializeType = ("assemblyBuild" | "assemblyUnbuild" | "binWorksheet" | "cashRefund" | "cashSale" | "creditMemo" | "customerPayment" | "customerRefund" | "depositApplication" | "estimate" | "invoice" | "itemFulfillment" | "itemReceipt" | "inventoryTransfer" | "purchaseOrder" | "returnAuthorization" | "salesOrder" | "vendorBill" | "vendorCredit" | "vendorReturnAuthorization" | "vendorPayment" | "workOrder" | "workOrderIssue" | "workOrderCompletion" | "workOrderClose");

export type RecordType = ("account" | "accountingPeriod" | "advInterCompanyJournalEntry" | "assemblyBuild" | "assemblyUnbuild" | "assemblyItem" | "billingAccount" | "billingSchedule" | "bin" | "binTransfer" | "binWorksheet" | "budget" | "budgetCategory" | "calendarEvent" | "campaign" | "campaignAudience" | "campaignCategory" | "campaignChannel" | "campaignFamily" | "campaignOffer" | "campaignResponse" | "campaignSearchEngine" | "campaignSubscription" | "campaignVertical" | "cashRefund" | "cashSale" | "check" | "charge" | "classification" | "consolidatedExchangeRate" | "contact" | "contactCategory" | "contactRole" | "costCategory" | "couponCode" | "creditMemo" | "crmCustomField" | "currency" | "currencyRate" | "customList" | "customRecord" | "customRecordCustomField" | "customRecordType" | "customTransaction" | "customTransactionType" | "customer" | "customerCategory" | "customerDeposit" | "customerMessage" | "customerPayment" | "customerRefund" | "customerStatus" | "deposit" | "depositApplication" | "department" | "descriptionItem" | "discountItem" | "downloadItem" | "employee" | "entityCustomField" | "entityGroup" | "estimate" | "expenseCategory" | "expenseReport" | "fairValuePrice" | "file" | "folder" | "giftCertificate" | "giftCertificateItem" | "globalAccountMapping" | "hcmJob" | "inboundShipment" | "interCompanyJournalEntry" | "interCompanyTransferOrder" | "inventoryAdjustment" | "inventoryCostRevaluation" | "inventoryItem" | "inventoryNumber" | "inventoryTransfer" | "invoice" | "itemAccountMapping" | "itemCustomField" | "itemDemandPlan" | "itemFulfillment" | "itemGroup" | "itemNumberCustomField" | "itemOptionCustomField" | "itemSupplyPlan" | "itemRevision" | "issue" | "job" | "jobStatus" | "jobType" | "itemReceipt" | "journalEntry" | "kitItem" | "leadSource" | "location" | "lotNumberedInventoryItem" | "lotNumberedAssemblyItem" | "markupItem" | "message" | "manufacturingCostTemplate" | "manufacturingOperationTask" | "manufacturingRouting" | "nexus" | "nonInventoryPurchaseItem" | "nonInventoryResaleItem" | "nonInventorySaleItem" | "note" | "noteType" | "opportunity" | "otherChargePurchaseItem" | "otherChargeResaleItem" | "otherChargeSaleItem" | "otherCustomField" | "otherNameCategory" | "partner" | "partnerCategory" | "paycheck" | "paycheckJournal" | "paymentItem" | "paymentMethod" | "payrollItem" | "phoneCall" | "priceLevel" | "pricingGroup" | "projectTask" | "promotionCode" | "purchaseOrder" | "purchaseRequisition" | "resourceAllocation" | "returnAuthorization" | "revRecSchedule" | "revRecTemplate" | "salesOrder" | "salesRole" | "salesTaxItem" | "serializedInventoryItem" | "serializedAssemblyItem" | "servicePurchaseItem" | "serviceResaleItem" | "serviceSaleItem" | "solution" | "siteCategory" | "state" | "statisticalJournalEntry" | "subsidiary" | "subtotalItem" | "supportCase" | "supportCaseIssue" | "supportCaseOrigin" | "supportCasePriority" | "supportCaseStatus" | "supportCaseType" | "task" | "taxAcct" | "taxGroup" | "taxType" | "term" | "timeBill" | "timeSheet" | "topic" | "transferOrder" | "transactionBodyCustomField" | "transactionColumnCustomField" | "unitsType" | "usage" | "vendor" | "vendorCategory" | "vendorBill" | "vendorCredit" | "vendorPayment" | "vendorReturnAuthorization" | "winLossReason" | "workOrder" | "workOrderIssue" | "workOrderCompletion" | "workOrderClose");

export interface SearchBooleanCustomField extends SearchCustomField {
	searchValue?: boolean;
}

export interface SearchBooleanField {
	searchValue?: boolean;
}
export interface SearchColumnBooleanCustomField extends SearchColumnCustomField {
	searchValue?: boolean;
}

export interface SearchColumnBooleanField extends SearchColumnField {
	searchValue?: boolean;
}

export interface SearchColumnCustomField {
	internalId: string;
	scriptId: string;
	customLabel?: string;
}

export interface SearchColumnCustomFieldList {
	customField?: SearchColumnCustomField[];
}

export interface SearchColumnDateCustomField extends SearchColumnCustomField {
	searchValue?: Date;
}

export interface SearchColumnDateField extends SearchColumnField {
	searchValue?: Date;
}

export interface SearchColumnDoubleCustomField extends SearchColumnCustomField {
	searchValue?: number;
}

export interface SearchColumnDoubleField extends SearchColumnField {
	searchValue?: number;
}

export interface SearchColumnEnumMultiSelectCustomField extends SearchColumnCustomField {
	searchValue?: string[];
}

export interface SearchColumnEnumSelectField extends SearchColumnField {
	searchValue?: string;
}

export interface SearchColumnField {
	customLabel?: string;
}
export interface SearchColumnLongCustomField extends SearchColumnCustomField {
	searchValue?: number;
}

export interface SearchColumnLongField extends SearchColumnField {
	searchValue?: number;
}

export interface SearchColumnMultiSelectCustomField extends SearchColumnCustomField {
	searchValue?: ListOrRecordRef[];
}

export interface SearchColumnSelectCustomField extends SearchColumnCustomField {
	searchValue?: ListOrRecordRef;
}

export interface SearchColumnSelectField extends SearchColumnField {
	searchValue?: RecordRef;
}

export interface SearchColumnStringCustomField extends SearchColumnCustomField {
	searchValue?: string;
}

export interface SearchColumnStringField extends SearchColumnField {
	searchValue?: string;
}

export interface SearchColumnTextNumberField extends SearchColumnField {
	searchValue?: string;
}

export interface SearchCustomField {
	internalId: string;
	scriptId: string;
}
export interface SearchCustomFieldList {
	customField?: SearchCustomField[];
}

export interface SearchDateCustomField extends SearchCustomField {
	operator: SearchDateFieldOperator;
	predefinedSearchValue?: SearchDate;
	searchValue?: Date;
	searchValue2?: Date;
}

export interface SearchDateField {
	operator: SearchDateFieldOperator;
	predefinedSearchValue?: SearchDate;
	searchValue?: Date;
	searchValue2?: Date;
}
export interface SearchDoubleCustomField extends SearchCustomField {
	operator: SearchDoubleFieldOperator;
	searchValue?: number;
	searchValue2?: number;
}

export interface SearchDoubleField {
	operator: SearchDoubleFieldOperator;
	searchValue?: number;
	searchValue2?: number;
}
export interface SearchEnumMultiSelectCustomField extends SearchCustomField {
	operator: SearchEnumMultiSelectFieldOperator;
	searchValue?: string[];
}

export interface SearchEnumMultiSelectField {
	operator: SearchEnumMultiSelectFieldOperator;
	searchValue?: string[];
}

export interface SearchLongCustomField extends SearchCustomField {
	operator: SearchLongFieldOperator;
	searchValue?: number;
	searchValue2?: number;
}

export interface SearchLongField {
	operator: SearchLongFieldOperator;
	searchValue?: number;
	searchValue2?: number;
}
export interface SearchMultiSelectCustomField extends SearchCustomField {
	operator: SearchMultiSelectFieldOperator;
	searchValue?: ListOrRecordRef[];
}


interface BaseType {
	// _exists: boolean;
	// _namespace: string;
}
export interface ListOrRecordRef extends BaseType {
	externalId: string;
	internalId: string;
	typeId: string;
	name?: string;
}

interface BaseRef extends BaseType {
	name?: string;
}
interface CustomRecordRef extends BaseRef {
	externalId: string;
	internalId: string;
	scriptId: string;
	typeId: string;
}
interface CustomFieldRef extends BaseType {
	internalId: string;
	scriptId: string;
}
export interface LongCustomFieldRef extends CustomFieldRef {
	value: number;
}

interface RecordRef extends BaseRef {
	externalId: string;
	internalId: string;
	type: RecordType;
}
export interface _MultiSelectCustomFieldRef extends CustomFieldRef {
	value: ListOrRecordRef[];
}

export interface SearchMultiSelectField {
	operator: SearchMultiSelectFieldOperator;
	searchValue?: RecordRef[];
}

export interface SearchRecord {}
export interface SearchRecordBasic extends SearchRecord {}

interface NullField extends BaseType {
	name?: string[];
}

export interface SearchResult {
	pageIndex?: number;
	pageSize?: number;
	recordList?: RecordList;
	searchId?: string;
	searchRowList?: SearchRowList;
	status: Status;
	totalPages?: number;
	totalRecords?: number;
}
interface Record extends BaseType {
	nullFieldList?: NullField;
}
interface RecordList extends BaseType {
	record?: Record[];
}
interface StatusDetail extends BaseType {
	type: StatusDetailType;
	code: StatusDetailCodeType;
	message?: string;
}


interface SearchRow extends BaseType {}
interface SearchRowList extends BaseType {
	searchRow?: SearchRow[];
}


export type StatusDetailType = ("ERROR" | "WARN" | "INFO");

interface _SearchRowList extends BaseType {
	searchRow?: SearchRow[];
}

interface Status extends BaseType {
	isSuccess: boolean;
	statusDetail?: StatusDetail[];
}
// interface SearchRowd {}
// interface SearchRowBasic extends SearchRow {}
// interface SearchRowList{
// 	searchRow?: SearchRow[];
// }
export interface SearchStringCustomField extends SearchCustomField {
	operator: SearchStringFieldOperator;
	searchValue?: string;
}

export interface SearchStringField {
	operator: SearchStringFieldOperator;
	searchValue?: string;
}
export interface SearchTextNumberField {
	operator: SearchTextNumberFieldOperator;
	searchValue?: string;
	searchValue2?: string;
}
// 





export interface BudgetExchangeRateFilter extends BaseType {
	fromSubsidiary?: RecordRef;
	period: RecordRef;
	toSubsidiary?: RecordRef;
}



export interface CurrencyRateFilter extends BaseType {
	baseCurrency?: RecordRef;
	effectiveDate?: Date;
	fromCurrency?: RecordRef;
}


export interface GetDeletedFilter extends BaseType {
	deletedDate?: SearchDateField;
	scriptId?: SearchStringField;
	type?: SearchEnumMultiSelectField;
}





export interface GetSelectFilterByFieldValue extends BaseType {
	field: string;
	internalId: string;
	sublist?: string;
}

export interface GetSelectFilterByFieldValueList extends BaseType {
	filterBy: GetSelectFilterByFieldValue[];
}

export interface GetSelectValueFieldDescription extends BaseType {
	customForm?: RecordRef;
	customRecordType?: RecordRef;
	customTransactionType?: RecordRef;
	field: string;
	filter?: GetSelectValueFilter;
	filterByValueList?: GetSelectFilterByFieldValueList;
	recordType?: RecordType;
	sublist?: string;
}

export interface GetSelectValueFilter extends BaseType {
	operator: GetSelectValueFilterOperator;
	filterValue: string;
}


export interface ItemAvailabilityFilter extends BaseType {
 	item: RecordRefList;
	lastQtyAvailableChange?: Date;
}



interface RecordRefList extends BaseType {
	recordRef?: RecordRef[];
}

export interface PostingTransactionSummaryFilter extends BaseType {
 	account?: RecordRefList;
	book?: RecordRefList;
	class?: RecordRefList;
	department?: RecordRefList;
	entity?: RecordRefList;
	item?: RecordRefList;
	location?: RecordRefList;
	parentItem?: RecordRefList;
	period?: RecordRefList;
	subsidiary?: RecordRefList;
}



export type StatusDetailCodeType = ("ABORT_SEARCH_EXCEEDED_MAX_TIME" | "ABORT_UPLOAD_VIRUS_DETECTED" | "ACCESS_DENIED" | "ACCTNG_PRD_REQD" | "ACCT_DISABLED" | "ACCT_MERGE_DUP" | "ACCT_NAME_REQD" | "ACCT_NEEDS_CAMPAIGN_PROVISION" | "ACCT_NOT_CREATED" | "ACCT_NUMS_REQD_OR_DONT_MATCH" | "ACCT_NUM_REQD" | "ACCT_PERIOD_SETUP_REQD" | "ACCT_PRDS_BEING_ADDED" | "ACCT_REQD" | "ACCT_TEMP_DISABLED" | "ACCT_TEMP_UNAVAILABLE" | "ACH_NOT_AVAILBL" | "ACH_SETUP_REQD" | "ACTIVE_AP_ACCT_REQD" | "ACTIVE_ROLE_REQD" | "ACTIVE_TRANS_EXIST" | "ADDITIONAL_AUTHENTICATION_REQUIRED_2FA" | "ADDITIONAL_AUTHENTICATION_REQUIRED_SQ" | "ADDRESS_LINE_1_REQD" | "ADMIN_ACCESS_REQ" | "ADMIN_ACCESS_REQD" | "ADMIN_ONLY_ACCESS" | "ADMIN_USER_REQD" | "ADMISSIBILITY_PACKG_TYP_REQD" | "ALL_DATA_DELETE_REQD" | "ALL_MTRX_SUBITMES_OPTNS_REQD" | "ALREADY_IN_INVT" | "AMORTZN_INVALID_DATE_RANGE" | "AMORTZN_TMPLT_DATA_MISSING" | "AMT_DISALLWD" | "AMT_EXCEEDS_APPROVAL_LIMIT" | "ANSWER_REQD" | "APPROVAL_PERMS_REQD" | "AREA_CODE_REQD" | "ASSIGNEE_REQD" | "ATTACHMNT_CONTAINS_VIRUS" | "ATTACH_SIZE_EXCEEDED" | "AT_LEAST_ONE_FILE_REQD" | "AT_LEAST_ONE_PACKAGE_REQD" | "AT_LEAST_ONE_RETURN_FLD_REQD" | "AT_LEAST_ONE_SUB_REQD" | "AUDIT_W2_1099" | "AUTO_NUM_UPDATE_DISALLWD" | "AVS_ERROR" | "BALANCE_EXCEEDS_CREDIT_LIMIT" | "BANK_ACCT_REQD" | "BASE_CRNCY_REQD" | "BILLABLES_DISALLWD" | "BILLING_ISSUES" | "BILLING_SCHDUL_INVALID_RECURR" | "BILLPAY_APPROVAL_UNAVAILBL" | "BILLPAY_REGSTRTN_REQD" | "BILLPAY_SRVC_UNAVAILBL" | "BILL_PAY_STATUS_UNAVAILABLE" | "BILL_PMTS_MADE_FROM_ACCT_ONLY" | "BIN_DSNT_CONTAIN_ENOUGH_ITEM" | "BIN_ITEM_UNAVAILBL" | "BIN_SETUP_REQD" | "BIN_UNDEFND" | "BUNDLE_IS_DEPRECATED" | "CALENDAR_PREFS_REQD" | "CAMPAGIN_ALREADY_EXECUTED" | "CAMPAIGN_IN_USE" | "CAMPAIGN_SET_UP_REQD" | "CANNOT_RESET_PASSWORD" | "CANT_APPLY_PMT" | "CANT_AUTO_CREATE_ADJSTMNT" | "CANT_CALC_FEDEX_RATES" | "CANT_CANCEL_APPRVD_RETRN_AUTH" | "CANT_CANCEL_BILL_PMT" | "CANT_CHANGE_COMMSSN" | "CANT_CHANGE_CONTACT_RESTRICTN" | "CANT_CHANGE_CRMRECORDTYPELINKS" | "CANT_CHANGE_EVENT_PRIMARY_TYP" | "CANT_CHANGE_IP_ADDRESS" | "CANT_CHANGE_LEAD_SOURCE_CAT" | "CANT_CHANGE_PSWD" | "CANT_CHANGE_REV_REC_TMPLT" | "CANT_CHANGE_SUB" | "CANT_CHANGE_TASK_LINK" | "CANT_CHANGE_UNITS_TYP" | "CANT_CHANGE_VSOE_ALLOCTN" | "CANT_CHG_POSTED_BILL_VRNC" | "CANT_COMPLETE_FULFILL" | "CANT_CONNECT_TO_STORE" | "CANT_CONVERT_CLASS_DEPT" | "CANT_CONVERT_CLASS_LOC" | "CANT_CONVERT_INVT_ITEM" | "CANT_CREATE_FILES" | "CANT_CREATE_NON_UNIQUE_RCRD" | "CANT_CREATE_PO" | "CANT_CREATE_SHIP_LABEL" | "CANT_CREATE_WORK_ORD" | "CANT_CREAT_SHIP_LABEL" | "CANT_DELETE_ACCT" | "CANT_DELETE_ACCT_PRD" | "CANT_DELETE_ALLOCTN" | "CANT_DELETE_BIN" | "CANT_DELETE_CATEGORY" | "CANT_DELETE_CC_PROCESSOR" | "CANT_DELETE_CELL" | "CANT_DELETE_CHILD_RCRDS_EXIST" | "CANT_DELETE_CHILD_RCRD_FOUND" | "CANT_DELETE_CLASS" | "CANT_DELETE_COLOR_THEME" | "CANT_DELETE_COMMSSN_SCHDUL" | "CANT_DELETE_COMPANY" | "CANT_DELETE_COMPANY_TYP" | "CANT_DELETE_CONTACT_HAS_CHILD" | "CANT_DELETE_CSTM_FIELD" | "CANT_DELETE_CSTM_FORM" | "CANT_DELETE_CSTM_ITEM_FIELD" | "CANT_DELETE_CSTM_LAYOUT" | "CANT_DELETE_CSTM_LIST" | "CANT_DELETE_CSTM_RCRD" | "CANT_DELETE_CSTM_RCRD_ENTRY" | "CANT_DELETE_CUST" | "CANT_DELETE_CUSTOMER" | "CANT_DELETE_DEFAULT_FLDR" | "CANT_DELETE_DEFAULT_PRIORITY" | "CANT_DELETE_DEFAULT_SALES_REP" | "CANT_DELETE_DEFAULT_STATUS" | "CANT_DELETE_DEFAULT_VALUE" | "CANT_DELETE_DEFAULT_WEBSITE" | "CANT_DELETE_EMPL" | "CANT_DELETE_ENTITY" | "CANT_DELETE_FIN_STATMNT_LAYOUT" | "CANT_DELETE_FLDR" | "CANT_DELETE_HAS_CHILD_ITEM" | "CANT_DELETE_INFO_ITEM" | "CANT_DELETE_ITEM" | "CANT_DELETE_ITEM_LAYOUT" | "CANT_DELETE_ITEM_TMPLT" | "CANT_DELETE_JOB_RESOURCE_ROLE" | "CANT_DELETE_LEGACY_CATEGORY" | "CANT_DELETE_LINE" | "CANT_DELETE_MEDIA_ITEM" | "CANT_DELETE_MEMRZD_TRANS" | "CANT_DELETE_OR_CHANGE_ACCT" | "CANT_DELETE_PLAN_ASSGNMNT" | "CANT_DELETE_PRESNTN_CAT" | "CANT_DELETE_RCRD" | "CANT_DELETE_RCRDS" | "CANT_DELETE_SITE_TAG" | "CANT_DELETE_SITE_THEME" | "CANT_DELETE_SOLUTN" | "CANT_DELETE_STATUS_TYPE" | "CANT_DELETE_SUBTAB" | "CANT_DELETE_SYSTEM_NOTE" | "CANT_DELETE_TAX_VENDOR" | "CANT_DELETE_TMPLT_RCRD" | "CANT_DELETE_TRANS" | "CANT_DELETE_TRAN_LINE" | "CANT_DELETE_TRAN_LINES" | "CANT_DELETE_UPDATE_ACCT" | "CANT_DELETE_VENDOR" | "CANT_DEL_DEFAULT_CALENDAR" | "CANT_DEL_DEFAULT_SHIP_METHOD" | "CANT_DEL_REALIZED_GAINLOSS" | "CANT_DEL_TRANS_RVRSL" | "CANT_DIVIDE_BY_ZERO" | "CANT_DOWNLOAD_EXPIRED_FILE" | "CANT_EDIT_CUST_LIST" | "CANT_EDIT_CUST_PMT" | "CANT_EDIT_DPLYMNT_IN_PROGRESS" | "CANT_EDIT_FOLDER" | "CANT_EDIT_OLD_CASE" | "CANT_EDIT_STANDARD_OBJ" | "CANT_EDIT_TAGATA" | "CANT_EDIT_TRAN" | "CANT_ESTABLISH_LINK" | "CANT_FIND_BUG" | "CANT_FIND_MAIL_MERGE_ID" | "CANT_FIND_RCRD" | "CANT_FIND_SAVED_IMPORT" | "CANT_FIND_SOURCE_AMORTZN_ACCT" | "CANT_FIND_UPS_REG_FOR_LOC" | "CANT_FULFILL_ITEM" | "CANT_INACTIVATE_COMMSSN_PLAN" | "CANT_INACTIVE_DEFAULT_SYNC_CAT" | "CANT_INACTIVE_DEFAULT_TMPLT" | "CANT_LOAD_SAVED_SEARCH_PARAM" | "CANT_LOGIN_WITH_OAUTH" | "CANT_LOOKUP_FLD" | "CANT_MAKE_CONTACT_PRIVATE" | "CANT_MARK_SHIPPED" | "CANT_MERGE_EMPLS" | "CANT_MODIFY_APPRVD_TIME" | "CANT_MODIFY_FULFILL_STATUS" | "CANT_MODIFY_ISSUE_STATUS" | "CANT_MODIFY_LOCKED_FLD" | "CANT_MODIFY_PARENT" | "CANT_MODIFY_REV_REC" | "CANT_MODIFY_SUB" | "CANT_MODIFY_TAGATA" | "CANT_MODIFY_TEGATA" | "CANT_MODIFY_VOID_TRANS" | "CANT_MOVE_REALIZED_GAINLOSS" | "CANT_PAY_TAGATA" | "CANT_PRINT_EMPTY" | "CANT_PROCESS_IMG" | "CANT_RCEIV_BEFORE_FULFILL" | "CANT_RCEIV_ITEM" | "CANT_RECEIVE_TAGATA" | "CANT_REJECT_ORDER" | "CANT_REMOVE_ACH_PAY_METHOD" | "CANT_REMOVE_APPROVAL" | "CANT_REMOVE_DOMAIN" | "CANT_REMOVE_NEXUS" | "CANT_REMOVE_SCHDUL" | "CANT_REMOVE_SUB" | "CANT_REMOV_ALL_FULFILMNT_LINKS" | "CANT_REMOV_ITEM_SUB" | "CANT_RESUBMIT_FAILED_DPLYMNT" | "CANT_RETURN_FLD" | "CANT_RETURN_USED_GIFT_CERT" | "CANT_REVERSE_AUTH" | "CANT_REV_REC_BODY_AND_LINE" | "CANT_SCHDUL_RECUR_EVENT" | "CANT_SEND_EMAIL" | "CANT_SET_CLOSE_DATE" | "CANT_SET_INTERNALID" | "CANT_SET_STATUS" | "CANT_SWITCH_ROLES_FROM_LOGIN" | "CANT_SWITCH_SHIP_METHOD" | "CANT_UPDATE_ACCTNG_PRDS" | "CANT_UPDATE_AMT" | "CANT_UPDATE_DYNAMIC_GROUP" | "CANT_UPDATE_FLDR" | "CANT_UPDATE_LINKED_TRANS_LINES" | "CANT_UPDATE_PRODUCT_FEED" | "CANT_UPDATE_RECRD_HAS_CHANGED" | "CANT_UPDATE_RECUR_EVENT" | "CANT_UPDATE_ROOT_CATEGORY" | "CANT_UPDATE_STATUS_TYPE" | "CANT_VERIFY_CARD" | "CANT_VOID_TRANS" | "CARD_EXPIRED" | "CARD_ID_REQD" | "CASE_ALREADY_ASSIGNED" | "CASE_DSNT_EXIST" | "CASE_NOT_GROUP_MEMBER" | "CASH_SALE_EDIT_DISALLWD" | "CC_ACCT_REQD" | "CC_ALREADY_SAVED" | "CC_EMAIL_ADDRESS_REQD" | "CC_NUM_REQD" | "CC_PROCESSOR_ERROR" | "CC_PROCESSOR_NOT_FOUND" | "CC_SECURITY_CODE_REQD" | "CERT_AUTH_EXPD" | "CERT_EXPD" | "CERT_UNAVAILABLE" | "CHANGE_PMT_DATE_AND_REAPPROVE" | "CHAR_ERROR" | "CHECKOUT_EMAIL_REQD" | "CITY_REQD" | "CLASS_ALREADY_EXISTS" | "CLASS_OR_DEPT_OR_CUST_REQD" | "CLEAR_AUTOCALC" | "CLOSED_TRAN_PRD" | "CLOSE_PREVIOUSE_PERIOD" | "COGS_ERROR" | "COMMSSN_ALREADY_CALCLTD" | "COMMSSN_FEATURE_DISABLED" | "COMMSSN_PAYROLL_ITEM_REQD" | "COMPANION_PROP_REQD" | "COMPANY_FLD_REQD" | "COMP_DELETED_OR_MERGED" | "CONCUR_BILLPAY_JOB_DISALLWD" | "CONCUR_BULK_JOB_DISALLWD" | "CONCUR_MASS_UPDATE_DISALLWD" | "CONCUR_SEARCH_DISALLWD" | "CONSLD_PRNT_AND_CHILD_DISALLWD" | "CONTACT_ALREADY_EXISTS" | "CONTACT_NOT_GROUP_MEMBR" | "COOKIES_DISABLED" | "COUNTRY_STATE_MISMATCH" | "CREATEDFROM_REQD" | "CREDITS_DISALLWD" | "CRNCY_MISMATCH_BASE_CRNCY" | "CRNCY_NOT_UPDATED" | "CRNCY_RCRD_DELETED" | "CRNCY_REQD" | "CSC_SETUP_REQD" | "CSTM_FIELD_KEY_REQD" | "CSTM_FIELD_VALUE_REQD" | "CUST_ARLEADY_HAS_ACCT" | "CUST_CNTR_USER_ACCESS_ONLY" | "CUST_LEAD_NOT_GROUP_MEMBR" | "CYBERSOURCE_ERROR" | "CYCLE_IN_PROJECT_PLAN" | "DASHBOARD_LOCKED" | "DATA_MUST_BE_UNIQUE" | "DATA_REQD" | "DATE_EXPECTED" | "DATE_PARAM_REQD" | "DATE_PRD_MISMATCH" | "DEFAULT_CUR_REQD" | "DEFAULT_EXPENSE_ACCT_REQD" | "DEFAULT_ISSUE_OWNER_REQD" | "DEFAULT_LIAB_ACCT_REQD" | "DEFAULT_ROLE_REQD" | "DEFAULT_TYPE_DELETE_DISALLWD" | "DEFERRAL_ACCT_REQD" | "DEFERRED_REV_REC_ACCT_REQD" | "DEPT_IN_USE" | "DFRNT_SWAP_PRICE_LEVELS_REQD" | "DISALLWD_IP_ADDRESS" | "DISCOUNT_ACCT_SETUP_REQD" | "DISCOUNT_DISALLWD" | "DISCOUNT_DISALLWD_VSOE" | "DISCOUNT_EXCEED_TOTAL" | "DISTRIB_REQD_ONE_DAY_BFORE" | "DOMAIN_IN_USE" | "DOMAIN_WEBSITE_REQD" | "DROP_SHIP_ERROR" | "DROP_SHIP_OR_SPECIAL_ORD_ALLWD" | "DUE_DATE_BFORE_START_DATE" | "DUE_DATE_REQD" | "DUPLICATE_INVENTORY_NUM" | "DUPLICATE_KEYS" | "DUPLICATE_METHOD_NAME" | "DUPLICATE_NAME_FOR_PRD" | "DUPLICATE_NAME_FOR_ROLE" | "DUPLICATE_RELATIONSHIP" | "DUP_ACCT_NAME" | "DUP_ACCT_NOT_ALLWD" | "DUP_ACCT_NUM" | "DUP_ACCT_ON_TRANS" | "DUP_BIN" | "DUP_BUNDLE_IN_ACCT" | "DUP_CATEGORY" | "DUP_CATEGORY_NAME" | "DUP_COLOR_THEME" | "DUP_CSTM_FIELD" | "DUP_CSTM_LAYOUT" | "DUP_CSTM_LIST" | "DUP_CSTM_RCRD" | "DUP_CSTM_RCRD_ENTRY" | "DUP_CSTM_TAB" | "DUP_EMPL_EMAIL" | "DUP_EMPL_ENTITY_NAME" | "DUP_EMPL_TMPLT" | "DUP_ENTITY" | "DUP_ENTITY_EMAIL" | "DUP_ENTITY_NAME" | "DUP_FEDEX_ACCT_NUM" | "DUP_FINANCL_STATMNT_LAYOUT" | "DUP_INFO_ITEM" | "DUP_ISSUE_NAME_OR_NUM" | "DUP_ITEM" | "DUP_ITEM_LAYOUT" | "DUP_ITEM_NAME" | "DUP_ITEM_OPTION" | "DUP_ITEM_TMPLT" | "DUP_MATRIX_OPTN_ABBRV" | "DUP_MEMRZD_TRANS" | "DUP_NAME" | "DUP_PAYROLL_ITEM" | "DUP_PRESNTN_CAT" | "DUP_RCRD" | "DUP_RCRD_LINK" | "DUP_SALES_TAX_ITEM" | "DUP_SHIPPING_ITEM" | "DUP_SHORT_NAME" | "DUP_SITE_THEME" | "DUP_SOURCE_ACCT" | "DUP_TAX_CODE" | "DUP_TRACKING_NUM" | "DUP_TRANS" | "DUP_UPS_ACCT_NUM" | "DUP_VENDOR_EMAIL" | "DUP_VENDOR_NAME" | "EARNING_ITEM_REQD" | "EBAY_FEE_ERROR" | "EBAY_TMPLT_ERROR" | "EDITION_DSNT_SUPRT_WORLDPAY" | "EIN_OR_TIN_REQD" | "EMAIL_ADDRS_REQD" | "EMAIL_ADDRS_REQD_TO_NOTIFY" | "EMAIL_REQD" | "EMAIL_REQD_ACCT_PROVISION" | "EMAIL_REQ_HANDLER_ERROR" | "EMPL_IN_USE" | "ERROR_DELETE_CARD_DATA" | "ERROR_IN_TERRITORY_ASSGNMNT" | "ERROR_PRCSSNG_TRANS" | "ERROR_REFUND_TRANS" | "ERROR_REVERSE_AUTH" | "ERROR_SENDING_TRAN_EMAIL" | "ERROR_VOID_TRANS" | "EVENT_ID_NOT_FOUND" | "EXCEEDED_MAX_ALLWD_LOC" | "EXCEEDED_MAX_CONCUR_RQST" | "EXCEEDED_MAX_EMAILS" | "EXCEEDED_MAX_FEATURED_ITEMS" | "EXCEEDED_MAX_FIELD_LENGTH" | "EXCEEDED_MAX_MATRIX_OPTNS" | "EXCEEDED_MAX_PDF_ELEMENTS" | "EXCEEDED_MAX_PDF_EXPORT_COL" | "EXCEEDED_MAX_PIN_RETRIES" | "EXCEEDED_MAX_RCRD" | "EXCEEDED_MAX_REPORT_COL" | "EXCEEDED_MAX_REPORT_ROWS" | "EXCEEDED_MAX_REPORT_SIZE" | "EXCEEDED_MAX_SESSIONS" | "EXCEEDED_MAX_SHIP_PACKAGE" | "EXCEEDED_MAX_TIME" | "EXCEEDED_MAX_TRANS_LINES" | "EXCEEDED_MAX_USERS_ALLWD" | "EXCEEDED_PER_TRANS_MAX" | "EXCEEDED_RQST_SIZE_LIMIT" | "EXCEEDS_ALLWD_LICENSES" | "EXPENSE_ENTRY_DISALLWD" | "EXPIRED_SEARCH_CRITERIA" | "EXTERNALID_NOT_SUPPORTED" | "EXTERNALID_REQD" | "EXT_CAT_LINK_SETUP_REQD" | "FAILED_FEDEX_LABEL_VOID" | "FAILED_FORM_VALIDATION" | "FAILED_UPS_LABEL_VOID" | "FAX_NUM_REQD" | "FAX_SETUP_REQD" | "FEATURE_DISABLED" | "FEATURE_UNAVAILABLE" | "FEDEX_ACCT_REQD" | "FEDEX_CANT_INTEGRATE_FULFILL" | "FEDEX_DROPOFF_TYP_REQD" | "FEDEX_INVALID_ACCT_NUM" | "FEDEX_ITEM_CONTENTS_REQD" | "FEDEX_METER_NOT_RETRIEVED" | "FEDEX_METER_REQD" | "FEDEX_ONE_PACKG_ALLWD" | "FEDEX_ORIGIN_COUNTRY_US_REQD" | "FEDEX_RATING_SRVC_UNAVAILBL" | "FEDEX_REG_NOT_FOUND" | "FEDEX_SHIP_SRVC_REQD" | "FEDEX_SHIP_SRVC_UNAVAILBL" | "FEDEX_UNSUPRTD_ORIGIN_COUNTRY" | "FEDEX_USD_EXCHANGE_RATE_REQD" | "FEDEX_USER_ERROR" | "FEDEX_VOID_ERROR" | "FED_ID_REQD" | "FED_WITHHOLDING_REQD" | "FIELD_CALL_DATE_REQD" | "FIELD_DEFN_REQD" | "FIELD_NOT_SETTABLE_ON_ADD" | "FIELD_PARAM_REQD" | "FIELD_REQD" | "FILE_ALREADY_EXISTS" | "FILE_DISALLWD_IN_ROOT_FLDR" | "FILE_MISSING" | "FILE_NOT_DOWNLOADABLE" | "FILE_NOT_FOUND" | "FILE_REQD" | "FILE_UPLOAD_IN_PROGRESS" | "FILTER_BY_AMT_REQD" | "FINANCE_CHARGE_SETUP_REQD" | "FINANCE_CHARGE_SET_PREFS" | "FIRST_LAST_NAMES_REQD" | "FIRST_QTY_BUCKET_MUST_BE_ZERO" | "FLD_VALUE_REQD" | "FLD_VALUE_TOO_LARGE" | "FOLDER_ALREADY_EXISTS" | "FORMULA_ERROR" | "FORM_RESUBMISSION_REQD" | "FORM_SETUP_REQD" | "FORM_UNAVAILBL_ONLINE" | "FRIENDLY_NAME_REQD" | "FULFILL_REQD_FIELDS_MISSING" | "FULFILL_REQD_PARAMS_MISSING" | "FULL_DISTRIB_REQD" | "FULL_USERS_REQD_TO_INTEGRATE" | "FX_MALFORMED_RESPONSE" | "FX_RATE_REQD_FEDEX_RATE" | "FX_TRANS_DISALLWD" | "GETALL_RCRD_TYPE_REQD" | "GIFT_CERT_AMT_EXCEED_AVAILBL" | "GIFT_CERT_AUTH_ALREADY_EXISTS" | "GIFT_CERT_CAN_BE_USED_ONCE" | "GIFT_CERT_CODE_REQD" | "GIFT_CERT_INVALID_NUM" | "GIFT_CERT_IN_USE" | "GROUP_DSNT_EXIST" | "GROUP_REQD" | "GROUP_TYPE_REQD" | "GRTR_QTY_PRICE_LEVEL_REQD" | "ILLEGAL_PERIOD_STRUCTURE" | "INACTIVE_CC_PROFILE" | "INACTIVE_RCRD_FOR_ROLE" | "INAVLID_FILE_TYP" | "INAVLID_ITEM_TYP" | "INAVLID_PRICING_MTRX" | "INCOMPATIBLE_ACCT_CHANGE" | "INCOMPLETE_BILLING_ADDR" | "INCOMPLETE_FILE_UPLOAD" | "INCRCT_ORD_INFO" | "INFINITE_LOOP_DETECTED" | "INITIALIZE_ARG_REQD" | "INITIALIZE_AUXREF_REQD" | "INSTALL_SCRIPT_ERROR" | "INSUFCNT_NUM_PRDS_FOR_REV_REC" | "INSUFCNT_OPEN_PRDS_FOR_REV_REC" | "INSUFFICIENT_CHARS_IN_SEARCH" | "INSUFFICIENT_FLD_PERMISSION" | "INSUFFICIENT_FUND" | "INSUFFICIENT_PERMISSION" | "INTEGER_REQD_FOR_QTY" | "INTL_FEDEX_ONE_PACKG_ALLWD" | "INTL_SHIP_EXCEED_MAX_ITEM" | "INVALID_ABN" | "INVALID_ACCT" | "INVALID_ACCT_NUM_CSTM_FIELD" | "INVALID_ACCT_PRD" | "INVALID_ACCT_TYP" | "INVALID_ACTION" | "INVALID_ADDRESS_OR_SHIPPER_NO" | "INVALID_ADJUSTMENT_ACCT" | "INVALID_AES_FTSR_EXEMPTN_NUM" | "INVALID_ALLOCTN_METHOD" | "INVALID_AMORTZN_ACCT" | "INVALID_AMT" | "INVALID_APP_ID" | "INVALID_ASSIGN_STATUS_COMBO" | "INVALID_AUTH_CODE" | "INVALID_AUTOAPPLY_VALUE" | "INVALID_AVS_ADDR" | "INVALID_AVS_ZIP" | "INVALID_BALANCE_RANGE" | "INVALID_BILLING_SCHDUL" | "INVALID_BILLING_SCHDUL_DATE" | "INVALID_BILLING_SCHDUL_ENTRY" | "INVALID_BIN_NUM" | "INVALID_BOM_QTY" | "INVALID_BOOLEAN_VALUE" | "INVALID_BUG_NUM" | "INVALID_CAMPAIGN_CHANNEL" | "INVALID_CAMPAIGN_GROUP_SIZE" | "INVALID_CAMPAIGN_STATUS" | "INVALID_CARD" | "INVALID_CARD_ID" | "INVALID_CARD_NUM" | "INVALID_CARD_TYP" | "INVALID_CASE_FORM" | "INVALID_CATGRY_TAX_AGENCY_REQ" | "INVALID_CC_EMAIL_ADDRESS" | "INVALID_CC_NUM" | "INVALID_CERT" | "INVALID_CERT_AUTH" | "INVALID_CHANGE_LIST" | "INVALID_CHARS_IN_EMAIL" | "INVALID_CHARS_IN_NAME" | "INVALID_CHARS_IN_PARAM_FIELD" | "INVALID_CHARS_IN_URL" | "INVALID_CHECKOUT_EMAIL" | "INVALID_CITY" | "INVALID_COLUMN_NAME" | "INVALID_COLUMN_VALUE" | "INVALID_CONTENT_TYPE" | "INVALID_COSTING_METHOD" | "INVALID_CRNCY_EXCH_RATE" | "INVALID_CRYPT_KEY" | "INVALID_CSTM_FIELD_DATA_TYP" | "INVALID_CSTM_FIELD_RCRD_TYP" | "INVALID_CSTM_FIELD_REF" | "INVALID_CSTM_FORM" | "INVALID_CSTM_RCRD_KEY" | "INVALID_CSTM_RCRD_QUERY" | "INVALID_CSTM_RCRD_TYPE_KEY" | "INVALID_CSTM_RCRD_TYP_KEY" | "INVALID_CUR" | "INVALID_CURRENCY_CODE" | "INVALID_CURRENCY_TYP" | "INVALID_CURR_CODE" | "INVALID_CUSTOMER_RCRD" | "INVALID_DATA" | "INVALID_DATA_FORMAT" | "INVALID_DATE" | "INVALID_DATE_FORMAT" | "INVALID_DATE_RANGE" | "INVALID_DATE_TIME" | "INVALID_DEAL_RANGE" | "INVALID_DELETE_REF" | "INVALID_DESTINATION_FLDR" | "INVALID_DESTNTN_COUNTRY" | "INVALID_DESTNTN_POST_CODE" | "INVALID_DESTNTN_STATE" | "INVALID_DETACH_RECORD_TYP" | "INVALID_DISCOUNT_MARKUP" | "INVALID_DOMAIN_KEY" | "INVALID_DOMAIN_NAME" | "INVALID_DUP_ISSUE_REF" | "INVALID_EMAIL" | "INVALID_EMAIL_ADDR" | "INVALID_END_DATE" | "INVALID_END_TIME" | "INVALID_ENTITY_INTERNALID" | "INVALID_ENTITY_STATUS" | "INVALID_EVENT_TIME" | "INVALID_EXPNS_ACCT_SUB" | "INVALID_EXPRESSION" | "INVALID_EXP_DATE" | "INVALID_FAX_NUM" | "INVALID_FAX_PHONE_FORMAT" | "INVALID_FIELD_FOR_RCRD_TYP" | "INVALID_FIELD_NAME_FOR_NULL" | "INVALID_FILE" | "INVALID_FILE_ENCODING" | "INVALID_FILE_TYP" | "INVALID_FLD" | "INVALID_FLDR_SIZE" | "INVALID_FLD_RANGE" | "INVALID_FLD_TYP" | "INVALID_FLD_VALUE" | "INVALID_FORMAT_IN_PARAM_FIELD" | "INVALID_FORMULA" | "INVALID_FORMULA_FIELD" | "INVALID_FROM_DATE" | "INVALID_FROM_TIME" | "INVALID_FULFILMNT_ITEM" | "INVALID_FX_BASE_CURRENCY" | "INVALID_FX_RATE" | "INVALID_GET_REF" | "INVALID_GIFT_CERT" | "INVALID_GIFT_CERT_AMT" | "INVALID_GIFT_CERT_CODE" | "INVALID_GROUP_TYP" | "INVALID_GROUP_TYPE" | "INVALID_GRP" | "INVALID_GST_PST_AGENCIES" | "INVALID_ID" | "INVALID_INITIALIZE_ARG" | "INVALID_INITIALIZE_AUXREF" | "INVALID_INITIALIZE_REF" | "INVALID_INSURED_VALUE" | "INVALID_INTERNALID" | "INVALID_INVENTORY_NUM" | "INVALID_INV_DATE" | "INVALID_IP_ADDRESS_RULE" | "INVALID_ISSUE_BUILD_VERSION" | "INVALID_ISSUE_PRIORITY" | "INVALID_ISSUE_PRODUCT" | "INVALID_ISSUE_STATUS" | "INVALID_ITEM_OPTION" | "INVALID_ITEM_OPTIONS" | "INVALID_ITEM_SUBTYP" | "INVALID_ITEM_TYP" | "INVALID_ITEM_WEIGHT" | "INVALID_JOB_ID" | "INVALID_KEY_OR_REF" | "INVALID_KEY_PASSWORD_REQD" | "INVALID_LINE_ID" | "INVALID_LINK_SUM" | "INVALID_LIST_ID" | "INVALID_LIST_KEY" | "INVALID_LOC" | "INVALID_LOC_SUB_RESTRICTN" | "INVALID_LOGIN" | "INVALID_LOGIN_ATTEMPT" | "INVALID_LOGIN_CREDENTIALS" | "INVALID_LOGIN_IP" | "INVALID_LOT_NUM_FORMAT" | "INVALID_MACRO_ID" | "INVALID_MARKUP_DISCOUNT" | "INVALID_MCC" | "INVALID_MEMBER_HIERARCHY" | "INVALID_MEMRZD_TRANS" | "INVALID_MERCHANT_KEY" | "INVALID_MERCHANT_NAME" | "INVALID_NAME" | "INVALID_NEXUS" | "INVALID_NUM" | "INVALID_NUMBER" | "INVALID_OBJ" | "INVALID_ONLINE_FORM" | "INVALID_ONLINE_FORM_URL" | "INVALID_OPENID_DOMAIN" | "INVALID_OPERATION" | "INVALID_ORD_STATUS" | "INVALID_ORIGIN_COUNTRY" | "INVALID_ORIGIN_POSTCODE" | "INVALID_ORIGIN_STATE" | "INVALID_PAGER_NUM" | "INVALID_PAGE_INDEX" | "INVALID_PAGE_PARAM" | "INVALID_PARAM" | "INVALID_PARENT" | "INVALID_PARTNER_CODE" | "INVALID_PARTNER_ID" | "INVALID_PASSWORD" | "INVALID_PAYCHECK_DATE" | "INVALID_PERIOD" | "INVALID_PHONE" | "INVALID_PHONE_FAX_PAGER_NUM" | "INVALID_PHONE_NUM" | "INVALID_PHONE_NUMBER" | "INVALID_PICKUP_POSTAL_CODE" | "INVALID_PIN" | "INVALID_PIN_DEBIT_TRANS_TYP" | "INVALID_PORTLET_TYP" | "INVALID_POST" | "INVALID_PRESENTATION_TYP" | "INVALID_PROBABILITY_RANGE" | "INVALID_PROFILE_ID" | "INVALID_PROJ_BILLING_TYP" | "INVALID_PST_TAX_VALUE" | "INVALID_PSWD" | "INVALID_PSWD_HINT" | "INVALID_PSWD_ILLEGAL_CHAR" | "INVALID_PURCHASE_TAX_CODE" | "INVALID_QTY" | "INVALID_QUANTITY" | "INVALID_QUESTION" | "INVALID_RCRD" | "INVALID_RCRD_CONVERSION" | "INVALID_RCRD_HEADER_" | "INVALID_RCRD_ID" | "INVALID_RCRD_INITIALIZE" | "INVALID_RCRD_OBJ" | "INVALID_RCRD_REF" | "INVALID_RCRD_TRANSFRM" | "INVALID_RCRD_TYPE" | "INVALID_RECIPIENT" | "INVALID_RECR_REF" | "INVALID_RECUR_DATE_RANGE" | "INVALID_RECUR_DESC_REQD" | "INVALID_RECUR_DOW" | "INVALID_RECUR_DOWIM" | "INVALID_RECUR_DOWMASK" | "INVALID_RECUR_FREQUENCY" | "INVALID_RECUR_PATTERN" | "INVALID_RECUR_PERIOD" | "INVALID_RECUR_TIME_ZONE_REQD" | "INVALID_REFFERER_EMAIL" | "INVALID_REFUND_AMT" | "INVALID_REF_CANT_INITIALIZE" | "INVALID_REF_KEY" | "INVALID_REPORT" | "INVALID_REPORT_ID" | "INVALID_REPORT_ROW" | "INVALID_REQUEST" | "INVALID_RESOURCE_TIME" | "INVALID_RESULT_SUMMARY_FUNC" | "INVALID_RETURN_DATA_OBJECT" | "INVALID_REV_REC_DATE_RANGE" | "INVALID_ROLE" | "INVALID_ROLE_FOR_EVENT" | "INVALID_RQST_CONTACTS_EXIST" | "INVALID_RQST_PARENT_REQD" | "INVALID_RQST_SBCUST_JOBS_EXIST" | "INVALID_SAVEDSEARCH" | "INVALID_SAVED_SRCH" | "INVALID_SCHDUL_AMT" | "INVALID_SCHDUL_FORMAT" | "INVALID_SCRIPT_ID" | "INVALID_SEARCH" | "INVALID_SEARCH_CRITERIA" | "INVALID_SEARCH_FIELD_KEY" | "INVALID_SEARCH_FIELD_NAME" | "INVALID_SEARCH_FIELD_OBJ" | "INVALID_SEARCH_JOIN_ID" | "INVALID_SEARCH_MORE" | "INVALID_SEARCH_OPERATOR" | "INVALID_SEARCH_PAGE_INDEX" | "INVALID_SEARCH_PAGE_SIZE" | "INVALID_SEARCH_PREF" | "INVALID_SEARCH_SELECT_OBJ" | "INVALID_SEARCH_TYPE" | "INVALID_SEARCH_VALUE" | "INVALID_SECONDARY_EMAIL" | "INVALID_SECPAY_CREDENTIALS" | "INVALID_SERIAL_NUM" | "INVALID_SERIAL_OR_LOT_NUMBER" | "INVALID_SERVICE_CODE" | "INVALID_SESSION" | "INVALID_SHIPPER_STATE" | "INVALID_SHIP_DATE" | "INVALID_SHIP_FROM_STATE" | "INVALID_SHIP_GRP" | "INVALID_SHIP_SRVC" | "INVALID_SHIP_TO_SATE" | "INVALID_SITE_CSTM_FILE" | "INVALID_SOAP_HEADER" | "INVALID_SRCH" | "INVALID_SRCH_CRITERIA" | "INVALID_SRCH_CSTM_FLD" | "INVALID_SRCH_FUNCTN" | "INVALID_SRCH_SORT" | "INVALID_SRCH_SUMMARY_TYP" | "INVALID_SRCH_TYP" | "INVALID_SRVC_ITEM_SUB" | "INVALID_SSO" | "INVALID_SSS_DEBUG_SESSION" | "INVALID_STATE" | "INVALID_STATUS" | "INVALID_SUB" | "INVALID_SUBLIST_DESC" | "INVALID_SUBSCRIPTION_STATUS" | "INVALID_SUMMARY_SRCH" | "INVALID_SUPERVISOR" | "INVALID_TASK_ID" | "INVALID_TAX_AMT" | "INVALID_TAX_CODE" | "INVALID_TAX_CODES" | "INVALID_TAX_CODE_FOR_SUB" | "INVALID_TAX_PMT" | "INVALID_TAX_VALUE" | "INVALID_TIME_FORMAT" | "INVALID_TO_DATE" | "INVALID_TRACKING_NUM" | "INVALID_TRANS" | "INVALID_TRANSACTION_DATE" | "INVALID_TRANSACTIO_DATE" | "INVALID_TRANS_AMT" | "INVALID_TRANS_COMPNT" | "INVALID_TRANS_ID" | "INVALID_TRANS_SUB_ACCT" | "INVALID_TRANS_SUB_CLASS" | "INVALID_TRANS_SUB_DEPT" | "INVALID_TRANS_SUB_ENTITY" | "INVALID_TRANS_SUB_ITEM" | "INVALID_TRANS_SUB_LOC" | "INVALID_TRANS_TYP" | "INVALID_TRAN_ITEM_LINE" | "INVALID_TRIAL_TYP" | "INVALID_TYP" | "INVALID_UNIT_TYP" | "INVALID_UNSUPRTD_RCRD_TYP" | "INVALID_UPS_ACCT" | "INVALID_UPS_PACKG_WEIGHT" | "INVALID_UPS_VALUES" | "INVALID_URL" | "INVALID_URL_PARAM" | "INVALID_VALUE" | "INVALID_VAT_AMOUNT" | "INVALID_VAT_REGSTRTN_NUM" | "INVALID_VSOE_ALLOCTN" | "INVALID_WEBSITE_SECTION" | "INVALID_WO" | "INVALID_WORLDPAY_ID" | "INVALID_WO_ITEM" | "INVALID_WS_VERSION" | "INVALID_YEAR" | "INVALID_YEAR_FORMAT" | "INVALID_ZIP_CODE" | "INVALID_ZIP_FILE" | "INVALID_ZIP_POST_CODE" | "INVENTORY_NUM_DISALLWD" | "INVLAID_BOOLEAN_VALUE" | "DATA_RETRIEVAL_ERROR" | "IP_REQUEST" | "ISSUE_ASSIGNEE_DISALLWD" | "ISSUE_PRODUCT_VERSION_MISMATCH" | "ISSUE_VERSION_BUILD_MISMATCH" | "ITEM_ACCT_REQD" | "ITEM_COUNT_MISMATCH" | "ITEM_IS_UNAVAILABLE" | "ITEM_NAME_MUST_BE_UNIQUE" | "ITEM_NOT_UNIQUE" | "ITEM_PARAM_REQD_IN_URL" | "ITEM_QTY_AMT_MISMATCH" | "ITEM_TYP_REQS_UNIT" | "JE_AMOUNTS_MUST_BALANCE" | "JE_LINE_MISSING_REQD_DATA" | "JE_MAX_ONE_LINE" | "JE_REV_REC_IN_PROGRESS" | "JE_UNEXPECTED_ERROR" | "JOB_NOT_COMPLETE" | "JS_EXCEPTION" | "KEY_REQD" | "KPI_SETUP_REQD" | "LABEL_REQD" | "LANGUAGE_SETUP_REQD" | "LINKED_ACCT_DONT_MATCH" | "LINKED_ENTITIES_DONT_MATCH" | "LINKED_ITEMS_DONT_MATCH" | "LINK_LINES_TO_ONE_ORD" | "LIST_ID_REQD" | "LIST_KEY_REQD" | "LOCATIONS_IN_USE" | "LOCATIONS_SETUP_REQD" | "LOCATION_REQD" | "LOCKED_DASHBOARD" | "LOGIN_DISABLED" | "LOGIN_DISABLED_PARTNER_CTR" | "LOGIN_EMAIL_REQD" | "LOGIN_NAME_AND_PSWD_REQD" | "LOGIN_REQD" | "LOST_UPSELL_CRITERIA" | "MACHN_LIST_KEY_NAMES_REQD" | "MANDATORY_PRD_TYPE_REQD" | "MASS_UPDATE_CRITERIA_LOST" | "MATCHING_CUR_SUB_REQD" | "MATCHING_SERIAL_NUM_REQD" | "MATRIX_INFO_TEMP_LOST" | "MATRIX_SUBITEM_NAME_TOO_LONG" | "MAX_16_LINES_ALLWD_PER_BILLPAY" | "MAX_200_LINES_ALLWD_ON_TRANS" | "MAX_BARCODE_PRINT_EXCEEDED" | "MAX_BULK_MERGE_RCRDS_EXCEEDED" | "MAX_EMAILS_EXCEEDED" | "MAX_RCRDS_EXCEEDED" | "MAX_VALUES_EXCEEDED" | "MEDIA_FILE_INVALID_JSCRIPT" | "MEDIA_NOT_FOUND" | "MEDIA_NOT_INITIALIZED" | "MEMORIZED_TRANS_ERROR" | "MERGE_OPERATION_DISALLWD" | "MERGE_RCRD_REQD" | "METAVANTE_ERROR" | "METAVANTE_SECRET_ANSWER_REQD" | "METAVANTE_SECRET_QESTION_REQD" | "METAVANTE_SETUP_REQD" | "METAVANTE_TEMP_UNAVAILBL" | "METHOD_NAME_CANNOT_BE_EMPTY" | "MISMATCHED_CURRENCY" | "MISMATCHED_QTY_PRICING" | "MISMATCHED_SEARCH_PARENTHESIS" | "MISMATCH_EVENT_ISSUE_STATUS" | "MISMATCH_ISSUE_PRODUCT_VERSION" | "MISMATCH_SALES_CONTRIBUTION" | "MISSING_ACCT_PRD" | "MISSING_CRNCY_EXCH_RATE" | "MISSING_ENUM" | "MISSING_REQD_FLD" | "MISSNG_ACCT_PRD" | "MISSNG_REV_REC_RCRD" | "MISSNG_SO_REV_REC_PARAMS" | "MISSNG_SO_START_END_DATES" | "MLI_REQD" | "MLTPLE_TAX_LINES_DISALLWD" | "MSNG_FIELD_OWRTE_MUST_BE_TRUE" | "MST_UPDATE_ITEMS_THEN_RATES" | "MULTISELECT_TYPE_REQD" | "MULTI_ACCT_CANT_CHANGE_PSWD" | "MULTI_LOC_INVT_ERROR" | "MULTI_PRIMARY_PARTNER_DISALLWD" | "MULTI_SHIP_ROUTES_REQD" | "MUST_DEFINE_BASE_UNIT" | "MUST_RESUBMIT_RCRD" | "NAME_ALREADY_IN_USE" | "NAME_REQD" | "NAME_TYPE_FLDR_FIELDS_REQD" | "NARROW_KEYWORD_SEARCH" | "NEED_BILL_VARIANCE_ACCT" | "NEGATIVE_PAYMENT_DISALLWD" | "NEGATIVE_TAX_RATE_DISALLWD" | "NEITHER_ARGUMENT_DEFINED" | "NEW_CONNECTION_DISALLWD" | "NEXUS_REQD" | "NONMATCHING_EMAILS" | "NONUNIQUE_INDEX_VALUE" | "NONZERO_AMT_REQD" | "NONZERO_QTY_REQD" | "NONZERO_WEIGHT_REQD" | "NON_ADMIN_CANNOT_INITIATE_LINK" | "NOT_AN_INVITEE" | "NOT_IN_INVT" | "NO_DATA_FOUND" | "NO_EXPENSES_FOR_PRD" | "NO_ITEMS_TO_PRINT" | "NO_MASS_UPDATES_RUNNING" | "NO_MTRX_ITEMS_TO_UPDATE" | "NO_ORD_SHPMNT" | "NO_RCRDS_MATCH" | "NO_RCRD_FOR_USER" | "NO_SCHDUL_APPLIED" | "NO_UPSERT" | "NULL_CHECK_NUMBER" | "NUMERIC_CHECK_NUM_REQD" | "NUMERIC_REF_NUM_REQD" | "NUM_ITEMS_GRTR_THAN_QTY" | "NUM_ITEMS_NOT_EQUAL_TO_QTY" | "NUM_REQD_FOR_FIRST_LABEL" | "OI_FEATURE_REQD" | "OI_PERMISSION_REQD" | "ONE_ADMIN_REQD_PER_ACCT" | "ONE_DIRECT_DEPOSIT_ACT_ALLWD" | "ONE_EMPL_REQD" | "ONE_PAY_ITEM_PER_EMPL" | "ONE_POSITIVE_VALUE_REQD" | "ONE_RCRD_REQD_FOR_MASS_UPDATE" | "ONE_ROLE_REQD" | "ONLINE_BANK_FILE_REQD" | "ONLINE_BILL_PAY_DUP" | "ONLINE_BILL_PAY_SETUP_REQD" | "ONLINE_FORM_DSNT_EXIST" | "ONLINE_FORM_EMPTY" | "ONLINE_FORM_ID_REQD" | "ONLINE_FORM_USER_ACCESS_ONLY" | "ONLINE_ORD_FEATURE_DISABLED" | "ONLY_ONE_CONTRIB_ITEM_REQD" | "ONLY_ONE_DEDCT_ITEM_REQD" | "ONLY_ONE_DISTRIB_ALLWD" | "ONLY_ONE_EARNING_ITEM_REQD" | "ONLY_ONE_LOT_NUM_ALLWD" | "ONLY_ONE_PREF_BIN_ALLWD" | "ONLY_ONE_UNIT_AS_BASE_UNIT" | "ONLY_ONE_UPLOAD_ALLWD" | "ONLY_ONE_WITHLD_ITEM_REQD" | "OPENID_DOMAIN_IN_USE" | "OPENID_NOT_ENABLED" | "OPERATOR_ARITY_MISMATCH" | "OPRTN_UNAVAILBL_TO_GATEWAY" | "ORDER_DSNT_EXIST" | "ORD_ALREADY_APPRVD" | "OTHER_PMT_AUTH_IN_PROGRESS" | "OVERAGE_DISALLWD" | "OVERLAPPING_PRDS_DISALLWD" | "OVER_FULFILL_DISALLWD" | "OVER_FULFILL_RECEIV_DISALLWD" | "OWNER_REQD" | "PACKAGE_WEIGHT_REQD" | "PACKG_LEVEL_REF_DISALLWD" | "PACKG_VALUE_TOO_LARGE" | "PARENT_CANT_ITSELF_BE_MEMBER" | "PARENT_MUST_BE_MATRIX_ITEM" | "PARENT_REQD" | "PARSING_ERROR" | "PARTIAL_FULFILL_RCEIV_DISALLWD" | "PARTNER_ACCESS_DENIED" | "PARTNER_ACCT_NOT_LINKED" | "PARTNER_CODE_ALREADY_USED" | "PAYCHECK_ALREADY_PAID" | "PAYCHECK_IN_USE" | "PAYEE_REQD_FOR_PMT" | "PAYPAL_FUND_SOURCE_REQD" | "PAYPAL_INVALID_PMT_METHOD" | "PAYPAL_PMT_NOTIFICATION" | "PAYPAL_SETUP_REQD" | "PAYROLL_COMMITTED" | "PAYROLL_EXPENSE_ACCT_REQD" | "PAYROLL_FEATURE_DISABLED" | "PAYROLL_FEATURE_UNAVAILABLE" | "PAYROLL_FUND_ACCT_REQD" | "PAYROLL_IN_PROCESS" | "PAYROLL_ITEM_DELETE_DISALLWD" | "PAYROLL_LIABILITY_ACCT_REQD" | "PAYROLL_MAINTENANCE" | "PAYROLL_SETUP_REQD" | "PAYROLL_UPDATE_REQD" | "PAY_HOLD_ON_SO" | "PERMISSION_VIOLATION" | "PHONE_NUM_REQD" | "PIN_DEBIT_TRANS_DISALLWD" | "PLAN_IN_USE" | "PLAN_OVERLAP_DISALLWD" | "PMT_ALREADY_APPRVD" | "PMT_ALREADY_EXISTS" | "PMT_ALREADY_SBMTD" | "PMT_EDIT_DISALLWD" | "POSITIVE_BIN_QTY_REQD" | "POSITIVE_QTY_REQD" | "POSITIVE_UNITCOST_REQD" | "POSTING_DISCOUNT_DISALLWD" | "POSTING_PRD_SETUP_REQD" | "PRDS_DISALLWD_NAMES_NOT_UNIQUE" | "PRD_SETUP_REQD" | "PREFERRED_TAX_AGENCY_REQD" | "PREF_VENDOR_COST_REQD" | "PREF_VENDOR_REQD" | "PRIVATE_RCRD_ACCESS_DISALLWD" | "PRIVATE_STATUS_CHNG_DISALLWD" | "PRODUCT_MODULE_MISMATCH" | "PSWD_EXPIRED" | "PSWD_REQD" | "PWSDS_DONT_MATCH" | "QTY_EXCEEDED_QTY_BUCKETS" | "QTY_REQD" | "RATE_REQUEST_SHPMNT_REQD" | "RATE_SRVC_UNAVAILBL" | "RCRD_DELETED_SINCE_RETRIEVED" | "RCRD_DSNT_EXIST" | "RCRD_EDITED_SINCE_RETRIEVED" | "RCRD_HAS_BEEN_CHANGED" | "RCRD_ID_NOT_INT" | "RCRD_LOCKED_BY_WF" | "RCRD_NOT_FOUND" | "RCRD_PREVSLY_DELETED" | "RCRD_REF_RCRD_TYP_MISMATCH" | "RCRD_SUB_MISMATCH_WITH_CLASS" | "RCRD_TYPE_REQD" | "RCRD_UNEDITABLE" | "REACHED_LIST_END" | "REACHED_LIST_START" | "RECALCING_PLAN_SCHDUL" | "RECURSV_REF_DISALLWD" | "RECUR_EVENT_DISALLWD" | "REC_TYP_REQD" | "REPORT_EXPIRED" | "REQD_FORM_TAG_MISSING" | "REQD_LOC_FIELDS_MISSING" | "REQD_SUB_FIELDS_MISSING" | "REQUEST_PARAM_REQD" | "REVERSAL_DATE_WARNING" | "REV_REC_DATE_REQD" | "REV_REC_TMPLT_DATA_MISSING" | "REV_REC_UPDATE_DISALLWD" | "ROLE_REQD" | "ROLE_REQUIRED" | "ROUNDING_DIFF_TOO_BIG" | "ROUNDING_ERROR" | "ROUTING_NUM_REQD" | "SALES_DISCOUNT_ACCT_REQD" | "SAME_ACCT_TYP_REQD_FOR_PARENT" | "SAVED_SRCH_EMAIL_ERROR" | "SCHDUL_EDIT_DISALLWD" | "SCHEDULED_REPORT_ERROR" | "SEARCH_DATE_FILTER_REQD" | "SEARCH_ERROR" | "SEARCH_INTEGER_REQD" | "SEARCH_TIMED_OUT" | "SECURE_TRANS_REQD_ON_CHECKOUT" | "SELECT_OPTION_ALREADY_PRESENT" | "SELECT_OPTION_NOT_FOUND" | "SERIAL_NUM_MATCH_MULTI_ITEMS" | "SESSION_TERMD_2ND_LOGIN_DECTD" | "SESSION_TIMED_OUT" | "SETUP_METER_REQD" | "SET_SHIPPING_PICKUP_TYP" | "SHIPFROM_ADDRESS_NOT_SET" | "SHIPMNT_INSURANCE_NOT_AVAILABLE" | "SHIP_ADDR_REQD" | "SHIP_MANIFEST_ALREADY_PRCSSD" | "SHIP_MANIFEST_ERROR" | "SHIP_SETUP_REQD" | "SHIP_TALBE_UNBALNCD" | "SHIP_USER_ERROR" | "SINGLE_VALUE_REQD" | "SITEMAP_GEN_ERROR" | "SITE_DOMAIN_NAME_REQD" | "SITE_TAG_ALREADY_EXISTS" | "SO_HAS_CHILD_TRANS" | "SO_LINE_HAS_PO" | "SRVC_UNAVAILBL_FOR_LOC" | "SSS_AUTHOR_MUST_BE_EMPLOYEE" | "SSS_CONNECTION_TIME_OUT" | "SSS_DEBUG_DISALLWD" | "SSS_DRIP_EMAIL_RAN_OUT_OF_COUPON_CODES" | "SSS_DUP_DRIP_EMAIL" | "SSS_FILE_SIZE_EXCEEDED" | "SSS_INSTRUCTION_COUNT_EXCEEDED" | "SSS_INVALID_ATTACH_RECORD_TYPE" | "SSS_INVALID_BCC_EMAIL" | "SSS_INVALID_CC_EMAIL" | "SSS_INVALID_CMPGN_EVENT_ID" | "SSS_INVALID_EMAIL_TEMPLATE" | "SSS_INVALID_FORM_ELEMENT_NAME" | "SSS_INVALID_GSO_FLTR_OPRTOR" | "SSS_INVALID_HEADER" | "SSS_INVALID_HOST_CERT" | "SSS_INVALID_LIST_COLUMN_NAME" | "SSS_INVALID_LOCK_WAIT_TIME" | "SSS_INVALID_LOG_TYPE" | "SSS_INVALID_PORTLET_INTERVAL" | "SSS_INVALID_SCRIPTLET_ID" | "SSS_INVALID_SRCH_COL" | "SSS_INVALID_SRCH_COLUMN_JOIN" | "SSS_INVALID_SRCH_COLUMN_SUM" | "SSS_INVALID_SRCH_FILTER" | "SSS_INVALID_SRCH_FILTER_JOIN" | "SSS_INVALID_SRCH_OPERATOR" | "SSS_INVALID_SUBLIST_OPERATION" | "SSS_INVALID_SUBMIT_OPTION" | "SSS_INVALID_TYPE_ARG" | "SSS_INVALID_UI_OBJECT_TYPE" | "SSS_INVALID_URL" | "SSS_INVALID_URL_CATEGORY" | "SSS_INVALID_WF_RCRD_TYPE" | "SSS_INVALID_XML_SCHEMA_OR_DEPENDENCY" | "SSS_MEMORY_USAGE_EXCEEDED" | "SSS_METHOD_NOT_IMPLEMENTED" | "SSS_MISSING_REQD_ARGUMENT" | "SSS_QUEUE_LIMIT_EXCEEDED" | "SSS_RECORD_TYPE_MISMATCH" | "SSS_REQUEST_LIMIT_EXCEEDED" | "SSS_REQUEST_TIME_EXCEEDED" | "SSS_SCRIPT_DESERIALIZATION_FAILURE" | "SSS_SCRIPT_SECURITY_VIOLATION" | "SSS_SSO_CONFIG_REQD" | "SSS_STACK_FRAME_DEPTH_EXCEEDED" | "SSS_TIME_LIMIT_EXCEEDED" | "SSS_TRANSACTION_REQD" | "SSS_TRANS_IN_PROGRESS" | "SSS_UNKNOWN_HOST" | "SSS_USAGE_LIMIT_EXCEEDED" | "SSS_XML_DOES_NOT_CONFORM_TO_SCHEMA" | "SSS_XML_DOM_EXCEPTION" | "START_DATE_AFTER_END_DATE" | "START_DATE_REQD" | "STATE_ALREADY_EXISTS" | "STATE_REQD" | "STATUS_ASSIGNEE_REQD" | "STORAGE_LIMIT_EXCEEDED" | "STORE_ALIAS_UNAVAILABLE" | "STORE_DOMAIN_UNAVAILABLE" | "SUBITEM_REQD" | "SUBSIDIARY_MISMATCH" | "SUB_MISMATCH" | "SUB_RESTRICT_VIEW_REQD" | "SUCCESS_TRANS" | "SUPRT_CNTR_LOGIN_ERROR" | "TAGATA_ALREADY_ENDORSED" | "TAG_ALREADY_EXISTS" | "TAG_SUBSTITUTN_ERROR" | "TAX_ACCT_SETUP_REQD" | "TAX_CODES_SETUP_PROBLEM" | "TAX_CODES_SETUP_REQD" | "TAX_CODE_REQD" | "TAX_GROUP_SETUP_REQD" | "TAX_PRD_REQD" | "TAX_SETUP_REQD" | "TEMPLATE_NOT_FOUND" | "THIRD_PARTY_BILLING_ACCT_REQD" | "TICKET_NOT_LOCATED" | "TIMEOUT_THE_RECORD_DOESNT_EXIST_ANYMORE" | "TIME_ENTRY_DISALLWD" | "TOPIC_REQD" | "TRANSACTION_DELETED" | "TRANSORD_SHIP_REC_MISMATCH" | "TRANS_ALREADY_REFUNDED" | "TRANS_ALREADY_SETTLED" | "TRANS_ALREADY_VOIDED" | "TRANS_AMTS_UNBALNCD" | "TRANS_APPLIED_AMTS_UNBALNCD" | "TRANS_CLASS_UNBALNCD" | "TRANS_DEPT_UNBALNCD" | "TRANS_DOES_NOT_EXIST" | "TRANS_DSNT_EXIST" | "TRANS_EDIT_DISALLWD" | "TRANS_FORGN_CRNCY_MISMATCH" | "TRANS_FORGN_CUR_UNBALNCD" | "TRANS_IN_USE" | "TRANS_LINES_UNBALNCD" | "TRANS_LINE_AND_PMT_UNBALNCD" | "TRANS_LOC_UNBALNCD" | "TRANS_NOT_CLEANED" | "TRANS_NOT_COMPLETED" | "TRANS_PRCSSNG_ERROR" | "TRANS_UNBALNCD" | "TRAN_DATE_REQD" | "TRAN_LINE_FX_AMT_REQD" | "TRAN_LINK_FX_AMT_REQD" | "TRAN_PERIOD_CLOSED" | "TRAN_PRD_CLOSED" | "TWO_FA_AUTH_REQD" | "TWO_FA_REQD" | "UNABLE_TO_PRINT_CHECKS" | "UNABLE_TO_PRINT_DEPOSITS" | "UNAUTH_CAMPAIGN_RSPNS_RQST" | "UNAUTH_UNSUBSCRIBE_RQST" | "UNDEFINED_ACCTNG_PRD" | "UNDEFINED_CSTM_FIELD" | "UNDEFINED_TAX_PRD" | "UNEXPECTED_ERROR" | "UNIQUE_CONTACT_NAME_REQD" | "UNIQUE_CUST_EMAIL_REQD" | "UNIQUE_CUST_ID_REQD" | "UNIQUE_ENTITY_NAME_REQD" | "UNIQUE_GROUPID_REQD" | "UNIQUE_PARTNER_CODE_REQD" | "UNIQUE_QTY_REQD" | "UNIQUE_RCRD_ID_REQD" | "UNIQUE_SOLUTION_CODE_REQD" | "UNITS_TYP_IN_USE" | "UNKNOWN_CARRIER" | "UNKNOWN_RCRD_TYPE" | "UNKNOWN_SCRIPT_TYP" | "UNKNWN_ALLOCTN_SCHDUL_FREQ_TYP" | "UNKNWN_EMAIL_AUTHOR" | "UNKNWN_EXCHANGE_RATE" | "UNRECOGNIZED_METHOD" | "UNSUBSCRIBE_REQD" | "UNSUPPORTED_METHOD" | "UNSUPPORTED_WS_VERSION" | "UNSUPRTD_DOC_TYP" | "UPDATE_DISALLWD" | "UPDATE_PRICE_AMT_REQD" | "UPGRADE_WS_VERSION" | "UPS_CANT_INTEGRATE_FULFILL" | "UPS_CONFIG_ERROR" | "UPS_LICENSE_AGREEMNT_REQD" | "UPS_ONLINE_RATE_UNAVAILBL" | "UPS_ONLINE_SHIP_UNAVAILBL" | "UPS_REG_NUM_IN_USE" | "UPS_SETUP_REQD" | "UPS_USER_ERROR" | "UPS_VOID_ERROR" | "UPS_XML_ERROR" | "URL_ID_PARAM_REQD" | "URL_REQD" | "USER_CONTEXT_REQD" | "USER_DISABLED" | "USER_ERROR" | "USPS_ACCT_NUM_ALREADY_EXISTS" | "USPS_INVALID_INSURED_VALUE" | "USPS_INVALID_PACKAGING" | "USPS_INVALID_PSWD" | "USPS_LABEL_VOIDED" | "USPS_MAX_ITEM_EXCEEDED" | "USPS_ONE_PACKAGE_ALLWD" | "USPS_PASS_PHRASE_NOT_UPDATED" | "USPS_REFUND_FAILED" | "USPS_RETRY" | "USPS_VALIDATE_ADDR" | "USPS_VERIFY_TRACKING_NUM" | "USPS_VOID_ERROR" | "VALID_EMAIL_REQD" | "VALID_EMAIL_REQD_FOR_LOGIN" | "VALID_FIRST_NAME_REQD" | "VALID_LAST_NAME_REQD" | "VALID_LINE_ITEM_REQD" | "VALID_PHONE_NUM_REQD" | "VALID_PRD_REQD" | "VALID_URL_REQD" | "VALID_VERSION_REQD_IN_URL" | "VALID_WORK_PHONE_REQD" | "VALID_ZIPCODE_REQD" | "VENDOR_TYPE_REQD" | "VERIFY_DESTNTN_ZIP_CODE" | "VERIFY_PAYROLL_FUND_ACCT" | "VERIFY_ZIP_CODE_SETUP" | "VISA_ERROR" | "VOIDING_REVERSAL_DISALLWD" | "VOID_FAILED" | "VSOE_CANT_ADD_ITEM_GROUP" | "VSOE_REV_REC_TMPLT_REQD" | "VSOE_TOTAL_ALLOCATION_ERROR" | "VSOE_TRAN_VSOE_BUNDLE_ERROR" | "WARNING" | "WF_EXEC_USAGE_LIMIT_EXCEEDED" | "WORK_DAYS_REQD" | "WORLDPAY_ERROR" | "WRITE_OFF_ACCT_REQD" | "WS_CONCUR_SESSION_DISALLWD" | "WS_EXCEEDED_CONCUR_USERS_ALLWD" | "WS_EXCEEDED_MAX_CONCUR_RQST" | "WS_FEATURE_REQD" | "WS_INVALID_SEARCH_OPERATN" | "WS_LOG_IN_REQD" | "WS_PERMISSION_REQD" | "WS_REQUEST_BLOCKED" | "ZIP_FILE_CONTAINS_VIRUS");
