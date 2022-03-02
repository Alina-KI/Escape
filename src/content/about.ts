import image1 from '../images/unsplash_qrIy8dBzCVU.jpg'
import image2 from '../images/unsplash_ZlJ6qFInqQE.jpg'
import image3 from '../images/unsplash_ehbqhVNaCTg.jpg'

export type AboutInfo = {
    subTitle: string
    title: string
    description: string
    image: string
    link: string
}

export const aboutInfos: AboutInfo[] = [
    {
        subTitle: 'Get Started',
        title: 'New IMBA Epic Trail and Family Friendly',
        description: 'The new trails that Bruce can tell folks about are small networks at Willowie and Wirrabara and a brand new IMBA Epic on Mount Remarkable',
        image: image1,
        link: '/',
    },
    {
        subTitle: 'Biking Essentials',
        title: 'Your Next ‘New’ Riding Destination',
        description: 'Where the Bass Strait meets the Apple Isle, George Town is a sleepy industrial town on the northernmost edge of Tasmania. On the banks of the Tamar River, George Town is one of the oldest settlements in the country, but despite the spectacular beaches at Low Head, the penguin colony and its proximity to Launceston, it’s a place many of us haven’t been to, yet!',
        image: image2,
        link: '/',
    },
    {
        subTitle: 'What you use is the key',
        title: 'The Flow team reviews the GT Force',
        description: 'Receiving a wholesale redesign for 2022, the GT Force is one of the newest bikes on the market to go down the high pivot rabbit hole. It’s an exciting and very on-trend move for a brand that has been treading water for the past few years with relatively by-the-books frame and suspension designs. And having spent the past couple of months putting the Force to the test, we can confidently say this bike is a huge leap in the right direction. As we found out though, it won’t be for everyone, and it’s certainly not without its flaws.',
        image: image3,
        link: '/',
    }
]