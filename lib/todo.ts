
import prisma from "./prisma";

export async function getTodo(){
    try {
        const todos=await prisma.todo.findMany()
        return {todos}
        
    } catch (error) {
        return {error}
    }
}

export async function addTodos(title:string){
    try {
        const todo=await prisma.todo.create({data:{title}})
        return {todo}
    } catch (error) {
        return {error}
    }
}
