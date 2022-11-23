import Head from 'next/head'
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export const  getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
 function Home() {
  const router= useRouter();
  const {locale} = router;
  const {t} = useTranslation("common");
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center'>
        <h1 className='text-5xl'>
        {t('hello')} <a className='text-5xl text-red-600' href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1 className='text-5xl flex justify-left'>:{locale}</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
};
export default Home;