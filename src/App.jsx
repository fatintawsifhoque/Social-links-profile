import "./App.css";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-gray-900 flex justify-center items-center">
        <section className="p-[20px] md:p-[35px] box-border bg-gray-800 flex flex-col items-center rounded-2xl">
          <div className="h-[95px] w-[95px] rounded-full overflow-hidden">
            <img
              src="avatar-jessica.jpeg"
              alt="profile picture"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-[30px] md:mt-[35px] text-white font-bold text-2xl">
            Jessica Randall
          </h1>
          <p className="text-[#C5F82A] text-[14px] mt-[7px] mb-[30px]">
            London, United Kingdom
          </p>
          <p className="text-white mb-[25px]">
            "Front-end developer and avid reader."
          </p>

          <a
            className="h-[40px] w-[275px] md:h-[50px] md:w-[300px] mb-[10px] text-white hover:bg-[#C5F82A] hover:text-black hover:cursor-grab text-[17px] font-bold bg-gray-700 rounded-xl flex justify-center items-center"
            href="https://github.com/fatintawsifhoque" target="_blank"
          >
            GitHub
          </a>

          <a
            className="h-[40px] w-[275px] md:h-[50px] md:w-[300px] mb-[10px] text-white hover:bg-[#C5F82A] hover:text-black hover:cursor-grab text-[17px] font-bold bg-gray-700 rounded-xl flex justify-center items-center"
            href="https://www.frontendmentor.io/profile/fatintawsifhoque" target="_blank"
          >
            Frontend Mentor
          </a>

          <a
            className="h-[40px] w-[275px] md:h-[50px] md:w-[300px] mb-[10px] text-white hover:bg-[#C5F82A] hover:text-black hover:cursor-grab text-[17px] font-bold bg-gray-700 rounded-xl flex justify-center items-center"
            href="https://www.linkedin.com/in/fatintawsifhoque" target="_blank"
          >
            LinkedIn
          </a>

          <a
            className="h-[40px] w-[275px] md:h-[50px] md:w-[300px] mb-[10px] text-white hover:bg-[#C5F82A] hover:text-black hover:cursor-grab text-[17px] font-bold bg-gray-700 rounded-xl flex justify-center items-center"
            href="https://www.codewars.com/users/fatintawsifhoque" target="_blank"
          >
            Codewars
          </a>

          <a
            className="h-[40px] w-[275px] md:h-[50px] md:w-[300px] mb-[10px] text-white hover:bg-[#C5F82A] hover:text-black hover:cursor-grab text-[17px] font-bold bg-gray-700 rounded-xl flex justify-center items-center"
            href="#"
          >
            Instagram
          </a>

          <footer>
           <p class="text-white">
  Coded by {" "}
  <a 
    href="https://github.com/fatintawsifhoque" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#C5F82A] font-bold "
  >
    Fatin Tawsif Hoque
  </a>
</p>
          </footer>
        </section>
      </section>
    </>
  );
}

export default App;
