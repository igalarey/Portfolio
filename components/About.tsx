import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
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
            <CardTitle>Educación</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Técnico Superior en Desarrollo de aplicaciones Web <br />
                <em>Ilerna Online</em>
              </li>
              <li>
                Ingeniería en Tecnologías de Telecomunicación <br />
                (Sin finalizar)
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
