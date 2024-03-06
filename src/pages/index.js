import leblanc from "../../public/assets/leblanc.webp";
import discord from "../../public/assets/discord.webp";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${leblanc.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          transform: "scaleX(-1)",
          position: "relative",
          zIndex: "-50",
        }}
      />

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 60%, rgba(14,14,22,0.9) 80%)",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-40",
        }}
      />

      <div className="w-full absolute top-[26%] z-10 flex flex-col justify-center items-center font-normal ">
        <h1 className="text-8xl font-[Baloo] text-center text-zinc-100">
          ELOJOB PRIME
        </h1>
        <p className="text-center text-zinc-200 text-lg -mt-4">
          Desperte seu potencial ao nosso lado e transforme desafios em
          conquistas extraordinárias.
        </p>

        <div className="mt-20 flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold text-xl">QUER AVANÇAR NAS RANQUEADAS?</h1>
          <div className="flex gap-5">
            <button className="border-[2px] bg-transparent rounded-xl px-6 py-3 flex items-center gap-2">
              <img src={discord.src} alt="discord" className="h-6" />
              <p className="font-bold">DISCORD</p>
            </button>
            <button
              className="rounded-xl px-6 py-3 flex items-center gap-2"
              style={{
                backgroundImage:
                  "linear-gradient(60deg, #F0A70E 20%, #FFF525 80%)",
              }}
            >
              <p className="font-bold text-zinc-800">CONTRATAR</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
