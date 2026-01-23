import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, company, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "HINDWILL お問い合わせ <noreply@hindwill.com>",
      to: ["takumi.hashizume@hindwill.com"],
      subject: `【お問い合わせ】${name}様より`,
      text: [
        `お名前: ${name}`,
        `会社名: ${company || "未入力"}`,
        `メールアドレス: ${email}`,
        `電話番号: ${phone || "未入力"}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[Resend Error]", JSON.stringify(error));
      return NextResponse.json(
        { error: "メールの送信に失敗しました。", detail: error },
        { status: 500 }
      );
    }

    console.info("[Resend Success]", JSON.stringify(data));
    return NextResponse.json({ success: true, emailId: data?.id });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。", detail: String(err) },
      { status: 500 }
    );
  }
}
