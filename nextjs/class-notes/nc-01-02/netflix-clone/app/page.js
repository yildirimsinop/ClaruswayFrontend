import Link from "next/link";

//? app folder icindeki page.js "/" route olan home sayfasidir.

//? next.jsæde tum componentler default olarak server componenttir. Client component kullanmak icin "use-client" direktifini kullanmamiz gerekir.
export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] text-center mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-[400] ">
            Watch anywhere. Cancel anytime.
          </p>
          {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}

          <Link href="/register">
            <button className="btn-danger w-[250px]">Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
