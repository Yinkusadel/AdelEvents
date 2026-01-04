import { createBrowserClient } from '@supabase/ssr'
import { createClient as createNewClient } from '@supabase/supabase-js';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}

export const createAdminClient = () =>
  createNewClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SRK!
  );