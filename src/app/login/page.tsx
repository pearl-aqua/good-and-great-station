"use client"

import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import googleLogo from '@/image/google-logo.svg';

  const descData = [
    '- 이메일 정보는 회원 관리를 위해서만 사용되며 그 외의 용도로 사용되지 않습니다.',
    '- 이메일 정보는 이 사이트가 유지되는 동안 보관되며 사이트 폐쇄 후 3일 이내에 폐기 됩니다.',
    '- 로그인시 고지되는 v6love-97397.firebaseapp.com 는 이 사이트의 데이터 저장을 위해 사용하는 주소이며 이 사이트 관리자가 관리하고 있습니다.'
  ]

export default function LoginPage() {
    const handleClickLogin = () => {
        console.log('loginn')
    }
    return (
        <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>중복 지원을 방지하기 위해 구글 로그인을 사용하고 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="flex flex-col text-sm text-slate-400">
        {descData.map((el) =>(<span key={el} className="mb-1">{el}</span>) )}
        </div>
        </CardContent>
        <CardFooter>
        <button
        className="flex items-center justify-center w-[320px] py-3 rounded-2xl text-stone-700 hover:shadow border border-slate-200"
        onClick={handleClickLogin}
      >
        <Image
          className="w-6 h-6 mr-3"
          src={googleLogo}
          alt="Google Logo"
        />
        구글로 로그인하기
      </button>
        </CardFooter>
      </Card>
    )
  }
  