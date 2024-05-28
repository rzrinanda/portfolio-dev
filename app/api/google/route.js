import axios from 'axios';
import {NextResponse} from 'next/server';

export async function POST (request) {
  const reqBody = await request.json ();
  const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  const {gRecaptchaToken} = reqBody;

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${gRecaptchaToken}`;

    const res = await axios.post (url);
    if (res && res.data.success && res.data?.score > 0.5) {
      console.log("res.data.score", res.data?.score)
      return NextResponse.json ({
        message: 'Captcha verification success!!',
        success: true,
        score: res.data.score,
      });
    }

    return NextResponse.json (
      {
        error: 'Captcha verification failed!',
        success: false,
      },
      {status: 500}
    );
  } catch (error) {
    return NextResponse.json (
      {
        error: 'Captcha verification failed!',
        success: false,
      },
      {status: 500}
    );
  }
}
