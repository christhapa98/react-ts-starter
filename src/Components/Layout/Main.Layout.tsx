import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { TableRow } from '../../Interfaces/interface';
import { Buttons } from '../Buttons/Buttons';
import CarouselComponent from '../Carousel';
import InputComponent from '../Forms/Input';
import TableComponent from '../Tables/Table';
import Footer from './Footer';
import Header from './Header'

let data : TableRow[] = [
    {email:'samir@gmail.com',name:"Samir",phone:9869524560},
    {email:'user@gmail.com',name:"User",phone:9810000000},
    {email:'amir@gmail.com',name:"Amir",phone:9869524560},
    {email:'Test@gmail.com',name:"Test",phone:9869524560},
    {email:'GG@gmail.com',name:"GG",phone:null}, 
  ];
  
  const rows = data.map((value:any,index:number)=>{return <tr key={index}>
  <td>{index +1}</td>
  <td>{value.name}</td>
  <td>{value.email}</td>
  <td>{value.phone}</td>
  </tr>});
  
export default function MainLayout(): JSX.Element {
  return (
    <div>
        <head>
        </head>
        <Header title={'Riddhasoft'}/>
        <div>
            <CarouselComponent item={[]} />
            <TableComponent column={['S/N','Name','Email','Contact']} rows={rows}/>
           <LoginForm/>
        </div>
        <Footer/>
    </div>
  )
}

const LoginForm=()=>{
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    return  <Card className="m-4 p-4">
                <InputComponent type={"email"} onChange={(e:any)=>{setEmail(e)}} label={"Enter Email"}/>
                <InputComponent type={"password"} onChange={(e:any)=>{setPassword(e)}} description={"Your password must be 8-20 characters long, contain letters and numbers,and must not contain spaces, special characters, or emoji."}/>
                <Buttons className='' title='Login' onClick={console.log({ email: email, password: password })} size="lg" variant={'primary'}/>
            </Card>
}
