
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("member_no, full_name, username, status, role")
    .eq("id", user.id)
    .single();

  if (!profile) {
    return <main>Profil ahli belum tersedia.</main>;
  }

  const { data: balance } = await supabase
    .from("member_coin_balances")
    .select("coin_balance")
    .eq("member_id", user.id)
    .maybeSingle();

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold">
          RAINTOWN SYNDICATE
        </h1>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-zinc-400">Selamat datang</p>
          <h2 className="text-2xl font-bold">
            {profile.full_name || profile.username}
          </h2>

          <p className="text-zinc-400">
            Member ID: {profile.member_no}
          </p>

          <p className="mt-4">
            Status: {profile.status}
          </p>
        </section>

        <section className="rounded-2xl border border-red-900 bg-zinc-950 p-6">
          <p className="text-zinc-400">RS COIN BALANCE</p>
          <h2 className="text-4xl font-bold text-red-500">
            {balance?.coin_balance ?? 0} RS COIN
          </h2>
        </section>

        {profile.role === "admin" && (
          <a
            href="/admin"
            className="block rounded-lg bg-red-700 p-4 font-bold"
          >
            ADMIN DASHBOARD
          </a>
        )}

        <form action="/auth/logout" method="POST">
          <button className="rounded-lg bg-zinc-800 px-6 py-3">
            Logout
          </button>
        </form>
      </div>
    </main>
  );
}

