import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oqnhweotpoteqiihrwpf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbmh3ZW90cG90ZXFpaWhyd3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwODg5MTcsImV4cCI6MjAyMjY2NDkxN30.J1x35YD_dLfTQHh0Yw50cBjKs1A_2NlyUliaB_boHiI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
