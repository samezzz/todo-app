from django.db import models

# Create your models here.
class Todo(models.Model):
  title = models.CharField(max_length=100, null=True)
  is_finished = models.BooleanField(default=False, null=True)

  def __str__(self):
    return self.title