// This file is automatically generated - don't edit it. 
// Search Types for record Workflow Action Script (workflowactionscript)

// Search Columns

/** Workflow Action Script (workflowactionscript) Search Columns definition */
export interface workflowactionscriptSearchColumn {
  /** After Install Function (afterinstallfunction: text) */
      afterinstallfunction?: string;
  /** After Submit Function (aftersubmitfunction: text) */
      aftersubmitfunction?: string;
  /** After Update Function (afterupdatefunction: text) */
      afterupdatefunction?: string;
  /** Before Install Function (beforeinstallfunction: text) */
      beforeinstallfunction?: string;
  /** Before Load Function (beforeloadfunction: text) */
      beforeloadfunction?: string;
  /** Before Submit Function (beforesubmitfunction: text) */
      beforesubmitfunction?: string;
  /** Before Uninstall Function (beforeuninstallfunction: text) */
      beforeuninstallfunction?: string;
  /** Before Update Function (beforeupdatefunction: text) */
      beforeupdatefunction?: string;
  /** Default Function (defaultfunction: text) */
      defaultfunction?: string;
  /** DELETE Function (deletefunction: text) */
      deletefunction?: string;
  /** Description (description: text) */
      description?: string;
  /** Field Changed Function (fieldchangedfunction: text) */
      fieldchangedfunction?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: number;
  /** Formula (Date) (formuladate: date) */
      formuladate?: Date;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: number;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: number;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** GET Function (getfunction: text) */
      getfunction?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Line Init Function (lineinitfunction: text) */
      lineinitfunction?: string;
  /** Name (name: text) */
      name?: string;
  /** Owner (owner: select) */
      owner?: string;
  /** Page Init Function (pageinitfunction: text) */
      pageinitfunction?: string;
  /** POST Function (postfunction: text) */
      postfunction?: string;
  /** Post Sourcing Function (postsourcingfunction: text) */
      postsourcingfunction?: string;
  /** PUT Function (putfunction: text) */
      putfunction?: string;
  /** Recalc Function (recalcfunction: text) */
      recalcfunction?: string;
  /** Save Record Function (saverecordfunction: text) */
      saverecordfunction?: string;
  /** Script File (scriptfile: select) */
      scriptfile?: string;
  /** Script ID (scriptid: text) */
      scriptid?: string;
  /** Script Type (scripttype: select) */
      scripttype?: string;
  /** Validate Delete Function (validatedeletefunction: text) */
      validatedeletefunction?: string;
  /** Validate Field Function (validatefieldfunction: text) */
      validatefieldfunction?: string;
  /** Validate Insert Function (validateinsertfunction: text) */
      validateinsertfunction?: string;
  /** Validate Line Function (validatelinefunction: text) */
      validatelinefunction?: string;
}


// Search Filters

