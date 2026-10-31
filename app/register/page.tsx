
"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const cleanUsername = username.trim().toLowerCase();

    if (!/^[a-z0-9_]{3,20}$/.test(cleanUsername)) {
      setMessage("Username mesti 3–20 aksara (huruf, nombor atau _).");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setMessage("Password mesti sekurang-kurangnya 8 aksara.");
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        emailRedirectTo:
          `${window.location.origin}/auth/confirm`,
        data: {
          full_name: name.trim(),
          username: cleanUsername,
        },
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Pendaftaran berjaya! Sila semak email untuk pengesahan akaun."
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
      >
        <h1 className="text-3xl font-bold text-center">
          RAINTOWN SYNDICATE
        </h1>

        <p className="text-center text-zinc-400">
          Daftar sebagai ahli rasmi
        </p>

        <input
          required
          placeholder="Nama penuh"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        <input
          required
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        <input
          required
          type="password"
          minLength={8}
          placeholder="Password (minimum 8 aksara)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        {message && (
          <p className="text-sm text-yellow-400">{message}</p>
        )}

        <button
          disabled={loading}
          className="w-full rounded-lg bg-red-600 p-3 font-bold disabled:opacity-50"
        >
          {loading ? "Mendaftarkan..." : "DAFTAR SEKARANG"}
        </button>

        <p className="text-center text-sm text-zinc-400">
          Sudah mempunyai akaun?{" "}
          <Link href="/login" className="text-red-400">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}

