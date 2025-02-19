import React from 'react';
import './home.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { FaTwitter, FaDiscord, FaGithub, FaArrowUp, FaArrowDown, FaCoins, FaUserShield, FaSmile, FaUsers, FaAward, FaChartPie } from 'react-icons/fa';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Authenticate from "../../components/authenticate";

const wallets = [
  { id: 2, name: 'Trust Wallet', image: require('../../assets/images/trust.jpg') },
  { id: 3, name: 'SafePal', image: require('../../assets/images/safepal.jpg') },
  { id: 4, name: 'Yoroi', image: require('../../assets/images/yoroi.png') },
  { id: 5, name: 'Daedalus', image: require('../../assets/images/daedalus.png') },
  { id: 6, name: 'Flint', image: require('../../assets/images/flint.png') },
  { id: 7, name: 'Eternl', image: require('../../assets/images/eternl.jpg') }
];

const Home = () => {
  const { isOpen: isWalletOpen, onOpen: onWalletOpen, onClose: onWalletClose } = useDisclosure();
  const { isOpen: isAuthOpen, onOpen: onAuthOpen, onClose: onAuthClose } = useDisclosure();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [adaPrice, setAdaPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [services] = useState([
    { 
      id: 1, 
      title: 'Staking', 
      description: 'Stake your ADA tokens and earn rewards while securing the network',
      icon: <FaCoins className="service-icon" />
    },
    { 
      id: 2, 
      title: 'DRep Governance', 
      description: 'Participate in decentralized governance decisions',
      icon: <FaUserShield className="service-icon" />
    },
    { 
      id: 3, 
      title: 'Tokens', 
      description: 'Explore and trade the latest trending meme tokens on Cardano',
      icon: <FaSmile className="service-icon" />
    },
    { 
      id: 4, 
      title: 'Delegation', 
      description: 'Manage your delegations and undelegations efficiently',
      icon: <FaUsers className="service-icon" />
    },
    { 
      id: 5, 
      title: 'Rewards', 
      description: 'Track and manage your staking rewards and allocations',
      icon: <FaAward className="service-icon" />
    },
    { 
      id: 6, 
      title: 'Pool Management', 
      description: 'Create and manage your staking pools with ease',
      icon: <FaChartPie className="service-icon" />
    }
  ]);

  useEffect(() => {
    const fetchAdaPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_24hr_change=true');
        setAdaPrice(response.data.cardano.usd);
        setPriceChange(response.data.cardano.usd_24h_change);
      } catch (error) {
        console.error('Error fetching ADA price:', error);
      }
    };

    fetchAdaPrice();
    const interval = setInterval(fetchAdaPrice, 60000);
    return () => clearInterval(interval);
  }, []);

/**************************/

  return (
    <>
      <Header />
      <div className="home-main">
        <div className="home-head">
          <h1>Your Gateway to Cardano Network</h1>
          <h3>Access and manage your Cardano assets with our comprehensive suite of services</h3>
          {adaPrice && (
            <div className="ada-price-tracker">
              <h2>ADA Price: ${adaPrice.toFixed(2)}</h2>
              <p className={priceChange >= 0 ? 'price-up' : 'price-down'}>
                {priceChange >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                {Math.abs(priceChange).toFixed(2)}%
              </p>
            </div>
          )}
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={onWalletOpen}
            >
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="trending-section">
          <h2>Trending Projects</h2>
          <div className="trending-grid">
            {[
              { name: 'Minswap', tvl: '$42.5M', change: '+5%' },
              { name: 'SundaeSwap', tvl: '$38.8M', change: '+3%' },
              { name: 'WingRiders', tvl: '$25.2M', change: '+7%' },
              { name: 'MuesliSwap', tvl: '$18.1M', change: '+4%' }
            ].map((project, index) => (
              <div key={index} className="trending-card">
                <h3>{project.name}</h3>
                <p>TVL: {project.tvl}</p>
                <p className="change positive">{project.change}</p>
              </div>
            ))}
          </div>

          <h2>Trending Pools</h2>
          <div className="trending-grid">
            {[
              { name: 'ADA/USDC', volume: '$12.2M', apy: '4.5%' },
              { name: 'ADA/DJED', volume: '$8.8M', apy: '5.2%' },
              { name: 'ADA/COPI', volume: '$6.5M', apy: '6.1%' },
              { name: 'ADA/iUSD', volume: '$5.1M', apy: '4.8%' }
            ].map((pool, index) => (
              <div key={index} className="trending-card">
                <h3>{pool.name}</h3>
                <p>Volume: {pool.volume}</p>
                <p>APY: {pool.apy}</p>
              </div>
            ))}
          </div>

          <h2>Trending Meme Tokens</h2>
          <div className="trending-grid">
            {[
              { name: 'HOSKY', price: '$0.000015', marketCap: '$15.8M' },
              { name: 'SNEK', price: '$0.000082', marketCap: '$8.2M' },
              { name: 'LOBSTER', price: '$0.000042', marketCap: '$4.2M' },
              { name: 'COPI', price: '$0.052', marketCap: '$2.5M' }
            ].map((token, index) => (
              <div key={index} className="trending-card">
                <h3>{token.name}</h3>
                <p>Price: {token.price}</p>
                <p>Market Cap: {token.marketCap}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-foot">
          <h4>
            Open a pull request on{" "}
            <span>
              <a>Github</a>
            </span>{" "}
            to add your app here.
          </h4>
        </div>
      </div>

      <footer className="home-footer-main">
        <div>
          <span className="foot-icon">
            <FaDiscord className />
          </span>
          Discord
        </div>
        <div>
          <span className="foot-icon">
            {" "}
            <FaTwitter />
          </span>
          Twitter
        </div>
        <div>
          <span className="foot-icon">
            <FaGithub />
          </span>
          Github
        </div>
      </footer>

      {/*****************POP UP MODAL CONTENT*******/}

      <Modal isOpen={isWalletOpen} onClose={onWalletClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="wallet-grid">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="wallet-item"
                  onClick={() => {
                    setSelectedWallet(wallet);
                    onWalletClose();
                    onAuthOpen();
                  }}
                >
                  <img src={wallet.image} alt={wallet.name} />
                  <p>{wallet.name}</p>
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isAuthOpen} onClose={onAuthClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedWallet?.name || ""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Authenticate />
            {selectedWallet && (
              <div className="popup-wallet-name">
                <div>
                  <p className="wallet-name1">{selectedWallet.name}</p>
                  <p className="wallet-name2">
                    Connect to <span>{selectedWallet.name}</span> and more
                  </p>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      
       {/***********************************/}
    </>
  );
};

export default Home;
