import NewsList from '@/components/NewsList'
import PopularList from '@/components/PopularList'
import MainLayout from '@/components/layouts/MainLayout'

async function getData(id) {
    let categoryList = (
        await fetch(process.env.HOST_URL + `/api/news/category?catID=${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    )['data']
    let categoryName = (
        await fetch(process.env.HOST_URL + `/api/category/${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    )['data']
    let Popular = (
        await (
            await fetch(`${process.env.HOST_URL}/api/news/type?type=Popular`)
        ).json()
    )['data']
    return { categoryList, categoryName, Popular }
}

const Page = async (props) => {
    let id = props.searchParams['id']
    const data = await getData(id)

    return (
        <MainLayout>
            <div className="px-10 mt-10">
                <h1 className="text-3xl font-semibold">
                    {data['categoryName']['name']}
                </h1>
                <hr className="" />
                <div className="flex ">
                    <NewsList latest={data['categoryList']} />

                    <PopularList popular={data['Popular']} />
                </div>
            </div>
        </MainLayout>
    )
}
export default Page
