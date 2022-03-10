/* eslint-disable prettier/prettier */
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import LogoLeckerladen from '../components/icons/svg/SVGLogoLeckerladen'
import Ganter from '../components/icons/svg/SVGGanter.js'
import Astra from '../components/icons/svg/SVGAstra'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 bg-amber-900 flex flex-col items-center">
      <div className='mt-12'>
          <p className="text-gray-50 text-center">Partner:</p>
          <div className="flex flex-row jusify-center items-basleline">
          <LogoLeckerladen className="mb-5 w-36 h-8"></LogoLeckerladen>
          <Ganter className="inline w-36 h-8"></Ganter>
          <Astra className="inline  w-36 h-8"></Astra>
          </div>
          
        </div>
        <div className="mt-3 mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-slate-50 dark:text-gray-400">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
          <p>all rights reserved</p>
          <div className="font-sans  font-extrabold text-yellow-300">{siteMetadata.author}</div>
          <div>{` & `}</div>
          
        
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        
        
      </div>
    </footer>
  )
}
