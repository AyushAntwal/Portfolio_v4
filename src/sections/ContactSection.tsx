import memjiContact from "../assets/memji-contact.png";
import MailForm from "@/components/MailForm";

export default function ContactSection() {
  return (
    <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
      <div className="px-10 pt-4">
        <h3 className="text-sm/4 mt-4 font-semibold text-indigo-400">
          let's have a talk
        </h3>
        <p className="mt-2 text-lg font-medium tracking-tight text-white">
          Available for collaborations, creative teams, or just good
          conversation.
        </p>

        {/* Contact Form */}
        <MailForm />
      </div>

      {/* Image with shadow bar */}
      <div className="">
        <img
          alt="memji contact"
          src={memjiContact}
          className="h-50 w-fit object-fill"
        />
      </div>
    </div>
  );
}
