// script.js
// PDFs para cada botão
const pdfsOP = [
  {
    nome: "OP - 06A - Remoção de Animais nas Portarias ou no Interior da GUARNAE-SJ",
    url: "src/pdfs/OP/OP_-_06A-_Remoo_de_Animais_nas_Portarias_ou_no_Interior_da_GUARNAE-SJ.pdf",
  },
  { nome: "OP - 07 - Procedimentos relativos às ocorrências com animais peçonhentos e venenosos.", url: "src/pdfs/OP/OP_-_07.pdf" },
  { nome: "OP - 11 - Atendente ao Portão Principal.", url: "src/pdfs/OP/OP_-_11.pdf" },
  { nome: "OP - 14 - Embarque/desembarque próximo aos portões de acesso da GUARNAE-SJ", url: "src/pdfs/OP/OP_-_14.pdf" },
  {
    nome: "OP - 34A - Veículos de Transporte Pago",
    url: "src/pdfs/OP/OP_-_34A-_VCULOS_DE_TRANSPORTE_PAGO.pdf",
  },
  {
    nome: "OP - 36 - Controle de Acesso ao GSD-SJ",
    url: "src/pdfs/OP/OP_-_36_-_Controle_de_Acesso_ao_GSD-SJ.pdf",
  },
  {
    nome: "OP - 38 - Procedimentos de ingresso de militares, dependentes e pensionistas da FAB, de outras Forças Armadas e de Forças Auxiliares",
    url: "src/pdfs/OP/OP_-_38_-_Procedimentos_de_ingresso_de_militares_dependentes_e_pensionistas_da_FAB_de_outras_Foras_Armadas_e_de_Foras_Auxiliares.pdf",
  },
  {
    nome: "OP - 50 - Entrada e saída de entregadores com bicicleta",
    url: "src/pdfs/OP/OP_-_50_-_Entrada_e_sada_de_entregadores_com_bicicleta.pdf",
  },
  {
    nome: "OP 39 - Entrada de visitantes pelo portão brejauveira",
    url: "src/pdfs/OP/OP_39_-_Entrada_de_visitantes_pelo_porto_brejauveira.pdf",
  },
];
const pdfsNPA = [
  { nome: "PDF NPA 1", url: "pdfs/npa1.pdf" },
  { nome: "PDF NPA 2", url: "pdfs/npa2.pdf" },
];

const pdfsREGULAMENTOS = [
  { nome: "PDF Regulamento 1", url: "pdfs/regulamento1.pdf" },
  { nome: "PDF Regulamento 2", url: "pdfs/regulamento2.pdf" },
];

const pdfsOUTROS = [
  {
    nome: "ICA 125-9 - USO PROPORCIONAL DA FORÇA E REGRAS DE ENGAJAMENTO",
    url: "src/pdfs/OUTROS/ICA 125-9 - USO PROPORCIONAL DA FORÇA E REGRAS DE ENGAJAMENTO.pdf",
  },
  {
    nome: "INSTRUÇÃO ICA 159-9 -  USO PROPORCIONAL DA FORÇA E REGRAS DE ENGAJAMENTO",
    url: "src/pdfs/OUTROS/INSTRUÇÃO ICA 159-9.pptx.pdf",
  },
  { nome: "NSCA 54-3-TACF", url: "src/pdfs/OUTROS/NSCA_54-3.pdf" },
  { nome: "RUMAER", url: "src/pdfs/OUTROS/rumaer.pdf" },
];

function mostrarPDFs(lista) {
  const container = document.getElementById("pdf-list");
  container.innerHTML = "";
  lista.forEach((pdf) => {
    const card = document.createElement("div");
    card.className = "pdf-card";

    const title = document.createElement("div");
    title.className = "pdf-card-title";
    title.textContent = pdf.nome;

    const link = document.createElement("a");
    link.href = pdf.url;
    link.textContent = "Abrir PDF";
    link.target = "_blank";
    link.className = "pdf-card-link";

    card.appendChild(title);
    card.appendChild(link);
    container.appendChild(card);
  });
}

// Seleciona os botões já existentes
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".OP button").onclick = () => mostrarPDFs(pdfsOP);
  document.querySelector(".NPA button").onclick = () => mostrarPDFs(pdfsNPA);
  document.querySelector(".REGULAMENTOS button").onclick = () =>
    mostrarPDFs(pdfsOUTROS);
});
