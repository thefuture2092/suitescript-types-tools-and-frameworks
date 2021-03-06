import { RecordViewProps, ValuedSublist } from './recordViewTypes';
import { Bind } from '../../jsx/util/Bind';
import { ReactLike } from "../../jsx/createElement";


export const SublistLinesEditor = (props:RecordViewProps& {
  sublist: ValuedSublist;
}) => {
  try {
    return <div>
      <table>
        <thead><tr>{props.sublist.fields.map(f => <th>{f.id}{f.type ? ` (${f.type})` : ''}</th>)}</tr></thead>
        <tbody>
          {props.sublist.lines.map(line => <tr>
            {line.rows.map(row => {
              const input = (<span>            {row.text}{row.value == row.text ? ` ${row.value}` : ''}
                <Bind name={`data-sublist-field-${props.sublist.id}-${line}-${row.field.id}`}>
                  <input value={row.value + ''}></input>
                </Bind>

                <Bind name={`data-sublist-field-${props.sublist.id}-${line}-${row.field.id}`} data={{
                  routeName: 'setSublistFieldValue',
                  params: {
                    recordId: props.record.id,
                    recordType: props.record.type,
                    fieldType: row.field.type,
                    fieldId: row.field.id,
                    sublistId: props.sublist.id,
                    line,
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
                  }}>
                    Change!</button>
                </Bind>
              </span>);
              return (<td>
                {input}
                {row.field.type === 'select' ?
                  <a href={props.renderLink({ routeName: 'findRecord', params: { id: row.value as any, type: row.field.id } })}>&nbsp;(find)</a> : ''}
              </td>);
            })}
          </tr>)}
        </tbody>
      </table>

      <span>
        Line fields:
  <ul style={{ display: 'inline' }}>{props.sublist.fields.map(f => <li>{f.name} id: {f.id}{f.type ? `, type: ${f.type}` : ''}{f.isMandatory ? `, Mandatory: ${f.isMandatory}` : ''}{f.isReadonly ? `, Readonly: ${f.isReadonly}` : ''}
        </li>)} </ul>
      </span>}
    </div>
  }
  catch (error) {
    console.log(`$error ${error}`);
    return <span>error {error}</span>;
  }
};




// declarations needed only for testing in node:
interface RenderLinkOptions{
  routeName: string;
  params: {[k:string]:any};
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
