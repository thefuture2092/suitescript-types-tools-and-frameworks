// This file is automatically generated - don't edit it. 
// Search Types for record Other Name Category (othernamecategory)

// Search Columns

/** Other Name Category (othernamecategory) Search Columns definition */
export interface othernamecategorySearchColumn {
  /** External ID (externalid: select) */
      externalid?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Name (name: text) */
      name?: string;
}


// Search Filters

/** Other Name Category (othernamecategory) Search Filters definition */
export interface othernamecategorySearchFilter {
/** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: text) */
  name?: string;
}


// Search Joins

/** Other Name Category (othernamecategory) Search Joins definitions. */
export interface othernamecategorySearchJoinTypes {
/** othernamecategory's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Other Name Category (othernamecategory) Search Filter Type definitions. */
export interface othernamecategorySearchFilterTypes {
externalid: 'select';
  externalidstring: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
}


// Search Column Types

/** Other Name Category (othernamecategory) Search Column Type definitions. */
export interface othernamecategorySearchColumnTypes {
externalid: 'select';
  internalid: 'select';
  isinactive: 'checkbox';
  name: 'text';
}