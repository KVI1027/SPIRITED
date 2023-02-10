
// 重整時回到頂部

window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});
// window.addEventListener('load', function () {
//     document.querySelector('#loading').style.display = 'none';
// });

const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".list-a");
const news = document.querySelector('.news');
const news_phone = document.querySelector('.news-phone');

const navHamburger = document.querySelectorAll('.menu-btn-line')
const banner = document.querySelector('.banner')
const banner_title = document.querySelector('.banner-title')
const bg_color = document.querySelector('.web')
const wb0 = document.querySelector('.web-border-0')
const wt = document.querySelector('.web-title')
const wborder1 = document.querySelector('.web-border-1')
const wborder2 = document.querySelector('.web-border-2')
const coockie = document.querySelector('.animate-4')
const shop = document.querySelector('.shop')
const shop_frame = document.querySelector('.shop-frame')
const shop_mask = document.querySelector('.shop-mask')
const how_to_buy = document.querySelector('.how-to-buy')
const how_left = document.querySelector('.how-left')
const how_midline = document.querySelector('.how-midline')
const how_right = document.querySelector('.how-right')
const how_dscp = document.querySelector('.how-dscp')
const how_dscp_li = document.querySelectorAll('.how-dscp-li')
const dscp_li = document.querySelectorAll('.dscp-li')
const aboutus = document.querySelector('.aboutus')
const about_card = document.querySelector('.aboutus-card')
const aboutus_BG = document.querySelector('.aboutus-BG')
const aboutus_h1 = document.querySelector('.aboutus-h1')
const En_anim = document.querySelectorAll('.En-anim')
const Ch_anim = document.querySelectorAll('.Ch-anim')
const Footer = document.querySelector("footer")

function updateFooter() {
    const scroll = window.pageYOffset;
    if (document.body.clientWidth < 800) {
        footermobile(scroll);
    } else {
        footerpc(scroll);
    }
    function footerpc(scroll) {
        if (scroll > 8500) {
            Footer.style.bottom = `0px`
        } else if (scroll <= 8500) {
            Footer.style.bottom = `-100%`
        }
    }
    function footermobile(scroll) {
        if (scroll > 4900) {
            Footer.style.bottom = `0px`
        } else if (scroll <= 4900) {
            Footer.style.bottom = `-100%`
        }
    }


}
// nav變色
function updateNav() {
    const scroll = window.pageYOffset;
    if (scroll < 800) {
        navHamburger.forEach(e => {
            e.classList.remove('menu-btn-line-dark');
            e.classList.add('menu-btn-line-light');
        });
    } else {
        navHamburger.forEach(e => {
            e.classList.remove('menu-btn-line-light');
            e.classList.add('menu-btn-line-dark');
        });
    }

}

// banner區塊
function updateBanner() {
    const scroll = window.pageYOffset;
    if (scroll < 200) {
        // 初始
        bg_color.style.backgroundColor = '#ffffe8';
    } else if (scroll >= 200 && scroll < 1600) {
        banner.style.filter = `brightness(${1 - (scroll - 200) / 1600})`
    }
    banner_title.style.left = `-${2.5 * scroll}px`
}
// function updateShopFrame() {
//     const scroll = window.pageYOffset;
//     if (scroll < 1600) {
//         shop_frame.style.width = '91%'
//         shop_frame.style.margin = `0 0 0 -45.5%`
//         shop_frame.style.top = `${1000 - (scroll) / 2}px`
//         shop_frame.style.borderRadius = ` ${1600 - (scroll - 300)}px`
//     } else if (scroll >= 1600 && scroll < 2600) {
//         shop_frame.style.width = `100%`
//         shop_frame.style.margin = `0 0 0 -50%`
//         shop_frame.style.top = `${1000 - (scroll - 750) / 1}px`
//         shop_frame.style.borderRadius = ` ${1600 - (scroll - 300)}px`
//     } else if (scroll >= 3000 && scroll < 5000) {
//         shop_frame.style.filter = `brightness(${1 - (scroll - 3000) / 3000})`
//     }
//     if (scroll >= 4000) {
//         shop_frame.style.top = `${250 - (scroll) / 4}px`
//     }

// }

