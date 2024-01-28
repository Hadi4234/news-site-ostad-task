import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaDB'
export async function POST(req, res) {
    try {
        let reqBody = await req.json()

        const count = await prisma.users.count({ where: reqBody })
        if (count === 1) {
            return NextResponse.json({
                status: 'success',
                data: 'Valid OTP Code',
            })
        } else {
            return NextResponse.json({
                status: 'fail',
                data: 'Invalid OTP Code',
            })
        }
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
