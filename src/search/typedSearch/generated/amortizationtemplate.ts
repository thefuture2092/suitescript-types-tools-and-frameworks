// This file is automatically generated - don't edit it. 
// Search Types for record Amortization Template (amortizationtemplate)

// Search Columns

/** Amortization Template (amortizationtemplate) Search Columns definition */
export interface amortizationtemplateSearchColumn {
  /** Method (amormethod: text) */
      amormethod?: string;
  /** Amortization Period (amorperiod: text) */
      amorperiod?: string;
  /** Start Offset (amorstartoffset: text) */
      amorstartoffset?: string;
  /** Term Source (amortermsrc: text) */
      amortermsrc?: string;
  /** Type (amortype: text) */
      amortype?: string;
  /** Contra Account (contraaccount: text) */
      contraaccount?: string;
  /** Deferral Account (deferralaccount: text) */
      deferralaccount?: string;
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
  /** Inactive (isinactive: text) */
      isinactive?: string;
  /** Name (name: text) */
      name?: string;
  /** Period Offset (periodoffset: text) */
      periodoffset?: string;
  /** Target Account (targetaccount: text) */
      targetaccount?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
      useforeignamounts?: boolean;
}


// Search Filters

/** Amortization Template (amortizationtemplate) Search Filters definition */
export interface amortizationtemplateSearchFilter {
/** Method (amormethod: select) */
  amormethod?: string;
  /** Amortization Period (amorperiod: integer) */
  amorperiod?: string;
  /** Start Offset (amorstartoffset: integer) */
  amorstartoffset?: string;
  /** Term Source (amortermsrc: select) */
  amortermsrc?: string;
  /** Type (amortype: select) */
  amortype?: string;
  /** Contra Account (contraaccount: select) */
  contraaccount?: string;
  /** Deferral Account (deferralaccount: select) */
  deferralaccount?: string;
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
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: select) */
  name?: string;
  /** Period Offset (periodoffset: integer) */
  periodoffset?: string;
  /** Target Account (targetaccount: select) */
  targetaccount?: string;
  /** Use Transaction Currency (useforeignamounts: checkbox) */
  useforeignamounts?: boolean;
}


// Search Joins

/** Amortization Template (amortizationtemplate) Search Joins definitions. */
export interface amortizationtemplateSearchJoinTypes {
/** amortizationtemplate's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Amortization Template (amortizationtemplate) Search Filter Type definitions. */
export interface amortizationtemplateSearchFilterTypes {
amormethod: 'select';
  amorperiod: 'integer';
  amorstartoffset: 'integer';
  amortermsrc: 'select';
  amortype: 'select';
  contraaccount: 'select';
  deferralaccount: 'select';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'select';
  periodoffset: 'integer';
  targetaccount: 'select';
  useforeignamounts: 'checkbox';
}


// Search Column Types

/** Amortization Template (amortizationtemplate) Search Column Type definitions. */
export interface amortizationtemplateSearchColumnTypes {
amormethod: 'text';
  amorperiod: 'text';
  amorstartoffset: 'text';
  amortermsrc: 'text';
  amortype: 'text';
  contraaccount: 'text';
  deferralaccount: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isinactive: 'text';
  name: 'text';
  periodoffset: 'text';
  targetaccount: 'text';
  useforeignamounts: 'checkbox';
}