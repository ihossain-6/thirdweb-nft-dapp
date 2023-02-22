import { ConnectWallet, ThirdwebNftMedia, useAddress, useContract, useNFTs, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {contract} = useContract (
    "0x58cC14CEc98d6E81374410606138E60A6B875674"
  )
  const {data: nfts} = useNFTs(contract)

  return (
    <div>
      <div className={styles.buttoncontainer}>
      <ConnectWallet accentColor="purple" colorMode="light" className={styles.button}/>
      </div>
      
      <hr />
      <div className={styles.cardcontainer}>
      {nfts?.map((nft) => (
        <div className={styles.card} key={nft.metadata.id.toString()}>
          <ThirdwebNftMedia metadata={nft.metadata} />
          <h2>{nft.metadata.name}</h2>
        </div>
      ))}
      </div>
      <hr />
      <div className={styles.buttoncontainer}>
      <Web3Button className={styles.button}
      contractAddress="0x58cC14CEc98d6E81374410606138E60A6B875674"
      action={(contract) => contract.erc1155.claim(0, 1)}
      onSuccess={(result) => alert("Success!")}
      >Claim a baby turtle</Web3Button>

      <Web3Button className={styles.button}
      contractAddress="0x58cC14CEc98d6E81374410606138E60A6B875674"
      action={(contract) => contract.erc1155.claim(1, 1)}
      onSuccess={(result) => alert("Success!")}
      >Claim a tortoise</Web3Button>
      </div>
    </div>
  )
};

export default Home;
