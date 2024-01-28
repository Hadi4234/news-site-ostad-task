import { prisma } from '@/lib/prismaDB'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
    try {
        let { searchParams } = new URL(req.url)
        let type = searchParams.get('type')

        const result = await prisma.news_list.findMany({
            where: { type: type },
            select: {
                id: true,
                title: true,
                short_des: true,
                img1: true,
                img2: true,
                img3: true,
                img4: true,
                createdAt: true,
            },
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
