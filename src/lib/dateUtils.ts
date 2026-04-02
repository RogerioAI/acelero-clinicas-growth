const PT_MONTHS: Record<string, string> = {
  'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04',
  'Mai': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08',
  'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12',
};

export function ptDateToISO(dateStr: string): string {
  const parts = dateStr.trim().split(' ');
  if (parts.length !== 3) return '';
  const [day, month, year] = parts;
  const m = PT_MONTHS[month];
  if (!m) return '';
  return `${year}-${m}-${day.padStart(2, '0')}T00:00:00-03:00`;
}
