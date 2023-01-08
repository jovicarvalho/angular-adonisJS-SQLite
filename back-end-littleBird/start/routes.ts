import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{

  Route.get('/', async () => {
  return {   }
  })

  Route.resource("/birds", "BirdsController").apiOnly()

  Route.post('/birds/:birdId/comments', 'CommentsController.store')


}).prefix('/api')
