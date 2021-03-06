// This file is automatically generated - don't edit it. 
// Search Types for record Vendor Category (vendorcategory)

// Search Columns

/** Vendor Category (vendorcategory) Search Columns definition */
export interface vendorcategorySearchColumn {
  /** External ID (externalid: select) */
      externalid?: string;
}


// Search Filters

/** Vendor Category (vendorcategory) Search Filters definition */
export interface vendorcategorySearchFilter {
/** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
}


// Search Joins

/** Vendor Category (vendorcategory) Search Joins definitions. */
export interface vendorcategorySearchJoinTypes {

}


// Search Filter Types

/** Vendor Category (vendorcategory) Search Filter Type definitions. */
export interface vendorcategorySearchFilterTypes {
externalid: 'select';
  externalidstring: 'text';
}


// Search Column Types

/** Vendor Category (vendorcategory) Search Column Type definitions. */
export interface vendorcategorySearchColumnTypes {
externalid: 'select';
}