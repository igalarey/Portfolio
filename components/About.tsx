import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Habilidades</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Symfony / PHP</li>
              <li>JavaScript</li>
              <li>Bases de datos SQL</li>
              <li>HTML / CSS / SASS / Bootstrap CSS</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Experiencia</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Varios proyectos personales, puedes ver algunos más abajo y el
                resto en mi GitHub.
              </li>
              <li>
                Actualmente realizando las prácticas del grado, utilizando
                sobretodo Symfony y SQL Server.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
