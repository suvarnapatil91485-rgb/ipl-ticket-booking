import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvjeusjgjqmqlbrcavdm.supabase.co";
const supabaseKey = "sb_publishable_Ejn9eb3wlqergEEqLmMelQ_eJ7axKcK";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);