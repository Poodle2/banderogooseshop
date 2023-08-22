import facebook from './img/socialNetwork/facebook.png'
import twitter from './img/socialNetwork/twitter.png'
import instagram from './img/socialNetwork/instagram.png'
import youtube from './img/socialNetwork/youtube.png'

function SocialNetworks() {
    return (
        <section>
            <div className='socialNetworks'>
                <h3 className='socialNetworksTitle'> Наші соц мережі </h3>
                <div>
                    <a href='#'><img src={facebook} alt='Facebook'/></a>
                    <a href='#'><img src={twitter} alt='Twitter'/></a>
                    <a href='#'><img src={instagram} alt='Instagram'/></a>
                    <a href='#'><img src={youtube} alt='Youtube'/></a>
                </div>
            </div>
        </section>
    )
}

export default SocialNetworks