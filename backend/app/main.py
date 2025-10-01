from fastapi import FastAPI, APIRouter, HTTPException, Query
from .database import collection 
from .schemas import all_tasks, TaskStatusUpdate
from .models import Task
from bson.objectid import ObjectId
from typing import Optional

app = FastAPI()
router = APIRouter()

@router.get("/")
async def get_all_tasks(
  search: Optional[str] = Query(None, description="Search by title"),
  is_done: Optional[bool] = Query(None, description="Filtration by complited task"),
  sort: Optional[str] = Query(None, description="Sorting by priority"),
  order: Optional[str] = Query(None, description="Order sorting: asc or desc"),
):
  try:
    query = {}

    if search:
      query["title"] = {"$regex": search, "$options": "i"}
    
    if is_done is not None:
      query["is_done"] = is_done
    
    sort_params = None
    if sort:
      direction = 1 if order == "asc" else -1
      sort_params = [(sort, direction)]

    cursor = collection.find(query)
    if sort_params:
      cursor = cursor.sort(sort_params)
    
    data = list(cursor)
    return all_tasks(data)
  
  except Exception as e:
    return HTTPException(status_code=500, detail=f"Some error occured {e}")

@router.post("/")
async def create_task(new_task :Task):
  try:
    resp = collection.insert_one(dict(new_task))
    return {"status_code": 200, "id": str(resp.inserted_id)}
  except Exception as e:
    return HTTPException(status_code=500, detail=f"Some error occured {e}")
  
@router.patch("/{task_id}")
async def update_task(task_id:str, updated_data:TaskStatusUpdate):
  try:
    id = ObjectId(task_id)
    resp = collection.update_one({"_id": id}, {"$set": {"is_done": updated_data.is_done}})
    if resp.matched_count == 0:
      raise HTTPException(status_code=404, detail="Task not found")
    return {"status_code": 200, "message": "Task Updated Successfully"}
  except Exception as e:
    return HTTPException(status_code=500, detail={"Some error occured {e}"})
  
@router.delete("/{task_id}")
async def delete_task(task_id:str):
  try:
    id = ObjectId(task_id)
    resp = collection.delete_one({"_id": id})
    if resp.deleted_count == 0:
      raise HTTPException(status_code=404, detail="Task not found")
    return {"status_code": 200, "message": "Task Deleted Successfully"}
  except Exception as e:
    return HTTPException(status_code=500, detail={"Some error occured {e}"})

app.include_router(router)
