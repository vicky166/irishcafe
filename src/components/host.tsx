import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function Host() {
  return (
    <div className="bg-zinc-900 mt-12 text-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_10%_45%] gap-8 px-4 sm:px-6 md:px-0">
        <div className="pt-20 ml-8">
          <h2 className={`${bebasNeue.className} text-[#18C67E] text-xl tracking-wider mb-12`}>
            MEET OUR HOST
          </h2>
          <div className="space-y-4">
            <h1 className={`${bebasNeue.className} text-[#DEE3E1] text-[60px] sm:text-[80px] md:text-[120px] leading-[0.9] font-bold tracking-tight`}>
              SCOTT
              <br />
              O'NEAL
            </h1>
            <Image
              src="/img/signature.svg"
              alt="Signature"
              width={180}
              height={80}
              className="opacity-90 mt-4"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 ml-auto md:mr-16">
          <Image
            src="/img/image2.jpg"
            alt="Host profile"
            width={450}
            height={450}
            className="rounded-lg object-cover md:mr-[300px] sm:mr-0 sm:mt-6 w-[90%] sm:w-[75%] lg:w-[450px]"
          />
        </div>

        <div className="space-y-6 md:space-y-12 mt-12 md:mt-16 md:max-w-xl mx-auto md:ml-16 sm:ml-0">
          <div className="space-y-4">
            <h3 className={`${bebasNeue.className} text-[#DEE3E1] md:mb-8 text-lg font-medium text-center md:text-left`}>
              FOLLOW SCOTT
            </h3>
            <div className="flex justify-center mt-12 md:justify-start gap-6">
              <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="text-white  mt-4 text-md space-y-8">
            <p className="font-bold">
              Pellentesque dui egestas lorem velit risus sollicitudin nunc et
              cras nisl, vitae massa est dictum pellentesque turpis vivamus
              risus et viverra elementum malesuada quis.
            </p>
            <p className="text-[#DEE3E1]">
              Nunc sit ultricies turpis faucibus tellus pulvinar condimentum
              libero interdum vestibulum risus pretium eu consequat, in netus
              arcu massa cursus arcu, sit ante ut lectus massa augue
              tincidunt iaculis feugiat penatibus consectetur risus amet
              interdum sed ullamcorper faucibus iaculis at.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
