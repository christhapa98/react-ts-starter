import { Form } from 'react-bootstrap'
import { InputComponentProps } from '../../Interfaces/interface'

export default function InputComponent({label,type,description,onChange}:InputComponentProps):JSX.Element {
  return (
    <div className="py-2">
    {label && <Form.Label htmlFor="inputPassword5">{label}</Form.Label>}
    <Form.Control
      type={type}
      onChange={(e)=>onChange(e.target.value)}
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
   {description &&  <Form.Text id="passwordHelpBlock" muted>
      {description}
    </Form.Text>}
  </div>
  )
}
