import HeaderHome from "../components/home/HeaderHome";
import Title from "../components/utils/Title";

export default function Home() {
  return (
    <>
        <HeaderHome />

        <main className="max-w-7xl mx-auto mt-10 space-y-5 py-5">
            <Title>Cuidamos a tu mascota como parte de la familia</Title>

            <h2 className="text-xl text-center ">Agenda tu cita en segundos. Atención veterinaria confiable, rápida y cercana.</h2>

            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10 text-center">
                <div>
                    <h3 className="text-xl font-semibold mb-2">🕒 Agendar en Línea</h3>
                    <p>Solo unos clics y tu mascota ya tiene cita desde cualquier dispositivo.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">📋 Historial Médico</h3>
                    <p>Consulta vacunas, desparasitaciones y diagnósticos en línea.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">💉 Recordatorios</h3>
                    <p>Recibe alertas cuando tu mascota necesite una vacuna o control.</p>
                </div>
                </div>
            </section>

            
            <section className=" py-16 px-6">
                <h2 className="text-3xl text-center font-bold mb-10 text-green-400">Lo que dicen nuestros clientes</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="italic">“¡Agendé desde mi celular y en 5 minutos ya tenía cita para Luna!”</p>
                    <p className="mt-4 font-semibold text-right">— Mariana G.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <p className="italic">“Me encanta poder ver el historial de vacunas de Max desde mi cuenta.”</p>
                    <p className="mt-4 font-semibold text-right">— José R.</p>
                </div>
                </div>
            </section>

            
            <section className="py-20 text-center px-6 bg-green-50" id="agendar">
                <h2 className="text-4xl font-bold mb-4 text-green-400">¿Listo para darle a tu mascota la atención que merece?</h2>
                <p className="mb-6 text-lg">Registrate y agenda tu primera cita hoy mismo.</p>
                <a href="#" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">Agendar ahora</a>
            </section>
        </main> 



    </>
  )
}
