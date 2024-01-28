import { prisma } from '@/lib/prismaDB'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
  try {
    const reqData = await req.json();
        const result = await prisma.news_list.create({
          data: reqData
        })
        return NextResponse.json({ status: 'success', data: result })
    } catch (e) {
        return NextResponse.json({ status: 'fail', data: e })
    }
}
