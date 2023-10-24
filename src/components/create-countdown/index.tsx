'use client'

import { useState } from 'react';
import z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BgColorInput } from './bg_color_input';
import { SelectFont } from './select_font';
import { TimerInput } from './timer_input';
import { TextColorInput } from './text_color_input copy';
import { BordeRadiusRanger } from './border_radius_ranger';
import { CopyButton } from '../copy-button';
import { CounterIframe } from '../counter-iframe';
import { ReloadButton } from '../reload-button';

export const createCountdownFormSchema = z.object({
  bg_color: z.string().min(1, { message: 'Required' }),
  text_color: z.string().min(1, { message: 'Required' }),
  time: z.string().min(1, { message: 'Required' }),
  font: z.string().min(1, { message: 'Required' }),
  font_size: z.string().min(1, { message: 'Required' }),
  reload: z.boolean(),
  width: z.string().min(1, { message: 'min 1' }).max(2000, { message: "você atingiu a largura máxima" }),
  height: z.string().min(1, { message: 'min 1' }).max(2000, { message: "você atingiu a largura máxima" }),
  border_radius: z.string().min(1, { message: 'min 1' }).max(999, { message: "você atingiu o límite máximo" }),
});

export type CreateCountdownFormSchemaType = z.infer<typeof createCountdownFormSchema>;

const CreateCountdown = () => {
  const defaultValues = {
    text_color: "ffffff",
    bg_color: "transparent",
    font_size: "72",
    font: "Arial",
    reload: false,
    time: "00:00:00",
    width: "300",
    height: "150",
    border_radius: "0"
  }
  const counterBaseUrl = "http://localhost:3000/countdown"
  const [counterUrl, setCounterUrl] = useState(counterBaseUrl)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCountdownFormSchema),
    defaultValues: defaultValues
  });
  const { height, bg_color } = getValues()

  const handleApply: SubmitHandler<CreateCountdownFormSchemaType> = (data) => {
    console.log(bg_color)

    const newUrl =
      `${counterBaseUrl}?time=${data.time}&font=${data.font}&font_size=${data.font_size}&text_color=${data.text_color}&bg_color=${data.bg_color}&reload=${data.reload}&width=${data.width}&height=${data.height}&border_radius=${data.border_radius}`
    if (newUrl == counterUrl.trim()) return
    setIsLoading(true)
    setCounterUrl(newUrl)
  };


  return (
    <div className='p-24'>
      <form onSubmit={handleSubmit(handleApply as any)} className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-between items-center'>
          <div className='flex flex-wrap'>
            <label className='flex flex-col text-center'>
              <span>Largura do widget</span>
              <input
                type="number"
                {...register("width", {
                  max: 1280
                })}
              />
            </label>
            <label className='flex flex-col text-center'>
              <span>Altura do widget</span>
              <input
                type="number"
                {...register("height", {
                  max: 1280
                })}
              />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Tempo</span>
              <TimerInput setValue={setValue as any} defaultTime={defaultValues.time} />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Cor Do Texto</span>
              <TextColorInput setValue={setValue as any} defaultColor={defaultValues.text_color} />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Cor Do Fundo</span>
              <BgColorInput setValue={setValue as any} defaultColor={defaultValues.bg_color} />
            </label>
            <br />
            <label className='flex flex-col justify-between items-center'>
              <span>Fonte</span>
              <SelectFont setValue={setValue as any} />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Arredondar borda</span>
              <BordeRadiusRanger setValue={setValue as any} />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Tamanho da fonte</span>
              <input
                type="number"
                {...register("font_size")}
              />
            </label>
            <label className='flex flex-col justify-between items-center'>
              <span>Reiniciar</span>
              <input
                type="checkbox"
                {...register("reload")}
              />
            </label>

          </div>
          <div className='flex items-center justify-center'>
            {!isLoading &&
              <button type='submit' className='btn from-indigo-600 to-purple-500 border-indigo-700 active:border-indigo-600'>Aplicar</button>
            }
            {counterUrl !== counterBaseUrl &&
              <>
                <ReloadButton setUrl={setCounterUrl} isLoading={isLoading} setIsLoading={setIsLoading} />
                {!isLoading &&
                  <CopyButton text={counterUrl} />
                }
              </>
            }
          </div>
        </div>
      </form >
      {counterUrl !== counterBaseUrl && <CounterIframe counterUrl={counterUrl} height={height} setIsLoading={setIsLoading} />}
    </div>
  );
};

export { CreateCountdown }