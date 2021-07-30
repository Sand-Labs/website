export default function Domains() {
  return (
    <section id="domains" style={{"scroll-margin-top": "10vh"}}>
      <div className="domainsTitle">
            <h1>
                Our Domains of Emphasis:
              </h1>
         </div>
      <div className="domainsGrid">
          <div  className="domainCard">
            <img className="domainIcon"  src="assets/lp/icons/ai.svg"/><h3 className="cardTitle">Artificial Intelligence</h3><span className="cardSummary">From regression for forecasting, to deep generative neural architectures, to reinforcement learning agents, AI — especially machine learning (ML) — helps us to better unearth hidden insights about the world around us</span>
          </div>
          <div  className="domainCard">
            <img className="domainIcon" src="assets/lp/icons/cloud.svg"/><h3 className="cardTitle">Cloud Computing</h3><span className="cardSummary">For all of our research and development, cloud computing enables us to embrace a serverless architecture, always ready to deploy and scale up</span>
          </div>
          <div  className="domainCard">
            <img className="domainIcon"  src="assets/lp/icons/dss-colorized.svg"/><h3 className="cardTitle">Data Scouting and Storytelling</h3><span className="cardSummary">From finding the next best data source, to creating insightful, interactive visualizations, scouting and storying telling is hands-on data work</span>
          </div>
          <div  className="domainCard">
            <img className="domainIcon" src="assets/lp/icons/sc.svg"/><h3 className="cardTitle">Smart Contracts</h3><span className="cardSummary">Smart contracts enable new frontiers in decentralized logic execution. We both develop our own smart contracts, as well as analyze industry-wide deployments of smart contracts</span>
          </div>
          <div  className="domainCard">
            <img className="domainIcon"  src="assets/lp/icons/dapp-colorized.svg"/><h3 className="cardTitle">Decentralized Applications (DApps)</h3><span className="cardSummary">Combining web app frontends with blockchain smart contract backends, DApps help to power some of the most popular blockchain-related services and will serve as the user interface to our smart contract implementations</span>
          </div>
          <div  className="domainCard">
            <img className="domainIcon"  src="assets/lp/icons/defi.svg"/><h3 className="cardTitle">Decentralized Finance (DeFi)</h3><span className="cardSummary">We are collecting DeFi data so we can make implementations such as automated market makers, quantitative finance investment algorithms, and more</span>
          </div>
      </div>
    </section>
  )
}
