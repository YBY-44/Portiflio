import { Nunito, Akaya_Telivigala, Charmonman } from 'next/font/google'

// 配置 Nunito 字体
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

// 配置 Akaya Telivigala 字体
const akaya = Akaya_Telivigala({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// 配置 Charmonman 字体
const charmonman = Charmonman({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
export const Name=()=>{
    return <h1 className={`${akaya.className} italic text-3xl p-0 m-0`}>Boyang Yu</h1>
}