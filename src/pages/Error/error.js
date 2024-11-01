import Header from "../../components/header";
import './error.scss'
import { FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import error from "../../assets/images/error.gif"

import { Spinner } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
        <Header/>

        <div className="error-home-main">

            <div className="error-gif">
                <img src={error} alt=""/>
            </div>

            <div>
                <Spinner
                thickness='7px'
                speed='0.65s'
                emptyColor='gray.200'
                color='red.100'
                size='xl'
                />
            </div>
                <div>
                    <h1>Error validating this wallet...</h1>

                    <h3>Please click the button below to try again</h3>

                        <Link to="/">
                    <button>
                        TRY AGAIN
                    </button>
                    </Link>
                </div>
        </div>

        <div className="errror-foot">
            <div className="error-icon">
                <span><FaGithub/></span>
                <span><FaTwitter/></span>
                <span><FaFacebookF/></span>
            </div>

            <div>© 2023 Wallet Connect</div>
        </div>

        </>
    )
}

export default Error;