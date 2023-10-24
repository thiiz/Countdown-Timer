import Iframe from "react-iframe"
import { Dispatch, SetStateAction } from "react";

interface CounterIframeProps {
  height: string;
  counterUrl: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const CounterIframe: React.FC<CounterIframeProps> = ({ height, counterUrl, setIsLoading }) => {
  return (
    <>

      <div className='flex items-center justify-center h-1/2'>
        <Iframe width="100%" height={`${height}px`} url={counterUrl} overflow='auto' onLoad={() => setIsLoading(false)} loading='lazy' display='block' />
      </div>
    </>
  )
}