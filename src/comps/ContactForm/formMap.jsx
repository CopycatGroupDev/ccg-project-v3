import { useContext } from 'react';
import Label from './Label';
import { FormContext } from './Main';

export default function({ Component, $colSpan, ...props }, id) {
    const { defaultValues, options, selected, searchParams } = useContext(FormContext);
    const currentOp = options?.[props.name];
    const currentSel = selected?.[props.name];

    return <Label key={id} $colSpan={$colSpan}>
      {props.placeholder}
      <Component
      {...props}
      required
      defaultValue={defaultValues?.[searchParams.get(props.name)] ?? currentOp?.[currentSel] ?? ""}
      {...{
        [currentOp?.length > 0 && "children"] : currentOp?.map(
          (opt) => <option key={opt} value={opt}>
            {opt}
          </option>
        )
      }} />
    </Label>
}