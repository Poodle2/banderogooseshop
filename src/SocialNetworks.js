import facebook from './img/socialNetwork/facebook.png'
import twitter from './img/socialNetwork/twitter.png'
import instagram from './img/socialNetwork/instagram.png'
import youtube from './img/socialNetwork/youtube.png'

function SocialNetworks() {
    return (
        <div className='SocialNetworks'>
            <h3> Наші соц мережі </h3>
            <ul>
                <li><a href='#'><img src={facebook} alt='Facebook'/></a></li>
                <li><a href='#'><img src={twitter} alt='Twitter'/></a></li>
                <li><a href='#'><img src={instagram} alt='Instagram'/></a></li>
                <li><a href='#'><img src={youtube} alt='Youtube'/></a></li>
            </ul>
        </div>
    )
}
export default SocialNetworks