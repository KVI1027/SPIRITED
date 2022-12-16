function updateShopFrame(scroll) {
    if (scroll < 1600) {
        shop_frame.style.top = ${ 1000 - (scroll) / 2 } px
        shop_frame.style.borderRadius = ${ 50 - (5 * (scroll - 800) / 100) }%
    } else if (scroll >= 1600 && scroll < 2600) {
        shop_frame.style.top = ${ 1000 - (scroll - 750) / 1 } px
        shop_frame.style.borderRadius = ${ 50 - (5 * (scroll - 800) / 100) }%
    } else if (scroll >= 3000 && scroll < 5000) {
        shop_frame.style.top = ${ 50 - (scroll) / 4 } px
    }
}

function updateHowToBuy(scroll) {
    if (scroll >= 3100) {
        how_to_buy.style.borderRadius = ${ 50 - (5 * (scroll - 3800) / 100) }%
    }
    if (scroll >= 3100 && scroll <= 4400) {
        how_to_buy.style.top = ${ 1000 - (scroll - 3100) / 2 } px
    } else if (scroll > 4400) {
        how_to_buy.style.top = ${ 1000 - (scroll - 3700) / 1 } px
    }
}

function updateAboutUs(scroll) {
    if (scroll < 5900) {
        aboutus.style.top = ${ 1000 - (scroll - 5900) / 1 } px
    } else if (scroll >= 5900) {
        aboutus.style.top = ${ 1000 - (scroll - 5900) / 1 } px
        aboutus_BG.style.display = 'none'
    }
    if (scroll >= 7400 && scroll <= 7900) {
        aboutus_h1.style.opacity = '
