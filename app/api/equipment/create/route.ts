import { NextRequest, NextResponse } from 'next/server';
import { addEquipment } from '@/lib/equipment';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newEquipment = addEquipment(body);
    return NextResponse.json(newEquipment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create equipment' },
      { status: 500 }
    );
  }
}
