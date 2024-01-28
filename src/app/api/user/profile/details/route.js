import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaDB'
import { headers } from 'next/headers'
export async function GET(req, res) {
    try {
        let headerList = headers()
        let id = parseInt(headerList.get('id'))

        const result = await prisma.users.findUnique({ where: { id: id } })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
