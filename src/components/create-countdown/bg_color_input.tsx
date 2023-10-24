import { UseFormSetValue } from "react-hook-form"
import { CreateCountdownFormSchemaType } from './index';
import { ColorPicker } from "antd";

export const BgColorInput: React.FC<{
  defaultColor: string;
  setValue: UseFormSetValue<CreateCountdownFormSchemaType>
}> = ({ defaultColor, setValue }) => {


  return <ColorPicker defaultValue={defaultColor} onChangeComplete={(e) => setValue("bg_color", e.toHex())} size="middle" />
}