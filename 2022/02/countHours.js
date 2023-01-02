function countHours(year, holidays) {
  return (
    holidays.filter((day) => {
      const freeDay = new Date(day + "/" + year);
      if (freeDay.getDay() != 0 && freeDay.getDay() != 6) {
        return freeDay;
      }
    }).length * 2
  );
}
