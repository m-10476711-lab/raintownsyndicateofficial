
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/auth/username-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login gagal.");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError("Tidak dapat menyambung ke server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-8"
      >
        <h1 className="text-3xl font-bold text-center">
          RAINTOWN SYNDICATE
        </h1>

        <p className="text-center text-zinc-400">
          Member Login
        </p>

        <input
          required
          placeholder="Email atau Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 p-3"
        />

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full rounded-lg bg-red-600 p-3 font-bold disabled:opacity-50"
        >
          {loading ? "Sedang login..." : "LOGIN"}
        </button>

        <p className="text-center text-sm text-zinc-400">
          Belum mempunyai akaun?{" "}
          <Link href="/register" className="text-red-400">
            Daftar ahli
          </Link>
        </p>
      </form>
    </main>
  );
}

