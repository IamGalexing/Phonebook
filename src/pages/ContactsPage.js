import Container from '../LayOut/Container';
import Section from '../LayOut/Section';
import AddContactForm from '../components/AddContactForm';
import ContactList from '../components/ContactList';
import AmountContacts from '../components/AmoutContacts';
import Filter from '../components/Filter';

const ContactsPage = () => {
  return (
    <>
      <Container>
        <Section>
          <Section>
            <AmountContacts />
          </Section>
          <Section title="Add contact">
            <AddContactForm />
          </Section>
          <Section title="Search">
            <Filter />
          </Section>
        </Section>
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsPage;
