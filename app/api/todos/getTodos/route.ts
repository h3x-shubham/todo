import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    // return new Response("get ok")
    try {
        const todos=await  prisma.todo.findMany()
        return {todos}
    } catch (error) {
        return new Response(JSON.stringify(error),{status:500})
    }
}