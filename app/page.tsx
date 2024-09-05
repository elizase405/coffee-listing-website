import Image from "next/image";
import bg from '@/img/bg-cafe.jpg';
import Collection from '@/components/Collection';

export default function Home() {
  return (
    <div className="bg-[#111315] text-[#FEF7EE] w-full">
      <Image src={bg} alt='bg-cafe' className='bg-cover bg-center w-full'></Image>
      <Collection />
    </div>
  );
}
