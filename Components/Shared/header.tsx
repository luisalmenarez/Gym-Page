import Container from "./container";
import Logo from "./logo";
import MainMenu from "./main-menu";

const header = () => {
  return (
    <header className="fixed left-0 top-0 w-full p-5 z-40">
      <Container className="flex items-center justify-between">
        <section>
          <Logo />
        </section>
        <section>
          <MainMenu />
        </section>
      </Container>
    </header>
  );
};

export default header;
