import Link from "next/link"


const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center  py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" src="/images/video.mp4" type="video/mp4" autoPlay muted loop></video>
    </div>
    <div className="text-[#F3EEE2]  video-content flex justify-center items-center flex-col gap-4  space-y-2">
        <h1 className="font-bold   text-3xl md:text-6xl">Erstelle deine eigene Website mit WordPress!</h1>
        <h3 className="font-thin md:text-3xl">Ein spannender Kurs für Schüler ab der  <b className="text-[#D07553] text-3xl  md:text-7xl font-bold">7. </b>Klasse .</h3>
        <Link href="/registration" className="  bg-[#D07553] md:text-2xl  text-[#F3EEE2] py-2 px-4 rounded-md hover:bg-[#F3EEE2] hover:text-[#D07553]">Jetzt anmelden</Link>
    </div>
</section>
  )
}

export default Hero