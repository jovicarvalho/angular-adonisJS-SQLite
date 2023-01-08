import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Bird from 'App/Models/Bird';
import  Application  from '@ioc:Adonis/Core/Application';
import {v4 as uuidv4 } from 'uuid';
export default class BirdsController {
    private validationOptions = {
        types: ["image"],
        size: "5mb",
    }

    public async store ({request,response} : HttpContextContract) {
        const body = request.body()

        const image = request.file('image', this.validationOptions)

        if(image) {
            const imageName = `${uuidv4()}.${image.extname}`

            await image.move(Application.tmpPath('uploads'),{
                name: imageName
            })

            body.image = imageName;
        }

        const bird = await Bird.create(body)
        
        response.status(201)

        return {
            message:"Pássaro Adicionado com sucesso!",
            data:bird,
        } 
    }

    public async index() {
        const birds = await Bird.all()

        return {
            data:birds,
        }
    }

    public async show ({params}:HttpContextContract){

        const bird = await Bird.findOrFail(params.id)

        return {
            data:bird,
        }
    }

    public async destroy ({params}:HttpContextContract){

        const bird = await Bird.findOrFail(params.id)

        await bird.delete()

        return {
            data: "Pássaro deletado com Sucesso"
        }
    }

    public async update({params, request}:HttpContextContract){
        const body = request.body();
        const bird = await Bird.findOrFail(params.id)

        bird.spicie = body.spicie
        bird.place = body.place


        if(bird.image != body.image ||  !body.image) {
           
            const image = request.file('image', this.validationOptions)

            if(image){
                const imageName = `${uuidv4()}.${image.extname}`;

                await image.move(Application.tmpPath('uploads'),{
                    name: imageName
                })

                body.image = imageName;
            } 
        }


        await bird.save()
        return {
            message:'Pássara atualizado com Sucesso! Novo valor abaixo:',
            body: bird,
        }
    }
}
