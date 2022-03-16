import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="FabrikaBr" />
    <h2>Welcome!</h2>
    <p>FabrikaBr is an embryonic platform formed by professionals and students of Computer Engineering. Our goal is to develop technological products and services that can improve people's lives..</p>
    <p>We are enthusiastic about new technologies and their applications, mainly IA, IOT and Blockchain.
We believe in community economic models and decentralized governance. Our applications under development are based on process improvement, enabling greater savings in resources and consequently labor efficiency. Our work methodology follows a model that values human interaction following the best practices..  </p>
    
    <p>
      
      <Link to="/blockchain/">Blockchain</Link><br />
      <p>Learn about this technology that is changing the world. Discover the world of encryption and smart contracts, know what they are and how airdrops ICO, IDO, IEO and IFO.</p>
      
  
      <Link to="/page-2/">Roadmap</Link> <br />
      <p>2021- 1Q/2Q Design and staff training. </p>
      <p>2021- 3Q/4Q organizational structure, laboratory testing, research, fundraising and development partners projects.. </p> 
      <p>2022- 1Q/2Q Reviewing working structure and TESTNET the Network BSC. </p>
      <p>2022- 3Q/4Q lessons learned KB, creating business environment, planning for 1Q/2Q 2022 and 3Q/4Q 2022. </p>
     
      <Link to="/About/">About</Link>
      <p>White Paper</p>
      <p>https://github.com/FabrikaBr/fabrikabrI0x/blob/636c42215e0733ef1cf3736648d2b573e9ea3222/White%20Paper</p>
      <p>Learn more about us, help build our story everyone is welcome.</p>
  
  
    </p>
  </Layout>
)

export default IndexPage
