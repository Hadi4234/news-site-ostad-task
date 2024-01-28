import { prisma } from '@/lib/prismaDB'
import { NextResponse } from 'next/server'

export async function GET(req, res) {
    try {
        let { searchParams } = new URL(req.url)
        let id = parseInt(searchParams.get('id'))

        const result = await prisma.news_list.findUnique({
            where: { id: id },
            include: { categories: true },
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
