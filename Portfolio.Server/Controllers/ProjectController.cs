using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Server.Models;
using System.Diagnostics;
using System.Xml;
namespace Portfolio.Server.Controllers
{
    [EnableCors()]
    [ApiController]
    [Route("api/project/[action]")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<Project> _logger;

        public ProjectController(ILogger<Project> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetProjectsBasicData")]
        public IEnumerable<Project> GetBasicData()
        {
            XmlDocument document = new XmlDocument();
            document.Load("Data/Projects.xml");
            var root = document.DocumentElement;
            var index = 0;
            List<Project> projects = new List<Project>();
            foreach (XmlNode node in root.ChildNodes)
            {
                index++;
                var name = node.ChildNodes[0].InnerText;
                var description = node.ChildNodes[1].InnerText;
                var tags = node.ChildNodes[3].ChildNodes;
                List<string> tagList = new List<string>();

                foreach (XmlNode tag in tags)
                {
                    var test = tag.InnerText;
                    tagList.Add(tag.InnerText);
                }

                projects.Add(new Project(index, name, description, tagList));
            }
            return projects;
        }

        [HttpGet(Name = "GetAllProjectsData")]
        public IEnumerable<Project> GetAllData()
        {
            XmlDocument document = new XmlDocument();
            document.Load("Data/Projects.xml");
            var root = document.DocumentElement;
            var index = 0;
            List<Project> projects = new List<Project>();
            foreach (XmlNode node in root.ChildNodes)
            {
                index++;
                var name = node.ChildNodes[0].InnerText;
                var description = node.ChildNodes[1].InnerText;
                var fullDescription = node.ChildNodes[2].InnerText;
                var tags = node.ChildNodes[3].ChildNodes;
                var demoLink = node.ChildNodes[4].InnerText;
                var ghLink = node.ChildNodes[5].InnerText;
                List<string> tagList = new List<string>();

                foreach (XmlNode tag in tags)
                {
                    var test = tag.InnerText;
                    tagList.Add(tag.InnerText);
                }

                projects.Add(new Project(index, name, description, fullDescription, tagList, demoLink, ghLink));
            }
            return projects;
        }
        [HttpGet(Name = "GetProjectsBasicDataById")]
        public Project GetBasicDataById(int id)
        {
            XmlDocument document = new XmlDocument();
            document.Load("Data/Projects.xml");
            var root = document.DocumentElement;
            XmlNode node = root.ChildNodes[id - 1];
            var name = node.ChildNodes[0].InnerText;
            var description = node.ChildNodes[1].InnerText;
            var tags = node.ChildNodes[3].ChildNodes;
            List<string> tagList = new List<string>();

            foreach (XmlNode tag in tags)
            {
                var test = tag.InnerText;
                tagList.Add(tag.InnerText);
            }

            Project project = new Project(id, name, description, tagList);
            return project;
        }

        [HttpGet(Name = "GetAllProjectsDataById")]
        public Project GetAllDataById(int id)
        {
            XmlDocument document = new XmlDocument();
            document.Load("Data/Projects.xml");
            var root = document.DocumentElement;
            XmlNode node = root.ChildNodes[id - 1];
            var name = node.ChildNodes[0].InnerText;
            var description = node.ChildNodes[1].InnerText;
            var fullDescription = node.ChildNodes[2].InnerText;
            var tags = node.ChildNodes[3].ChildNodes;
            var demoLink = node.ChildNodes[4].InnerText;
            var ghLink = node.ChildNodes[5].InnerText;
            List<string> tagList = new List<string>();

            foreach (XmlNode tag in tags)
            {
                var test = tag.InnerText;
                tagList.Add(tag.InnerText);
            }

            Project project = new Project(id, name, description, fullDescription, tagList, demoLink, ghLink);
            return project;
        }

    }
}