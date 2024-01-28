import Hero from '@/components/Hero'
import NewsList from '@/components/NewsList'
import PopularList from '@/components/PopularList'
import Subscribe from '@/components/Subscribe'
import MainLayout from '@/components/layouts/MainLayout'

async function getData() {
    let Slider = (
        await (
            await fetch(`${process.env.HOST_URL}/api/news/type?type=Slider`)
        ).json()
    )['data']
    let Featured = (
        await (
            await fetch(`${process.env.HOST_URL}/api/news/type?type=Featured`)
        ).json()
    )['data']
    let Popular = (
        await (
            await fetch(`${process.env.HOST_URL}/api/news/type?type=Popular`)
        ).json()
    )['data']
    let Latest = (
        await (await fetch(`${process.env.HOST_URL}/api/news/latest`)).json()
    )['data']
    return {
        Slider: Slider,
        Featured: Featured,
        Popular: Popular,
        Latest: Latest,
    }
}

export default async function Home() {
    const data = await getData()
    return (
        <MainLayout>
            <Hero featured={data['Featured']} slider={data['Slider']} />
            <div className="px-10 mt-10">
                <h1 className="text-3xl font-semibold">Latest News</h1>
                <hr className="" />
                <div className="flex flex-row">
                    <NewsList latest={data['Latest']} />
                    <PopularList popular={data['Popular']} />
                </div>
                <div className="hidden md:block">
                    <Subscribe />
                </div>
            </div>
        </MainLayout>
    )
}
