import { SearchParamsProps } from "@/@types/SearchParamsProps"
import { getFontClassName } from "@/utils/getFontClassName";
import { useEffect, useState } from "react";

export const Countdown: React.FC<{ searchParams: SearchParamsProps }> =
  ({ searchParams }) => {
    const [timeLeft, setTimeLeft] = useState(0)

    useEffect(() => {
      const countdownTime = searchParams.time || "00:00:00"
      const [hours, minutes, seconds] = countdownTime.split(':').map(Number);
      const totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

      setTimeLeft(totalTimeInSeconds);

      const interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else if (searchParams.reload === 'true') {
            return totalTimeInSeconds;
          } else {
            clearInterval(interval);
            return prevTime;
          }
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0')
    const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0')
    const seconds = (timeLeft % 60).toString().padStart(2, '0')

    return (
      <p style={
        {
          color: `#${searchParams.text_color}`,
          fontSize: `${searchParams.font_size}px`,
        }
      } className={`${getFontClassName(searchParams.font)}`}>
        {hours !== "00" ? hours + ":" : ''}{minutes}:{seconds}
      </p>
    )
  }