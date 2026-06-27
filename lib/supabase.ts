const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type InsertResult = {
  error: Error | null;
};

type TableClient = {
  insert: (payload: Record<string, unknown>) => Promise<InsertResult>;
};

export const supabase = {
  from(table: string): TableClient {
    return {
      async insert(payload) {
        if (!supabaseUrl || !supabaseAnonKey) {
          return {
            error: new Error("Supabase environment variables are not configured."),
          };
        }

        try {
          const response = await fetch(
            `${supabaseUrl}/rest/v1/${table}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                apikey: supabaseAnonKey,
                Authorization: `Bearer ${supabaseAnonKey}`,
                Prefer: "return=minimal",
              },
              body: JSON.stringify(payload),
            },
          );

          if (!response.ok) {
            const details = await response.text();
            return {
              error: new Error(details || `Supabase request failed: ${response.status}`),
            };
          }

          return { error: null };
        } catch (error) {
          return {
            error:
              error instanceof Error
                ? error
                : new Error("Unknown Supabase request error."),
          };
        }
      },
    };
  },
};
