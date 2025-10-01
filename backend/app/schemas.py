from pydantic import BaseModel

def individual_data(task):
  return {
    "id": str(task["_id"]),
    "title": str(task["title"]),
    "description": str(task["description"]),
    "is_done": str(task["is_done"]),
    "priority": int(task["priority"])
  }

class TaskStatusUpdate(BaseModel):
    is_done: bool

def all_tasks(tasks):
  return [individual_data(task) for task in tasks]