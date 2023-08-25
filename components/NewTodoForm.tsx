"use client"
import { useState } from 'react'
import { useRouter } from "next/navigation";



const NewTodoForm=()=> {
    
 const [title, setTitle] = useState("");
 const router = useRouter();

 const handleSubmit = async (event: React.FormEvent) => {
   event.preventDefault();
   const response = await fetch("/api/todos/addTodos", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ title }),
   });
   const data = await response.json();
//    router.refresh();
   if (!data.ok) console.log(data);
 };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-2 font-medium">Create a New Todo</h2>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        className="rounded text-black border border-slate-400 px-2 py-0.5"
      />
      <button
        type="submit"
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50"
      >
        Add Todo
      </button>
    </form>
  );
}

export default NewTodoForm