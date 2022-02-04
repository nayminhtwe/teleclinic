/* eslint-disable no-undef */
/* eslint-disable indent */
let interstitial

document.addEventListener('deviceready', async () => {
    interstitial = new admob.InterstitialAd({
        adUnitId: 'ca-app-pub-1900479989523412/6778084230'
    })

    interstitial.on('load', (evt) => {
        // evt.ad
        console.log('loaded')
    })

    await interstitial.load()
    await interstitial.show()
}, false)

document.addEventListener('admob.ad.dismiss', async () => {
    // Once a interstitial ad is shown, it cannot be shown again.
    // Starts loading the next interstitial ad as soon as it is dismissed.
    await interstitial.load()
})
