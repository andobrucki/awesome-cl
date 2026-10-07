import ContactForm from "../../components/ContactPageComponents/ContactForm/ContactForm.jsx";
import ContactDetails from "../../components/ContactPageComponents/ContactDetails/ContactDetails.jsx";
import FAQSection from "../../components/ContactPageComponents/FAQ/FAQSection.jsx";

const ContactPage = () => {
  return (
    <div>
      <ContactForm />
      <ContactDetails />
      <FAQSection />
    </div>
  );
};

export default ContactPage;
