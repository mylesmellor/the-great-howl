import useFadeIn from './useFadeIn'

const SOCIAL = [
  { name: 'Facebook', href: '#', icon: '/images/icon-facebook.png' },
  { name: 'Instagram', href: '#', icon: '/images/icon-instagram.png' },
]

export default function Connect() {
  const ref = useFadeIn()

  return (
    <section
      id="connect"
      className="relative py-[120px] sm:py-[140px]"
      style={{ backgroundColor: '#1C1C1A' }}
    >
      {/* Atmospheric layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 25% 70%, rgba(58,50,38,0.18) 0%, transparent 55%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12">
        <h2 className="font-heading font-semibold text-parchment-whisper uppercase tracking-[0.1em] mb-12 text-xl sm:text-2xl">
          For people who understand.
        </h2>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 items-start">
          {/* Social links */}
          <nav aria-label="Social links">
            <ul className="flex gap-5 items-center">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-10 h-10 transition-opacity duration-300 hover:opacity-70"
                  >
                    <img
                      src={s.icon}
                      alt={s.name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Email signup */}
          <div className="max-w-[340px]">
            <p className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-5">
              Stay connected
            </p>
            <form
              action="#"
              method="post"
              aria-label="Email signup"
              className="flex flex-col sm:flex-row gap-4 items-stretch"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your email"
                required
                autoComplete="email"
                className="bg-transparent border-0 border-b border-shadow-grey px-1 py-3 text-pale-cream text-[0.95rem] font-light placeholder:text-shadow-grey placeholder:italic outline-none focus:border-faded-moss transition-colors duration-300 flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-transparent border border-shadow-grey px-7 py-3 text-dust-bone text-xs font-normal tracking-[0.08em] uppercase cursor-pointer transition-colors duration-300 hover:border-rust hover:text-rust focus-visible:outline-2 focus-visible:outline-rust focus-visible:outline-offset-2 self-start"
              >
                Join
              </button>
            </form>
          </div>

          {/* Contact form */}
          <div className="max-w-[380px] w-full">
            <p className="font-body font-normal text-dust-bone text-xs tracking-[0.1em] uppercase mb-5">
              Say something
            </p>
            <form
              action="https://formsubmit.co/mylesmellor@gmail.com"
              method="POST"
              aria-label="Contact form"
              className="flex flex-col gap-4"
            >
              {/* Disable captcha page */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect back to site after submit */}
              <input type="hidden" name="_next" value={window.location.origin + '/#connect'} />
              {/* Honeypot spam prevention */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="your name"
                required
                autoComplete="name"
                className="bg-transparent border-0 border-b border-shadow-grey px-1 py-3 text-pale-cream text-[0.95rem] font-light placeholder:text-shadow-grey placeholder:italic outline-none focus:border-faded-moss transition-colors duration-300"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="your email"
                required
                autoComplete="email"
                className="bg-transparent border-0 border-b border-shadow-grey px-1 py-3 text-pale-cream text-[0.95rem] font-light placeholder:text-shadow-grey placeholder:italic outline-none focus:border-faded-moss transition-colors duration-300"
              />
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="what's on your mind..."
                required
                rows={4}
                className="bg-transparent border border-shadow-grey/40 px-3 py-3 text-pale-cream text-[0.95rem] font-light placeholder:text-shadow-grey placeholder:italic outline-none focus:border-faded-moss transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="bg-transparent border border-shadow-grey px-7 py-3 text-dust-bone text-xs font-normal tracking-[0.08em] uppercase cursor-pointer transition-colors duration-300 hover:border-rust hover:text-rust focus-visible:outline-2 focus-visible:outline-rust focus-visible:outline-offset-2 self-start"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
