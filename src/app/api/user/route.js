import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json({message: "obteniendo datos "});
}



export function POST() {
    return NextResponse.json({message: "creando datos"});
}

export function PUT() {
    return NextResponse.json({message: "Editar datos"});
}

export function DELETE() {
    return NextResponse.json({message: "eliminar datos"}); 
}

export function PATCH(){
    return NextResponse.json({message: "nose que hacer el path"})
}