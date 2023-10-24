import { Slider } from "antd"
import { UseFormSetValue } from "react-hook-form";
import { CreateCountdownFormSchemaType } from ".";

export const BordeRadiusRanger: React.FC<{ setValue: UseFormSetValue<CreateCountdownFormSchemaType> }> = ({ setValue }) => {
  return (
    <Slider min={0} max={100} className="w-48" step={1} onAfterChange={(e) => setValue("border_radius", `${e}`)} />
  )
}