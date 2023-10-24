import { Dispatch, SetStateAction } from "react"
import Spinner from "../spinner";

interface ReloadButtonProps {
  setUrl: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;

}

export const ReloadButton: React.FC<ReloadButtonProps> = ({ setUrl, setIsLoading, isLoading }) => {
  const handleReload = () => {
    setIsLoading(true)
    setUrl(prev => (prev += ' '))
  }
  const btnStyle = isLoading ? "from-yellow-600 to-yellow-500 border-yellow-700 active:yellow-green-600" : "from-purple-600 to-indigo-500 border-purple-700 active:border-purple-600"
  return (
    <button type="button" onClick={handleReload} disabled={isLoading} className={`${btnStyle} btn`}>
      {isLoading
        ?
        <div className="flex gap-x-1 justify-center items-center">
          <Spinner />
          <span>Carregando...</span>
        </div>
        :
        <span>Recarregar</span>
      }
    </button>
  )
}