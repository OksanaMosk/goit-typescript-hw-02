/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum everyDay {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: everyDay): boolean {
  return day === everyDay.SATURDAY || day === everyDay.SUNDAY;
}
if (everyDay.SATURDAY || everyDay.SUNDAY) {
  console.log("Weekend");
}
{
  console.log("No Weekend");
}
