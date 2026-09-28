// Zugangsdaten für den Online-Speicher (Supabase).
// Beide Werte findest du in Supabase unter: Project Settings → API (bzw. "Data API" / "API Keys").
// Der "publishable" bzw. "anon" Key ist dafür gedacht, öffentlich in einer App zu stehen –
// eure Daten sind durch den Login und die Datenbank-Regeln geschützt.
// Wenn beide Felder leer sind, speichert die App nur lokal auf dem Gerät.
window.BUDGET_CONFIG = {
  supabaseUrl: '',   // z. B. 'https://abcdefghijklm.supabase.co'
  supabaseKey: ''    // z. B. 'sb_publishable_...' oder 'eyJhbGciOi...'
};
