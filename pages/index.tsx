import { ConnectWallet, ThirdwebNftMedia, useAddress, useContract, useNFTs, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0x58cC14CEc98d6E81374410606138E60A6B875674"
  );
  const { data: nfts } = useNFTs(contract);

  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <ConnectWallet
          accentColor="purple"
          colorMode="light"
        />
      </div>

      <hr />
      <Container fluid>
        <Row xs={1} sm={2} md={3} className="g-4">
          {nfts?.map((nft) => (
            <Col key={nft.metadata.id.toString()}>
              <Card className="h-100">
                <ThirdwebNftMedia metadata={nft.metadata} className="img-fluid" style={{ maxHeight: "12rem" }} />
                <Card.Body>
                  <Card.Title>{nft.metadata.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
      <div className="d-flex justify-content-center my-3">
        <Container fluid>
          <Row xs={1} sm={2} md={2} className="g-2 justify-content-md-center">
            <Col>
              <Web3Button
                contractAddress="0x58cC14CEc98d6E81374410606138E60A6B875674"
                action={(contract) => contract.erc1155.claim(0, 1)}
                onSuccess={(result) => alert("Success!")}
              >
                Claim a baby turtle
              </Web3Button>
            </Col>
            <Col>
              <Web3Button
                contractAddress="0x58cC14CEc98d6E81374410606138E60A6B875674"
                action={(contract) => contract.erc1155.claim(1, 1)}
                onSuccess={(result) => alert("Success!")}
              >
                Claim a tortoise
              </Web3Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
