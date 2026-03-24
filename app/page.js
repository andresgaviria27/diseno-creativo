import { Montserrat, Lato } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: '#2F2F2F' }}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .fade-in {
            animation: fadeIn 1s;
          }
        `}
      </style>
      <header className="flex justify-center py-4">
        <h1 className={`text-3xl font-bold ${montserrat.className}`} style={{ color: '#FFFFFF' }}>
          Diseño Creativo
        </h1>
      </header>
      <section className="flex flex-col items-center justify-center flex-1">
        <h2 className={`text-5xl font-bold ${lato.className}`} style={{ color: '#FFFFFF' }}>
          Transforma tu visión
        </h2>
        <h3 className={`text-3xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
          Desbloquea tu potencial creativo
        </h3>
        <p className={`text-xl ${lato.className}`} style={{ color: '#666666' }}>
          Convierte tus ideas en realidad con nuestro equipo de diseñadores innovadores
        </p>
        <div className="flex space-x-4 mt-8">
          <button
            className="px-4 py-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded"
            style={{ backgroundColor: '#FFC107' }}
          >
            Descubre cómo
          </button>
          <button
            className="px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded"
            style={{ backgroundColor: '#FF69B4' }}
          >
            Explora nuestros trabajos
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center py-8">
        <h2 className={`text-3xl font-bold ${montserrat.className}`} style={{ color: '#FFFFFF' }}>
          Portafolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Proyecto 1
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del proyecto 1
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Proyecto 2
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del proyecto 2
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Proyecto 3
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del proyecto 3
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-8">
        <h2 className={`text-3xl font-bold ${montserrat.className}`} style={{ color: '#FFFFFF' }}>
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Servicio 1
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del servicio 1
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Servicio 2
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del servicio 2
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <h3 className={`text-xl ${lato.className}`} style={{ color: '#FFFFFF' }}>
              Servicio 3
            </h3>
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Descripción del servicio 3
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-8">
        <h2 className={`text-3xl font-bold ${montserrat.className}`} style={{ color: '#FFFFFF' }}>
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Testimonio 1
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Testimonio 2
            </p>
          </div>
          <div
            className="bg-gray-800 p-4 rounded"
            style={{ backgroundColor: '#333333', borderColor: '#444444' }}
          >
            <p className={`text-lg ${lato.className}`} style={{ color: '#666666' }}>
              Testimonio 3
            </p>
          </div>
        </div>
      </section>
      <footer className="flex justify-center py-4">
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded"
          style={{ backgroundColor: '#FFC107' }}
        >
          Descubre cómo
        </button>
      </footer>
    </div>
  );
}