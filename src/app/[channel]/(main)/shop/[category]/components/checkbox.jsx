import { Checkbox as ShadCheckbox } from "../../../../../../components/ui/checkbox";

export default function Checkbox({ label = "", onChange, ...rest }) {
  return (
    <div className="items-top flex w-[60%] justify-between">
      <label
        htmlFor="terms1"
        className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <ShadCheckbox {...rest} id="terms1" onCheckedChange={onChange} />
    </div>
  );
}
