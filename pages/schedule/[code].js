import Header from "../../components/Header";
import Schedule from "../../components/Schedule";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../utils/mongodb";

export default function SchedulePage(props){
    return(
        <div>
            <Header />
            <Schedule />
        </div>
    )
}

export async function getServerSideProps(context){
  const locale = context.locale;
  const code = context.params.code;

  const client = await clientPromise;
  const db = client.db("weddingRsvpDB");
  let data = await db.collection("guests").findOne({uniqueCode:code},{projection:{_id:0}});

  if(!data){
      return {
          redirect: {
          destination: '/',
          permanent: false,
          },
   }};
   
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','aboutDay'])),
      },
    };
  }