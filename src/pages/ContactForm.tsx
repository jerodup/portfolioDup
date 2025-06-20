import { useRef, useState } from "react";
import video from "../assets/video.mp4";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        form.reset();
        setSubmitted(true); 
      })
      .catch((error) => {
        alert("Error al enviar: " + error);
      });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-[Oswald]">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        {submitted ? (
          <div className="bg-white p-8 text-center border border-black text-xl font-bold text-black flex flex-col items-center gap-4">
            <h2>¡Gracias por tu mensaje!</h2>
            <Link to="/" className="bg-black text-center text-white py-2 px-4 hover:bg-white hover:text-black border transition-colors duration-300 cursor-pointer">Volver al inicio</Link>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            ref={formRef}
            className="bg-white p-8 w-96 flex flex-col gap-4 border border-black"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input type="text" name="name" placeholder="Name" required className="border border-black p-2" />
            <input type="email" name="email" placeholder="Email" required className="border border-black p-2" />
            <textarea name="message" placeholder="Message" required className="border border-black p-2 resize-none h-40" />
            <button type="submit" className="bg-black text-white py-2 px-4">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
