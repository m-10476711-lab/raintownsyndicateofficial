
import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { identifier, password } = await request.json();

    if (
      typeof identifier !== "string" ||
      typeof password !== "string" ||
      !identifier.trim() ||
      !password
    ) {
      return NextResponse.json(
        { error: "Sila isi username/email dan password." },
        { status: 400 }
      );
    }

    const value = identifier.trim().toLowerCase();
    let email = value;

    if (!value.includes("@")) {
      const admin = createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        }
      );

      const { data: profile, error } = await admin
        .from("profiles")
        .select("id")
        .ilike("username", value)
        .maybeSingle();

      if (error || !profile) {
        return NextResponse.json(
          { error: "Username/email atau password tidak sah." },
          { status: 401 }
        );
      }

      const { data: userData, error: userError } =
        await admin.auth.admin.getUserById(profile.id);

      if (userError || !userData.user?.email) {
        return NextResponse.json(
          { error: "Username/email atau password tidak sah." },
          { status: 401 }
        );
      }

      email = userData.user.email;
    }

    const supabase = await createClient();

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      return NextResponse.json(
        { error: "Username/email atau password tidak sah." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      redirect: "/dashboard",
    });
  } catch {
    return NextResponse.json(
      { error: "Tidak dapat memproses login." },
      { status: 500 }
    );
  }
}

