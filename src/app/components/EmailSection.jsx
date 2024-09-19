"use client";
import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between my-12 py-32 gap-8 relative min-h-screen ring-offset-blueGray-400"
    >
      {/* Fondo púrpura ajustado */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contenedor de secciones de contacto */}
      <div className="flex flex-col md:flex-row w-full gap-8 z-4">
        {/* Sección de contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-1 flex-1 px-5">
          <h5 className="text-2xl font-bold text-white py-6">Contactar</h5>
          <p className="text-[#ADB7BE] mt-2">
            Frecuentemente me encuentro buscando nuevas <br /> oportunidades y retos a enfrentar, con disciplina y <br /> eficiencia. No dudes en ponerte en contacto!
          </p>
          <div className="socials flex flex-row mt-4">
            <Link href="https://github.com/yulianaRdz">
              <img src="/github-icon.svg" alt="Github Icon" width={40} height={40} />
            </Link>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col items-center text-center md:text-right mt-1 flex-1 px-0">
          <h5 className="text-2xl font-bold text-white py-12">Información de contacto</h5>
          <p className="text-[#ADB7BE] mt-2">
            <strong>Teléfono:</strong> +52 429 135 4102
          </p>
          <p className="text-[#ADB7BE] mt-2">
            <strong>Email:</strong> yuliana.rdz2003@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
