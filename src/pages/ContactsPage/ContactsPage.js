import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import ContactFilter from "components/ContactFilter/ContactFilter";
//import { ContactsContainer } from "./ContactsPage.styled";

const ContactsPage = () => {

    return (
        <>
      <ContactForm ></ContactForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      <ContactList ></ContactList>
    </>
    )
    

}

export default ContactsPage;
