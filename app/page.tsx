import Image from 'next/image'
import { getTodo } from '@/lib/todo'
import ListItem from '@/components/ListItem';
import {  columns, todo } from '@/components/todos/columns';
import { DataTable } from '@/components/todos/data-table';


// async function getData(): Promise<todo[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ];
// }




export default async function Home() {
  const {todos}=await getTodo();
  // const data=todos
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl">Todos</h1>
      <DataTable columns={columns} data={todos} />
      {/* <ul>
        {todos?.map((todo) => (
          <ListItem title={todo.title} />
          // <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
