import React from 'react';
import './home.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import axios from 'axios';
import { ImageGrid } from '../../components/Data/data';

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

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [popUpContent, setPopUpContent] = useState([]);
  const [adaPrice, setAdaPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [trendingProjects, setTrendingProjects] = useState([
    { id: 1, name: 'Project Alpha', description: 'DeFi lending platform', growth: '+15%' },
    { id: 2, name: 'Beta Protocol', description: 'Decentralized exchange', growth: '+8%' },
    { id: 3, name: 'Gamma Finance', description: 'Yield aggregator', growth: '+12%' }
  ]);
  const [latestNews, setLatestNews] = useState([
    { id: 1, title: 'Cardano Smart Contracts Hit New Milestone', date: '2023-12-01' },
    { id: 2, title: 'ADA Staking Reaches All-Time High', date: '2023-11-30' },
    { id: 3, title: 'New DeFi Projects Launch on Cardano', date: '2023-11-29' }
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
  
  const changecontent = (ImageGrid) => {
    setPopUpContent([ImageGrid]);
  };

/**************************/

  return (
    <>
      <Header />
      <div className="home-main">
        <div className="home-head">
          <h1>Decentralised Wallet Applications</h1>
          <h3>
            Following decentralised finance and blockchain applications support
            Wallets Validation wallets.
          </h3>
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

        <div className="image-grid">
          {ImageGrid.map((ImageGrid) => {
            return (
              <div
                key={ImageGrid.id}
                className="img-card-main"
                onClick={onOpen}
              >
                <div onClick={() => changecontent(ImageGrid)}>
                  <img src={ImageGrid.img} alt="img" />
                  <p>{ImageGrid.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trending-projects">
          <h2>Trending Projects</h2>
          <div className="project-grid">
            {trendingProjects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="growth">{project.growth}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="latest-news">
          <h2>Latest News</h2>
          <div className="news-grid">
            {latestNews.map(news => (
              <div key={news.id} className="news-card">
                <h3>{news.title}</h3>
                <p className="date">{news.date}</p>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Authenticate />

            <div className="popup-wallet-name">
              {popUpContent.map((pop) => {
                return (
                  <div>
                    <p className="wallet-name1">{pop.desc}</p>
                    <p className="wallet-name2">
                      Connect to <span>{pop.desc}</span> and more
                    </p>
                  </div>
                );
              })}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      
       {/***********************************/}
    </>
  );
};

export default Home;
