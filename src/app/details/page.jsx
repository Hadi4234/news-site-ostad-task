import PopularList from "@/components/PopularList";
import NewsDetails from "@/components/NewsDetails";
import MainLayout from "@/components/layouts/MainLayout";
import CommentsList from "@/components/CommentsList";

async function getData(id) {
    let Details = (await (await fetch(`${process.env.HOST_URL}/api/news/details?id=${id}`)).json())['data']
    let Popular = (await (await fetch(`${process.env.HOST_URL}/api/news/type?type=Popular`)).json())['data']
    let Comments = (await (await fetch(`${process.env.HOST_URL}/api/comments/news/?postID=${id}`)).json())['data']
    return {Popular:Popular,Details:Details,Comments:Comments}
}


const Page = async (props) => {

    let id=props.searchParams['id']
    let data= await getData(id)

  return (
       <MainLayout>
      <div className="flex flex-row px-10">
        <div className="md:w-3/4">
              <NewsDetails details={data['Details']}/>
              <CommentsList postID={id} data={data['Comments']}/>
        </div>
<PopularList popular={data['Popular']} />

      </div>

      
       </MainLayout>
  )
}
export default Page;