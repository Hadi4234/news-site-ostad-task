import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaDB'
import { headers } from 'next/headers'

export async function POST(req, res) {
    try {
        let headerList = headers()
        let id = parseInt(headerList.get('id'))

        let reqBody = await req.json()

        const result = await prisma.users.update({
            where: { id: id },
            data: reqBody,
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
