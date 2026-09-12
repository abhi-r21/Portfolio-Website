function Contact() {
  return(
    <section 
    id="contact"
    className="min-h-screen px-6 py-10"
    >
      <h2 className="text-center font-[Space_Grotesk] text-4xl font-bold">
        Contact
      </h2>

      <div className="mx-auto mt-16 max-w-3xl text-center">
        <p className="text-lg text-gray-400">
          Have a project in mind or want to connect?
        </p>

        <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none"
          />
          
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="rounded-lg border border-gray-700 px-6 py-3"
            >
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}

export default Contact;