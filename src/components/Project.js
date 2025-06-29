export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-8  text-black">
      <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded">
          <a href="https://m3lw54.csb.app/">Portfolio</a>
          <p>
            Developed using React.js, HTML, Tailwind CSS to showcaseproffesional
            skills and experience through a responsive portfolio{" "}
          </p>
        </li>
        <li className="bg-white p-4 rounded">
          <a href="https://jewellerycatalog.vercel.app/"> Jewellery</a>
          <p>
            Build a mini e-commercial product catalog using react.js and
            Tailwind css to display jewellery items withfiltering cart
            operations and responsive UI
          </p>
        </li>
      </ul>
    </section>
  );
}
