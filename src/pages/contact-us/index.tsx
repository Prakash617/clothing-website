import React from "react";
import ContactUsComponent from "../../components/ContactUs";
import { useQuery, useMutation } from "@apollo/client";
import { MUTATION_CONTACT_FORM } from "../../graphql/mutation";
import { toast } from "react-toastify";
import { backendErrorDisplay } from "../../utils/ErrorDisplay";

type Props = {};

const ContactUs = (props: Props) => {
  const [contactForm] = useMutation(MUTATION_CONTACT_FORM);

  const handleContactFormSubmit = async (data: any) => {
    const response = await contactForm({
      variables: {
        form: "1",
        data: data,
      },
    });
    if (response?.data?.createFormData?.success === false) {
      const errors = response?.data?.createFormData?.errors;
      backendErrorDisplay(errors);
    } else {
      toast.success("Thanks for contacting us!");
    }
  };
  return (
    <div>
      <ContactUsComponent handleContactFormSubmit={handleContactFormSubmit} />
    </div>
  );
};

export default ContactUs;
