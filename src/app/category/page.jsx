import MainLayout from "@/components/layouts/MainLayout"

async function getData(id) {
  const res = await fetch(process.env.HOST_URL+`/api/news/category?catID=${id}`).then((res) => res.json()).catch((err) => console.log(err))
  return res['data']
}


const Page = async (props) => {

    let id=props.searchParams['id']
    const data=await getData(id)


   return (
     <MainLayout>
       {data.map((item) => (
         <div key={item.id}>{item.title}</div>
       ))}
    </MainLayout>
  )
}
export default Page;