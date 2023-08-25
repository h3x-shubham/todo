import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

type prp={
    title:string
}
export async function POST(request: NextRequest) {
   
    const data:prp = await request.json()
   
    console.log( data.title)
      return new Response("ok")

   
   
   
    // console.log("POST ok")
    // const dat:dataprp = await request.json()
    //  console.log(await request.json())
    //   return new Response("ok")
    // try {
    //     const dat:dataprp = await request.json()
    //     console.log(dat)
    //     // if(!dat.length)
    //     // {
    //     //     console.log("dat.title.length")
    //     //     return new Response(JSON.stringify({ message: "empty input" }), { status: 500 })
            
    //     // }
    //     // console.log(dat.title)
    //     revalidatePath('/')
    //     return new Response(JSON.stringify({ message: "input ok" }), { status: 200 })
    //     // const todo = await prisma.todo.create({data:{dat.title}})
    //     return new Response("ok",{status:200})
    // } catch (error) {
    //     console.log(error)
    //     return new Response(JSON.stringify(error), { status: 500 })
    // }
}