import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bird from 'App/Models/Bird'
import Comment from 'App/Models/Comment'

export default class CommentsController {

    public async store({request, params, response}: HttpContextContract) {
        
        const body = request.body()
        const birdId = params.birdId

        await Bird.findOrFail(birdId)

        body.birdId = birdId

        const comment = await Comment.create(body)

        response.status(201)

        return{
            message:"Comentário Adicionado com Sucesso",
            data: comment,
        }

    }

}

