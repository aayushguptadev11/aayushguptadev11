import aayush from "../../public/aayush.webp"

function Profile() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
        
        {/* Profile Image */}
        <img
          src="/aayush.webp"
          alt="Ayush Gupta"
          className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-100"
        />

        {/* Profile Info */}
        <h1 className="text-3xl font-bold text-slate-800 mt-5">Ayush Gupta</h1>

        <p className="text-blue-600 font-medium mt-2">Web Developer</p>

        <p className="text-slate-500 text-sm leading-relaxed mt-4">
          Building modern web applications with a passion for technology and AI
          Engineering.
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center gap-3 mt-7">
          {/* GitHub */}
          <a
            href="https://github.com/aayushguptadev11"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-[#181717] text-white rounded-lg font-medium hover:bg-[#333333] transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aayushguptadev/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
