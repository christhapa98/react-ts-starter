import { Table } from 'react-bootstrap'
import { TableProps } from '../../Interfaces/interface'


export default function TableComponent({column,rows}:TableProps):JSX.Element {
  return (
    <Table striped bordered responsive hover variant="dark">
      <thead>
       <tr>
       {column.map(((item:string,index:number)=>{
          return <th key={index}>{item}</th>
       }))}
       </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
