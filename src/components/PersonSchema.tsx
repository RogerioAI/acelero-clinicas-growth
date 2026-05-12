import { JsonLd } from "@/components/JsonLd";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://acelero.vc/#lucas-rocha",
  "name": "Lucas Rocha",
  "jobTitle": "Mentor Comercial para Clínicas de Saúde",
  "url": "https://acelero.vc/sobre",
  "image": "https://acelero.vc/lucas-rocha.jpg",
  "sameAs": [
    "https://www.instagram.com/acelero.vc/",
    "https://www.youtube.com/@acelerovc",
    "https://www.linkedin.com/company/acelerovc/"
  ],
  "worksFor": { "@id": "https://acelero.vc/#organization" },
  "knowsAbout": [
    "Gestão comercial de clínicas",
    "Método A.C.E.L.E.R.O",
    "SPIN Selling",
    "Vendas consultivas em saúde",
    "Mentoria comercial para clínicas odontológicas e médicas"
  ],
  "description": "Fundador da Acelero.vc. Mais de 15 anos de experiência e +250 clínicas atendidas com o Método A.C.E.L.E.R.O."
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://acelero.vc/#organization",
  "name": "Acelero.vc",
  "url": "https://acelero.vc",
  "logo": "https://acelero.vc/logo-acelero.png",
  "sameAs": [
    "https://www.instagram.com/acelero.vc/",
    "https://www.youtube.com/@acelerovc",
    "https://www.linkedin.com/company/acelerovc/"
  ]
};

export const PersonSchema = () => (
  <>
    <JsonLd data={organizationSchema} />
    <JsonLd data={personSchema} />
  </>
);
