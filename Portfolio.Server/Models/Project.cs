
namespace Portfolio.Server.Models
{
    public class Project
    {
        private string name;
        private string v;
        private List<string> tagList;

        public Project()
        {

        }

        public Project(int id, string title, string description, List<string> tagList)
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.tags = tagList;
        }

        public Project(int id, string title, string description, string fullDescription, List<string> tags, string demoLink, string ghLink)
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.fullDescription = fullDescription;
            this.tags = tags;
            this.demoLink = demoLink;
            this.ghLink = ghLink;
        }
        public int id { get; set; }

        public string title { get; set; }

        public string description { get; set; }

        public string fullDescription { get; set; }

        public List<string> tags { get; set; }

        public string demoLink { get; set; }

        public string ghLink { get; set; }

    }
}
