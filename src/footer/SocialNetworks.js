import facebook from '../img/socialNetwork/facebook.png'
import twitter from '../img/socialNetwork/twitter.png'
import instagram from '../img/socialNetwork/instagram.png'
import youtube from '../img/socialNetwork/youtube.png'
import style from './SocialNetworks.module.scss'

function SocialNetworks() {
    return (
        <section>
            <div>
                <h3 className={style.socialNetworksTitle}> Наші соц мережі </h3>
                <div>
                    <a className={style.linkSocialNetwork} href='src#'><img src={facebook} alt='Facebook'/></a>
                    <a className={style.linkSocialNetwork} href='src#'><img src={twitter} alt='Twitter'/></a>
                    <a className={style.linkSocialNetwork} href='src#'><img src={instagram} alt='Instagram'/></a>
                    <a className={style.linkSocialNetwork} href='src#'><img src={youtube} alt='Youtube'/></a>
                </div>
            </div>
        </section>
    )
}

export default SocialNetworks