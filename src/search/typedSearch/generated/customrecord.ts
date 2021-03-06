// This file is automatically generated - don't edit it. 
// Search Types for record Custom Record (customrecord)

// Search Columns

/** Custom Record (customrecord) Search Columns definition */
export interface customrecordSearchColumn {
  /** Name (altname: text) */
      altname?: string;
  /** Always Available Offline (availableoffline: checkbox) */
      availableoffline?: boolean;
  /** Date Created (created: datetime) */
      created?: string;
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
  /** ID (id: integer) */
      id?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Last Modified (lastmodified: datetime) */
      lastmodified?: string;
  /** Last Modified By (lastmodifiedby: select) */
      lastmodifiedby?: string;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: string;
  /** Name (name: text) */
      name?: string;
  /** Owner (owner: select) */
      owner?: string;
  /** Parent (parent: select) */
      parent?: string;
}


// Search Filters

/** Custom Record (customrecord) Search Filters definition */
export interface customrecordSearchFilter {
/** Always Available Offline (availableoffline: checkbox) */
  availableoffline?: boolean;
  /** Date Created (created: datetime) */
  created?: string;
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
  /** ID (id: integer) */
  id?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Last Modified (lastmodified: datetime) */
  lastmodified?: string;
  /** Last Modified By (lastmodifiedby: select) */
  lastmodifiedby?: string;
  /** Name (name: text) */
  name?: string;
  /** Owner (owner: select) */
  owner?: string;
  /** Parent (parent: select) */
  parent?: string;
}


// Search Joins

/** Custom Record (customrecord) Search Joins definitions. */
export interface customrecordSearchJoinTypes {
/** customrecord's messages search filter. Messages. Actual name: Message. */
  messages: 'messages';
  /** customrecord's owner search filter. Owner. Actual name: Employee. */
  owner: 'owner';
  /** customrecord's parent search filter. Parent. Actual name: Custom. */
  parent: 'parent';
}


// Search Filter Types

/** Custom Record (customrecord) Search Filter Type definitions. */
export interface customrecordSearchFilterTypes {
availableoffline: 'checkbox';
  created: 'datetime';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  id: 'integer';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  lastmodified: 'datetime';
  lastmodifiedby: 'select';
  name: 'text';
  owner: 'select';
  parent: 'select';
}


// Search Column Types

/** Custom Record (customrecord) Search Column Type definitions. */
export interface customrecordSearchColumnTypes {
altname: 'text';
  availableoffline: 'checkbox';
  created: 'datetime';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  id: 'integer';
  internalid: 'select';
  isinactive: 'checkbox';
  lastmodified: 'datetime';
  lastmodifiedby: 'select';
  lastviewed: 'datetime';
  name: 'text';
  owner: 'select';
  parent: 'select';
}