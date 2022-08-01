
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="border-b py-6">
        <div className="container flex justify-between">
          <div>AL-HASAN</div>
          <div className="flex gap-6 font-semibold">
            <Link href={{ hash: ['home'] }}>
              <a>Home</a>
            </Link>
            <Link href={{ hash: ['tentang'] }}>
              <a>Tentang Kami</a>
            </Link>
            <Link href={{ hash: ['visi-misi'] }}>
              <a>Visi & Misi</a>
            </Link>
            <Link href={{ hash: ['kegiatan'] }}>
              <a>Kegiatan</a>
            </Link>
            <Link href={{ hash: ['pendaftaran'] }}>
              <a>Pendaftaran</a>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* jumbotron */}
        <div className="w-full aspect-[3/1] bg-gray-600">
          <div className="text-center flex flex-col items-center justify-center h-full text-white">
            <div className="text-3xl font-bold mb-3">PPTQ Al-Hasan</div>
            <div className="max-w-[50rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, similique fuga dolor quibusdam ad ratione labore iste incidunt eveniet eaque eligendi debitis, laborum doloremque. Nihil a enim accusamus ad sit!</div>
          </div>
        </div>

        {/* about */}
        <div className="container pt-[4rem] pb-[6rem]" id="tentang">
          <div className="text-2xl font-semibold mb-4">Tentang Kami</div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia veniam, nemo magnam deserunt recusandae non possimus ratione aspernatur ad veritatis enim nam iste fugit commodi sunt aut impedit cupiditate.
              <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam iure numquam odio! Quas fuga, earum eos vero natus unde ipsum quidem sequi ipsa est facere et dolorem sint quasi officia.
            </div>
            <div className="bg-gray-600 w-full"></div>
          </div>
        </div>



        {/* visi misi */}
        <div className="bg-gray-100" id="visi-misi">
          <div className="container pt-[4rem] pb-[6rem]">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-semibold mb-3 border-b-4 border-blue-500 inline-flex"> {/* ml-[.25rem]*/}
                  {/* <div className="ml-[-.25rem] mr-4 mt-[-.75rem]">Visi</div> */}
                  <div className="mr-20">Visi</div>
                </div>
                <ul className="flex flex-col gap-1 list-decimal	ml-4">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Cum molestiae eveniet necessitatibus nihil eos porro quo nostrum quisquam ullam!</li>
                  <li>quasi perferendis magnam voluptas distinctio animi dolores deserunt, tenetur doloribus. Quia</li>
                </ul>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-3">Misi</div>
                <ul className="flex flex-col gap-1 list-decimal	ml-4">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Cum molestiae eveniet necessitatibus nihil eos porro quo nostrum quisquam ullam!</li>
                  <li>quasi perferendis magnam voluptas distinctio animi dolores deserunt, tenetur doloribus. Quia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* kegiatan */}
        <div className="container pt-8" id="kegiatan">
          <div className="text-2xl font-semibold mb-4">Kegiatan</div>

        </div>


      </main>
      <div className="h-20"></div>
      <footer className="bg-gray-600 h-[30rem]">
        <div>footer</div>
      </footer>
    </>
  )
}
