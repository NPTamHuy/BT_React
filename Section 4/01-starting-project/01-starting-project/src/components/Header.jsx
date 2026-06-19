import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="w-44 h-44 object-contain mb-8"
      />

      <h1
        className="
          m-0
          text-center
          text-2xl
          md:text-4xl
          font-semibold
          uppercase
          tracking-[0.4em]
          text-[#9a3412]
        "
      >
        ReactArt
      </h1>

      <p className="m-0 text-center text-[#a39191]">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
