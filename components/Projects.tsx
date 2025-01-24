import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Disney+',
    description: 'Copycat de la web de Disney+',
    technologies: ['JavaScript', 'SASS'],
    liveUrl: 'https://disney-plus-ten-blue.vercel.app/',
    githubUrl: 'https://github.com/igalarey/Disney-Plus',
  },
  {
    title: 'Gestor de tareas',
    description: 'Gestor de tareas estilo Kanban',
    technologies: ['JavaScript', 'SASS', 'MySQL'],
    liveUrl: 'https://#',
    githubUrl: 'https://github.com/igalarey/gestion-proyectos',
  },
  {
    title: 'Formulario Login',
    description: 'Sistema de inicio de sesión y registro',
    technologies: ['Symfony', 'SQL Server', 'Bootstrap'],
    liveUrl: 'https://#',
    githubUrl: 'https://#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="border hover:border-black dark:hover:border-white transition duration-300"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
