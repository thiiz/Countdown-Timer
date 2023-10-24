import { UseFormSetValue } from "react-hook-form";
import { CreateCountdownFormSchemaType } from ".";
import { fontOptions } from "@/fonts";
import { Select } from 'antd';
export const SelectFont: React.FC<{
  setValue: UseFormSetValue<CreateCountdownFormSchemaType>;
}> = ({ setValue }) => {

  return (
    <Select
      showSearch
      placeholder="Selecione uma fonte"
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={fontOptions}
      defaultValue={fontOptions[0]}
      optionFilterProp="children"
      onChange={(e) => e && setValue("font", `${e}`)}
      className="text-black min-w-[10rem]"
    />
  )
}