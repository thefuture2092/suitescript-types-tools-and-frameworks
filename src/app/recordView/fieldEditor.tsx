///@reference path="../browserDeclarations.ts"

import { ReactLike } from "../../jsx/createElement";
import { Bind } from '../../jsx/util/Bind';
import { formatDate } from "../../misc/formatDate";
import { tryTo } from '../../misc/misc';
// import { RenderLinkOptions } from "../browserCode";
import { RecordViewProps, ValuedField } from "./recordViewTypes";



export const FieldEditor = (props: {
  field: ValuedField;
} & RecordViewProps) => {

  const f = props.field;
  let input: JSX.Element | undefined
  if (!f) {
    return <span>UNDEFINED FIELD ERROR </span>
  }
  else if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
    input = <select
      multiple={false}
      disabled={f.isReadonly}>

      {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
      {f.selectOptions.map(o =>
        <option
          selected={Array.isArray(f.value) ? (f.value as any[]).indexOf(o.value) !== -1 : f.value === o.value}
          value={o.value}>
          {o.text || (o.value && tryTo(() => o.value.toString()))}
        </option>)}
    </select>
  }
  else if (f.type === 'multiselect' && f.selectOptions && f.selectOptions.length) {
    input = <select
      multiple={true}
      disabled={f.isReadonly}>
      {(typeof f.value === 'undefined' || f.value === null) ? <option>Not Defined</option> : ''}
      {f.selectOptions.map(o =>
        <option
          selected={(f.value as any[]).indexOf(o.value) !== -1}
          value={o.value}>
          {Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && tryTo(() => o.value.toString()))}
        </option>)}
    </select>
  }

  else if (f.type === 'textarea') {
    input = <textarea
      disabled={f.isReadonly}
      defaultValue={f.value + ''}>
    </textarea>
  }

  else if (f.type === 'richtext') {
    input = <span contentEditable={!f.isReadonly} style={{ border: '3px solid blue', width: '100%', height: '200px', display: 'block', overflow: 'scroll' }} dangerouslySetInnerHTML={{ __html: f.value + '' }}></span>
  }
  else {
    const inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text'
    const inputValue = f.type === 'date' ? formatDate(f.value as any, 'YYYY-MM-DD') : (f.value + '')
    input = <input
      disabled={f.isReadonly}
      type={inputType}
      value={inputValue}
      checked={f.type === 'checkbox' && !!f.value}>
    </input>
  }

  return <span>

    <Bind name={`data-field-id${f.id}`}>
      {input}
    </Bind>
    <br></br>
    <Bind name={`data-field-id${f.id}`} data={{
      routeName: 'setFieldValue',
      params: {
        recordId: props.record.id,
        recordType: props.record.type,
        fieldType: f.type,
        fieldId: f.id,
        redirect: encodeURIComponent(props.currentUrl)
      }
    }}>
      <button onClick={e => {
        const data = getBindData<RenderLinkOptions>(e.currentTarget);
        let fieldValue = getBindInputValue<string>(e.currentTarget, { asString: true });
        if (!data || typeof fieldValue === 'undefined') {
          return;
        }
        data.params = { ...data.params, fieldValue };
        window.location.href = buildRouteUrl(data);
      }}>Change</button>
    </Bind>

  </span>


};





// declarations needed only for testing in node

interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}

interface RenderFragmentOptions extends RenderLinkOptions {
  selector: string;
}

declare function buildRouteUrl(config: RenderLinkOptions): string;

declare function getBindInputValue<T extends string | number | Date = string>(listenerEl: HTMLElement, config?: {
  asString?: boolean
}): T | undefined;

declare function getBindData<T>(listenerEl: HTMLElement): T | undefined;


declare function fetchAndRenderHtml(config: RenderFragmentOptions): void
