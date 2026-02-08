import { NextResponse } from 'next/server';
import { getEquipment } from '@/lib/equipment';

export async function GET() {
  try {
    const equipment = getEquipment();
    return NextResponse.json(equipment);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch equipment' },
      { status: 500 }
    );
  }
}
