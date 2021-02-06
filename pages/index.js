import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Link from 'next/link'
import Image from 'next/image'

const Index = () => (

    <Layout title="ホーム">
      <Navbar />
      <div className="my-9">
        <Image className="rounded-full"
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
        <p>🔨 This page is under the construction. 🔨</p>
        <p>For now, please visit <Link href="https://yude.moe"><a>yude.moe</a></Link>.
        </p>
      </div>
      
    </Layout>
  )
  
export default Index