import Navbar from "../nav-bar/NavBar";
import Header from "./Header";
import Thumbnail from "./Thumbnail";


export default function Page() {


    const thumbnails = [
        {
            name: 'John Smith',
            pronouns:'He/They',
            interests: ['Music', 'Dance', 'Drawing'],
            threeWords: ['good', 'interesting', 'foodie'],
            oneSentence: 'I was named after a Disney character',
            profilePicSrc: 'profilepics/John_Smith.png'
        },
        {
            name: 'Janet Res',
            pronouns:'She/Her',
            interests: ['Painting', 'Coffee', 'Sewing'],
            threeWords: ['warm', 'flowery', 'tired'],
            oneSentence: 'My family name is three characters long',
            profilePicSrc: 'profilepics/Janet_Res.png'
        },
        {
            name: 'Johnny Apple',
            pronouns:'He/They',
            interests: ['Biking', 'Reading', 'Knitting'],
            threeWords: ['smart', 'jumpy', 'likable'],
            oneSentence: 'I am almost anonymous',
            profilePicSrc: 'profilepics/Johnny_Apple.png'
        },
        {
            name: 'Randy Rand',
            pronouns:'They/Them',
            interests: ['Coding', 'Film', 'Dogs'],
            threeWords: ['rich', 'badass', 'bold'],
            oneSentence: 'I love randomness',
            profilePicSrc: 'profilepics/Randy_Rand.png'
        },
        {
            name: 'Emma Tao',
            pronouns:'She/Her',
            interests: ['Party', 'Party', 'Party'],
            threeWords: ['desperado', 'berserk', 'exhausted'],
            oneSentence: 'Disco ball: Live, love, laugh',
            profilePicSrc: 'profilepics/Emma_Tao.png'
        }
    ]

    return(
        
        <div style={{width:'100vw'}}>
            <Header/>
            <div style={{height:'65px'}}/>
            <hr className="divider-line"/>
            {
                thumbnails.map((data, index) => {
                    return <Thumbnail data={data} key={index}/>
                })
            }
            <Navbar/>

        </div>
    )
}