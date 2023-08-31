import Filter from './phoneBook/filter/filter';
import ContactForm from './phoneBook/contactForm/contactForm';
import ContactList from './phoneBook/contactList/contactList';
import { Section, Container, Div, H1, DivList, H2 } from './App.styled';

const App = () => {
  return (
    <Section>
      <Container>
        <Div>
          <H1>Phonebook</H1>
          <ContactForm />
        </Div>

        <DivList>
          <H2>Contacts</H2>
          <Filter />
          <ContactList />
        </DivList>
      </Container>
    </Section>
  )
}
export default App;