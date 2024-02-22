import Container from './utilities/Container';

const Footer = () => {
  return (
    <footer className="p-8 bg-base_card">
      <Container>
        <p className="text-base text-base_text text-center font-roboto">
          Site desenvolvido por <strong>Bruno Lima</strong>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
