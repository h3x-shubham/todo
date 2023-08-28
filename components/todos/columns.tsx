"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type todo = {
 
  title: string;
  isCompleted:Boolean;
};

export const columns: ColumnDef<todo>[] = [
  {
    accessorKey: "isCompleted",
    header: "Status",
    cell:({row})=>{
        const stat:Boolean=row.getValue('isCompleted')
        if (stat){
            return <div className="text-center">Completed</div>
        }else{
            return <div className="text-center">Not Completed</div>

        }
    }
},
  {
    accessorKey: "title",
    header: ()=><div className="text-center">Task</div>,
    // cell:({row})=>{
    //     const r=row.getValue('title');
    //     const forma=new Intl.
    //     return <div className="text-center">{r}</div>
    // }
  },
  
  
];
