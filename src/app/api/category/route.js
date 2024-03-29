import { prisma } from '@/lib/prismaDB'
import { NextResponse } from 'next/server'
export async function GET() {
    try {
        const prisma = new PrismaClient({
            log: ['query'],
        })
        const result = await prisma.categories.findMany({
            select: { id: true, name: true },
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (error) {
        return NextResponse.json({ status: 'error', data: error })
    }
}
