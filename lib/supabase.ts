// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Tambahkan 'as string' agar TypeScript tahu bahwa nilai ini pasti ada teksnya
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Membuat client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);