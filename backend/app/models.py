from pydantic import BaseModel, Field

class Task(BaseModel):
  title: str
  description: str
  is_done: bool
  priority: int = Field(..., ge=1, le=10)
