import TextArea from 'components/atoms/Form/Textarea'
import Label from 'components/atoms/Label'
import { useEffect, useState } from 'react'
import randomString from 'utils/randomString'

interface TextAreaGroupProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

const TextAreaGroup = ({
  label,
  ...textareaProps
}: TextAreaGroupProps) => {
  const [randomId, setRandomId] = useState<string>('')
  useEffect(() => {
    setRandomId(randomString(64)) 
  }, [])
  return (
    <div className="space-y-1.5">
      <Label label={label} htmlFor={randomId} />
      <textarea
      className="w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30"
        {...textareaProps}
        id={randomId}
      />
    </div>
  )
}

export default TextAreaGroup
