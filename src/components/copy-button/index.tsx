import { CopyToClipboard } from "@/utils/copyToClipboard"
import { useState } from "react"

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopy, setIsCopy] = useState(false)
  const handleCopy = () => {
    CopyToClipboard(text.trim()).then(
      () => {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 5000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  }

  const btnStyle = isCopy ? "from-green-600 to-green-500 border-green-700 active:border-green-600" : "from-purple-600 to-indigo-500 border-indigo-700 active:border-indigo-600"

  return (
    <button type="button" disabled={isCopy} onClick={handleCopy} className={`${btnStyle} btn`}>
      <span> {isCopy ? "Copiado!" : "Copiar URL"}</span>
    </button>
  )
}