// MENU區塊 動畫
function updateShopFrame() {

    const scroll = window.pageYOffset;

    // 根據螢幕寬度切換
    if (document.body.clientWidth < 800) {
        updateStylesShopFrameSmallScreens(scroll);
    } else {
        updateStylesShopFrameLargeScreens(scroll);
    }

    // 小尺寸
    function updateStylesShopFrameSmallScreens(scroll) {
        let top, width, borderRadius, margin, display;
        const vh = window.innerHeight;
        if (scroll < 1600) {
            display = 'block'
            top = 900 - (scroll) / 1;
            width = 100;
            borderRadius = 500 - (scroll) / 2;
            margin = '0 0 0 -50%';
        } else if (scroll < 700) {
            top = 900 - (scroll) / 1;
            width = 91;
            borderRadius = 500 - (scroll) / 2;
            margin = '0 0 0 -45.5%';
        } else if (scroll >= 700 && scroll < 1600) {
            top = 900 - (scroll) / 1;
            width = 100;
            borderRadius = 500 - (scroll) / 2;
            margin = '0 0 0 -50%';
        }
        else if (scroll >= 1600 && scroll < 2400) {
            top = -1750 + 1.25 * vh - (scroll) / 4;
            display = 'block'
        } else if (scroll >= 2400) {
            display = 'none'
        }

        // 計算 filter 的值
        let brightness;
        if (scroll >= 1600 && scroll < 5000) {
            brightness = `brightness(${1 - (scroll - 1600) / 1600})`;
        } else {
            brightness = 'brightness(1)'
        }
        shop_frame.style.top = `${top}px`;
        shop_frame.style.width = `${width}%`;
        shop_frame.style.borderRadius = `${borderRadius}px`;
        shop_frame.style.margin = `${margin}`;
        shop_frame.style.filter = `${brightness}`;
        shop_frame.style.display = `${display}`;

    };

    // 大尺寸
    function updateStylesShopFrameLargeScreens(scroll) {
        let top, width, borderRadius, margin, display;

        if (scroll < 1800) {
            top = 1100 - (scroll);
            borderRadius = 2000 - 1.5 * (scroll);
            display = 'block'
        } else if (scroll >= 1800 && scroll <= 4200) {
            display = 'block'
        } else {
            display = 'none'
        }
        if (scroll < 500) {
            width = 93;
            margin = '0 0 0 -46.5%';
        } else if (scroll >= 500) {
            width = 100;
            margin = '0 0 0 -50%';
        }

        // 計算 filter 的值
        let brightness;
        if (scroll >= 3200 && scroll < 5000) {
            brightness = `brightness(${1 - (scroll - 3200) / 2000})`;
        } else {
            brightness = 'brightness(1)'
        }


        shop_frame.style.top = `${top}px`;
        shop_frame.style.width = `${width}%`;
        shop_frame.style.borderRadius = `${borderRadius}px`;
        shop_frame.style.margin = `${margin}`;
        shop_frame.style.filter = `${brightness}`;
        shop_frame.style.display = `${display}`;
    }
    // 計算 top 和 borderRadius 的值
    // let top, width, borderRadius, margin, display;

    // if (screenwidth < 800 && scroll < 1600) {
    //     display = 'block'
    //     top = 800 - (scroll) / 1;
    //     width = 100;
    //     borderRadius = 400 - (scroll) /2;
    //     margin = '0 0 0 -50%';
    // } else if (scroll > 200) {
    //     top = 1200 - (scroll);
    //     borderRadius = 2000 - 1.5*(scroll);
    // }
    // if (scroll < 500) {
    //     width = 93;
    //     margin = '0 0 0 -46.5%';
    // } else if (scroll >= 500 && scroll < 1200) {
    //     width = 100;
    //     margin = '0 0 0 -50%';
    // }else if (screenwidth < 800 && scroll < 700) {
    //     top = 800 - (scroll) / 1;
    //     width = 91;
    //     borderRadius = 400 - (scroll) / 2 ;
    //     margin = '0 0 0 -45.5%';
    // } else if (screenwidth < 800 && scroll >= 700 && scroll < 1600) {
    //     top = 800 - (scroll) / 1;
    //     width = 100;
    //     borderRadius = 400 - (scroll) /2;
    //     margin = '0 0 0 -50%';
    // } 
    // else if (screenwidth < 800 && scroll >= 1600 && scroll < 2400) {
    //     top = 500 - (scroll + 4800) / 4;
    //     display = 'block'
    // } else if (screenwidth < 800 && scroll >= 2400) {
    //     display = 'none'
    // } else if (scroll >= 4000) {
    //     top = 250 - (scroll) / 4;
    // }

    // // 計算 filter 的值
    // let brightness;
    // if (screenwidth < 800 && scroll >= 1600 && scroll < 5000) {
    //     brightness = `brightness(${1 - (scroll - 1600) / 1600})`;
    // }else if (screenwidth < 800) {
    //     brightness = 'brightness(1)'
    // }else if (scroll >= 3200 && scroll < 5000) {
    //     brightness = `brightness(${1 - (scroll - 3200) / 2000})`;
    // }else{
    //     brightness = 'brightness(1)'
    // }


    // shop_frame.style.top = `${top}px`;
    // shop_frame.style.width = `${width}%`;
    // shop_frame.style.borderRadius = `${borderRadius}px`;
    // shop_frame.style.margin = `${margin}`;
    // shop_frame.style.filter = `${brightness}`;
    // shop_frame.style.display = `${display}`;
}

