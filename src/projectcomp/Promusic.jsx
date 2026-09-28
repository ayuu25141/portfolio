export default function Promusic() {
  const trackName = "Make you mine";
  const isPlaying = false;

  return (
    <section className="bg-[#f7f4ea] text-[#4b3500]">
      <div className="mx-auto max-w-2xl px-6 pb-8 pt-8 sm:px-10">

        {/* Top border */}
        <div className="border-t-2 border-[#4b3500]/10 pt-8">

          {/* Music info */}
          <div className="flex items-center gap-3 select-none font-['Geist_Mono'] text-base tracking-tight text-[#4b3500]/80">

            {/* Spotify Icon */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4b3500] p-0.5 text-[#f7f4ea]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.077-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.82 1.127.296.18.388.565.207.86zm1.225-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.24-.57 11.346 1.342.368.228.49.708.26 1.073zm.106-2.833C14.384 8.71 8.56 8.517 5.176 9.543c-.534.162-1.096-.142-1.258-.676-.162-.534.142-1.096.676-1.258 3.886-1.18 10.322-.96 14.39 1.455.48.284.637.9.352 1.38-.285.48-.9.637-1.38.353z" />
              </svg>
            </div>

            {/* Track Details */}
       
<div className="flex w-full items-center justify-between gap-4">
  {/* Left Side: Track Details */}
  <div className="flex items-center gap-1.5">
    <span className="opacity-70">
      {isPlaying ? "now playing" : "last played"}
    </span>

    <span className="opacity-40">•</span>
    
    <a 
      href="https://listenfree.in/player/mfj3H8OL" 
      target="_blank"            
      rel="noopener noreferrer"  
    >
      <span className="cursor-pointer font-semibold transition-colors duration-200 hover:underline">
        {trackName}
      </span>
    </a>
  </div>

  {/* Right Side: Big GIF at the absolute end */}
  <img 
    src="https://media1.tenor.com/m/BBhWbBvteE4AAAAC/lit-that-is-lit.gif" 
    alt="Lit Animation" 
    className="h-14 w-14 object-contain rounded-md shrink-0" 
  />   
</div>


          </div>
        </div>
      </div>
    </section>
  );
}