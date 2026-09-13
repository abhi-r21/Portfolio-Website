function Contact() {
  return(
    <section 
    id="contact"
    className="min-h-screen px-6 py-20"
    >
      <h2 className="text-center font-[Space_Grotesk] text-4xl font-bold tracking-tight text-white md:text-5xl">
        Contact
      </h2>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-white-400">
          Have a project in mind or want to connect?
        </p>

        <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-6 rounded-2xl border border-gray-800 bg-white/[0.02] p-6 md:p-8">

          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg border border-gray-700 bg-white/[0.02] px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition-colors duration-300 hover:border-white focus:border-white"
          />
          
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg border border-gray-700 bg-white/[0.02] px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition-colors duration-300 hover:border-white focus:border-white"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="rounded-lg border border-gray-700 bg-white/[0.02] px-4 py-3.5 text-white placeholder:text-gray-500 outline-none transition-colors duration-300 hover:border-white focus:border-white"
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