import { useState } from 'react'
import founderBackground from '../../photos/Josie with patch forearm.png'

const PASSWORD = 'RithmVision2025'

function SplashGate({ onSuccess, logoSrc }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password.trim() === PASSWORD) {
      setError('')
      setPassword('')
      if (typeof onSuccess === 'function') {
        onSuccess()
      }
    } else {
      setError('The password you entered is incorrect. Please try again.')
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f8e6da] via-[#fff2eb] to-[#fff8f2]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(248,204,178,0.28),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-stretch lg:gap-20">
        <div className="flex w-full items-stretch justify-center lg:w-[45%]">
          <div className="relative flex h-full w-full max-w-[540px] items-center justify-center overflow-hidden rounded-[20px] bg-white shadow-[0_34px_95px_rgba(190,158,130,0.28)] lg:h-[82vh]">
            <img
              src={founderBackground}
              alt="Founder portrait"
              className="pointer-events-none h-full w-full select-none object-cover"
              style={{ filter: 'contrast(1.07) saturate(1.06)', objectPosition: 'center 42%' }}
            />
          </div>
        </div>

        <div className="flex w-full items-stretch justify-center lg:w-[55%]">
          <div className="flex h-full w-full max-w-[520px] flex-col justify-between rounded-[20px] bg-[rgba(80,74,58,0.88)] px-12 py-14 text-white shadow-[0_28px_85px_rgba(80,74,58,0.32)] backdrop-blur lg:h-[82vh]">
            <div>
              <div className="flex flex-col items-center text-center">
                <img src={logoSrc} alt="Pico Molecular logo" className="mb-6 h-auto w-[80px]" />
                <h1 className="text-[28px] font-semibold uppercase tracking-[0.16em] text-white">
                  WELCOME TO THE VISION
                </h1>
              </div>

              <div className="mt-6 space-y-4 text-[18px] text-white/100 [line-height:1.65]">
                <p>Hey—glad you&apos;re here. This is a peek at what Pico Molecular could grow into.</p>
                <p>Everything inside is aspirational—the science, the partnerships, the wins we&apos;re working toward.</p>
                <p>Step in as a trusted friend, keep the dream close, and enjoy the tour. ✨</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <div className="relative w-full sm:flex-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                      if (error) {
                        setError('')
                      }
                    }}
                    placeholder="Enter Password"
                    className="h-[56px] w-full rounded-lg border border-[#c9b8a7] bg-white px-5 pr-12 text-[16px] text-[#222] placeholder:text-[#a8a8a8] focus:border-transparent focus:outline-none focus:ring-4 focus:ring-[#4a90e2]/45"
                    autoComplete="off"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-[#6b6b6b] transition hover:text-[#2e2e2e] focus:outline-none"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l18 18" />
                        <path d="M10.7 10.7a2 2 0 102.6 2.6" />
                        <path d="M9.5 5.5A9.6 9.6 0 0112 5c5.5 0 10 5 10 7 0 .8-.6 1.9-1.6 3" />
                        <path d="M6.1 6.1C4.2 7.3 2 9.7 2 12c0 .9.6 2.1 1.8 3.4" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  className="h-[56px] w-full rounded-lg bg-[#2f9fd8] text-[17px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#47b1ea] focus:outline-none focus:ring-4 focus:ring-[#2f9fd8]/35 sm:w-auto sm:px-6"
                >
                  Enter the Vision
                </button>
              </form>

              {error ? (
                <p role="alert" className="mt-3 text-sm font-medium text-red-200">
                  {error}
                </p>
              ) : null}

              <p className="mt-6 text-center text-[12px] italic text-white/90">
                *Not FDA-approved. Just a prototype concept.*
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(253,215,196,0.4),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,rgba(250,206,184,0.4),transparent_65%)]" />

      <div className="lg:hidden">
        <div className="absolute inset-0 -z-10 opacity-90">
          <div className="h-[65vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${founderBackground})`, filter: 'saturate(1.08) contrast(1.05)' }} />
        </div>
      </div>
    </div>
  )
}

export default SplashGate
