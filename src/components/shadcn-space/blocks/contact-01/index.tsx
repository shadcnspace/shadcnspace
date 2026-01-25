import ContactInfo from "@/components/shadcn-space/blocks/contact-01/contact-info";
import ContactForm from "@/components/shadcn-space/blocks/contact-01/contact-form";

const Contact = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="grid grid-cols-12 content-center justify-between gap-8 md:gap-0">
          <div className="w-full col-span-12 md:col-span-6">
            <ContactInfo />
          </div>
          <div className="col-span-1"></div>
          <div className="w-full col-span-12 md:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
