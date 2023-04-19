import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
const InputGroup = ({
  label,
  ...inputProps
}: InputGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64))
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <input
       className="w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30"
        {...inputProps}
        id={randomId}
      />
    </div>
  )
}

export default InputGroup
