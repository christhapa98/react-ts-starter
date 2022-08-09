import { Button } from 'react-bootstrap'

interface ButtonProps{
    title:string,
    variant:string,
    className:string,
    size:any,
    onClick:any
}

export  function Buttons({className,title,variant,onClick,size}: ButtonProps):JSX.Element {
  return (
    <Button onClick={onClick} size={size} className={className} variant={variant} >{title}</Button>
  )
}
