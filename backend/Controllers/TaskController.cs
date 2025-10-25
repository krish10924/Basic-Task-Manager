using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private static List<TaskItem> tasks = new();
        private static int nextId = 1;

        [HttpGet]
        public IActionResult GetAll() => Ok(tasks);

        [HttpPost]
        public IActionResult AddTask([FromBody] TaskItem newTask)
        {
            newTask.Id = nextId++;
            tasks.Add(newTask);
            return Ok(newTask);
        }

        [HttpPut("{id}/toggle")]
        public IActionResult ToggleTask(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();
            task.IsCompleted = !task.IsCompleted;
            return Ok(task);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();
            tasks.Remove(task);
            return NoContent();
        }
    }
}
