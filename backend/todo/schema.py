import graphene
from graphene_django import DjangoObjectType
from .models import Todo

# Querying from the Database
class TodoType(DjangoObjectType):
  class Meta:
    model = Todo
    fields = "__all__"
# Class to Query from the database
class Query(graphene.ObjectType):
  todos = graphene.List(TodoType, id=graphene.Int())

  def resolve_todos(self, info, id=None):
    if id:
      return Todo.objects.filter(id=id)
    return Todo.objects.all()
  
  

# Adding to the database
class CreateTodo(graphene.Mutation):
  todo = graphene.Field(TodoType)

  class Arguments:
    title = graphene.String(required=True)

  def mutate(self, info, title):
    newTodo = Todo(title=title)
    newTodo.save()
    return CreateTodo(todo=newTodo)
  
class UpdateTodo(graphene.Mutation):
  todo = graphene.Field(TodoType)
  
  class Arguments:
    id = graphene.Int(required=True)
    title = graphene.String(required=True)
    is_finished = graphene.Boolean()
  
  def mutate(self, info, id, title, is_finished ):
    todo = Todo.objects.get(id=id)
    if is_finished:
      todo.is_finished = False
    todo.is_finished = True
    todo.title = title
    todo.save()
    return UpdateTodo(todo=todo)
  
class DeleteTodo(graphene.Mutation):
  message = graphene.String()
  
  class Arguments:
    id = graphene.Int(required=True)
    
  def mutate(self, info, id):
    todo = Todo.objects.get(id=id)
    todo.delete()
    return DeleteTodo(message=f"ID {id} has been deleted successfully.")

class Mutation(graphene.ObjectType):
  create_todo = CreateTodo.Field()
  update_todo = UpdateTodo.Field()
  delete_todo = DeleteTodo.Field()
  
  
schema = graphene.Schema(query=Query, mutation=Mutation)
