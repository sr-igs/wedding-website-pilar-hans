import Header from "../../components/Header";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clientPromise from "../../utils/mongodb";
import invitation from "../../images/invitation.jpg";
import Image from "next/image";

export default function HomePage(props){

    const names = getNames(props.data.summary);

    const style = {
      maxWidth:"50rem",
      margin:"3rem auto",
      textAlign:"center",
      fontFamily:"'Martel','serif'"
    }

    return(
        <div>
            <Header />
            <div style={{minWidth:"25rem",maxWidth:"30rem",margin:"0.5rem auto"}}>
              <Image src={invitation} alt={"Wedding invitation"} />
            </div>
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
    }}

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        data
      },
    };
  }

  function getNames(nameString){
    let nameArray = nameString.split(",");
    if(nameArray.length===1){
      return nameString
    }else if(nameArray.length===2){
      return `${nameArray[0]} and ${nameArray[1]}`
    }else{
      let lastName = nameArray.splice(nameString.lenth-1,1);
      return `${nameArray.join(",")} and ${lastName[0]}`
    }
  }