// 如何購買區塊
function updateHowToBuy() {
    const scroll = window.pageYOffset;
    if (document.body.clientWidth < 800) {
        updateStylesHowToBuySmallScreens(scroll);
    } else {
        updateStylesHowToBuyLargeScreens(scroll);
    }

    function updateStylesHowToBuyLargeScreens(scroll) {
        let how_to_buy_top, how_to_buy_borderRadius, how_left_width, how_right_width, how_right_top, how_dscp_height, how_midline_height;
        if (scroll >= 2500) {
            how_to_buy_borderRadius = 1600 - (scroll - 2700)
        }
        if (scroll >= 2500 && scroll <= 3800) {
            how_to_buy_top = 1000 - (scroll - 2500) / 2
        } else if (scroll > 3800) {
            how_to_buy_top = 1000 - (scroll - 3100) / 1
        } else {
            how_to_buy_top = 2000
        }
        if (scroll >= 4000 && scroll <= 4800) {
            how_left_width = 65 - (scroll - 4000) / 30
            how_right_width = 25 + (scroll - 4000) / 30
            how_dscp_height = `${0 + (scroll - 4000) / 10}vh`
            how_midline_height = 0
        } else if (scroll > 4800 && scroll < 5500) {
            how_midline_height = 160
            how_left_width = 38.3
            how_right_width = 51.6
            how_right_top = 0
            how_dscp_height = `80vh`
        } else if (scroll >= 5500 && scroll < 6300) {
            how_right_top = -(scroll - 5500) / 1
            how_midline_height = 0
        } else if (scroll < 2500) {
            how_right_top = 0
            how_to_buy_top = 2500
        }
        how_dscp_li.forEach(e => {

            if (scroll <= 4800) {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[0].children[0].style.transform = "rotate(0deg)"
                e.children[0].children[0].style.filter = 'brightness(1)'
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            } else if (scroll > 4800 && scroll < 5500) {
                e.style.opacity = `1`
                e.style.transform = `translateX(5px);`
            } else {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[0].children[0].style.transform = "rotate(0deg)"
                e.children[0].children[0].style.filter = 'brightness(1)'
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            }
        });


        how_to_buy.style.top = `${how_to_buy_top}px`
        how_to_buy.style.borderRadius = `${how_to_buy_borderRadius}px`
        how_left.style.width = `${how_left_width}%`
        how_right.style.width = `${how_right_width}%`
        how_right.style.top = `${how_right_top}px`
        how_dscp.style.height = `${how_dscp_height}`
        how_midline.style.height = `${how_midline_height}%`
    }
    function updateStylesHowToBuySmallScreens(scroll) {
        let how_to_buy_top, how_to_buy_borderRadius, how_left_width, how_right_width, how_right_top, how_dscp_height, how_midline_height;

        if (scroll >= 1500) {
            how_to_buy_borderRadius = 500 - (scroll - 1500) / 2
        }
        if (scroll < 1500) {
            how_to_buy_top = 750 - (scroll - 1500) / 1
        } else if (scroll >= 1500 && scroll <= 2800) {
            how_to_buy_top = 750 - (scroll - 1500) / 1
        } else if (scroll > 2800) {
            how_to_buy_top = 750 - (scroll - 1500) / 1
        }
        if (scroll <= 2700) {
            how_left_width = 90
            how_right_width = 90
            how_dscp_height = `${0 + 272 * (scroll - 2400) / 300}px`
        } else if (scroll > 2700 && scroll < 3400) {
            how_dscp_height = 'auto'
        } else {
            how_dscp_height = `${272 - 272 * (scroll - 3400) / 250}px`
        }
        how_dscp_li.forEach(e => {

            if (scroll <= 2700) {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            } else if (scroll > 2700 && scroll < 3400) {
                e.style.opacity = `1`
                e.style.transform = `translateX(5px);`
            } else {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            }
        });

        how_to_buy.style.top = `${how_to_buy_top}px`
        how_to_buy.style.borderRadius = `${how_to_buy_borderRadius}px`
        how_left.style.width = `${how_left_width}%`
        how_right.style.width = `${how_right_width}%`
        how_right.style.top = `${how_right_top}px`
        how_dscp.style.height = `${how_dscp_height}`
        how_midline.style.height = `${how_midline_height}%`
    }
    //RWD
    // if (document.body.clientWidth < 1366) {
    //     how_dscp.style.height = `${20 + (scroll - 4600) / 10}vh`
    //     if (scroll >= 4600 && scroll <= 5400) {
    //         how_left.style.width = `${55 - (scroll - 4600) / 30}%`
    //         how_right.style.width = `${35 + (scroll - 4600) / 30}%`
    //     } else if (scroll > 5400 && scroll < 5800) {
    //         how_left.style.width = `28.3%`
    //         how_right.style.width = `61.6%`
    //     }
    // }
}

