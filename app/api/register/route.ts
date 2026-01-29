import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").toLowerCase().trim();
    const password = String(body?.password ?? "");

    if (name.length < 2) return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
    if (!email.includes("@")) return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    if (password.length < 8) return NextResponse.json({ error: "Contraseña inválida (mín 8)" }, { status: 400 });

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return NextResponse.json({ error: "Ese email ya está registrado." }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.user.create({
      data: { name, email, passwordHash, status: "REGISTERED" },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("REGISTER_ERROR:", err);
    return NextResponse.json({ error: "Error interno", code: "REGISTER_001" }, { status: 500 });
  }
}

