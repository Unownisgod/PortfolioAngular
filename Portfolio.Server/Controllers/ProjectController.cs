using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Server.Controllers
{
    [EnableCors()]
    [ApiController]
    [Route("api/project")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<Projects> _logger;

        public ProjectController(ILogger<Projects> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetProjects")]
        public IEnumerable<Projects> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Projects
            {
                title = "title",
                description = "description",
                fullDescription = "fulldescription",
                tags = new string[] { "tag1", "tag2" },
                demoLink = "demoLink",
                ghLink = "ghLink",
                imgLink = "imgLink"
            })
            .ToArray();
        }
    }
}
