import { UseFormSetValue } from "react-hook-form"
import { CreateCountdownFormSchemaType } from './index';
import { ColorPicker } from "antd";

export const TextColorInput: React.FC<{
  defaultColor: string;
  setValue: UseFormSetValue<CreateCountdownFormSchemaType>
}> = ({ defaultColor, setValue }) => {


  return <ColorPicker defaultValue={defaultColor} onChangeComplete={(e) => setValue("text_color", e.toHex())} size="middle" />
}