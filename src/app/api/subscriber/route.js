import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaDB'

export async function POST(req, res) {
    try {
        let reqBody = await req.json()

        const result = await prisma.subscribers.create({ data: reqBody })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
