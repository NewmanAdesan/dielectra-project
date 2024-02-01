import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <section className="bg-gray-3">
        <div className="px-5 py-10 max-w-7xl mx-auto">

                {/* Contact Heading */}
                <div className="pl-2 relative mb-4 max-w-[644px]">
                    <h2 className="font-medium mb-1 md:font-semibold text-start md:leading-[56px]">Get in touch <span className="text-red-1">with us</span></h2>
                    <p className="text-base leading-[140%] font-normal text-black md:text-[20px]">Powering Connections, Empowering You. Reach out to us for any inquiries, assistance, and together, let us spark a brighter energy future!</p>
                    <div className="absolute top-0 left-0 w-1 h-4 rounded-xl bg-red-1 md:h-[51px]"></div>
                    <div className="absolute top-5 left-0 w-1 h-[10px] rounded-xl bg-black md:top-14 md:h-[30px]"></div>
                </div>

                {/* Contact Content */}
                <div className="grid md:grid-cols-2 gap-4">
                    <ContactInfo />
                    <ContactForm />
                </div>

        </div>
    </section>
  )
}

export default ContactSection