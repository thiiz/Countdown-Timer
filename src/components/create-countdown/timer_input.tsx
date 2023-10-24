import React, { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { CreateCountdownFormSchemaType } from '.';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

export const TimerInput: React.FC<{
  defaultTime: string;
  setValue: UseFormSetValue<CreateCountdownFormSchemaType>
}> = ({ defaultTime, setValue }) => {
  const format = 'HH:mm:ss';

  return (
    <TimePicker
      showSecond
      defaultValue={moment(defaultTime, format)}
      className="timer-input"
      onChange={(e) => setValue("time", e.format(format))}
      allowEmpty={false}
    />
  )
}