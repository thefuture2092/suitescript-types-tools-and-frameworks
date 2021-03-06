// This file is automatically generated - don't edit it. 
// Search Types for record Coupon Code (couponcode)

// Search Columns

/** Coupon Code (couponcode) Search Columns definition */
export interface couponcodeSearchColumn {
  /** Code (code: text) */
      code?: string;
  /** Date Sent (datesent: date) */
      datesent?: string;
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
  /** ID (id: integer) */
      id?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Promotion (promotion: text) */
      promotion?: string;
  /** Recipient (recipient: text) */
      recipient?: string;
  /** Use Count (usecount: integer) */
      usecount?: string;
  /** Used (used: checkbox) */
      used?: boolean;
}


// Search Filters

/** Coupon Code (couponcode) Search Filters definition */
export interface couponcodeSearchFilter {
/** CODE (code: text) */
  code?: string;
  /** Date Sent (datesent: date) */
  datesent?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** ID (id: integer) */
  id?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Promotion (promotion: select) */
  promotion?: string;
  /** Recipient (recipient: select) */
  recipient?: string;
  /** Use Count (usecount: integer) */
  usecount?: string;
  /** Used (used: checkbox) */
  used?: boolean;
}


// Search Joins

/** Coupon Code (couponcode) Search Joins definitions. */
export interface couponcodeSearchJoinTypes {

}


// Search Filter Types

/** Coupon Code (couponcode) Search Filter Type definitions. */
export interface couponcodeSearchFilterTypes {
code: 'text';
  datesent: 'date';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  id: 'integer';
  internalid: 'select';
  internalidnumber: 'integer';
  promotion: 'select';
  recipient: 'select';
  usecount: 'integer';
  used: 'checkbox';
}


// Search Column Types

/** Coupon Code (couponcode) Search Column Type definitions. */
export interface couponcodeSearchColumnTypes {
code: 'text';
  datesent: 'date';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  id: 'integer';
  internalid: 'select';
  promotion: 'text';
  recipient: 'text';
  usecount: 'integer';
  used: 'checkbox';
}