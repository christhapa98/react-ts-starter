export interface TableProps{
    column:string[];
    rows:any
  }
  
 export interface TableRow{
    name:string,
    email:string,
    phone:number | null
  }

  export interface InputComponentProps{
    label?:string,
    type:string,
    description?:string,
    onChange?:any
  }

  export interface CarouselProps{
    title?:string,
    subtitle?:string,
    imageUrl:string
  }
  