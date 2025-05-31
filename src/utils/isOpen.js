export function isOpen() {
  const agora = new Date();
  const diaSemana = agora.getDay();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();

  function dentroDoHorario(inicio, fim) {
    const [hInicio, mInicio] = inicio.split(":").map(Number);
    const [hFim, mFim] = fim.split(":").map(Number);

    const minutosAgora = hora * 60 + minutos;
    const minutosInicio = hInicio * 60 + mInicio;
    const minutosFim = hFim * 60 + mFim;

    return minutosAgora >= minutosInicio && minutosAgora <= minutosFim;
  }

  if (diaSemana === 0 || diaSemana === 1) {
    return "Fechado";
  } else if (diaSemana >= 2 && diaSemana <= 5) {
    if (
      dentroDoHorario("09:00", "12:15") ||
      dentroDoHorario("13:30", "20:15")
    ) {
      return "Aberto";
    } else {
      return "Fechado";
    }
  } else if (diaSemana === 6) {
    if (dentroDoHorario("08:30", "13:45")) {
      return "Aberto";
    } else {
      return "Fechado";
    }
  }
}