// 關於我們區塊
function updateAboutUs() {
    const scroll = window.pageYOffset;


    if (document.body.clientWidth < 800) {
        const scroll = window.pageYOffset;
        if (scroll < 3500) {
            aboutus.style.top = `${800 - (scroll - 3300) / 1}px`
            aboutus_BG.style.display = 'none'
        } else if (scroll >= 3500 & scroll <= 6800) {
            aboutus.style.top = `${800 - (scroll - 3300) / 1}px`
            aboutus_BG.style.display = 'none'
        } else if (scroll <= 7400) {
            aboutus.style.top = `${1000 - (scroll - 3500) / 1}px`
        } else if (scroll > 7400) {
            aboutus.style.top = `-2900px`
        }
        if (scroll >= 3600 && scroll <= 4100) {
            aboutus_h1.style.opacity = '1'
        }
        if (scroll >= 4100 && scroll <= 4700) {
            //Aboutus變色效果
            const [red, green, blue] = [241, 233, 225]
            const x = 1 + (scroll - 4100) / 342
            const y = 1 + (scroll - 4100) / 252
            const z = 1 + (scroll - 4100) / 204
            const [r, g, b] = [red / x, green / y, blue / z].map(Math.round)
            about_card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            aboutus_h1.style.color = `rgb(${64 * 1.4 * x}, ${40 * 1.7 * y}, ${27 * 2.1 * z})`

            //Aboutus scroll效果
            aboutus_BG.style.display = 'block'
            aboutus_BG.style.opacity = `${(scroll - 4100) / 1000}`
            about_card.style.width = `${110 - (scroll - 4100) / 15}%`
            about_card.style.height = `${170 - (scroll - 4100) / 100 * 14.1}vh`
            about_card.style.borderRadius = `0 0 ${about_card.clientWidth / 2}px ${about_card.clientWidth / 2}px`

            //Aboutus 文字動畫初始狀態
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        } else if (scroll > 4700) {
            aboutus_h1.style.opacity = '1'
            aboutus_h1.style.color = `rgb(247, 230, 223)`
            aboutus_BG.style.display = 'block'
            about_card.style.backgroundColor = `rgb(68, 47, 33)`
            about_card.style.width = `70%`
            about_card.style.height = `85.4vh`
            about_card.style.borderRadius = `0 0 125.5px 125.5px`
            aboutus_BG.style.display = 'block'
            aboutus_BG.style.opacity = `1`

            //Aboutus 文字動畫
            for (let index = 0; index < En_anim.length; index++) {
                const p = En_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
            for (let index = 0; index < Ch_anim.length; index++) {
                const p = Ch_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
        } else {
            about_card.style.backgroundColor = `rgb(241, 233, 225)`
            aboutus_h1.style.color = 'rgb(137, 87, 60)'
            about_card.style.backgroundColor = `rgb(241, 233, 225)`
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        }
        if (scroll <= 6700) {
            aboutus_BG.style.top = `0px`
        }
        else if (scroll > 6700 && scroll < 7400) {
            aboutus_BG.style.top = `${0 - (scroll - 6700) / 1}px`
        } else {
            aboutus_BG.style.top = `-700px`
        }

    }else {
        const scroll = window.pageYOffset;
        if (scroll < 5600) {
            aboutus.style.top = `${1000 - (scroll - 5600) / 1}px`
        } else if (scroll >= 5600 & scroll <= 8300) {
            aboutus.style.top = `${1000 - (scroll - 5600) / 1}px`

        } else {
            aboutus.style.top = `${-2400 - (scroll - 8300) / 1}px`
        }
        // else if (scroll <= 9000) {
        //     aboutus.style.top = `${1000 - (scroll - 5600) / 1}px`
        // } else if (scroll > 9000) {
        //     aboutus.style.top = `-2900px`
        // }
        if (scroll >= 6600 && scroll <= 7100) {
            aboutus_h1.style.opacity = '1'
        }
        if (scroll >= 7100 && scroll <= 7700) {
            //Aboutus變色效果
            const [red, green, blue] = [241, 233, 225]
            const x = 1 + (scroll - 7100) / 342
            const y = 1 + (scroll - 7100) / 252
            const z = 1 + (scroll - 7100) / 204
            const [r, g, b] = [red / x, green / y, blue / z].map(Math.round)
            about_card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            aboutus_h1.style.color = `rgb(${64 * 1.4 * x}, ${40 * 1.7 * y}, ${27 * 2.1 * z})`

            //Aboutus scroll效果
            aboutus_BG.style.display = 'block'
            aboutus_BG.style.opacity = `${(scroll - 7100) / 1000}`
            about_card.style.width = `${110 - (scroll - 7100) / 10}%`
            about_card.style.height = `${170 - (scroll - 7100) / 100 * 14.1}vh`
            about_card.style.borderRadius = `0 0 ${about_card.clientWidth / 2}px ${about_card.clientWidth / 2}px`

            //Aboutus 文字動畫初始狀態
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        } else if (scroll > 7700) {
            aboutus_h1.style.opacity = '1'
            aboutus_h1.style.color = `rgb(247, 230, 223)`
            aboutus_BG.style.display = 'block'
            about_card.style.backgroundColor = `rgb(68, 47, 33)`
            aboutus_BG.style.opacity = `1`
            about_card.style.width = `50%`
            about_card.style.height = `85.4vh`
            about_card.style.borderRadius = `0 0 607px 607px`

            //Aboutus 文字動畫
            for (let index = 0; index < En_anim.length; index++) {
                const p = En_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 34}s`
            }
            for (let index = 0; index < Ch_anim.length; index++) {
                const p = Ch_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
        } else {
            aboutus_BG.style.display = 'none'
            aboutus_h1.style.color = 'rgb(137, 87, 60)'
            about_card.style.backgroundColor = `rgb(241, 233, 225)`
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        }
        if (scroll <= 8300) {
            aboutus_BG.style.top = `0px`
        }
        // else if (scroll > 8300 && scroll < 9000) {
        //     aboutus_BG.style.top = `${0 - (scroll - 8300) / 1}px`
        // } else {
        //     aboutus_BG.style.top = `-700px`
        // }
    }
}


window.addEventListener('scroll', function () {
    const scroll = window.pageYOffset;
    console.log(scroll);
    window.requestAnimationFrame(updateNav);
    window.requestAnimationFrame(updateBanner);
    window.requestAnimationFrame(updateShopFrame);
    window.requestAnimationFrame(updateHowToBuy);
    window.requestAnimationFrame(updateAboutUs);
    window.requestAnimationFrame(updateFooter);
});



//印製 如何購買文字內容
var how_detail = [{
    detail: `Our products are limited.
    Booking desserts on the day ,please call us directly: (04) 2378 - 0238. Otherwise
    please leave a message through FB or IG. We closed on Tuesday and Wednesday.<br/>
    現場購買，手工製做，數量有限
當天預留：請直接打電話到店裡(04) 2378 - 0238
提前預留：請在禮拜二、三公休日之外，私訊 FB或IG`
}, {
    detail: `Please ask us through FB or IG message.<br/>
    請私訊FB或IG詢問`
}, {
    detail: `Please order at least a week previously through IG or FB message.
    Huge order need at least 2-3 weeks.
    Spirited Bakery is available on UberEats as well.<br/>
    請提前⾄少1-2個禮拜，⼤量請提前2-3個禮拜，私訊FB或IG
在UberEats App上搜尋「Spirited Bakery」，有限定可外送範圍`
}]
var str = "";

// 如何購買 展開動畫
how_dscp_li.forEach((e, index) => {
    console.log(e.children[0].children[0].children[0]);
    e.addEventListener('click', function () {

        if (e.dataset.state == 'off') {
            e.setAttribute(`data-state`, `on`)
            str = `${how_detail[index].detail}`;
            e.children[0].children[0].style.transform = "rotate(180deg)"
            e.children[0].children[0].style.filter = 'brightness(1.7)'
            e.children[1].style.height = 'auto'
            e.children[1].innerHTML += str
        } else if (e.dataset.state == `on`) {
            e.setAttribute(`data-state`, `off`)
            e.children[0].children[0].style.transform = "rotate(0deg)"
            e.children[0].children[0].style.filter = 'brightness(1)'
            e.children[1].innerHTML = ""
            e.children[1].style.height = '0'
        }

    }, false);

});


// 選單列開關JS
menu_btn.onclick = function () {
    if (document.querySelector("#menu-btn").checked) {
        closeList();
        let shop_distance = (document.querySelector(".shop").offsetTop - 100)
        let shop_height = document.querySelector(".shop").offsetHeight
        if ((document.documentElement.scrollTop >= shop_distance) && (document.documentElement.scrollTop < (shop_distance + shop_height))) {
            document.querySelectorAll('.menu-btn-line').forEach(element => {
                element.classList.remove('menu-btn-line-light');
                element.classList.add('menu-btn-line-dark');
            });
        }
    }
    else {

        nav.classList.add('d-flex');
        nav.classList.remove('d-none');
        setTimeout(function () {
            nav.style = "opacity:1;";
        }, 100);

        document.querySelectorAll('.menu-btn-line').forEach(element => {
            element.classList.add('menu-btn-line-light');
            element.classList.remove('menu-btn-line-dark');
        });
    }
}
//漢堡條樣式切換JS
function clicklinkEvent(index) {
    closeList();
    document.querySelector('input').checked = false;
    clickEvent(index);
}
function closeList() {
    nav.style = "opacity:0;";
    setTimeout(function () {
        nav.classList.remove('d-flex');
        nav.classList.add('d-none');
    }, 500);

}

// 如果點選網頁內連結，關閉選單列（外聯不關閉）
a.forEach((element, index) => {

    element.onclick = function () {
        closeList();
        document.querySelector('input').checked = false;
        if (index == 0) {
            to_how_to_buy();
        }
        else {
            to_about_us();
        }
    }
});

//跳轉
function clicklinkEvent(index) {
    if (document.body.clientWidth < 800) {
        if (index === 0) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 1100);
        } else if (index === 1) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 2300);
        } else if (index === 2) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 4800);
        }
    } else {
        if (index === 0) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 1700);
        } else if (index === 1) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 4900);
        } else if (index === 2) {
            closeList();
            document.querySelector('input').checked = false;
            window.scrollTo(0, 7800);
        }
    }
}


//看全部菜單按按鈕打開、點背景關閉
function view_all_menu() {
    let view_menu;
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');

    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }
    view_menu.style = "opacity:1";
    view_menu.classList.remove('d-none');
}
function view_all_menu_close() {
    let view_menu
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');
    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }

    if (view_menu == event.target) {
        view_menu.style = "opacity:0";
        setTimeout(function () {
            view_menu.classList.add('d-none');
        }, 1000);
    }
}

//關閉最新消息
function closeNews() {
    news.style = 'display:none';
    news_phone.style = 'display:none';
    window.scrollTo(0, 0)

}
// news.addEventListener('click', event => {
//     if (news == event.target) {
//         news.style = "opacity:0";
//         setTimeout(function () {
//             news.style = 'display:none'
//         }, 1000);
//         window.scrollTo(0, 0)
//     }
// });

news_phone.addEventListener('click', event => {
    if (news_phone == event.target) {
        news_phone.style = "opacity:0";
        setTimeout(function () {
            news_phone.style = 'display:none'
        }, 1000);
        window.scrollTo(0, 0)
    }
});

// 跳轉至HOW TO BUY
function to_how_to_buy() {
    if (document.body.clientWidth > 799) {
        window.scrollTo(0, 4500)
        console.log('how');
    }
    else {
        window.scrollTo(0, 2300)
    }

}

// 跳轉至ABOUT US
function to_about_us() {
    window.scrollTo(0, 7000)

}

