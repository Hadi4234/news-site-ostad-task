import { prisma } from '@/lib/prismaDB'
import { NextResponse } from 'next/server'
export async function GET(req, { params }) {
    try {
        const prisma = new PrismaClient({
            log: ['query'],
        })
        const id = params.id
        const result = await prisma.categories.findUnique({
            where: {
                id: parseInt(id),
            },
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'error', data: error })
    }
}
