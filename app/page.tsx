import Image from "next/image";
import TopNews from './Components/TopNews'
export default function Home() {
  return (
    <main className="flex h-[calc(100%-160px)] flex-col items-center justify-between px-24 w-full">
      <div className="w-full">
        <TopNews/>
      </div>
    </main>
  );
}