/** Workflow Action Script (workflowactionscript) Search Filters definition */
export interface workflowactionscriptSearchFilter {
/** After Install Function (afterinstallfunction: text) */
  afterinstallfunction?: string;
  /** After Submit Function (aftersubmitfunction: text) */
  aftersubmitfunction?: string;
  /** After Update Function (afterupdatefunction: text) */
  afterupdatefunction?: string;
  /** Before Install Function (beforeinstallfunction: text) */
  beforeinstallfunction?: string;
  /** Before Load Function (beforeloadfunction: text) */
  beforeloadfunction?: string;
  /** Before Submit Function (beforesubmitfunction: text) */
  beforesubmitfunction?: string;
  /** Before Uninstall Function (beforeuninstallfunction: text) */
  beforeuninstallfunction?: string;
  /** Before Update Function (beforeupdatefunction: text) */
  beforeupdatefunction?: string;
  /** Default Function (defaultfunction: text) */
  defaultfunction?: string;
  /** Delete Function (deletefunction: text) */
  deletefunction?: string;
  /** Details (description: textarea) */
  description?: string;
  /** Field Changed Function (fieldchangedfunction: text) */
  fieldchangedfunction?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Get Function (getfunction: text) */
  getfunction?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Line Init Function (lineinitfunction: text) */
  lineinitfunction?: string;
  /** Name (name: text) */
  name?: string;
  /** Owner (owner: select) */
  owner?: string;
  /** Page Init Function (pageinitfunction: text) */
  pageinitfunction?: string;
  /** Portlet Type (portlettype: select) */
  portlettype?: string;
  /** Post Function (postfunction: text) */
  postfunction?: string;
  /** Post Sourcing Function (postsourcingfunction: text) */
  postsourcingfunction?: string;
  /** Put Function (putfunction: text) */
  putfunction?: string;
  /** Recalc Function (recalcfunction: text) */
  recalcfunction?: string;
  /** Save Record Function (saverecordfunction: text) */
  saverecordfunction?: string;
  /** Script File (scriptfile: select) */
  scriptfile?: string;
  /** Script ID (scriptid: text) */
  scriptid?: string;
  /** Script Type (scripttype: select) */
  scripttype?: string;
  /** Validate Delete Function (validatedeletefunction: text) */
  validatedeletefunction?: string;
  /** Validate Field Function (validatefieldfunction: text) */
  validatefieldfunction?: string;
  /** Validate Insert Function (validateinsertfunction: text) */
  validateinsertfunction?: string;
  /** Validate Line Function (validatelinefunction: text) */
  validatelinefunction?: string;
}


// Search Joins

/** Workflow Action Script (workflowactionscript) Search Joins definitions. */
export interface workflowactionscriptSearchJoinTypes {
/** workflowactionscript's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Workflow Action Script (workflowactionscript) Search Filter Type definitions. */
export interface workflowactionscriptSearchFilterTypes {
afterinstallfunction: 'text';
  aftersubmitfunction: 'text';
  afterupdatefunction: 'text';
  beforeinstallfunction: 'text';
  beforeloadfunction: 'text';
  beforesubmitfunction: 'text';
  beforeuninstallfunction: 'text';
  beforeupdatefunction: 'text';
  defaultfunction: 'text';
  deletefunction: 'text';
  description: 'textarea';
  fieldchangedfunction: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  getfunction: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  lineinitfunction: 'text';
  name: 'text';
  owner: 'select';
  pageinitfunction: 'text';
  portlettype: 'select';
  postfunction: 'text';
  postsourcingfunction: 'text';
  putfunction: 'text';
  recalcfunction: 'text';
  saverecordfunction: 'text';
  scriptfile: 'select';
  scriptid: 'text';
  scripttype: 'select';
  validatedeletefunction: 'text';
  validatefieldfunction: 'text';
  validateinsertfunction: 'text';
  validatelinefunction: 'text';
}


// Search Column Types

/** Workflow Action Script (workflowactionscript) Search Column Type definitions. */
export interface workflowactionscriptSearchColumnTypes {
afterinstallfunction: 'text';
  aftersubmitfunction: 'text';
  afterupdatefunction: 'text';
  beforeinstallfunction: 'text';
  beforeloadfunction: 'text';
  beforesubmitfunction: 'text';
  beforeuninstallfunction: 'text';
  beforeupdatefunction: 'text';
  defaultfunction: 'text';
  deletefunction: 'text';
  description: 'text';
  fieldchangedfunction: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  getfunction: 'text';
  internalid: 'select';
  isinactive: 'checkbox';
  lineinitfunction: 'text';
  name: 'text';
  owner: 'select';
  pageinitfunction: 'text';
  postfunction: 'text';
  postsourcingfunction: 'text';
  putfunction: 'text';
  recalcfunction: 'text';
  saverecordfunction: 'text';
  scriptfile: 'select';
  scriptid: 'text';
  scripttype: 'select';
  validatedeletefunction: 'text';
  validatefieldfunction: 'text';
  validateinsertfunction: 'text';
  validatelinefunction: 'text';
}