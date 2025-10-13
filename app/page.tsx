import Ipod from "@/components/ipod";

export default function HeadphonesPage() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="">
        <div className="absolute inset-0">
          <Ipod />
        </div>
      </div>
    </div>
  );
}
