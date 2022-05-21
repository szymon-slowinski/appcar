import { createClient } from "@supabase/supabase-js";

if (!process.env.REACT_APP_SUPABASE_URL) {
  throw new Error("Provide supabase url");
}
if (!process.env.REACT_APP_SUPABASE_PUBLIC_KEY) {
  throw new Error("Provide supabase anon key");
}

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export {supabase}