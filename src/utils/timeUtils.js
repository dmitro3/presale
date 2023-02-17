export function getFormattedTimePeriod(timeInMillis) {
  let timeInSeconds = timeInMillis / 1000;

  const years = Math.floor(timeInSeconds / 3600 / 24 / 30 / 12);
  timeInSeconds = timeInSeconds - years * 3600 * 24 * 30 * 12;

  const months = Math.floor(timeInSeconds / 3600 / 24 / 30);
  timeInSeconds = timeInSeconds - months * 3600 * 24 * 30;

  const days = Math.floor(timeInSeconds / 3600 / 24);
  timeInSeconds = timeInSeconds - days * 3600 * 24;

  const hours = Math.floor(timeInSeconds / 3600);
  timeInSeconds = timeInSeconds - hours * 3600;

  const minutes = Math.floor(timeInSeconds / 60);
  timeInSeconds = timeInSeconds - minutes * 60;

  const seconds = Math.floor(
    timeInSeconds -
      months * 3600 * 30 * 24 -
      days * 3600 * 24 -
      hours * 3600 -
      minutes * 60
  );

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function getFormattedTimeAsString(timeInMillis) {
  const { years, months, days, hours, minutes, seconds } =
    getFormattedTimePeriod(timeInMillis);

  let sentence = "";

  if (years > 0) {
    sentence += years + (years > 1 ? " years " : " year ");
  }
  if (months > 0) {
    sentence += months + (months > 1 ? " months " : " month ");
  }
  if (days > 0) {
    sentence += days + (days > 1 ? " days " : " day ");
  }
  if (hours > 0) {
    sentence += hours + (hours > 1 ? " hours " : " hour ");
  }
  if (minutes > 0) {
    sentence += minutes + (minutes > 1 ? " minutes " : " minute ");
  }

  if (seconds > 0) {
    sentence += seconds + (seconds > 1 ? " seconds " : " second ");
  }

  return sentence;
}
