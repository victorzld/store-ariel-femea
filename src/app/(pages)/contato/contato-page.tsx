"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      Swal.fire({
        text: "É necessário preencher todos os campos para enviar!",
        icon: "warning",
        title: "CAMPOS VAZIOS",
      });
      return;
    } else {
      if (
        name.length > 0 ||
        email.length > 0 ||
        subject.length > 0 ||
        message.length > 0
      ) {
        Swal.fire({
          text: "A sua mensagem foi enviada, e assim que possível será respondida!",
          icon: "success",
          title: "ENVIADO!",
        });
      }
    }

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailjs.send("serviceID", "templateID", templateParams, "publicKey").then(
      (response) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        console.log("email enviado", response.status, response.text),
          setName(""),
          setEmail(""),
          setSubject(""),
          setMessage("");
      },
      (err) => {
        console.log("erro", err);
      }
    );
  }

  return (
    <div className="mt-36 py-10 px-16 w-full max-md:px-4 max-md:mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-slate-50 font-semibold text-2xl max-md:text-3xl">
            Entre em contato
          </h1>
          <div className="flex flex-col items-center justify-center mt-2">
            <p className="text-base">Segunda à Sexta</p>
            <p className="text-base text-lime-300">8h - 17h</p>
          </div>
        </div>

        <div className="bg-black bg-opacity-95 rounded-xl px-5 py-5 -mt-3">
          <form
            onSubmit={sendEmail}
            className="grid grid-cols-2 gap-10 
                    max-md:flex max-md:flex-col xl:-ml-14"
          >
            <label
              htmlFor="nome"
              className="flex flex-col gap-2 xl:w-[70%] xl:ml-20"
            >
              <p className="max-md:text-base text-slate-50">Nome</p>
              <input
                required
                type="text"
                placeholder="Seu nome"
                id="nome"
                className="text-sm bg-transparent outline-none px-3 py-2 focus:ring-0 
                                items-center border rounded-lg border-slate-300
                                max-md:text-sm focus:border-lime-300/60"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>

            <label htmlFor="email" className="flex flex-col gap-2 xl:w-[70%]">
              <p className="max-md:text-base text-slate-50">E-mail</p>
              <input
                required
                type="email"
                placeholder="exemplo@email.com"
                id="nome"
                className="text-sm bg-transparent outline-none px-3 py-2 focus:ring-0 
                                items-center border rounded-lg border-slate-300
                                max-md:text-sm focus:border-lime-300/60"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <label
              htmlFor="assunto"
              className="flex flex-col gap-2 xl:w-[70%] xl:ml-20"
            >
              <p className=" max-md:text-base text-slate-50">Telefone</p>
              <input
                required
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
                id="assunto"
                className="text-sm bg-transparent outline-none px-3 py-2 focus:ring-0 
                                    items-center border rounded-lg border-slate-300
                                    max-md:text-sm focus:border-lime-300/60"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </label>

            <label htmlFor="assunto" className="flex flex-col gap-2 xl:w-[70%]">
              <p className=" max-md:text-base text-slate-50">Assunto</p>
              <input
                required
                type="text"
                placeholder="Assunto à tratar"
                id="assunto"
                className="text-sm bg-transparent outline-none px-3 py-2 focus:ring-0 
                                    items-center border rounded-lg border-slate-300
                                    max-md:text-sm focus:border-lime-300/60"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </label>

            <div className="col-span-2">
              <label
                htmlFor="mensagem"
                className="flex flex-col gap-2 xl:w-[45%] xl:ml-20"
              >
                <p className="max-md:text-base text-slate-50">Menssagem</p>
                <textarea
                  required
                  placeholder="Em que posso ajudá-lo?"
                  cols={30}
                  rows={6}
                  id="mensagem"
                  className="text-sm bg-transparent outline-none px-3 py-3 focus:ring-0 
                                    items-center border rounded-lg border-slate-300 h-40
                                    max-md:text-sm focus:border-lime-300/60"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </label>
            </div>

            <button
              className="flex items-center justify-center gap-2 border bg-purple-700 border-slate-200
                         -mt-3 py-2 px-3 rounded-lg 0 hover:bg-lime-400/60 group duration-500 w-56 
                         max-sm:w-auto max-sm:mx-5 xl:ml-20"
            >
              <Send size={15} />
              <p
                className="text-sm group-hover:tracking-wide duration-500
                             max-md:text-xs max-md:group-hover:tracking-normal"
              >
                Envie sua mensagem!
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
