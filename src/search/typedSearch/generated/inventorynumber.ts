// This file is automatically generated - don't edit it. 
// Search Types for record Inventory Number (inventorynumber)

// Search Columns

/** Inventory Number (inventorynumber) Search Columns definition */
export interface inventorynumberSearchColumn {
  /** Expiration Date (expirationdate: date) */
      expirationdate?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: string;
  /** Formula (Date) (formuladate: date) */
      formuladate?: string;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: string;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: string;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: string;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Number (inventorynumber: select) */
      inventorynumber?: string;
  /** Is On Hand (isonhand: checkbox) */
      isonhand?: boolean;
  /** Item (item: select) */
      item?: string;
  /** Location (location: select) */
      location?: string;
  /** Memo (memo: text) */
      memo?: string;
  /** Available (quantityavailable: float) */
      quantityavailable?: string;
  /** In Transit (quantityintransit: float) */
      quantityintransit?: string;
  /** On Hand (quantityonhand: float) */
      quantityonhand?: string;
  /** On Order (quantityonorder: float) */
      quantityonorder?: string;
}


// Search Filters

/** Inventory Number (inventorynumber) Search Filters definition */
export interface inventorynumberSearchFilter {
/** Expiration Date (expirationdate: date) */
  expirationdate?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Number (inventorynumber: text) */
  inventorynumber?: string;
  /** Is On Hand (isonhand: checkbox) */
  isonhand?: boolean;
  /** Item (item: select) */
  item?: string;
  /** Location (location: select) */
  location?: string;
  /** Memo (memo: text) */
  memo?: string;
  /** Availabile (quantityavailable: float) */
  quantityavailable?: string;
  /** In Transit (quantityintransit: float) */
  quantityintransit?: string;
  /** On Hand (quantityonhand: float) */
  quantityonhand?: string;
  /** On Order (quantityonorder: float) */
  quantityonorder?: string;
}


// Search Joins

/** Inventory Number (inventorynumber) Search Joins definitions. */
export interface inventorynumberSearchJoinTypes {
/** inventorynumber's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Inventory Number (inventorynumber) Search Filter Type definitions. */
export interface inventorynumberSearchFilterTypes {
expirationdate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  inventorynumber: 'text';
  isonhand: 'checkbox';
  item: 'select';
  location: 'select';
  memo: 'text';
  quantityavailable: 'float';
  quantityintransit: 'float';
  quantityonhand: 'float';
  quantityonorder: 'float';
}


// Search Column Types

/** Inventory Number (inventorynumber) Search Column Type definitions. */
export interface inventorynumberSearchColumnTypes {
expirationdate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  inventorynumber: 'select';
  isonhand: 'checkbox';
  item: 'select';
  location: 'select';
  memo: 'text';
  quantityavailable: 'float';
  quantityintransit: 'float';
  quantityonhand: 'float';
  quantityonorder: 'float';
}