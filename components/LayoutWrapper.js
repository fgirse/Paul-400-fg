/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/SvgLogoNeu'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import InfoSection from './Infosection'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <InfoSection/>
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between bg-slate-900">
          <header className="mt-2 flex items-end justify-between p-2">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  {/*<div className="mr-3">
                    <Logo />
                </div>*/}
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold ">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap items-end text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="font-bold uppercase text-gray-100  hover:border-b hover:border-yellow-400 hover:text-yellow-400 dark:text-gray-100 dark:hover:text-sky-700 sm:p-4 lg:text-[.666rem] xl:text-[1rem] 2xl:text-[1.333rem]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
