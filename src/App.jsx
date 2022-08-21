import React from 'react'
import styles from "./style"
import { Navbar, Hero, Stats } from "./components";

const Business = React.lazy(() => import('./components/Business'))
const Billing = React.lazy(() => import('./components/Billing'))
const CardDeal = React.lazy(() => import('./components/CardDeal'))
const Testimonials = React.lazy(() => import('./components/Testimonials'))
const Clients = React.lazy(() => import('./components/Clients'))
const CTA = React.lazy(() => import('./components/CTA'))
const Footer = React.lazy(() => import('./components/Footer'))

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>


    <main className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={styles.boxWidth}>
        <Stats />
        <React.Suspense fallback={<React.Fragment></React.Fragment>}>
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </React.Suspense>
      </div>
    </main>

  </div>
)


export default App; 