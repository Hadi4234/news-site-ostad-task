import NewsList from '@/components/NewsList'
import PopularList from '@/components/PopularList'
import MainLayout from '@/components/layouts/MainLayout'

async function getData(keyword) {
    let Popular = (
        await (
            await fetch(`${process.env.HOST_URL}/api/news/type?type=Popular`)
        ).json()
    )['data']
    let News = (
        await (
            await fetch(
                `${process.env.HOST_URL}/api/news/search?keyword=${keyword}`
            )
        ).json()
    )['data']
    return { News: News, Popular: Popular }
}

const Page = async (props) => {
    let keyword = props.searchParams['keyword']
    const data = await getData(keyword)

    return (
        <MainLayout>
            <div className="px-10 mt-10">
                <h1 className="text-3xl font-semibold">Search Result</h1>
                <hr className="" />
                <div className="flex flex-row">
                    <NewsList latest={data['News']} />

                    <PopularList popular={data['Popular']} />
                </div>
            </div>
        </MainLayout>
    )
}
export default Page
