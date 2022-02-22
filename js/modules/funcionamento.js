export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number); // split transforma uma string em uma array
// adicionando o map que irá integrar cada item da array e passando Number, tornará cada item da Array em um número

const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

const dataAgora = new Date(); // data de agora
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

//verifica se o dia da semana é igual ao dia de hoje, se for de seg a sex funcionará, se for -1 que são os fins de semanas não irá funcionar
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto =
  horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

//se semanaAberto for true e horarioAberto true ele irá adicionar a classe aberto
if (semanaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}
