
import { Server } from "miragejs"
import books from './json/books.json'
export function makeServer()
{
    let server=new Server({
        routes(){
            this.namespace="api"
            this.get("/books",()=>{
                return books
            })
            this.post("/add",(schema,req)=>{
                const newbook=JSON.parse(req.requestBody)
                books.push(newbook)
            })
             
        }
    })
    return server;
}