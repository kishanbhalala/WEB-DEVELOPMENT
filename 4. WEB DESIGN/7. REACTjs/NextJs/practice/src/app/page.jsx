import ClientCompo from "@/components/ClientCompo";
import CssModule from "@/components/CssModule";
import FetchData from "@/components/FetchData";
import GolbalCss from "@/components/GolbalCss";
import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";
import ServerCompo from "@/components/ServerCompo";
import UseImage from "@/components/UseImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold">hello world</h1>

      {/* <LearnLink /> */}
      {/* <LearnUseRouter/> */}
      {/* <ServerCompo/> */}
      {/* <ClientCompo /> */}
      {/* <GolbalCss/> */}
      {/* <CssModule /> */}
      {/* <UseImage /> */}
      <FetchData/>

    </main>
  );
}
