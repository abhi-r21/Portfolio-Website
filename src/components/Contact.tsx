function Contact() {
  return(
    <section 
    id="contact"
    className="min-h-screen px-6 py-10"
    >
      <h2 className="text-center font-[Space_Grotesk] text-4xl font-bold tracking-tight text-white md:text-5xl">
        Contact
      </h2>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-lg text-white-400">
          Have a project in mind or want to connect?
        </p>

        <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none transition-colors duration-300 hover:border-white focus:border-white"
          />
          
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none transition-colors duration-300 hover:border-white focus:border-white"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="rounded-lg border border-gray-700 bg-transparent px-4 py-3 outline-none transition-colors duration-300 hover:border-white focus:border-white"
          />

          <button
            type="submit"
            className="rounded-lg border border-gray-700 px-6 py-3 hover:font-bold transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}

export default Contact;