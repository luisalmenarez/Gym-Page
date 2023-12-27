import Image from "next/image";
import Container from "./Shared/container";
import ButtonPrimary from "./ui/button-primary";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <Container>
        <div className="absolute top-1/2 -translate-y-1/2 space-y-6">
          <h1 className="text-white text-5xl font-semibold">
            Desafía tus límites, <br />
            alcanza tus objetivos
          </h1>
          <p className="text-gray-400 p-2 w-1/2">
            Sumérgete en una experiencia única de fitness. Más que tu
            entrenador, seré tu aliado en la búsqueda de equilibrio físico y
            mental. Descubre cómo cada sesión te acerca a una transformación
            integral.
          </p>
          <div className="flex items-center gap-4">
            <ButtonPrimary type="button" text="Comienza ahora!" />
            <ButtonPrimary
              type="button"
              text="Ver reseñas"
              className="border-2 border-orange-500/50 bg-transparent hover:bg-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
